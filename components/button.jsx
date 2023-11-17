export default function Button({ children, disabled = false, type = 'button' }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="py-3 px-5 bg-[#1F55A9] text-white rounded-xl flex justify-center items-center gap-3 w-full"
    >
      {children}
    </button>
  );
}
