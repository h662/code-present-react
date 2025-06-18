import { useEffect, useState } from "react";
import { getAllSeries } from "../api/slideService";
import { useNavigate } from "react-router-dom";

interface Series {
  id: number;
  title: string;
  description: string;
}

function Home() {
  const [series, setSeries] = useState<Series[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllSeries()
      .then((res) => setSeries(res.data))
      .catch(console.error);
  }, []);

  if (!series.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-700 transition-colors">
        <p className="text-gray-900 dark:text-gray-100">Loading…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-700 dark:text-gray-100 transition-colors">
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-2xl mb-4 text-gray-900 dark:text-white transition-colors">
          Series
        </h1>
        <ul className="space-y-4">
          {series.map((s) => (
            <li
              key={s.id}
              onClick={() => navigate(`/series/${s.id}`)}
              className="
                btn-style
                flex flex-col p-4 space-y-1 cursor-pointer
                border border-gray-300 dark:border-gray-600
                hover:bg-gray-100 dark:hover:bg-gray-600
                transition-colors
              "
            >
              <span className="font-semibold text-gray-900 dark:text-white">
                {s.title}
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {s.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
