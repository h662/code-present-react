import ImageComp from "./ImageComp";

function ImageText({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <ImageComp title={title} imageUrl={imageUrl} />
      {description && (
        <p className={"whitespace-pre-wrap text-2xl mb-4"}>{description}</p>
      )}
    </div>
  );
}

export default ImageText;
