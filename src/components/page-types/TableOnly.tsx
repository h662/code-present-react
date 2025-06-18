import TableComp from "./TableComp";

function TableOnly({
  title,
  description,
  useOverlay,
}: {
  title: string;
  description: string;
  useOverlay: boolean;
}) {
  return (
    <div>
      <h3
        className={`text-2xl font-medium mb-2 ${
          useOverlay ? "text-overlay" : ""
        }`}
      >
        {title}
      </h3>
      <TableComp description={description} />
    </div>
  );
}

export default TableOnly;
