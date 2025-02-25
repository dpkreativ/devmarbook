import {
  AmazonIcon,
  AudibleIcon,
  BookYouTubeTrailer,
  LinkedInIcon,
  MediumIcon,
  XTwitterIcon,
  author,
  book_back,
  book_front,
  ebook_link,
  reviews,
  BulletIcon,
  partners,
} from "@/assets";
import AudiobookPreview from "@/components/audiobook-preview";
import Button from "@/components/button";
import { ReviewCard } from "@/components/card";
import Carousel from "@/components/carousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[70vh]">
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-10 md:gap-20 items-center px-5 py-10 w-full max-w-5xl mx-auto">
        {/* Images */}
        <div className="aspect-square relative">
          <div className="aspect-[5/7] w-4/6 absolute bottom-0 left-0 rounded-xl overflow-clip shadow-xl shadow-[--primary-accent] border-r border-[--primary-accent]">
            <div className="w-full h-full relative">
              <Image
                src={book_back}
                alt="Developer marketing back cover"
                className="object-cover"
                priority
                placeholder="blur"
              />
            </div>
          </div>
          <div className="aspect-[5/7] w-4/6 absolute top-0 right-0 rounded-xl overflow-clip shadow-xl shadow-[--primary-color] border-r-2 border-[--secondary-color]">
            <div className="w-full h-full relative">
              <Image
                src={book_front}
                alt="Developer marketing front cover"
                className="object-cover"
                priority
                placeholder="blur"
              />
            </div>
          </div>
        </div>

        {/* Marketing content */}
        <div className="grid gap-5">
          {/* <AnimatedText
            text={`The Developer Marketing Book`}
            el={`h1`}
            className="font-extrabold text-6xl lg:text-7xl drop-shadow-sm"
          /> */}

          <h1 className="font-extrabold text-[clamp(3rem,5vw,4rem)] leading-tight drop-shadow-sm text-[--primary-color]">
            <span>The</span>
            <div>Developer Marketing</div>
            <span>Book</span>
          </h1>

          <h3 className="drop-shadow-sm">
            A comprehensive approach to reaching and engaging developers
          </h3>
          <div className="grid lg:grid-cols-2 gap-5">
            <a href={ebook_link} target="_blank" rel="noopener noreferrer">
              <Button>
                <AmazonIcon />
                <div>Get Paperback</div>
              </Button>
            </a>
            <Link href={`#quick-preview`}>
              <Button>
                <AudibleIcon />
                <div>Listen to Audio</div>
              </Button>
            </Link>
          </div>
          {/* <Link href="#quick-preview">
            <Button secondary>
              <BookIcon />
              <div>Read a free chapter</div>
            </Button>
          </Link> */}
        </div>

        {/* Partner brands */}
        <div className="md:col-span-2 pt-20 flex flex-wrap justify-center gap-10">
          {partners?.map((x, i) => (
            <div
              key={`${i}-${x.company}`}
              className="relative h-8 flex-[0_0_auto] min-w-0 max-w-full"
            >
              <Image
                src={x.url}
                alt={x.company}
                className="object-contain h-full w-max"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Book display section */}
      <section id="quick-preview" className="py-24">
        {/* Audiobook */}
        <div className="p-5 w-full max-w-7xl mx-auto grid place-items-center gap-10">
          <h2 className="text-3xl md:text-5xl font-light text-center text-[--secondary-color]">
            Audiobook
          </h2>

          <p className="text-[--secondary-color] text-xl md:text-3xl text-center">
            Now you can listen on the go!
          </p>

          <AudiobookPreview />
        </div>
      </section>

      <section
        id="whats-inside"
        className="bg-[--primary-color] text-white py-24 grid gap-24"
      >
        {/* What's inside? */}
        <div className="px-5 w-full max-w-5xl mx-auto grid gap-10">
          {/* Section header */}
          {/* <AnimatedText
            text={`What's inside?`}
            el={`h2`}
            className="text-3xl md:text-5xl font-light text-center md:text-left"
          /> */}

          <h2 className="text-3xl md:text-5xl font-light text-center">
            What's inside?
          </h2>

          {/* Feature video */}
          <div className="aspect-video overflow-clip w-full max-w-3xl mx-auto bg-slate-200 rounded-2xl shadow-2xl">
            <BookYouTubeTrailer />
          </div>

          <div className="w-full max-w-lg mx-auto grid gap-10 py-5">
            {/* Feature text */}
            <div className="flex gap-3">
              <BulletIcon />
              <div className="grid gap-2">
                <h3 className="text-2xl md:text-3xl font-light">
                  Developer Marketing Strategies
                </h3>
                <p className="italic">
                  Insightful tips on different strategies for effectively
                  marketing to developers.
                </p>
              </div>
            </div>

            {/* Feature text */}
            <div className="flex gap-3">
              <BulletIcon />
              <div className="grid gap-2">
                <h3 className="text-2xl md:text-3xl font-light">
                  Community Building
                </h3>
                <p className="italic">
                  Leveraging the power of community to interact with developers.
                </p>
              </div>
            </div>

            {/* Feature text */}
            <div className="flex gap-3">
              <BulletIcon />
              <div className="grid gap-2">
                <h3 className="text-2xl md:text-3xl font-light">
                  Partnerships and Influencer Marketing
                </h3>
                <p className="italic">
                  Connecting with the right people to forge stronger developer
                  engagement.
                </p>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="p-5 w-full max-w-5xl mx-auto grid gap-10">
            <div className="flex gap-5 items-center justify-center text-2xl">
              <i class="ri-star-s-line"></i>
              <i class="ri-star-s-line"></i>
              <i class="ri-star-s-line"></i>
            </div>

            <h2 className="text-3xl md:text-5xl font-light text-center">
              What Readers Are Saying
            </h2>

            {/* Featured reviews */}
            <Carousel>
              {reviews?.map((review, idx) => (
                <ReviewCard
                  key={idx}
                  content={review.content}
                  fullName={review.fullName}
                  role={review.role}
                />
              ))}
            </Carousel>
          </div>

          <div className="grid gap-5 md:grid-cols-2 w-max mx-auto">
            {/* Get on Amazon */}
            <a href={ebook_link} target="_blank" rel="noopener noreferrer">
              <Button tertiary>
                <AmazonIcon />
                <div>Get Paperback</div>
              </Button>
            </a>

            {/* Get on Audible */}
            <Link href={`#quick-preview`}>
              <Button tertiary>
                <AudibleIcon />
                <div>Listen to Audio</div>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About the author */}
      <section className="grid md:grid-cols-3 gap-10 md:gap-20 px-5 py-24 w-full max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl md:col-span-3 font-light text-[--primary-color] text-center">
          About the author
        </h2>

        <div className="grid gap-10 text-center md:text-left md:col-span-1">
          {/* Section header */}
          {/* <AnimatedText
            text={`About the author`}
            el={`h2`}
            className="text-3xl md:text-5xl font-light text-[#786937]"
          /> */}

          <div className="grid gap-10">
            {/* Author image */}
            <div className="aspect-square relative rounded-2xl shadow-lg shadow-[--primary-accent] overflow-clip">
              <Image
                src={author}
                alt="Trust Onyekwere"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Author socials */}
            <div className="flex gap-10 justify-center items-center">
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
        </div>

        {/* Author bio */}
        <div className="grid gap-5 h-max md:col-span-2 text-center md:text-left">
          <p>
            Trust Onyekwere is a Developer Relations Expert with over six years
            of experience in building developer communities, driving product
            adoption, and leading technical outreach programs.
          </p>
          <p>
            He is a founding and advisory board member of the Developer
            Marketing Alliance. Trust has collaborated with renowned brands such
            as Andela, Google Developer Groups, Bunzz, Udacity, RAD5 Tech Hub,
            and many others to design and implement impactful programs for
            developers.
          </p>
          <p>
            As a former developer, Trust brings a unique perspective that allows
            him to understand the needs and challenges of reaching and engaging
            developers.
          </p>
        </div>
      </section>

      {/* Get the free copy (Newsletter signup) */}
      <section id="" className="w-full max-w-3xl mx-auto grid gap-20">
        {/* CTA */}
        {/* <AnimatedText
          text={`Quick preview`}
          el={`h2`}
          className="text-3xl md:text-5xl text-center md:text-left font-light text-[#786937]"
        /> */}
        {/* Book spine */}
        {/* <div className="relative h-[clamp(3rem, 4vw, 4rem)] w-full max-w-lg mx-auto rounded-full overflow-clip shadow-xl bg-[--primary-color]">
          <Image
            src={book_spine}
            alt="Developer Marketing"
            className="object-contain"
            placeholder="blur"
          />
        </div> */}

        {/* <h2 className="text-3xl md:text-5xl text-center font-light text-[--primary-color]">
          Take a peek
        </h2> */}

        {/* newsletter form */}
        {/* <Newsletter /> */}
      </section>
    </main>
  );
}
