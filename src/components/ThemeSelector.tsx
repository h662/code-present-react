interface ThemeSelectorProps {
  options: ThemeOption[];
  selectedText: string;
  onSelect: (theme: ThemeOption) => void;
  open: boolean;
  onToggle: () => void;
}

export default function ThemeSelector({
  options,
  selectedText,
  onSelect,
  open,
  onToggle,
}: ThemeSelectorProps) {
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={onToggle}
        className="
          px-4 py-2 border rounded
          bg-gray-100 text-gray-900 hover:bg-gray-200
          dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-500
          transition-colors
        "
      >
        {selectedText} {open ? "▲" : "▼"}
      </button>
      {open && (
        <ul
          className="
            absolute mt-2 w-48
            bg-white text-gray-900 border border-gray-300
            dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
            shadow-lg z-20
            transition-colors
          "
        >
          {options.map((opt) => (
            <li
              key={opt.label}
              onClick={() => onSelect(opt)}
              className="
                flex items-center px-3 py-2
                hover:bg-gray-100 dark:hover:bg-gray-600
                cursor-pointer transition-colors
              "
            >
              <div
                className="w-6 h-6 mr-2 rounded"
                style={{
                  backgroundColor: opt.backgroundColor,
                  backgroundImage: opt.backgroundImage,
                  backgroundSize: "cover",
                }}
              />
              <span
                className={`
                  ${
                    opt.textColor === "#ffffff"
                      ? "bg-gray-500 px-1 rounded"
                      : ""
                  }
                `}
                style={{ color: opt.textColor }}
              >
                {opt.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
