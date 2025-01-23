import book_front from "./book-front-min.jpg";
import book_back from "./book-back-min.jpg";
import book_spine from "./book-spine-min.jpg";
import author from "./author.jpg";
import book_dd from "./dd.png";
import AppleBooks from "./Apple_Books_Icon.svg";
import Audible from "./Audible_BylineLogo_US_AU_CA_IN_JP_UK_IronandSolar_RGB.png";
import BarnesNoble from "./Barnes_and_Noble.png";
import Everand from "./everand_logo_wordmark.svg";
import Kobo from "./Kobo_Inc.-Logo.wine.png";

// --- Images ---
export { book_front, book_back, book_spine, author, book_dd };

// --- Videos ---
export function BookYouTubeTrailer() {
  return (
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/qYaZz5K_K_o?si=kdL2B9grgnlVcS-w"
      title="The Developer Marketing Book Trailer"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/qYaZz5K_K_o?autoplay=1><img src=https://img.youtube.com/vi/qYaZz5K_K_o/maxresdefault.jpg alt='The Developer Marketing Book Trailer'><span>▶</span></a>"
      frameBorder="0"
    ></iframe>
  );
}

export const sponsors = [
  {
    company: "Apple Books",
    url: AppleBooks,
  },
  {
    company: "Barnes & Noble",
    url: BarnesNoble,
  },
  {
    company: "Audible",
    url: Audible,
  },

  {
    company: "Everand",
    url: Everand,
  },
  {
    company: "Kobo Inc",
    url: Kobo,
  },
];

// --- Book links ---
export const ebook_link = "https://a.co/d/hU4ZCYq";
export const audio_link = "https://a.co/d/hU4ZCYq";

// --- Reviews ---
export const reviews = [
  {
    fullName: "Sarah Mouton",
    role: "Developer Marketing at Hubspot",
    content:
      "Great book to give some insights into the world of developer marketing. I wish I had it when I started.",
  },
  {
    fullName: "Richard Hurring",
    role: "Founder & CEO at Catchy",
    content:
      "I like that you are using 'real' examples of companies and individuals to get your points across. I also like that you haven't fallen into the classic 'Developers hate marketing' trap.",
  },
  {
    fullName: "Candor Dennis",
    role: "Developer Community Manager",
    content:
      "I recommend this read for anyone looking to build a community around a developer tool. It has firm insights into specific parts of Developer Marketing.",
  },
  {
    fullName: "Sophia Iroegbu",
    role: "Developer Advocate",
    content:
      "This is one of the best and well written books about developer marketing and relations that I've read. It's a must read for one getting started in these fields and it's beginner friendly as well. A solid 10/10.",
  },
  {
    fullName: "Divine Orji",
    role: "Software Engineer at Innovation Growth Hub",
    content:
      "The practical insights in this book have significantly enhanced my understanding of the dynamics between development and marketing. I highly recommend!",
  },
];

// --- Icons ---
export function MediumIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
        <path
          fill="currentColor"
          d="M8 6a6 6 0 1 1 0 12A6 6 0 0 1 8 6Zm9 1c1.5 0 2.5 2.239 2.5 5s-1 5-2.5 5s-2.5-2.239-2.5-5s1-5 2.5-5Zm4 .5c.38 0 .712.827.88 2.246l.047.443l.019.235l.03.494l.01.259l.012.541L22 12l-.002.282l-.012.541l-.01.26l-.03.493l-.02.235l-.045.443c-.169 1.42-.5 2.246-.881 2.246c-.38 0-.712-.827-.88-2.246l-.047-.443a16.683 16.683 0 0 1-.019-.235l-.03-.494a20.863 20.863 0 0 1-.01-.259l-.012-.541v-.564l.012-.541l.01-.26l.03-.493l.02-.235l.045-.443c.169-1.42.5-2.246.881-2.246Z"
        />
      </g>
    </svg>
  );
}

