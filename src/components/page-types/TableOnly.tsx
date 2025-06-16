import TableComp from "./TableComp";

function TableOnly({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h3 className="text-2xl font-medium mb-2 text-overlay">{title}</h3>
      <TableComp description={description} />
    </div>
  );
}

export default TableOnly;
