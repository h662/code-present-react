function ImageComp({ title, imageUrl }: { title: string; imageUrl: string }) {
  return (
    <div className="flex max-w-full max-h-full justify-center">
      <img
        src={imageUrl}
        alt={title || ""}
        crossOrigin="anonymous"
        className="object-contain my-4"
      />
    </div>
  );
}

export default ImageComp;
