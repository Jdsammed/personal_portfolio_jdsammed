import { useEffect, useState } from "react";

export function CursorDot() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setVisible(true);
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!visible) return null;
  return (
    <>
      <div
        className="pointer-events-none fixed z-[100] h-2 w-2 rounded-full bg-primary mix-blend-screen"
        style={{ left: pos.x - 4, top: pos.y - 4, transition: "transform 0.05s linear" }}
      />
      <div
        className="pointer-events-none fixed z-[99] h-10 w-10 rounded-full border border-primary/40 mix-blend-screen"
        style={{
          left: pos.x - 20,
          top: pos.y - 20,
          transition: "left 0.18s ease-out, top 0.18s ease-out",
        }}
      />
    </>
  );
}
