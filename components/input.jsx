export default function Input({ name, type = "text", placeholder }) {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className="w-full outline-none bg-transparent border border-[--grey-accent] rounded-lg p-3"
    />
  );
}
