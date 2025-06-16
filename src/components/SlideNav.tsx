import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface SlideNavProps {
  onPrev: () => void;
  onNext: () => void;
  disablePrev: boolean;
  disableNext: boolean;
}

export default function SlideNav({
  onPrev,
  onNext,
  disablePrev,
  disableNext,
}: SlideNavProps) {
  return (
    <div className="mt-4 space-x-4 flex flex-wrap items-center">
      <button
        disabled={disablePrev}
        onClick={onPrev}
        className="px-4 py-2 border rounded"
      >
        <FaAngleLeft />
      </button>
      <button
        disabled={disableNext}
        onClick={onNext}
        className="px-4 py-2 border rounded"
      >
        <FaAngleRight />
      </button>
    </div>
  );
}
