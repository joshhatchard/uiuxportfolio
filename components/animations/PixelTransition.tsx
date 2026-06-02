"use client";

import { gsap } from "gsap";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import styles from "./PixelTransition.module.css";

const PIXEL_TRANSITION_KNOBS = {
  unhoverStartDelay: 0,
  textEnterDelay: 0.16,
  textEnterDuration: 0.25,
  textExitDuration: 0.25,
  textEnterYOffset: 8,
  textExitYOffset: 8,
  textStagger: 0.04,
  textEnterEase: "power2.out",
  textExitEase: "power2.in",
} as const;

type PixelTransitionProps = {
  firstContent: ReactNode;
  secondContent: ReactNode;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
  aspectRatio?: string;
  once?: boolean;
  isHovered?: boolean;
  className?: string;
  style?: CSSProperties;
};

function PixelTransition({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = "currentColor",
  animationStepDuration = 0.3,
  once = false,
  aspectRatio = "100%",
  isHovered,
  className = "",
  style = {},
}: PixelTransitionProps) {
  const pixelGridRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLDivElement>(null);
  const delayedCallRef = useRef<gsap.core.Tween | null>(null);
  const isHoveredRef = useRef(false);

  const [isActive, setIsActive] = useState(false);
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches);

  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = "";

    for (let row = 0; row < gridSize; row += 1) {
      for (let col = 0; col < gridSize; col += 1) {
        const pixel = document.createElement("div");
        pixel.classList.add(styles.pixel);
        pixel.dataset.pixel = "true";
        pixel.style.backgroundColor = pixelColor;

        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;
        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  useEffect(() => {
    return () => {
      if (delayedCallRef.current) {
        delayedCallRef.current.kill();
      }
    };
  }, []);

  const animatePixels = useCallback(
    (activate: boolean) => {
      const pixelGridEl = pixelGridRef.current;
      const activeEl = activeRef.current;
      if (!pixelGridEl || !activeEl) return;

      const pixels = pixelGridEl.querySelectorAll<HTMLDivElement>(
        "[data-pixel='true']",
      );
      if (!pixels.length) return;

      gsap.killTweensOf(pixels);
      if (delayedCallRef.current) {
        delayedCallRef.current.kill();
      }

      const totalPixels = pixels.length;
      const staggerDuration = animationStepDuration / totalPixels;
      const {
        unhoverStartDelay,
        textEnterDelay,
        textEnterDuration,
        textExitDuration,
        textEnterYOffset,
        textExitYOffset,
        textStagger,
        textEnterEase,
        textExitEase,
      } = PIXEL_TRANSITION_KNOBS;

      if (activate) {
        setIsActive(false);
        activeEl.style.display = "none";
        activeEl.style.pointerEvents = "";

        gsap.set(pixels, { display: "none" });
        gsap.to(pixels, {
          display: "block",
          duration: 0,
          stagger: {
            each: staggerDuration,
            from: "random",
          },
        });

        delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
          // If pointer already left during the reveal, abort activation.
          if (!isHoveredRef.current) {
            setIsActive(false);
            activeEl.style.display = "none";
            activeEl.style.pointerEvents = "";
            gsap.set(pixels, { display: "none" });
            return;
          }

          activeEl.style.display = "block";
          activeEl.style.pointerEvents = "none";
          gsap.set(pixels, { display: "none" });
          setIsActive(true);

          const textNodes = activeEl.querySelectorAll<HTMLElement>(
            "[data-pixel-transition-text='true']",
          );
          if (!textNodes.length) return;

          gsap.killTweensOf(textNodes);
          gsap.set(textNodes, { opacity: 0, y: textEnterYOffset });
          gsap.to(textNodes, {
            opacity: 1,
            y: 0,
            duration: textEnterDuration,
            ease: textEnterEase,
            delay: textEnterDelay,
            stagger: textStagger,
          });
        });
        return;
      }

      const startUnhoverPixels = () => {
        setIsActive(false);
        activeEl.style.display = "none";
        activeEl.style.pointerEvents = "";

        gsap.set(pixels, { display: "block" });
        gsap.to(pixels, {
          display: "none",
          duration: 0,
          stagger: {
            each: staggerDuration,
            from: "random",
          },
        });
      };

      const textNodes = activeEl.querySelectorAll<HTMLElement>(
        "[data-pixel-transition-text='true']",
      );

      if (!textNodes.length) {
        delayedCallRef.current = gsap.delayedCall(
          unhoverStartDelay,
          startUnhoverPixels,
        );
        return;
      }

      gsap.killTweensOf(textNodes);
      gsap.to(textNodes, {
        opacity: 0,
        y: textExitYOffset,
        duration: textExitDuration,
        ease: textExitEase,
        onComplete: () => {
          delayedCallRef.current = gsap.delayedCall(
            unhoverStartDelay,
            startUnhoverPixels,
          );
        },
      });
    },
    [animationStepDuration],
  );

  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (typeof isHovered !== "boolean") return;

    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      isHoveredRef.current = isHovered;
      return;
    }

    if (!isHovered && !isHoveredRef.current) return;

    isHoveredRef.current = isHovered;

    const timer = window.setTimeout(() => {
      if (isHovered) {
        if (!isActive) animatePixels(true);
        return;
      }

      if (!once) animatePixels(false);
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, [animatePixels, isActive, isHovered, once]);

  const handleEnter = () => {
    isHoveredRef.current = true;
    if (!isActive) animatePixels(true);
  };

  const handleLeave = () => {
    isHoveredRef.current = false;
    if (!once) animatePixels(false);
  };

  const handleClick = () => {
    if (!isActive) animatePixels(true);
    else if (isActive && !once) animatePixels(false);
  };

  const usesExternalHover = typeof isHovered === "boolean";

  return (
    <div
      className={`${styles.pixelTransition} ${className}`.trim()}
      style={style}
      onMouseEnter={
        !isTouchDevice && !usesExternalHover ? handleEnter : undefined
      }
      onMouseLeave={
        !isTouchDevice && !usesExternalHover ? handleLeave : undefined
      }
      onClick={isTouchDevice && !usesExternalHover ? handleClick : undefined}
    >
      <div style={{ paddingTop: aspectRatio }} />
      <div className={styles.default} aria-hidden={isActive}>
        {firstContent}
      </div>
      <div className={styles.active} ref={activeRef} aria-hidden={!isActive}>
        {secondContent}
      </div>
      <div className={styles.pixels} ref={pixelGridRef} />
    </div>
  );
}

export default PixelTransition;
