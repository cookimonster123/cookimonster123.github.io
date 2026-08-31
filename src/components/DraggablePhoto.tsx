import { useEffect, useRef, useState } from "react";

interface DraggablePhotoProps {
  src: string;
  alt: string;
  defaultX: number;
  defaultY: number;
  size?: number;
  onDragEnd?: (didMove: boolean) => void;
}

export const DraggablePhoto: React.FC<DraggablePhotoProps> = ({
  src,
  alt,
  defaultX,
  defaultY,
  size = 160,
  onDragEnd,
}) => {
  const [position, setPosition] = useState({ x: defaultX, y: defaultY });
  const [isDragging, setIsDragging] = useState(false);
  const positionRef = useRef({ x: defaultX, y: defaultY });
  const pointerOffset = useRef({ x: 0, y: 0 });
  const didMoveRef = useRef(false);

  useEffect(() => {
    if (!isDragging) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const nextX = event.clientX - pointerOffset.current.x;
      const nextY = event.clientY - pointerOffset.current.y;
      const previousX = positionRef.current.x;
      const previousY = positionRef.current.y;

      if (Math.abs(nextX - previousX) > 4 || Math.abs(nextY - previousY) > 4) {
        didMoveRef.current = true;
      }

      const nextPosition = { x: nextX, y: nextY };
      positionRef.current = nextPosition;
      setPosition(nextPosition);
    };

    const handlePointerUp = () => {
      const moved = didMoveRef.current;
      setIsDragging(false);
      if (onDragEnd) {
        onDragEnd(moved);
      }
      didMoveRef.current = false;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [isDragging, onDragEnd]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    didMoveRef.current = false;
    positionRef.current = position;

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
      <img
        src={src}
        alt={alt}
        width={300}
        height={375}
        decoding="async"
        draggable={false}
      />
    </div>
  );
};
