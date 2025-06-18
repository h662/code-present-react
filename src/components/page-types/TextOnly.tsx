import CodeComp from "./CodeComp";

function TextOnly({
  title,
  description,
  code,
  isDownloading,
  useOverlay,
}: {
  title: string;
  description: string;
  code: string | null;
  isDownloading: boolean;
  useOverlay: boolean;
}) {
  return (
    <div>
      <h2
        className={`text-2xl font-semibold ${useOverlay ? "text-overlay" : ""}`}
      >
        {title}
      </h2>
      <pre
        className={`whitespace-pre-wrap mt-2 ${
          useOverlay ? "text-overlay" : ""
        }`}
      >
        {description}
      </pre>
      {code && <CodeComp code={code} isDownloading={isDownloading} />}
    </div>
  );
}

export default TextOnly;
