export default function Input({ className, name, type, placeholder }) {
  return (
    <div className={`border border-black rounded-lg p-3 ${className}`}>
      <input
        type={type || 'text'}
        name={name}
        id={name}
        placeholder={placeholder}
        className="w-full outline-none bg-transparent"
      />
    </div>
  );
}
