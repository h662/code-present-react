import { useState, useEffect } from "react";
import CodeComp from "./CodeComp";

interface MCQProps {
  title: string;
  description: string;
  code: string | null;
  isDownloading: boolean;
  options: string[];
  answer: string;
}

export default function MCQ({
  title,
  description,
  code,
  options,
  answer,
  isDownloading,
}: MCQProps) {
  const correctIndices = answer
    .split(",")
    .map((s) => parseInt(s.trim(), 10) - 1)
    .sort((a, b) => a - b);

  const multiple = correctIndices.length > 1;

  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [result, setResult] = useState<boolean | null>(null);

  useEffect(() => {
    if (selectedIndices.length === 0) {
      setResult(null);
      return;
    }

    if (multiple) {
      if (selectedIndices.length === correctIndices.length) {
        const sorted = [...selectedIndices].sort((a, b) => a - b);
        const isCorrect =
          sorted.length === correctIndices.length &&
          sorted.every((v, i) => v === correctIndices[i]);
        setResult(isCorrect);
      } else {
        setResult(null);
      }
    } else {
      setResult(selectedIndices[0] === correctIndices[0]);
    }
  }, [selectedIndices]);

  const onSelect = (idx: number) => {
    if (multiple) {
      setSelectedIndices((prev) =>
        prev.includes(idx) ? prev.filter((v) => v !== idx) : [...prev, idx]
      );
    } else {
      setSelectedIndices((prev) => (prev[0] === idx ? [] : [idx]));
    }
  };

  useEffect(() => {
    setSelectedIndices([]);
    setResult(null);
  }, [answer]);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>

      <ul className="mt-4 space-y-2">
        {options.map((opt, i) => {
          const isSelected = selectedIndices.includes(i);
          return (
            <li
              key={i}
              onClick={() => onSelect(i)}
              className={`
                cursor-pointer flex items-center space-x-2 rounded p-2
                ${
                  isSelected
                    ? "bg-blue-100 border border-blue-500"
                    : "hover:bg-gray-100"
                }
              `}
            >
              <span className="font-mono w-6 text-right">{i + 1}.</span>
              <span>{opt}</span>
            </li>
          );
        })}
      </ul>

      {result != null && (
        <p
          className={`
            mt-4 font-medium text-lg
            ${result ? "text-green-600" : "text-red-600"}
          `}
        >
          {result ? "정답입니다 🎉" : "아쉽네요, 틀렸습니다 😢"}
        </p>
      )}

      {code && (
        <div className="mt-4">
          <CodeComp code={code} isDownloading={isDownloading} />
        </div>
      )}
    </div>
  );
}
