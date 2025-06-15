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

  if (!series) return <p>Loading…</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Series</h1>
      <ul className="space-y-2">
        {series.map((s) => (
          <li
            key={s.id}
            onClick={() => navigate(`/series/${s.id}`)}
            className="border p-4 rounded font-semibold cursor-pointer"
          >
            {s.title}
            <p className="text-sm text-gray-600">{s.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
