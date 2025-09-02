import {BiHomeAlt, BiUser} from 'react-icons/bi';
import {FiMail} from 'react-icons/fi';
import {TfiGallery} from 'react-icons/tfi';
import {MdOutlineTimeline} from 'react-icons/md';
import {GiSkills} from 'react-icons/gi';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="fixed left-20 hidden md:block top-4 overflow-hidden z-50">
      <div className="container">
        <div
          className="bg-violet-300/50 dark:bg-orange-300/50 w-[72px] backdrop-blur-2xl rounded-md max-h-[300px] mx-auto px-5 flex flex-col justify-between items-center text-2xl text-stone-900 dark:text-white">
          <Link
            className="cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
            href="#home"
          >
            <BiHomeAlt/>
          </Link>
          <Link
            className="cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
            href="#about"
          >
            <BiUser/>
          </Link>
          <Link
            className="cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
            href="#skills"
          >
            <GiSkills/>
          </Link>
          <Link
            className="cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
            href="#projects"
          >
            <TfiGallery/>
          </Link>
          <Link
            className="cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
            href="#timeline"
          >
            <MdOutlineTimeline/>
          </Link>
          <Link
            className="cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
            href="#contact"
          >
            <FiMail/>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
