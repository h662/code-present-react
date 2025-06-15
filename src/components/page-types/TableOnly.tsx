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
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <TableComp description={description} />
    </div>
  );
}

export default TableOnly;
