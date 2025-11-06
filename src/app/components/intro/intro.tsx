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

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

const Intro = () => {
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

          <p className="text-xs text-stone-600 dark:text-stone-400 mb-3">
            Last updated: {formatDate(lastUpdated)}
          </p>
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
