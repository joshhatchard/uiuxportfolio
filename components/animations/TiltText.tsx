"use client";
import { useRef } from "react";

export function TiltText({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const boundsRef = useRef<DOMRect | null>(null);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ rotateX: 0, rotateY: 0 });

  const applyTransform = () => {
    const el = ref.current;
    if (!el) return;

    const { rotateX, rotateY } = targetRef.current;
    el.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const scheduleTransform = () => {
    if (frameRef.current !== null) return;

    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null;
      applyTransform();
    });
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    boundsRef.current = e.currentTarget.getBoundingClientRect();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    const rect = boundsRef.current;
    if (!el || !rect) return;

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    targetRef.current = {
      rotateX: Math.max(-12, Math.min(12, -(y / rect.height) * 12)),
      rotateY: Math.max(-12, Math.min(12, (x / rect.width) * 12)),
    };

    scheduleTransform();
  };

  const handleMouseLeave = () => {
    boundsRef.current = null;

    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    if (ref.current) {
      ref.current.style.transition =
        "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)";
      ref.current.style.transform =
        "perspective(600px) rotateX(0deg) rotateY(0deg)";
    }
  };

  const handleMouseLeaveCleanup = () => {
    handleMouseLeave();
  };

  return (
    <h1
      ref={ref}
      className={className}
      style={{
        ...style,
        transformStyle: "preserve-3d",
        transition: "transform 0.08s ease-out",
        willChange: "transform",
        transformOrigin: "center center",
        display: "inline-block",
        cursor: "default",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={(e) => {
        if (ref.current) {
          ref.current.style.transition = "transform 0.08s ease-out";
        }
        handleMouseMove(e);
      }}
      onMouseLeave={handleMouseLeaveCleanup}
    >
      {children}
    </h1>
  );
}
