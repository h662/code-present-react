import ImageComp from "./ImageComp";

function ImageText({
  title,
  description,
  imageUrl,
  useOverlay,
}: {
  title: string;
  description: string;
  imageUrl: string;
  useOverlay: boolean;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <ImageComp title={title} imageUrl={imageUrl} />
      {description && (
        <p
          className={`whitespace-pre-wrap text-2xl mb-4 ${
            useOverlay ? "text-overlay" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default ImageText;
