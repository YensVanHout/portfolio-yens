import { BiMouse } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import Title from "../title/title";

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
  return (
    <div
      className="flex items-center justify-center flex-col text-center pt-20 pb-6 min-h-screen"
      id="home"
    >
      <Title>Yens Van Hout</Title>
      <p className="text-base md:text-4xl mb-3 font-medium uppercase">
        Software & Web Developer
      </p>
      <p className="text-xs md:text-sm max-w-xl mb-6 font-bold whitespace-pre-wrap">
        {`I'm Yens, a developer from Antwerp, Belgium.\nI'm ${getAge()} years old and ready to dive into my first professional role.\nLet's build something great together.`}
      </p>
      <div className="mt-28 animate-bounce">
        <BiMouse className="w-[42px] h-[42px]" />
        <IoIosArrowDown className="w-[42px] h-[42px]" />
      </div>
    </div>
  );
};

export default Intro;
