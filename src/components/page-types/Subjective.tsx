import { useState, useEffect } from "react";
import CodeComp from "./CodeComp";

interface SubjectiveProps {
  title: string;
  description: string;
  code: string | null;
  isDownloading: boolean;
  answer: string;
  theme: ThemeOption;
}

export default function Subjective({
  title,
  description,
  code,
  isDownloading,
  answer,
  theme,
}: SubjectiveProps) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<null | boolean>(null);

  useEffect(() => {
    setInput("");
    setResult(null);
  }, [answer]);

  const onSubmit = () => {
    const isCorrect =
      input.trim().toLowerCase() === answer.trim().toLowerCase();
    setResult(isCorrect);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2 text-overlay">{title}</h3>
      <p>{description}</p>

      <div className="mt-4 flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="정답을 입력하세요"
          className="flex-grow border p-2 rounded bg-white/75 focus:outline-none placeholder-[var(--placeholder-color)]"
        />
        <button
          onClick={onSubmit}
          className="px-4 py-2 rounded"
          style={{
            backgroundColor: theme.textColor,
            color: theme.backgroundColor,
          }}
        >
          확인
        </button>
      </div>

      {result !== null && (
        <p
          className={`mt-4 font-medium text-lg ${
            result ? "text-green-600" : "text-red-600"
          }`}
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
