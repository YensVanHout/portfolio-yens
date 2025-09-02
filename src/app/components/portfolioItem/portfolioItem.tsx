"use client"
import React from 'react';
import {portfolioItemProps} from '../../interfaces/interfaces';
import Link from "next/link";

const PortfolioItem = ({title, img, stack, links}: portfolioItemProps) => {
  return (
    <div className="border-2 border-stone-900 rounded-md overflow-hidden dark:border-white">
      <img
        src={img.imgUrl}
        alt={img.alt}
        className="w-full h-36 md:h-48 object-cover border-b-2 border-stone-900 dark:border-white"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white text-center">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm">
          {stack.map((item) => {
            return (
              <span
                className="inline-block px-2 py-1 font-semibold border-2 rounded-md dark:bg-white bg-stone-900 text-white dark:text-stone-900"
                key={"stack-" + item}>
                {item}
              </span>
            );
          })}{' '}
        </p>
      </div>
      <div
        className="w-full p-4 border-t-2 border-stone-900 bg-stone-900 dark:border-white flex justify-around font-semibold dark:bg-white">
        <Link
          className="hover:underline text-white dark:text-stone-900"
          target="_blank"
          href={links.github}
        >
          GitHub
        </Link>
        {links.website ? (
          <a
            className="hover:underline dark:text-stone-900 text-white"
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
