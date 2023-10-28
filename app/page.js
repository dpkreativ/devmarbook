import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full max-w-5xl mx-auto p-5">
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
        </div>
      </section>

      {/* Order details */}
      <section></section>
    </main>
  );
}
