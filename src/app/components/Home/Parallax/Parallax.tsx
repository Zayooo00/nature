"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Parallax() {
  const [scrollY, setScrollY] = useState(0);
  const titleScrollStyle = { marginTop: scrollY * 1.1 + "px" };
  const leftLeafScrollStyle = { marginLeft: -scrollY + "px" };
  const rightLeafScrollStyle = { marginLeft: scrollY + "px" };
  const bushScrollStyle = { marginBottom: -scrollY + "px" };
  const frontMountainScrollStyle = { marginBottom: -scrollY * 1.1 + "px" };
  const backMountainScrollStyle = { marginBottom: -scrollY * 1.2 + "px" };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative flex h-[100dvh] overflow-hidden bg-gradient-to-t from-[#D2E2FB] to-[#86A8DB]">
      <Image
        style={backMountainScrollStyle}
        width={2000}
        height={1000}
        priority={true}
        src="/assets/images/parallax/mountains-2.png"
        className="pointer-events-none absolute bottom-0 w-full"
        alt={"Parallax mountains background number 1"}
      />
      <Image
        style={frontMountainScrollStyle}
        width={2000}
        height={1000}
        priority={true}
        src="/assets/images/parallax/mountains-1.png"
        className="pointer-events-none absolute bottom-0 w-full"
        alt={"Parallax mountains background number 2"}
      />
      <Image
        style={bushScrollStyle}
        width={2000}
        height={1000}
        src="/assets/images/parallax/bushes-1.png"
        className="pointer-events-none absolute bottom-0 w-full"
        alt={"Parallax bushes background number 1"}
      />
      <h1
        style={titleScrollStyle}
        className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 transform text-4xl font-bold text-white drop-shadow-xl sm:text-[60px]"
      >
        <TypeAnimation
          sequence={[
            "Nature",
            2000,
            "Landscapes",
            2000,
            "Mountains",
            2000,
            "Oceans",
            2000,
            "Animals",
            2000,
            "Life",
            2000,
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
        />
      </h1>
      <Image
        width={2000}
        height={1000}
        src="/assets/images/parallax/bushes-2.png"
        className="pointer-events-none absolute bottom-0 w-full"
        alt={"Parallax bushes background number 2"}
      />
      <Image
        style={leftLeafScrollStyle}
        width={2000}
        height={1000}
        src="/assets/images/parallax/leafs-1.png"
        className="pointer-events-none absolute bottom-0 w-full"
        alt={"Parallax leafs object number 1"}
      />
      <Image
        style={rightLeafScrollStyle}
        width={2000}
        height={1000}
        src="/assets/images/parallax/leafs-2.png"
        className="pointer-events-none absolute bottom-0 w-full"
        alt={"Parallax leafs object number 2"}
      />
    </section>
  );
}
