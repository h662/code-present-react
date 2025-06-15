function TOC({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <pre className="whitespace-pre-wrap mt-2">{description}</pre>
    </div>
  );
}

export default TOC;
