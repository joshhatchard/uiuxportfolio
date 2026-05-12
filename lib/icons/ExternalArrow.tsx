type ExternalArrowProps = {
  className?: string;
};

export function ExternalArrow({ className = "" }: ExternalArrowProps) {
  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        display: "inline-block",
        width: "20px",
        height: "20px",
        backgroundColor: "currentColor",
        WebkitMaskImage: 'url("/icons/external-arrow.svg")',
        maskImage: 'url("/icons/external-arrow.svg")',
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

export default ExternalArrow;
