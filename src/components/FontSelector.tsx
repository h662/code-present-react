interface FontSelectorProps {
  options: FontOption[];
  selectedFont: Font;
  onSelect: (value: Font) => void;
  open: boolean;
  onToggle: () => void;
}

export default function FontSelector({
  options,
  selectedFont,
  onSelect,
  open,
  onToggle,
}: FontSelectorProps) {
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
        {selectedFont.label} {open ? "▲" : "▼"}
      </button>
      {open && (
        <ul
          className="
            absolute mt-2 w-40
            bg-white text-gray-900 border border-gray-300
            dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
            shadow-lg z-20
            transition-colors
          "
        >
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => onSelect(opt)}
              className="
                px-3 py-2 text-sm
                hover:bg-gray-100 dark:hover:bg-gray-600
                cursor-pointer transition-colors
              "
              style={{ fontFamily: opt.value }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
