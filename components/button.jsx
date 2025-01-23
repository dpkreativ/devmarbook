export default function Button({
  children,
  disabled = false,
  onClick,
  secondary,
  tertiary,
  type = "button",
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`py-3 px-5 ${
        secondary
          ? "bg-[--secondary-color] hover:bg-[--secondary-hover] text-white"
          : tertiary
          ? "bg-[--tertiary-color] hover:bg-[--secondary-hover] text-[--dark-tone]"
          : "bg-[--primary-color] hover:bg-[--primary-hover] text-white"
      } rounded-xl flex justify-center items-center gap-3 w-full`}
    >
      {children}
    </button>
  );
}