export function AmazonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        d="M485 467.5c-11.6 4.9-20.9 12.2-27.8 22c-6.9 9.8-10.4 21.6-10.4 35.5c0 17.8 7.5 31.5 22.4 41.2c14.1 9.1 28.9 11.4 44.4 6.8c17.9-5.2 30-17.9 36.4-38.1c3-9.3 4.5-19.7 4.5-31.3v-50.2c-12.6.4-24.4 1.6-35.5 3.7c-11.1 2.1-22.4 5.6-34 10.4zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm35.8 262.7c-7.2-10.9-20.1-16.4-38.7-16.4c-1.3 0-3 .1-5.3.3c-2.2.2-6.6 1.5-12.9 3.7a79.4 79.4 0 0 0-17.9 9.1c-5.5 3.8-11.5 10-18 18.4c-6.4 8.5-11.5 18.4-15.3 29.8l-94-8.4c0-12.4 2.4-24.7 7-36.9c4.7-12.2 11.8-23.9 21.4-35c9.6-11.2 21.1-21 34.5-29.4c13.4-8.5 29.6-15.2 48.4-20.3c18.9-5.1 39.1-7.6 60.9-7.6c21.3 0 40.6 2.6 57.8 7.7c17.2 5.2 31.1 11.5 41.4 19.1a117 117 0 0 1 25.9 25.7c6.9 9.6 11.7 18.5 14.4 26.7c2.7 8.2 4 15.7 4 22.8v182.5c0 6.4 1.4 13 4.3 19.8c2.9 6.8 6.3 12.8 10.2 18c3.9 5.2 7.9 9.9 12 14.3c4.1 4.3 7.6 7.7 10.6 9.9l4.1 3.4l-72.5 69.4c-8.5-7.7-16.9-15.4-25.2-23.4c-8.3-8-14.5-14-18.5-18.1l-6.1-6.2c-2.4-2.3-5-5.7-8-10.2c-8.1 12.2-18.5 22.8-31.1 31.8c-12.7 9-26.3 15.6-40.7 19.7c-14.5 4.1-29.4 6.5-44.7 7.1c-15.3.6-30-1.5-43.9-6.5c-13.9-5-26.5-11.7-37.6-20.3c-11.1-8.6-19.9-20.2-26.5-35c-6.6-14.8-9.9-31.5-9.9-50.4c0-17.4 3-33.3 8.9-47.7c6-14.5 13.6-26.5 23-36.1c9.4-9.6 20.7-18.2 34-25.7s26.4-13.4 39.2-17.7c12.8-4.2 26.6-7.8 41.5-10.7c14.9-2.9 27.6-4.8 38.2-5.7c10.6-.9 21.2-1.6 31.8-2v-39.4c0-13.5-2.3-23.5-6.7-30.1zm180.5 379.6c-2.8 3.3-7.5 7.8-14.1 13.5s-16.8 12.7-30.5 21.1c-13.7 8.4-28.8 16-45 22.9c-16.3 6.9-36.3 12.9-60.1 18c-23.7 5.1-48.2 7.6-73.3 7.6c-25.4 0-50.7-3.2-76.1-9.6c-25.4-6.4-47.6-14.3-66.8-23.7c-19.1-9.4-37.6-20.2-55.1-32.2c-17.6-12.1-31.7-22.9-42.4-32.5c-10.6-9.6-19.6-18.7-26.8-27.1c-1.7-1.9-2.8-3.6-3.2-5.1c-.4-1.5-.3-2.8.3-3.7c.6-.9 1.5-1.6 2.6-2.2a7.42 7.42 0 0 1 7.4.8c40.9 24.2 72.9 41.3 95.9 51.4c82.9 36.4 168 45.7 255.3 27.9c40.5-8.3 82.1-22.2 124.9-41.8c3.2-1.2 6-1.5 8.3-.9c2.3.6 3.5 2.4 3.5 5.4c0 2.8-1.6 6.3-4.8 10.2zm59.9-29c-1.8 11.1-4.9 21.6-9.1 31.8c-7.2 17.1-16.3 30-27.1 38.4c-3.6 2.9-6.4 3.8-8.3 2.8c-1.9-1-1.9-3.5 0-7.4c4.5-9.3 9.2-21.8 14.2-37.7c5-15.8 5.7-26 2.1-30.5c-1.1-1.5-2.7-2.6-5-3.6c-2.2-.9-5.1-1.5-8.6-1.9s-6.7-.6-9.4-.8c-2.8-.2-6.5-.2-11.2 0c-4.7.2-8 .4-10.1.6a874.4 874.4 0 0 1-17.1 1.5c-1.3.2-2.7.4-4.1.5c-1.5.1-2.7.2-3.5.3l-2.7.3c-1 .1-1.7.2-2.2.2h-3.2l-1-.2l-.6-.5l-.5-.9c-1.3-3.3 3.7-7.4 15-12.4s22.3-8.1 32.9-9.3c9.8-1.5 21.3-1.5 34.5-.3s21.3 3.7 24.3 7.4c2.3 3.5 2.5 10.7.7 21.7z"
      />
    </svg>
  );
}

