import ImageComp from "./ImageComp";
import TableComp from "./TableComp";

function TableImage({
  title,
  description,
  imageUrl,
  theme,
}: {
  title: string;
  description: string;
  imageUrl: string;
  theme: ThemeOption;
}) {
  return (
    <div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <TableComp description={description} theme={theme} />
      <ImageComp title={title} imageUrl={imageUrl} />
    </div>
  );
}

export default TableImage;
