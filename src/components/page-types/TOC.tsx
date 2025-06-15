function TOC({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <pre className="whitespace-pre-wrap mt-2 text-lg">{description}</pre>
    </div>
  );
}

export default TOC;
