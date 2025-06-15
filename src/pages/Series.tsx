import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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

  useEffect(() => {
    if (!id) return;

    getSeries(+id)
      .then((res) => setSeries(res.data))
      .catch(console.error);
  }, [id]);

  if (!series) return <p>Loading…</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">{series.title}</h1>
      <ul className="space-y-2">
        {series.slides.map((s) => (
          <li key={s.id} className="border p-4 rounded">
            <Link to={`/slides/${s.id}`} className="font-semibold">
              {s.seriesOrder}. {s.slideTitle}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
