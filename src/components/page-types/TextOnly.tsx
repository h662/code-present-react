import CodeComp from "./CodeComp";

function TextOnly({
  title,
  description,
  code,
  isDownloading,
}: {
  title: string;
  description: string;
  code: string | null;
  isDownloading: boolean;
}) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-overlay">{title}</h2>
      <pre className="whitespace-pre-wrap mt-2 text-overlay">{description}</pre>
      {code && <CodeComp code={code} isDownloading={isDownloading} />}
    </div>
  );
}

export default TextOnly;
