import { useState } from "react";

interface FontSelectorProps {
  options: FontOption[];
  selectedFont: Font;
  onSelect: (value: Font) => void;
}

export default function FontSelector({
  options,
  selectedFont,
  onSelect,
}: FontSelectorProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen((o) => !o)}
        className="px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200"
      >
        {selectedFont.label} {open ? "▲" : "▼"}
      </button>
      {open && (
        <ul className="absolute mt-2 w-40 bg-white border shadow-lg z-20">
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => {
                onSelect(opt);
                setOpen(false);
              }}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
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
