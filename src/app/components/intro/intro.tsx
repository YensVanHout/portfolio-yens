"use client";

import { useEffect, useState } from "react";
import Title from "../title/title";
import Me from "@/assets/me.webp";
import Image from "next/image";
import { lastUpdated } from "../../data/data";

const getAge = () => {
  var today = new Date();
  var birthDate = new Date("09/09/1999");
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const Intro = () => {
  const [lastCommitDate, setLastCommitDate] = useState<string | null>(null);

  useEffect(() => {
    const owner = "YensVanHout";
    const repo = "portfolio-yens";
    const url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data) && data.length > 0) {
          const lastCommit = data[0];
          const commitDate = new Date(lastCommit.commit.author.date);
          const formattedDate = commitDate.toLocaleDateString("nl-BE", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          });
          setLastCommitDate(formattedDate);
        }
      })
      .catch((error) => {
        console.error("Error fetching date:", error);
        // Fallback to the static date from data.ts
        const date = new Date(lastUpdated);
        setLastCommitDate(
          date.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        );
      });
  }, []);

  return (
    <div id="home">
      <div className="flex flex-col md:flex-row items-center justify-center text-center min-h-screen">
        <div id="heroText" className="text-center">
          <Title styling={""}>
            Yens <br /> Van Hout
          </Title>
          <p className="text-base md:text-4xl mb-3 font-medium uppercase">
            Software & Web Developer
          </p>

          {lastCommitDate && (
            <p className="text-xs text-stone-600 dark:text-stone-400 mb-3">
              Last updated: {lastCommitDate}
            </p>
          )}
          <p className="text-xs md:text-sm max-w-xl my-12 font-bold whitespace-pre-wrap">
            {`I'm Yens, a developer from Antwerp, Belgium.\nI'm ${getAge()} years old and ready to dive into my first professional role.\nLet's build something great together.`}
          </p>
          <p>Scroll to find out more about me.</p>
        </div>
        <div id="heroImage" className="w-1/2 sm:hidden md:block">
          <Image
            src={Me}
            alt="portrait of me"
            placeholder="blur"
            style={{ objectFit: "fill" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
