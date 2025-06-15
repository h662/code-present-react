import ImageComp from "./ImageComp";

function ImageOnly({ title, imageUrl }: { title: string; imageUrl: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <ImageComp title={title} imageUrl={imageUrl} />
    </div>
  );
}

export default ImageOnly;
