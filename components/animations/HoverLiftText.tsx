type HoverLiftTextProps = {
  text: string;
  className?: string;
  ariaLabel?: string;
};

export function HoverLiftText({
  text,
  className,
  ariaLabel,
}: HoverLiftTextProps) {
  return (
    <span className={className} aria-label={ariaLabel ?? text}>
      {Array.from(text).map((char, index) =>
        char === " " ? (
          <span key={`space-${index}`} className="inline-block w-[0.35em]">
            &nbsp;
          </span>
        ) : (
          <span
            key={`char-${index}`}
            className="inline-flex overflow-visible leading-none"
          >
            <span className="inline-block transform-gpu transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:-translate-y-1.5 hover:scale-110">
              {char}
            </span>
          </span>
        ),
      )}
    </span>
  );
}

export default HoverLiftText;
