import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function TableComp({ description }: { description: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        table: ({ node, ...props }) => (
          <table
            className="min-w-full table-auto border-collapse border border-gray-200"
            {...props}
          />
        ),
        thead: ({ node, ...props }) => (
          <thead className="bg-gray-50" {...props} />
        ),
        tbody: ({ node, ...props }) => (
          <tbody className="divide-y divide-gray-200" {...props} />
        ),
        tr: ({ node, ...props }) => (
          <tr className="odd:bg-white even:bg-gray-50" {...props} />
        ),
        th: ({ node, ...props }) => (
          <th
            className="px-4 py-2 text-left text-sm font-semibold text-gray-70 border-b border-gray-200"
            {...props}
          />
        ),
        td: ({ node, ...props }) => (
          <td
            className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200"
            {...props}
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
