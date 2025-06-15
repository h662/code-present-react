import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSlide } from "../api/slideService";

type Page = {
  pageNumber: number;
  pageType: string;
  text: string | null;
  imageUrl: string | null;
};

export default function Slide() {
  const { id } = useParams<{ id: string }>();
  const [pages, setPages] = useState<Page[]>([]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!id) return;

    getSlide(+id!)
      .then((res) => setPages(res.data.pages))
      .catch(console.error);
  }, [id]);

  if (!pages.length) return <p>Loading slide…</p>;

  const { pageType, text, imageUrl } = pages[idx];
  const renderPage = () => {
    switch (pageType) {
      case "TITLE":
        return <h2 className="text-4xl">{text || " "}</h2>;
      case "TEXT_ONLY":
        return <p className="text-lg">{text}</p>;
      case "IMAGE_TEXT":
        return (
          <div>
            {imageUrl && (
              <img src={imageUrl} alt="" className="max-w-full mb-4" />
            )}
            <p className="text-lg">{text}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8 flex flex-col items-center">
      <div className="w-2/3 h-96 border p-6">{renderPage()}</div>
      <div className="mt-4 space-x-4">
        <button disabled={idx === 0} onClick={() => setIdx((i) => i - 1)}>
          Prev
        </button>
        <button
          disabled={idx === pages.length - 1}
          onClick={() => setIdx((i) => i + 1)}
        >
          Next
        </button>
      </div>
      <Link
        to={`/series/${/* back to parent series if known or “/” */ ""}`}
        className="mt-2 text-sm text-blue-600"
      >
        Back
      </Link>
    </div>
  );
}
