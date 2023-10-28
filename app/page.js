import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full max-w-5xl mx-auto p-5 pb-20 grid gap-20">
      {/* Book intro */}
      <section className="grid gap-10 md:grid-cols-2">
        {/* Book image */}
        <div className="bg-slate-200 rounded-lg aspect-square"></div>

        {/* Book details */}
        <div className="grid gap-5 h-max">
          <h1 className="font-bold text-3xl">Book Name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            sapiente amet ratione placeat ea fuga sed maxime est laboriosam
            architecto dolore, quis deleniti quisquam distinctio qui iusto.
            Fugit, hic itaque.
          </p>
          <h2 className="font-bold text-xl">Reviews</h2>
          <p>
            <i>"Perfectly delightful! A good intro into dev marketing"</i> -
            Annie Humboldt
          </p>
          <p>
            <i>
              "This book helped me understand how to connect with developers in
              my community."
            </i>
            - Chris Howard
          </p>
        </div>
      </section>

      {/* Order details */}
      <section>
        <div className="grid gap-10">
          <h2 className="font-bold text-xl">Order now</h2>
          <div className="grid md:flex gap-10">
            <button className="py-3 px-5 border border-black rounded-lg">
              Amazon
            </button>
            <button className="py-3 px-5 border border-black rounded-lg">
              Barnes &amp; Nobles
            </button>
            <button className="py-3 px-5 border border-black rounded-lg">
              Books-a-million
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
