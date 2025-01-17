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
          ? "bg-[--secondary-color] hover:bg-[--primary-color]"
          : "bg-[--primary-color] hover:bg-[--secondary-color]"
      } text-white rounded-xl flex justify-center items-center gap-3 w-full`}
    >
      {children}
    </button>
  );
}
