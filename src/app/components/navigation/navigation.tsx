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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Find the title element within the section (h1 with Title styling)
      const titleElement = targetElement.querySelector("h1");
      const scrollTarget = titleElement || targetElement;

      // Calculate offset based on navigation position
      // Desktop: top-4 (16px) + h-[80px] (80px) = 96px
      // Add extra spacing (24px) to ensure consistent distance from navigation to title
      // Mobile: bottom-0, so we use a smaller offset
      // Use window.innerWidth as fallback if windowWidth state hasn't initialized
      const currentWidth = windowWidth || window.innerWidth;
      const isMobile = currentWidth < 768;
      const offset = isMobile ? 20 : 120; // 120px for desktop (96px nav + 24px spacing), 20px for mobile

      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: Math.max(0, offsetPosition), // Ensure we don't scroll to negative position
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`navigation fixed inset-x-0 mx-auto z-50 ${windowWidth < 768 ? "bottom-0" : "top-4"}`}
    >
      <div className="bg-violet-400/60  h-[80px] backdrop-blur-xl md:rounded-md max-w-full md:max-w-[550px] mx-auto px-10 flex justify-between items-center text-3xl text-stone-900/80 dark:text-stone-200/80">
        <Link
          aria-label="Scroll back to the top of the page"
          className="cursor-pointer w-[72px] h-[72px] flex items-center justify-center z-50"
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
        >
          <BiHomeAlt />
        </Link>
        <Link
          aria-label="Scroll to the projects section"
          className="cursor-pointer w-[72px] h-[72px] flex items-center justify-center z-50"
          href="#projects"
          onClick={(e) => handleLinkClick(e, "#projects")}
        >
          <TfiGallery />
        </Link>
        <Link
          aria-label="Scroll to the about section"
          className="cursor-pointer w-[72px] h-[72px] flex items-center justify-center z-50"
          href="#about"
          onClick={(e) => handleLinkClick(e, "#about")}
        >
          <BiUser />
        </Link>
        <Link
          aria-label="Scroll to the skills section"
          className="cursor-pointer w-[72px] h-[72px] flex items-center justify-center z-50"
          href="#skills"
          onClick={(e) => handleLinkClick(e, "#skills")}
        >
          <BiCodeAlt />
        </Link>
        <Link
          aria-label="Scroll to the timeline section"
          className="cursor-pointer w-[72px] h-[72px] flex items-center justify-center z-50"
          href="#timeline"
          onClick={(e) => handleLinkClick(e, "#timeline")}
        >
          <MdOutlineTimeline />
        </Link>
        <Link
          aria-label="Scroll to the contact section"
          className="cursor-pointer w-[72px] h-[72px] flex items-center justify-center z-50"
          href="#contact"
          onClick={(e) => handleLinkClick(e, "#contact")}
        >
          <FiMail />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
