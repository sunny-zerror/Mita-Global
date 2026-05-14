const BlinkButton = ({
  text,
  theme = "light", // "light" | "dark"
  className = "",
}) => {
  const isLight = theme === "light";

  return (
    <button
      className={`
        border pointer-events-none whitespace-nowrap uppercase text-xs w-fit
        flex items-center gap-x-2 p-2 pb-1 leading-none
        transition-colors duration-300
        ${isLight
          ? "bg-[#f2f2f208] border-[#f2f2f21a] text-[#f2f2f2]"
          : "bg-transparent border-[#0f1219] text-[#0f1219]"
        }
        ${className}
      `}
    >
      <span
        className={`
          size-1 rounded-full animate-blink -translate-y-px
          ${isLight ? "bg-[#f2f2f2]" : "bg-[#0f1219]"}
        `}
      />

      <p className="leading-none">
        {text}
      </p>
    </button>
  );
};

export default BlinkButton;