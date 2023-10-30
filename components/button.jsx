export default function Button({ children }) {
  return (
    <button className="py-3 px-5 border border-black rounded-lg">
      {children}
    </button>
  );
}