export function AudibleIcon() {
  return (
    <svg
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>Audible icon</title>
        <path d="M12.008 17.362L24 9.885v2.028l-11.992 7.509L0 11.912V9.886l12.008 7.477zm0-9.378c-2.709 0-5.085 1.363-6.448 3.47.111-.111.175-.175.286-.254 3.374-2.804 8.237-2.17 10.883 1.362l1.758-1.124c-1.394-2.044-3.786-3.454-6.48-3.454m0 3.47a4.392 4.392 0 0 0-3.548 1.821 3.597 3.597 0 0 1 2.139-.697c1.299 0 2.455.666 3.232 1.79l1.679-1.045c-.729-1.157-2.028-1.87-3.501-1.87M3.897 8.412c4.943-3.897 11.929-2.836 15.652 2.344l.031.032 1.822-1.125a11.214 11.214 0 0 0-9.394-5.085c-3.897 0-7.366 1.996-9.394 5.085.364-.412.824-.903 1.283-1.251"></path>
      </g>
    </svg>
  );
}

export function BookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93c71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.89 15.89 0 0 0-5.46-12A143 143 0 0 0 202.24 74Zm279.68-20.7A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.31 143.31 0 0 0-32.31 20.78a15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61Z"
      />
    </svg>
  );
}

export function XTwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"
      />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
      />
    </svg>
  );
}

export function BlogIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2H17C17.5523 2 18 2.44772 18 3V15H22V19C22 20.6569 20.6569 22 19 22ZM18 17V19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19V17H18ZM16 20V4H4V19C4 19.5523 4.44772 20 5 20H16ZM6 7H14V9H6V7ZM6 11H14V13H6V11ZM6 15H11V17H6V15Z"></path>
    </svg>
  );
}

export function BulletIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 2048 2048"
    >
      <path
        fill="currentColor"
        d="M1024 640q79 0 149 30t122 82t83 123t30 149q0 80-30 149t-82 122t-123 83t-149 30q-80 0-149-30t-122-82t-83-122t-30-150q0-79 30-149t82-122t122-83t150-30z"
      />
    </svg>
  );
}

export function SpinnerIcon() {
  return (
    <svg
      className="animate-spin h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}

export function GumroadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0m-.007 5.12c4.48 0 5.995 3.025 6.064 4.744h-3.239c-.069-.962-.897-2.406-2.896-2.406c-2.136 0-3.514 1.857-3.514 4.126c0 2.27 1.378 4.125 3.514 4.125c1.93 0 2.758-1.512 3.103-3.025h-3.103v-1.238h6.509v6.327h-2.855v-3.989c-.207 1.444-1.102 4.264-4.617 4.264c-3.516 0-5.584-2.82-5.584-6.326c0-3.645 2.276-6.602 6.618-6.602"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <svg
      width="67"
      height="41"
      viewBox="0 0 67 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45.0353 4.66312C45.8331 3.77669 46.7195 3.04539 47.6281 2.46921C49.2236 1.47198 50.9079 0.940125 52.6364 0.940125V15.411C51.3732 11.0232 48.6475 7.25591 45.0353 4.66312ZM66.5533 40.9401H15.2957C6.87461 40.9401 0.0712891 34.1146 0.0712891 25.7157C0.0712891 17.6714 6.3206 11.0675 14.232 10.5135V0.940125C16.0048 0.940125 17.7555 1.44982 19.3954 2.46921C20.304 3.02323 21.1904 3.75453 21.9882 4.59663C25.2458 2.31409 29.1904 0.984446 33.4674 0.984446C33.4674 10.2254 30.1433 20.9734 19.3289 20.9955H33.3566C32.9577 19.2005 31.3178 17.8709 29.3677 17.8487H37.5228C35.5727 17.8487 33.9328 19.2005 33.5339 21.0177H46.6087C49.2236 21.0177 51.8164 21.5274 54.2541 22.5468C56.6696 23.544 58.8857 25.0288 60.725 26.8681C62.5865 28.7296 64.0491 30.9235 65.0464 33.339C66.0436 35.7324 66.5533 38.3252 66.5533 40.9401ZM22.8525 10.7795C23.1849 11.6437 24.0713 12.6188 25.3123 13.3279C26.5533 14.0371 27.8386 14.3252 28.7472 14.1922C28.4148 13.3279 27.5284 12.3529 26.2874 11.6437C25.0464 10.9346 23.761 10.6465 22.8525 10.7795ZM41.5117 13.3279C40.2707 14.0371 38.9854 14.3252 38.0768 14.1922C38.4092 13.3279 39.2957 12.3529 40.5367 11.6437C41.7777 10.9346 43.063 10.6465 43.9716 10.7795C43.6613 11.6437 42.7527 12.6188 41.5117 13.3279Z"
        fill="#283841"
      ></path>
    </svg>
  );
}
