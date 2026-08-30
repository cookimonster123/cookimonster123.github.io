import { useEffect, useRef, useState } from "react";

interface DraggablePhotoProps {
  src: string;
  alt: string;
  defaultX: number;
  defaultY: number;
  size?: number;
}

export const DraggablePhoto: React.FC<DraggablePhotoProps> = ({
  src,
  alt,
  defaultX,
  defaultY,
  size = 160,
}) => {
  const [position, setPosition] = useState({ x: defaultX, y: defaultY });
  const [isDragging, setIsDragging] = useState(false);
  const pointerOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!isDragging) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const nextX = event.clientX - pointerOffset.current.x;
      const nextY = event.clientY - pointerOffset.current.y;

      setPosition({ x: nextX, y: nextY });
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [isDragging]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault();

    const rect = event.currentTarget.getBoundingClientRect();
    pointerOffset.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    setIsDragging(true);
  };

  return (
    <div
      className={`draggable-photo ${isDragging ? "is-dragging" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size}px`,
        height: `${size * 1.25}px`,
        zIndex: isDragging ? 60 : 20,
      }}
      onPointerDown={handlePointerDown}
      role="img"
      aria-label={alt}
      aria-live="off"
    >
      <img src={src} alt={alt} draggable={false} />
    </div>
  );
};
