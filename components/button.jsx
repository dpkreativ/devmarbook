export default function Button({ children, type = 'button' }) {
  return (
    <button
      type={type}
      className="py-3 px-5 bg-[#1F55A9] text-white rounded-xl"
    >
      {children}
    </button>
  );
}
