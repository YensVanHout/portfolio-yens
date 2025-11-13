"use client";
import { BiHomeAlt, BiUser, BiCodeAlt } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { TfiGallery } from "react-icons/tfi";
import { MdOutlineTimeline } from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // This code runs only on the client side
    setWindowWidth(window.innerWidth);

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`navigation fixed inset-x-0 mx-auto z-50 ${windowWidth < 768 ? "bottom-0" : "top-4"}`}
    >
      <div className="bg-violet-400/60  h-[80px] backdrop-blur-xl md:rounded-md max-w-full md:max-w-[550px] mx-auto px-10 flex justify-between items-center text-3xl text-stone-900/80 dark:text-stone-200/80">
        <Link
          aria-label="Scroll back to the top of the page"
          className="cursor-pointer w-[72px] h-[72px] flex items-center justify-center z-50"
          href="#home"
        >
          <BiHomeAlt />
        </Link>
        <Link
          aria-label="Scroll to the projects section"
          className="cursor-pointer w-[72px] h-[72px] flex items-center justify-center z-50"
          href="#projects"
        >
          <TfiGallery />
        </Link>
        <Link
          aria-label="Scroll to the about section"
          className="cursor-pointer w-[72px] h-[72px] flex items-center justify-center z-50"
          href="#about"
        >
          <BiUser />
        </Link>
        <Link
          aria-label="Scroll to the skills section"
          className="cursor-pointer w-[72px] h-[72px] flex items-center justify-center z-50"
          href="#skills"
        >
          <BiCodeAlt />
        </Link>
        <Link
          aria-label="Scroll to the timeline section"
          className="cursor-pointer w-[72px] h-[72px] flex items-center justify-center z-50"
          href="#timeline"
        >
          <MdOutlineTimeline />
        </Link>
        <Link
          aria-label="Scroll to the contact section"
          className="cursor-pointer w-[72px] h-[72px] flex items-center justify-center z-50"
          href="#contact"
        >
          <FiMail />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
