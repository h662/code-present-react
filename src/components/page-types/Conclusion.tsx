function Conclusion({
  title,
  description,
  useOverlay,
}: {
  title: string;
  description: string;
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
    </div>
  );
}

export default Conclusion;
