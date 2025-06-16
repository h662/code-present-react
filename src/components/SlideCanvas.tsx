import { forwardRef, type ReactNode } from "react";

interface SlideCanvasProps {
  fontFamily: string;
  textColor: string;
  backgroundColor: string;
  backgroundImage: string;
  backgroundSize: string;
  backgroundRepeat: string;
  backgroundPosition: string;
  children: ReactNode;
}

const SlideCanvas = forwardRef<HTMLDivElement, SlideCanvasProps>(
  (
    {
      fontFamily,
      textColor,
      backgroundColor,
      backgroundImage,
      backgroundSize,
      backgroundRepeat,
      backgroundPosition,
      children,
    },
    ref
  ) => (
    <div
      ref={ref}
      className="w-full max-w-4xl min-h-[504px] border p-6 bg-white shadow-md mx-auto flex"
      style={{
        fontFamily,
        color: textColor,
        backgroundColor,
        backgroundImage,
        backgroundSize,
        backgroundRepeat,
        backgroundPosition,
      }}
    >
      {children}
    </div>
  )
);

export default SlideCanvas;
