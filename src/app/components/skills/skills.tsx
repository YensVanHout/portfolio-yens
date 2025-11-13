import type { ReactElement } from "react";
import { FaJava } from "react-icons/fa";
import {
  SiVuedotjs,
  SiReact,
  SiSpring,
  SiHibernate,
  SiJavascript,
  SiPython,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { skills } from "../../data/data";
import Title from "../ui/title";

const getLanguageIcon = (languageName: string) => {
  const iconMap: { [key: string]: ReactElement } = {
    "HTML/CSS/JS/TS": <SiJavascript className="text-yellow-400" />,
    Python: <SiPython className="text-blue-400" />,
    "C#": <TbBrandCSharp className="text-purple-500" />,
    Java: <FaJava className="text-red-500" />,
  };
  return iconMap[languageName] || null;
};

const getEcosystemIcon = (ecosystemName: string) => {
  const iconMap: { [key: string]: ReactElement } = {
    VueJS: <SiVuedotjs className="text-green-500" />,
    ReactJS: <SiReact className="text-blue-500" />,
    "Spring Boot": <SiSpring className="text-green-600" />,
    JPA: <SiHibernate className="text-orange-500" />,
  };
  return iconMap[ecosystemName] || null;
};

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen md:pt-20 pb-20">
      <Title>Skills</Title>
      <div className="flex flex-col gap-8">
        {skills.languages.map((language) => (
          <div
            key={language.name}
            className="w-full p-6 rounded-lg bg-custom-dark dark:bg-stone-100"
          >
            <div className="mb-2 flex items-center gap-3">
              <div className="text-3xl">{getLanguageIcon(language.name)}</div>
              <h3 className="text-2xl font-semibold dark:text-stone-700 text-stone-100">
                {language.name}
              </h3>
            </div>
            <div className="w-full bg-white dark:bg-custom-main rounded-full h-3 mb-4">
              <div
                className="bg-violet-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${language.skill}%` }}
              />
            </div>
            {language.ecosystems && language.ecosystems.length > 0 && (
              <div className="mt-4 pl-4 border-l-2 dark:border-custom-main border-custom-main">
                <h4 className="text-sm font-semibold dark:text-stone-700 text-custom-main mb-3 uppercase tracking-wide">
                  Ecosystems
                </h4>
                <div className="flex flex-col gap-4">
                  {language.ecosystems.map((ecosystem) => (
                    <div key={`${language.name}-${ecosystem.name}`}>
                      <div className="mb-1 flex items-center gap-3">
                        <div className="text-2xl">
                          {getEcosystemIcon(ecosystem.name)}
                        </div>
                        <span className="text-base font-medium dark:text-stone-800 text-stone-200">
                          {ecosystem.name}
                        </span>
                      </div>
                      <div className="w-full bg-white dark:bg-custom-main rounded-full h-2">
                        <div
                          className="bg-violet-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${ecosystem.skill}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
