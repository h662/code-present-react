import FontSelector from "./FontSelector";

interface SlideNavProps {
  onPrev: () => void;
  onNext: () => void;
  onDownload: () => void;
  onBack: () => void;
  disablePrev: boolean;
  disableNext: boolean;
  fonts: FontOption[];
  selectedFont: Font;
  onFontSelect: (value: Font) => void;
}

export default function SlideNav({
  onPrev,
  onNext,
  onDownload,
  onBack,
  disablePrev,
  disableNext,
  fonts,
  selectedFont,
  onFontSelect,
}: SlideNavProps) {
  return (
    <div className="mt-4 space-x-4 flex flex-wrap items-center">
      <button
        disabled={disablePrev}
        onClick={onPrev}
        className="px-4 py-2 border rounded"
      >
        Prev
      </button>
      <button
        disabled={disableNext}
        onClick={onNext}
        className="px-4 py-2 border rounded"
      >
        Next
      </button>
      <button
        onClick={onDownload}
        className="px-4 py-2 border rounded bg-blue-500 text-white"
      >
        Download
      </button>
      <FontSelector
        options={fonts}
        selectedFont={selectedFont}
        onSelect={onFontSelect}
      />
      <button
        onClick={onBack}
        className="px-4 py-2 border rounded bg-pink-400 text-white"
      >
        Back to Series
      </button>
    </div>
  );
}
