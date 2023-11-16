import {
  AmazonIcon,
  BookIcon,
  BookYouTubeTrailer,
  BulletIcon,
  LinkedInIcon,
  MediumIcon,
  XTwitterIcon,
  author,
  book_back,
  book_dd,
  book_front,
  book_link,
  book_spine,
  reviews,
} from '@/assets';
import AnimatedText from '@/components/animated-text';
import Button from '@/components/button';
import { ReviewCard } from '@/components/card';
import Carousel from '@/components/carousel';
import Newsletter from '@/components/newsletter';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-10 md:gap-20 items-center px-5 pt-10 pb-24 w-full max-w-5xl mx-auto">
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
          <AnimatedText
            text={`The Developer Marketing Book`}
            el={`h1`}
            className="font-extrabold text-6xl lg:text-7xl drop-shadow-sm"
          />

          <h3 className="text-[#786937]">
            A comprehensive approach to reaching and engaging developers
          </h3>
          <a href={book_link} target="_blank" rel="noopener noreferrer">
            <Button>
              <AmazonIcon />
              <div>Buy on Amazon</div>
            </Button>
          </a>
          <Link href="#quick-preview">
            <Button>
              <BookIcon />
              <div>Read a free chapter</div>
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section id="whats-inside" className="bg-[#1F55A9] text-white">
        <div className="px-5 py-24 w-full max-w-5xl mx-auto grid gap-10">
          {/* Section header */}
          <AnimatedText
            text={`What's inside?`}
            el={`h2`}
            className="text-3xl md:text-5xl font-light text-center md:text-left"
          />

          {/* Feature video */}
          <div className="aspect-video overflow-clip w-full max-w-3xl mx-auto bg-slate-200 rounded-2xl shadow-2xl">
            <BookYouTubeTrailer />
          </div>

          {/* Feature texts */}
          <div className="w-full max-w-2xl mx-auto grid gap-10 py-5">
            {/* Feature text */}
            <div className="flex gap-3">
              <BulletIcon />
              <div className="grid gap-2">
                <h3 className="text-xl lg:text-3xl font-bold">
                  Developer Marketing Strategies
                </h3>
                <p>
                  Insightful tips on different strategies for effectively
                  marketing to developers.
                </p>
              </div>
            </div>

            {/* Feature text */}
            <div className="flex gap-3">
              <BulletIcon />
              <div className="grid gap-2">
                <h3 className="text-xl lg:text-3xl font-bold">
                  Community Building
                </h3>
                <p>
                  Leveraging the power of community to interact with developers.
                </p>
              </div>
            </div>

            {/* Feature text */}
            <div className="flex gap-3">
              <BulletIcon />
              <div className="grid gap-2">
                <h3 className="text-xl lg:text-3xl font-bold">
                  Partnerships and Influencer Marketing
                </h3>
                <p>
                  Connecting with the right people to forge stronger developer
                  engagement.
                </p>
              </div>
            </div>
          </div>

          {/* Feature image */}
          <div className="w-full max-w-sm mx-auto aspect-square relative drop-shadow-md">
            <Image
              src={book_dd}
              alt="Developer marketing book mockup"
              className="object-contain"
              fill
            />
          </div>

          {/* Get on Amazon */}
          <a
            href={book_link}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white rounded-full w-max mx-auto overflow-clip"
          >
            <Button>
              <div className="animate-pulse">
                <AmazonIcon />
              </div>
              <div>Get it on Amazon</div>
            </Button>
          </a>
        </div>
      </section>

      {/* About the author */}
      <section className="grid md:grid-cols-2 gap-10 md:gap-20 items-center px-5 py-24 w-full max-w-5xl mx-auto">
        <div className="grid gap-10 text-center md:text-left">
          {/* Section header */}
          <AnimatedText
            text={`About the author`}
            el={`h2`}
            className="text-3xl md:text-5xl font-light text-[#786937]"
          />

          {/* Author bio */}
          <div className="grid gap-5">
            <p>
              Trust Onyekwere is a Developer Relations Expert with over five
              years of experience building developer communities, driving
              product adoption, and leading technical outreach programs.
            </p>
            <p>
              His expertise and insights will be unveiled in his book -
              Developer Marketing, empowering aspiring and experienced DevRel
              professionals alike.
            </p>
          </div>

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
        id="quick-preview"
        className="px-5 py-24 w-full max-w-5xl mx-auto grid gap-10"
      >
        {/* CTA */}
        <AnimatedText
          text={`Quick preview`}
          el={`h2`}
          className="text-3xl md:text-5xl text-center md:text-left font-light text-[#786937]"
        />

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
          <Newsletter />
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-[#1F55A9] text-white">
        <div className="px-5 py-24 w-full max-w-5xl mx-auto grid gap-10">
          {/* Section header */}
          <AnimatedText
            text={`Reviews so far...`}
            el={`h2`}
            className="text-3xl md:text-5xl font-light text-center md:text-left"
          />

          {/* Featured reviews */}
          <Carousel>
            {reviews?.map((review, idx) => (
              <div key={idx} className="flex-[0_0_auto] max-w-full min-w-0">
                <ReviewCard
                  content={review.content}
                  fullName={review.fullName}
                  role={review.role}
                  img={review.img}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </main>
  );
}
