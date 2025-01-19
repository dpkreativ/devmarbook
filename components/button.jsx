export default function Button({
  children,
  disabled = false,
  secondary,
  type = "button",
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`py-3 px-5 ${
        secondary
          ? "bg-[--secondary-color] hover:bg-[--secondary-hover]"
          : "bg-[--primary-color] hover:bg-[--primary-hover]"
      } text-white rounded-xl flex justify-center items-center shadow shadow-[--secondary-color] gap-3 w-full`}
    >
      {children}
    </button>
  );
}
