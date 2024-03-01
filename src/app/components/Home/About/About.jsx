import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex h-40 items-center justify-center bg-[#3a3192]">
        <h1 className="text-4xl font-semibold text-white md:text-[60px]">
          What&apos;s the point?
        </h1>
      </div>
      <Image
        src="/assets/images/parallax/bushes-2.png"
        width={1000}
        height={500}
        className="h-20 w-full rotate-180 bg-[#4565ba] sm:h-[250px]"
        alt="Purple bushes decoration"
      />
      <section className="bg-[#4565ba] p-4 text-white sm:pt-10 md:px-20">
        <h1 className="mb-4 text-2xl font-semibold md:text-3xl">
          What&apos;s the point?
        </h1>
        <p className="text-justify">
          In the grand scheme of life, you may sometimes find yourself asking,
          “What&apos;s the point?” The point is to experience. To learn. To
          grow. To overcome challenges and celebrate victories, no matter how
          small they may seem. The point is to make connections, to touch lives,
          to leave a positive impact that echoes through time. The point is to
          discover the world, not just geographically, but also intellectually,
          emotionally, and spiritually. Its about understanding different
          cultures, perspectives, and ways of life. It&apos;s about gaining
          knowledge, not just from books, but also from people, from nature,
          from experiences. The point is to live a life filled with purpose,
          passion, and joy. To chase your dreams, no matter how big or small
          they may be. To find happiness in the simplest of things. To love and
          be loved. So, what&apos;s the point? The point is whatever you make it
          to be. The point is your journey, your story. And every day is a new
          page waiting to be written. So pick up the pen, and make your point.
        </p>
      </section>
      <Image
        src="/assets/images/parallax/bushes-2.png"
        width={1000}
        height={500}
        className="h-20 w-full bg-[#4565ba] sm:h-[250px]"
        alt="Purple bushes decoration"
      />
    </>
  );
}
