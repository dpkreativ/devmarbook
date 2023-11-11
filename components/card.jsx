import Image from 'next/image';

export function ReviewCard({ content, fullName, img, role }) {
  return (
    <div className="p-5 w-56 md:w-64 h-full grid gap-3 bg-slate-200 rounded-2xl shadow-2xl">
      <div className="w-full flex gap-3">
        {/* user image */}
        <div className="aspect-square h-12 rounded-full bg-slate-400 relative overflow-clip">
          <Image src={img} alt={fullName} fill className="object-cover" />
        </div>
        {/* user profile */}
        <div className="text-[#786937]">
          <p>{fullName}</p>
          <p className="text-xs">{role}</p>
        </div>
      </div>

      {/* user review */}
      <p className="text-black italic text-xs">"{content}"</p>
    </div>
  );
}
