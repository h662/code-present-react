import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeComp({
  code,
  isDownloading,
}: {
  code: string;
  isDownloading: boolean;
}) {
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    setShowCode(false);
  }, [code]);

  return (
    <div className="mt-2">
      {!isDownloading && (
        <button
          className="underline text-current text-sm mb-2"
          onClick={() => setShowCode((prev) => !prev)}
        >
          {showCode ? "코드 숨기기" : "코드 보기"}
        </button>
      )}
      {showCode && (
        <div className="max-w-[848px] text-base">
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={{ borderRadius: "0.5rem", padding: "1rem" }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
}

export default CodeComp;
