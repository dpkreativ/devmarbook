import Image from 'next/image';
import book from '@/assets/book.png';
import author from '@/assets/trust_profile.png';
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
          <div className="grid md:flex gap-5 md:gap-10">
            <Button>Order on Amazon</Button>
            <Button>Download a free chapter</Button>
          </div>
        </div>
      </section>

      {/* About the book */}
      <section className="grid gap-10">
        <h2 className="font-bold text-xl">What's inside</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
          temporibus fugit ratione. Labore optio error quaerat facilis sit
          voluptates minima deleniti voluptatum molestias natus soluta vero
          earum laboriosam, dicta in?
        </p>
        <div className="aspect-video bg-slate-200 rounded-lg">
          {/* Embedded video description */}
        </div>
      </section>

      {/* About the author */}
      <section className="grid gap-10 md:grid-cols-2 items-center">
        {/* Intro and author bio text */}
        <div className="grid gap-5 h-max">
          <h2 className="text-5xl font-bold">About Trust</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            praesentium magnam alias odit eligendi consequuntur non iusto
            consequatur. Deserunt, ad obcaecati pariatur exercitationem nam
            quasi dicta accusamus magnam laborum vitae!
          </p>
        </div>

        {/* Author image */}
        <div className="aspect-square bg-slate-400 rounded-full overflow-clip">
          <Image src={author} alt="Trust Onyekwere" />
        </div>
      </section>
    </main>
  );
}
