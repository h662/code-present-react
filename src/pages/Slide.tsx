import { useContext, useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSlide } from "../api/slideService";
import { toBlob } from "html-to-image";
import SlideCanvas from "../components/SlideCanvas";
import PageRenderer from "../components/PageRenderer";
import SlideNav from "../components/SlideNav";
import ThemeSelector from "../components/ThemeSelector";
import { themes } from "../theme-data";
import FontSelector from "../components/FontSelector";
import { FaAnglesLeft, FaDownload, FaMoon, FaSun } from "react-icons/fa6";
import { ThemeContext } from "../contexts/ThemeContext";
import { fonts } from "../font-data";

export default function Slide() {
  const { id } = useParams<{ id: string }>();
  const [pages, setPages] = useState<Page[]>([]);
  const [idx, setIdx] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [selectedFont, setSelectedFont] = useState<Font>(fonts[0]);
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const [fontOpen, setFontOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getSlide(id!)
      .then((res) => {
        const sorted = [...res.data.pages].sort(
          (a, b) => a.pageNumber - b.pageNumber
        );
        setPages(sorted);
      })
      .catch(console.error);
  }, [id]);

  if (!pages.length) return <p>Loading slide…</p>;

  const page = pages[idx];

  async function handleDownload() {
    if (!slideRef.current) return;

    setIsDownloading(true);
    await new Promise((resolve) => requestAnimationFrame(() => resolve(null)));

    const node = slideRef.current;
    const { width, height } = node.getBoundingClientRect();

    const clone = node.cloneNode(true) as HTMLElement;
    Object.assign(clone.style, {
      position: "fixed",
      top: "0",
      left: "0",
      margin: "0",
      transform: "none",
      zIndex: "-1000",
    });
    document.body.appendChild(clone);

    const blob = await toBlob(clone, {
      pixelRatio: 4,
      width,
      height,
    });

    document.body.removeChild(clone);
    setIsDownloading(false);

    if (!blob) return;

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `slide-${page.pageNumber}.png`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-700 transition-colors">
      <div className="p-8 flex flex-col items-center space-y-4 w-full">
        <div className="w-full max-w-4xl flex justify-end space-x-2">
          <button
            onClick={toggleTheme}
            className="btn-style"
            title={theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"}
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon />
            )}
          </button>
          <button onClick={() => navigate(-1)} className="btn-style">
            <FaAnglesLeft />
          </button>
          <button onClick={handleDownload} className="btn-style">
            <FaDownload />
          </button>
          <FontSelector
            options={fonts}
            selectedFont={selectedFont}
            onSelect={(font) => {
              setSelectedFont(font);
              setFontOpen(false);
            }}
            open={fontOpen}
            onToggle={() => {
              setFontOpen((o) => !o);
              setThemeOpen(false);
            }}
          />
          <ThemeSelector
            options={themes}
            selectedText={selectedTheme.label}
            onSelect={(theme) => {
              setSelectedTheme(theme);
              setThemeOpen(false);
            }}
            open={themeOpen}
            onToggle={() => {
              setThemeOpen((o) => !o);
              setFontOpen(false);
            }}
          />
        </div>

        <SlideCanvas
          ref={slideRef}
          fontFamily={selectedFont.value}
          textColor={selectedTheme.textColor}
          backgroundColor={selectedTheme.backgroundColor}
          backgroundImage={selectedTheme.backgroundImage}
          backgroundSize={selectedTheme.backgroundSize}
          backgroundRepeat={selectedTheme.backgroundRepeat}
          backgroundPosition={selectedTheme.backgroundPosition}
        >
          <PageRenderer
            page={pages[idx]}
            isDownloading={isDownloading}
            theme={selectedTheme}
          />
        </SlideCanvas>

        <SlideNav
          onPrev={() => setIdx((i) => i - 1)}
          onNext={() => setIdx((i) => i + 1)}
          disablePrev={idx === 0}
          disableNext={idx === pages.length - 1}
        />
      </div>
    </div>
  );
}
