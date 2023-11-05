import { book_back, book_front } from '@/assets';
import Button from '@/components/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <section className="grid md:grid-cols-2 gap-10 md:gap-20 items-center p-5 md:py-20 w-full max-w-5xl mx-auto">
        {/* Images */}
        <div className="aspect-square relative">
          <div className="aspect-[5/7] w-4/6 bg-slate-400 absolute bottom-0 left-0">
            <div className="w-full h-full relative">
              <Image
                src={book_back}
                alt="Developer marketing back cover"
                className="object-cover"
              />
            </div>
          </div>
          <div className="aspect-[5/7] w-4/6 bg-slate-500 absolute top-0 right-0 shadow-2xl">
            <div className="w-full h-full relative">
              <Image
                src={book_front}
                alt="Developer marketing front cover"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Marketing content */}
        <div className="grid gap-5">
          <h1 className="font-bold text-5xl md:text-7xl">
            Developer Marketing
          </h1>
          <h3>A comprehensive approach to reaching and engaging developers</h3>
          <Button>Amazon</Button> <Button>Read a free chapter</Button>
        </div>
      </section>
    </main>
  );
}
