import {
  AmazonIcon,
  BookIcon,
  BookYouTubeTrailer,
  LinkedInIcon,
  MediumIcon,
  XTwitterIcon,
  author,
  book_back,
  book_front,
  book_spine,
  reviews,
} from '@/assets';
import Button from '@/components/button';
import { ReviewCard } from '@/components/card';
import Input from '@/components/input';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-10 md:gap-20 items-center px-5 pt-10 pb-20 w-full max-w-5xl mx-auto">
        {/* Images */}
        <div className="aspect-square relative">
          <div className="aspect-[5/7] w-4/6 absolute bottom-0 left-0 rounded-xl overflow-clip shadow-xl border-r border-[#FCC002]">
            <div className="w-full h-full relative">
              <Image
                src={book_back}
                alt="Developer marketing back cover"
                className="object-cover"
              />
            </div>
          </div>
          <div className="aspect-[5/7] w-4/6 absolute top-0 right-0 rounded-xl overflow-clip shadow-xl border-r-2 border-[#348576]">
            <div className="w-full h-full relative">
              <Image
                src={book_front}
                alt="Developer marketing front cover"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Marketing content */}
        <div className="grid gap-5">
          <h1 className="font-extrabold text-6xl lg:text-7xl drop-shadow-sm">
            Developer Marketing
          </h1>
          <h3 className="text-[#786937]">
            A comprehensive approach to reaching and engaging developers
          </h3>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <AmazonIcon />
              <div>Buy on Amazon</div>
            </Button>
          </a>
          <Link href="#read-free-chapter">
            <Button>
              <BookIcon />
              <div>Read a free chapter</div>
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#1F55A9] text-white">
        <div className="px-5 py-20 w-full max-w-5xl mx-auto grid gap-10">
          {/* Section header */}
          <h2 className="text-3xl md:text-5xl font-light text-center md:text-left">
            What's inside?
          </h2>

          {/* Feature video */}
          <div className="aspect-video overflow-clip w-full max-w-3xl mx-auto bg-slate-200 rounded-2xl shadow-2xl">
            <BookYouTubeTrailer />
          </div>

          {/* Feature text */}
          <div>
            <h3 className='text-2xl font-bold'>Developer Marketing Strategies</h3>
            <p>
              Insightful tips on different strategies for effectively marketing
              to developers.
            </p>
          </div>

          {/* Feature text */}
          <div className='text-right'>
            <h3 className='text-2xl font-bold'>Community Building</h3>
            <p>
              Learn how to leverage the power of community to interact with
              developers.
            </p>
          </div>

          {/* Feature text */}
          <div>
            <h3 className='text-2xl font-bold'>Partnerships and Influencer Marketing</h3>
            <p>
              Forge stronger partnerships and connect with the right influencers
              to spread the word.
            </p>
          </div>

          {/* Get on Amazon */}
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <AmazonIcon />
              <div>Get it on Amazon</div>
            </Button>
          </a>
        </div>
      </section>

      {/* About the author */}
      <section className="grid md:grid-cols-2 gap-10 md:gap-20 items-center px-5 py-20 min-h-screen w-full max-w-5xl mx-auto">
        <div className="grid gap-10 text-center md:text-left">
          {/* Section header */}
          <h2 className="text-3xl md:text-5xl font-light text-[#786937]">
            About the author
          </h2>

          {/* Author bio */}
          <p>
            Trust Onyekwere is a seasoned Developer Relations Expert with over
            five years of experience building developer communities, driving
            product adoption, and leading technical outreach programs.
            <br />
            Trust is excited to share his knowledge and experience via the
            Developer Marketing book.
          </p>

          {/* Author socials */}
          <div className="flex gap-10 justify-center md:justify-normal items-center">
            <a
              href="https://twitter.com/iamtjah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XTwitterIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/trust-onyekwere/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://medium.com/@tjah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediumIcon />
            </a>
          </div>
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
      <section
        id="read-free-chapter"
        className="px-5 py-20 w-full max-w-5xl mx-auto grid gap-10"
      >
        {/* CTA */}
        <h2 className="text-3xl md:text-5xl text-center md:text-left font-light text-[#786937]">
          Quick preview
        </h2>

        <div className="flex gap-5 md:gap-10 items-center w-full max-w-3xl mx-auto">
          {/* Book spine */}
          <div className="relative w-5 md:w-10 h-full rounded-full overflow-clip shadow-xl bg-[#786937]">
            <Image
              src={book_spine}
              alt="Developer Marketing"
              className="object-contain"
            />
          </div>

          {/* newsletter form */}
          <form className="grid gap-5 w-full">
            <Input name="firstName" placeholder="Your first name" />
            <Input name="lastName" placeholder="Your last name" />
            <Input name="email" type="email" placeholder="Your email" />
            <fieldset className="flex gap-5 justify-center">
              <input type="checkbox" name="newsletter" id="newsletter" />
              <label htmlFor="newsletter" className="text-xs">
                Get more insights on improving your developer marketing
                strategies.
              </label>
            </fieldset>
            <Button type="submit">
              <BookIcon />
              <div>Read a free chapter</div>
            </Button>
          </form>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-[#1F55A9] text-white">
        <div className="px-5 py-20 w-full max-w-5xl mx-auto grid gap-10">
          {/* Section header */}
          <h2 className="text-3xl md:text-5xl font-light text-center md:text-left">
            Reviews so far...
          </h2>

          {/* Featured reviews */}
          <div className="grid gap-10 md:grid-cols-3 w-full max-w-3xl mx-auto">
            {reviews?.map((review, idx) => (
              <ReviewCard
                key={idx}
                content={review.content}
                fullName={review.fullName}
                role={review.role}
                img={review.img}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
