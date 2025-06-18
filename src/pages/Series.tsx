import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSeries } from "../api/slideService";

interface SlideMeta {
  id: number;
  slideTitle: string;
  seriesOrder: number;
}
interface SeriesDetail {
  id: number;
  title: string;
  description: string;
  slides: SlideMeta[];
}

export default function Series() {
  const { id } = useParams<{ id: string }>();
  const [series, setSeries] = useState<SeriesDetail | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getSeries(id!)
      .then((res) => setSeries(res.data))
      .catch(console.error);
  }, [id]);

  if (!series) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-700 dark:text-gray-100 flex items-center justify-center">
        <p>Loading…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-700 dark:text-gray-100 transition-colors">
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-2xl mb-4 text-gray-900 dark:text-white">
          {series.title}
        </h1>
        <ul className="space-y-2">
          {series.slides
            .slice()
            .reverse()
            .map((s) => (
              <li
                key={s.id}
                onClick={() => navigate(`/slides/${s.id}`)}
                className="
                  border border-gray-300 dark:border-gray-600
                  p-4 rounded font-semibold cursor-pointer
                  hover:bg-gray-100 dark:hover:bg-gray-600
                  transition-colors
                "
              >
                {s.seriesOrder}. {s.slideTitle}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
