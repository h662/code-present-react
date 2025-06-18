import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function TableComp({
  description,
  theme,
}: {
  description: string;
  theme: ThemeOption;
}) {
  const overlay = theme.useOverlay;

  const rowBgClass = overlay
    ? "odd:bg-white even:bg-gray-50"
    : "odd:bg-gray-800 even:bg-gray-700";

  const theadBgClass = overlay ? "bg-white/75" : "bg-black/25";

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        table: ({ node, ...props }) => (
          <table
            {...props}
            className="min-w-full table-auto border-collapse"
            style={{
              border: `1px solid ${theme.textColor}`,
            }}
          />
        ),
        thead: ({ node, ...props }) => (
          <thead {...props} className={theadBgClass} />
        ),
        th: ({ node, ...props }) => (
          <th
            {...props}
            className="px-4 py-2 text-left text-sm font-semibold"
            style={{ color: theme.textColor }}
          />
        ),
        tbody: ({ node, ...props }) => <tbody {...props} />,
        tr: ({ node, ...props }) => (
          <tr {...props} className={`${rowBgClass} transition-colors`} />
        ),
        td: ({ node, ...props }) => (
          <td
            {...props}
            className="px-4 py-2 text-sm"
            style={{ color: theme.textColor }}
          />
        ),
      }}
    >
      {description}
    </ReactMarkdown>
  );
}

export default TableComp;
0;
