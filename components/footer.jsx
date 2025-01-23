import { AmazonIcon, AudibleIcon, audio_link, ebook_link } from "@/assets";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[--primary-color] text-white">
      <div className="w-full max-w-7xl px-5 py-10 mx-auto grid gap-10">
        {/* Navigation Menu */}
        <nav
          className={`grid md:flex items-center justify-center gap-4 md:gap-10`}
        >
          <Link
            href="#whats-inside"
            className="flex gap-2 items-center py-2 md:py-0 hover:text-[--secondary-color]"
          >
            <i class="ri-book-open-line text-2xl"></i>
            <span>What's inside?</span>
          </Link>
          <Link
            href="#quick-preview"
            className="flex gap-2 items-center py-2 md:py-0 hover:text-[--secondary-color]"
          >
            <i class="ri-eye-2-line text-2xl"></i>
            <span>Quick preview</span>
          </Link>
          <a
            href={ebook_link}
            className="flex gap-2 items-center py-2 md:py-0 hover:text-[--secondary-color]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AmazonIcon />
            <span>Get Paperback</span>
          </a>
          <Link
            href={`#quick-preview`}
            className="flex gap-2 items-center py-2 md:py-0 hover:text-[--secondary-color]"
          >
            <AudibleIcon />
            <span>Listen to Audio</span>
          </Link>
        </nav>

        <div className="flex gap-10 items-center justify-center">
          <a
            href="https://twitter.com/devmarbook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ri-twitter-x-line text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/trust-onyekwere/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ri-linkedin-fill text-2xl"></i>
          </a>
          <a
            href="https://blog.devmarbook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-file-list-3-line text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
