export default function Button({ children, type = 'button' }) {
  return (
    <button type={type} className="py-3 px-5 border border-black rounded-lg">
      {children}
    </button>
  );
}
