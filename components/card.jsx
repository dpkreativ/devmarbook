export function ReviewCard({ content, fullName, role }) {
  return (
    <div className="grid gap-10 w-full max-w-xl mx-auto h-full p-5 text-black bg-slate-200 rounded-2xl shadow-xl">
      <div>
        <h3 className="font-bold">{fullName}</h3>
        <p className="italic text-xs">{role}</p>
      </div>
      <p className="text-xs lg:text-sm">&quot;{content}&quot;</p>
    </div>
  );
}
