import { useState } from "react";

interface ThemeSelectorProps {
  options: ThemeOption[];
  selectedText: string;
  onSelect: (theme: ThemeOption) => void;
}

export default function ThemeSelector({
  options,
  selectedText,
  onSelect,
}: ThemeSelectorProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen((o) => !o)}
        className="px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200"
      >
        {selectedText} {open ? "▲" : "▼"}
      </button>
      {open && (
        <ul className="absolute mt-2 w-48 bg-white border shadow-lg z-20">
          {options.map((opt) => (
            <li
              key={opt.label}
              onClick={() => {
                onSelect(opt);
                setOpen(false);
              }}
              className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <div
                className="w-6 h-6 mr-2 rounded"
                style={{
                  backgroundColor: opt.backgroundColor,
                  backgroundImage: opt.backgroundImage,
                  backgroundSize: "cover",
                }}
              />
              <span style={{ color: opt.textColor }}>{opt.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
