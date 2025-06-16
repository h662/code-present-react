import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSlide } from "../api/slideService";
import Title from "../components/page-types/Title";
import TOC from "../components/page-types/TOC";
import Conclusion from "../components/page-types/Conclusion";
import TextOnly from "../components/page-types/TextOnly";
import ImageText from "../components/page-types/ImageText";
import ImageOnly from "../components/page-types/ImageOnly";
import TableOnly from "../components/page-types/TableOnly";
import TableImage from "../components/page-types/TableImage";
import MCQ from "../components/page-types/MCQ";
import Subjective from "../components/page-types/Subjective";
import { toBlob } from "html-to-image";

type Page = {
  id: string | null;
  pageNumber: number;
  pageType: string;
  title?: string | null;
  description?: string | null;
  code?: string | null;
  options?: string[] | null;
  answer?: string | null;
  imageUrl?: string | null;
};

const fonts = [
  { label: "프리텐다드", value: "Pretendard-Regular, sans-serif" },
  { label: "온글잎 콘콘체", value: "OwnglyphCorncorn, sans-serif" },
  { label: "Rix열정도체", value: "RixYeoljeongdo_Regular, sans-serif" },
  { label: "조선굴림체", value: "ChosunGu, sans-serif" },
  { label: "온글잎 박다현체", value: "Ownglyph_ParkDaHyun, sans-serif" },
  { label: "어그로체", value: "SBAggroB, sans-serif" },
  { label: "쿠키런", value: "CookieRun-Regular, sans-serif" },
];

export default function Slide() {
  const { id } = useParams<{ id: string }>();
  const [pages, setPages] = useState<Page[]>([]);
  const [idx, setIdx] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [selectedFont, setSelectedFont] = useState<string>(fonts[0].value);
  const [fontMenuOpen, setFontMenuOpen] = useState<boolean>(false);

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

  useEffect(() => console.log(pages), [pages]);

  if (!pages.length) return <p>Loading slide…</p>;

  const page = pages[idx];
  const { pageType, title, description, code, options, answer, imageUrl } =
    page;

  const renderPage = () => {
    switch (pageType) {
      case "TITLE":
        return <Title title={title!} description={description!} />;
      case "TOC":
        return <TOC title={title!} description={description!} />;
      case "TEXT_ONLY":
        return (
          <TextOnly
            title={title!}
            description={description!}
            code={code || null}
            isDownloading={isDownloading}
          />
        );
      case "CONCLUSION":
        return <Conclusion title={title!} description={description!} />;
      case "IMAGE_ONLY":
        return <ImageOnly title={title!} imageUrl={imageUrl!} />;
      case "IMAGE_TEXT":
        return (
          <ImageText
            title={title!}
            description={description!}
            imageUrl={imageUrl!}
          />
        );
      case "TABLE_ONLY":
        return <TableOnly title={title!} description={description!} />;
      case "TABLE_IMAGE":
        return (
          <TableImage
            title={title!}
            description={description!}
            imageUrl={imageUrl!}
          />
        );
      case "MCQ":
        return (
          <MCQ
            key={page.id}
            title={title!}
            description={description!}
            code={code || null}
            isDownloading={isDownloading}
            options={options!}
            answer={answer!}
          />
        );
      case "SUBJECTIVE":
        return (
          <Subjective
            key={page.id}
            title={title!}
            description={description!}
            code={code || null}
            isDownloading={isDownloading}
            answer={answer!}
          />
        );
      default:
        return <p>Unsupported page type.</p>;
    }
  };

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
    <div className="p-8 flex flex-col items-center">
      <div
        ref={slideRef}
        className="w-full max-w-4xl min-h-[504px] border p-6 bg-white shadow-md mx-auto flex"
        style={{ fontFamily: selectedFont }}
      >
        {renderPage()}
      </div>
      <div className="mt-4 space-x-4">
        <button
          disabled={idx === 0}
          onClick={() => setIdx((i) => i - 1)}
          className="px-4 py-2 border rounded"
        >
          Prev
        </button>
        <button
          disabled={idx === pages.length - 1}
          onClick={() => setIdx((i) => i + 1)}
          className="px-4 py-2 border rounded"
        >
          Next
        </button>
        <button
          onClick={handleDownload}
          className="px-4 py-2 border rounded bg-blue-500 text-white"
        >
          Download
        </button>
        <div className="relative inline-block text-left">
          <button
            onClick={() => setFontMenuOpen((o) => !o)}
            className="px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200"
          >
            Font
          </button>
          {fontMenuOpen && (
            <ul className="absolute mt-2 w-40 bg-white border shadow-lg z-20">
              {fonts.map((f) => (
                <li
                  key={f.value}
                  onClick={() => {
                    setSelectedFont(f.value);
                    setFontMenuOpen(false);
                  }}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  style={{ fontFamily: f.value }}
                >
                  {f.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 text-sm text-blue-600"
      >
        Back to Series
      </button>
    </div>
  );
}
