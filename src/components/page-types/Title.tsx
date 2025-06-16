function Title({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center">
      <h1 className="text-5xl font-bold text-overlay">{title}</h1>
      {description && (
        <p className="mt-2 text-xl text-overlay">{description}</p>
      )}
    </div>
  );
}

export default Title;
