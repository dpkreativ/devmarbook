import book_front from './book-front.jpg';
import book_back from './book-back.jpg';
import book_spine from './book-spine.jpg';
import author from './author.png';

// --- Images ---
export { book_front, book_back, book_spine, author };

// --- Videos ---
export function BookYouTubeTrailer() {
  return (
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/qYaZz5K_K_o?si=kdL2B9grgnlVcS-w"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}

// --- Reviews ---
export const reviews = [
  {
    fullName: 'John Doe',
    role: 'Tech bro',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus neque debitis dicta esse placeat dolores, cum ratione.',
    img: author,
  },
  {
    fullName: 'Jane Doe',
    role: 'Marketing sis',
    content:
      'Ea nemo nihil tempora dolore, illo ad sint deleniti sunt officiis quam.',
    img: author,
  },
  {
    fullName: 'Chris Doe',
    role: 'CEO, Chicken Curry Thai',
    content:
      'Voluptatibus neque debitis dicta esse placeat dolores, cum ratione.',
    img: author,
  },
];

// --- Icons ---
export function PlanetIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M5.322 5.966A9.169 9.169 0 0 1 7.2 4.386a4.482 4.482 0 0 0-.844-.157c-.572-.043-.823.093-.93.2c-.106.107-.242.357-.2.93c.015.183.047.386.097.607Zm15.404 8.245c.061.123.12.245.177.366c.476 1.02.791 2.018.859 2.914c.067.891-.106 1.82-.78 2.494c-.674.674-1.603.847-2.495.78c-.78-.06-1.637-.306-2.52-.683h-.003a13.258 13.258 0 0 1-.462-.207c-2.033-.962-4.359-2.654-6.542-4.838c-2.181-2.181-3.872-4.505-4.835-6.536c-.073-.155-.143-.31-.209-.463l.001-.002c-.379-.885-.626-1.745-.685-2.527c-.068-.892.105-1.82.78-2.495c.673-.674 1.602-.847 2.494-.78c.896.068 1.892.383 2.913.86c.124.057.248.117.373.18a8.996 8.996 0 0 1 8.572 2.362a8.996 8.996 0 0 1 2.362 8.575Zm-1.113 2.593a9.035 9.035 0 0 1-1.576 1.871c.218.05.419.082.6.095c.573.044.824-.092.93-.2c.108-.106.244-.357.2-.93a4.468 4.468 0 0 0-.154-.836Zm-13.977 1.56a8.993 8.993 0 0 1-2.417-8.341c1.082 1.98 2.705 4.1 4.68 6.075c1.977 1.977 4.098 3.6 6.08 4.683a8.993 8.993 0 0 1-8.343-2.417Z"
      />
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
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5h47.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"
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
