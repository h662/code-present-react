function Title({
  title,
  description,
  useOverlay,
}: {
  title: string;
  description: string;
  useOverlay: boolean;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center">
      <h1 className={`text-5xl font-bold ${useOverlay ? "text-overlay" : ""}`}>
        {title}
      </h1>
      {description && (
        <p className={`mt-2 text-xl ${useOverlay ? "text-overlay" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export default Title;
