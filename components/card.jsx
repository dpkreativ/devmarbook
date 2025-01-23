export function ReviewCard({ content, fullName, role }) {
  return (
    <article className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
      <div className="grid gap-2 w-full max-w-lg mx-auto h-full">
        <div className="h-max text-white">
          <h3 className="font-bold">{fullName}</h3>
          <p className="italic text-xs">{role}</p>
        </div>
        <p className="text-xs lg:text-sm p-5 text-[--dark-tone] bg-white rounded-r-2xl rounded-bl-2xl shadow-lg">
          &quot;{content}&quot;
        </p>
      </div>
    </article>
  );
}
