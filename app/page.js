import Image from 'next/image';
import book from '@/assets/book.png';
import Button from '@/components/button';

export default function Home() {
  return (
    <main className="w-full max-w-5xl mx-auto p-5 pb-20 grid gap-20">
      {/* Book intro */}
      <section className="grid gap-10 md:grid-cols-2 items-center">
        {/* Book image */}
        <div>
          <Image
            src={book}
            alt="Mockup of Developer Marketing Book by Trust"
            priority
          />
        </div>

        {/* Book details */}
        <div className="grid gap-5 h-max">
          <h1 className="font-bold text-3xl md:text-6xl">
            Developer Marketing
          </h1>
          <h3>A comprehensive approach to reaching and engaging developers</h3>

          {/* Order links */}
          <div className="grid md:flex gap-10">
            <Button>Order on Amazon</Button>
            <Button>Download a free chapter</Button>
          </div>
        </div>
      </section>

      {/* About the book */}
      <section>
        <div className="grid gap-10">
          <h2 className="font-bold text-xl">About the book</h2>
          <p>{/* Text description */}</p>
          <div>{/* Embedded video description */}</div>
        </div>
      </section>
    </main>
  );
}
