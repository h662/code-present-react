import TableComp from "./TableComp";

function TableOnly({
  title,
  description,
  theme,
}: {
  title: string;
  description: string;
  theme: ThemeOption;
}) {
  return (
    <div>
      <h3
        className={`text-2xl font-medium mb-2 ${
          theme.useOverlay ? "text-overlay" : ""
        }`}
      >
        {title}
      </h3>
      <TableComp description={description} theme={theme} />
    </div>
  );
}

export default TableOnly;
