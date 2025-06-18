function TOC({
  title,
  description,
  useOverlay,
}: {
  title: string;
  description: string;
  useOverlay: boolean;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2
        className={`text-2xl font-semibold ${useOverlay ? "text-overlay" : ""}`}
      >
        {title}
      </h2>
      <pre
        className={`whitespace-pre-wrap mt-2 text-lg ${
          useOverlay ? "text-overlay" : ""
        }`}
      >
        {description}
      </pre>
    </div>
  );
}

export default TOC;
