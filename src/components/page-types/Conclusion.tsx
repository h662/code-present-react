function Conclusion({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-overlay">{title}</h2>
      <pre className="whitespace-pre-wrap mt-2 text-overlay">{description}</pre>
    </div>
  );
}

export default Conclusion;
