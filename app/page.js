import { author, book_back, book_front, book_spine } from '@/assets';
import Button from '@/components/button';
import Input from '@/components/input';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-10 md:gap-20 items-center px-5 py-20 min-h-[90vh] w-full max-w-5xl mx-auto">
        {/* Images */}
        <div className="aspect-square relative">
          <div className="aspect-[5/7] w-4/6 absolute bottom-0 left-0 rounded-xl overflow-clip shadow-2xl">
            <div className="w-full h-full relative">
              <Image
                src={book_back}
                alt="Developer marketing back cover"
                className="object-cover"
              />
            </div>
          </div>
          <div className="aspect-[5/7] w-4/6 absolute top-0 right-0 rounded-xl overflow-clip shadow-2xl">
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
          <h1 className="font-extrabold text-6xl md:text-7xl">
            Developer Marketing
          </h1>
          <h3>A comprehensive approach to reaching and engaging developers</h3>
          <Button>Buy on Amazon</Button>
          <Button>Read a free chapter</Button>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#1F55A9] text-white min-h-screen">
        <div className="px-5 py-20 w-full max-w-5xl mx-auto grid gap-10">
          {/* Section header */}
          <h2 className="text-3xl font-light">What's inside?</h2>

          {/* Feature videos */}
          <div className="aspect-video w-full max-w-3xl mx-auto bg-slate-200 rounded-2xl shadow-2xl"></div>
        </div>
      </section>

      {/* About the author */}
      <section className="grid md:grid-cols-2 gap-10 md:gap-20 items-center px-5 py-20 min-h-screen w-full max-w-5xl mx-auto">
        <div className="grid gap-10">
          {/* Section header */}
          <h2 className="text-3xl font-light">About the author</h2>

          {/* Author bio */}
          <p>
            Trust Onyekwere is a seasoned Developer Relations Manager with over
            five years of experience building developer communities, driving
            product adoption, and leading technical outreach programs.
          </p>
        </div>

        {/* Author image */}
        <div className="aspect-square relative rounded-2xl overflow-clip">
          <Image
            src={author}
            alt="Trust Onyekwere"
            className="object-cover"
            fill
          />
        </div>
      </section>

      {/* Get the free copy (Newsletter signup) */}
      <section className="flex gap-5 md:gap-10 items-center px-5 py-20 min-h-screen w-full max-w-3xl mx-auto">
        {/* Book spine */}
        <div className="relative w-5 md:w-10 h-full rounded-full overflow-clip">
          <Image
            src={book_spine}
            alt="Developer Marketing"
            className="object-contain"
          />
        </div>

        {/* CTA */}
        <div className="w-full grid gap-10">
          <div className="grid gap-5 h-max">
            <h2 className="text-3xl font-light">Read a free chapter</h2>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
          </div>

          {/* newsletter form */}
          <form className="grid gap-5 h-max">
            <Input name="firstName" placeholder="Your first name" />
            <Input name="lastName" placeholder="Your last name" />
            <Input name="email" type="email" placeholder="Your email" />
            <Button>Get it now</Button>
          </form>
        </div>
      </section>
    </main>
  );
}
