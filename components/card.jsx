export function ReviewCard({ content, fullName, role }) {
  return (
    <div className="grid gap-2 w-full max-w-lg mx-auto h-full p-5 bg-white rounded-2xl shadow-lg">
      <div className="h-max">
        <h3 className="font-bold text-[--primary-color]">{fullName}</h3>
        <p className="italic text-xs text-[--dark-tone]">{role}</p>
      </div>
      <p className="text-xs lg:text-sm text-[--secondary-color]">
        &quot;{content}&quot;
      </p>
    </div>
  );
}
