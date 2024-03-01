import Image from "next/image";

import Accordion from "./Accordion";

export default function Discover() {
  return (
    <>
      <div className="flex h-20 items-center justify-center bg-gradient-to-t from-[#4565ba] to-[#3a3192] md:h-40">
        <h1 className="text-4xl font-semibold text-white md:text-[60px]">
          Discover the world
        </h1>
      </div>
      <Image
        src="/assets/images/parallax/bushes-1.png"
        width={1000}
        height={500}
        className="h-20 w-full rotate-180 bg-[#3a3192] sm:h-[250px]"
        alt="Blue bushes decoration"
      />
      <section className="bg-[#3a3192] p-4 text-white sm:pb-10 md:px-20">
        <h1 className="mb-4 text-2xl font-semibold md:text-3xl">
          Discover the world
        </h1>
        <p className="text-justify">
          Embark on an unforgettable journey as you discover the world in all
          its splendor. From the azure depths of the ocean to the towering peaks
          of mountains, from the lush greenery of forests to the vast expanse of
          snowy fields, and from the arid beauty of deserts to the vibrant life
          of jungles - every landscape tells a story. Experience the thrill of
          adventure as you traverse through diverse terrains, each offering
          unique challenges and rewards. Feel the warmth of the sun on a sandy
          beach, the chill of the wind on a snowy peak, the freshness of the
          rain in a dense forest, and the tranquility of a starlit night in a
          desert. As you journey through these stunning landscapes, you&apos;ll
          gain a deeper appreciation for the beauty and diversity of our planet.
          So, pack your bags, lace up your boots, and get ready to discover the
          world like never before! Remember, every journey begins with a single
          step. So, take that step today and open your eyes to the wonders of
          the world. The world is waiting for you. Discover it!
        </p>
      </section>
      <Accordion />
      <Image
        src="/assets/images/parallax/bushes-1.png"
        width={1000}
        height={500}
        className="h-20 w-full bg-[#3a3192] sm:h-[350px]"
        alt="Blue bushes decoration"
      />
    </>
  );
}
