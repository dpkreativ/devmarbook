import Image from 'next/image';
import book from '@/assets/book.png';
import author from '@/assets/trust.png';
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
        <h2 className="text-3xl md:text-5xl">What's inside</h2>
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
          <h2 className="text-5xl">About the author</h2>
          <p>
            Trust Onyekwere is a seasoned Developer Relations Manager with over
            five years of experience building developer communities, driving
            product adoption, and leading technical outreach programs.
          </p>
        </div>

        {/* Author image */}
        <div className="relative aspect-square">
          <div className="h-full w-full bg-slate-400 rounded-full overflow-clip">
            <Image src={author} alt="Trust Onyekwere" />
          </div>
          {/* <div className="h-full w-full bg-slate-400 rounded-full"></div> */}
        </div>
      </section>

      {/* Download free chapter and signup for newsletter */}
      <section>
        {/* CTA text */}
        <div>
          <h2 className="text-3xl md:text-5xl">Download a free chapter</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            ea consequuntur ullam atque laudantium fuga illo esse mollitia harum
            illum quibusdam voluptas, doloremque quasi optio odio id tempore
            vero hic.
          </p>
        </div>

        {/* Newsletter form */}
        <div>
          <form className="grid gap-5">
            {/* First name input */}
            <div className="border border-black rounded-lg p-3">
              <input type="text" name="firstName" id="firstName" />
            </div>

            {/* Last name input */}
            <div className="border border-black rounded-lg p-3">
              <input type="text" name="lastName" id="lastName" />
            </div>

            {/* Email address input */}
            <div className="border border-black rounded-lg p-3">
              <input type="text" name="email" id="email" />
            </div>

            {/* Allow newsletter sign up */}
            <div className="flex gap-3">
              <input type="checkbox" name="newsletter" id="newsletter" />
              <span>Get updates on latest news</span>
            </div>

            <Button type="submit">Get free chapter</Button>
          </form>
        </div>
      </section>
    </main>
  );
}
