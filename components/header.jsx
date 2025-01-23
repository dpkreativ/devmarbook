"use client";

import { AmazonIcon, AudibleIcon, audio_link, ebook_link } from "@/assets";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 px-3 pt-5 bg-transparent">
      <div className="bg-[--background-color] border border-[--grey-accent] hover:border-[--primary-accent] text-[--primary-color] rounded-2xl p-5 max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between gap-4">
        {/* Top Bar: Blog Link and Hamburger Menu */}
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex gap-2 items-center hover:text-[--secondary-color]"
          >
            <i className="ri-file-list-3-line text-2xl"></i>
            <span>Blog</span>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <i className="ri-close-large-line text-[--primary-color]"></i>
            ) : (
              <i className="ri-menu-5-line text-[--primary-color]"></i>
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            isOpen ? "grid" : "hidden"
          } lg:flex items-center gap-4 lg:gap-10`}
        >
          <Link
            href="#whats-inside"
            className="flex gap-2 items-center py-2 lg:py-0 hover:text-[--secondary-color]"
          >
            <i class="ri-book-open-line text-2xl"></i>
            <span>What's inside?</span>
          </Link>
          <Link
            href="#quick-preview"
            className="flex gap-2 items-center py-2 lg:py-0 hover:text-[--secondary-color]"
          >
            <i class="ri-eye-2-line text-2xl"></i>
            <span>Quick preview</span>
          </Link>
          <a
            href={ebook_link}
            className="flex gap-2 items-center py-2 lg:py-0 hover:text-[--secondary-color]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AmazonIcon />
            <span>Get E-book</span>
          </a>
          <Link
            href={`#quick-preview`}
            className="flex gap-2 items-center py-2 lg:py-0 hover:text-[--secondary-color]"
          >
            <AudibleIcon />
            <span>Listen to Audio</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
