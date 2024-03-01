import Image from "next/image";

export default function Accordion() {
  const images = [
    {
      src: "ocean.jpg",
      title: "Oceanic Majesty",
      description:
        "A breathtaking view of a rugged coastline, where the azure waters of the ocean crash against rocky cliffs under a golden sky.",
    },
    {
      src: "valley.jpg",
      title: "Valley of Greens",
      description:
        "A lush green valley nestled amidst towering mountains, with clouds casting dynamic shadows on the landscape below.",
    },
    {
      src: "snow.jpg",
      title: "The Snowy Peaks",
      description:
        "Majestic snow-capped mountains stand tall, as a winding river flows through the valley, illuminating the scene with its silvery gleam.",
    },
    {
      src: "winter.jpg",
      title: "Winter's Touch",
      description:
        "The first touch of winter graces a forest, with snow beginning to cover the rocky terrain and pine trees standing tall against a mountain backdrop.",
    },
    {
      src: "horizon.jpg",
      title: "Golden Horizon",
      description:
        "The sun sets behind jagged mountain peaks, casting an ethereal glow that illuminates the misty valleys below.",
    },
  ];

  return (
    <section className="flex h-[80dvh] w-full gap-4 bg-[#3a3192] p-4 text-white sm:pb-20 md:px-20">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative w-1/5 cursor-pointer overflow-hidden rounded-xl transition-all duration-700 ease-in-out hover:w-4/5"
        >
          <Image
            src={`/assets/images/accordion/${image.src}`}
            width={1024}
            height={1024}
            loading="lazy"
            alt={image.description}
            className="h-full w-full object-cover transition duration-1000 ease-in-out hover:scale-125"
          />
          <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black to-transparent p-4 opacity-0 transition-opacity duration-500 hover:opacity-100 sm:p-6">
            <div>
              <h2 className="text-lg font-bold text-white md:text-2xl lg:text-3xl">
                {image.title}
              </h2>
              <p className="md:text-md text-sm text-white">
                {image.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
