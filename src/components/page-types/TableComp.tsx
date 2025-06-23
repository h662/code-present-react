import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ThemeContext } from "../../contexts/ThemeContext";

interface TableCompProps {
  description: string;
  theme: ThemeOption;
}

export default function TableComp({ description, theme }: TableCompProps) {
  const { theme: mode } = useContext(ThemeContext);
  const isDark = mode === "dark";

  const theadBg = isDark ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.75)";

  const evenRowBg = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.02)";

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        table: ({ node, ...props }) => (
          <table
            {...props}
            className="min-w-full table-auto border-collapse"
            style={{
              border: `1px solid ${isDark ? theme.darkText : theme.lightText}`,
            }}
          />
        ),
        thead: ({ node, ...props }) => (
          <thead {...props} style={{ backgroundColor: theadBg }} />
        ),
        th: ({ node, ...props }) => (
          <th
            {...props}
            className="px-4 py-2 text-left text-sm font-semibold"
            style={{
              color: isDark ? theme.darkText : theme.lightText,
            }}
          />
        ),
        tbody: ({ node, ...props }) => <tbody {...props} />,
        tr: ({ node, ...props }) => {
          const idx = node?.position?.start.line ?? 0;
          const bg = idx % 2 === 0 ? evenRowBg : "transparent";
          return <tr {...props} style={{ backgroundColor: bg }} />;
        },
        td: ({ node, ...props }) => (
          <td
            {...props}
            className="px-4 py-2 text-sm"
            style={{
              color: isDark ? theme.darkText : theme.lightText,
            }}
          />
        ),
      }}
    >
      {description}
    </ReactMarkdown>
  );
}
