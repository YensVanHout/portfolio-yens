"use client";
import Image from "next/image";
import Link from "next/link";
import type { portfolioItemProps } from "../../interfaces/interfaces";

const PortfolioItem = ({ title, img, stack, links }: portfolioItemProps) => {
  return (
    <div className="border-2  rounded-md overflow-hidden border-white flex flex-col justify-between">
      <Image
        height={0}
        width={300}
        style={{ objectFit: "fill", minHeight: "180px" }}
        src={img.imgUrl}
        alt={img.alt}
        className="object-cover border-b-2 border-white"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold text-white text-center">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm">
          {stack.map((item) => {
            return (
              <span
                className="inline-block px-2 py-1 font-semibold border-2 rounded-md bg-white text-stone-900"
                key={`"stack-"${item}`}
              >
                {item}
              </span>
            );
          })}{" "}
        </p>
      </div>
      <div className="w-full p-4 border-t-2 border-white flex justify-around font-semibold bg-white relative bottom-0">
        {links.github ? (
          <Link
            className="hover:underline text-stone-900"
            target="_blank"
            href={links.github}
          >
            GitHub
          </Link>
        ) : null}
        {links.website ? (
          <a
            className="hover:underline text-stone-900"
            target="_blank"
            href={links.website}
          >
            Website
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default PortfolioItem;
