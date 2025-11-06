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
import Title from "../title/title";

const getLanguageIcon = (languageName: string) => {
  const iconMap: { [key: string]: ReactElement } = {
    "HTML/CSS/JS/TS": <SiJavascript className="text-yellow-400" />,
    Python: <SiPython className="text-blue-400" />,
    "C#": <TbBrandCSharp className="text-purple-500" />,
    Java: <FaJava className="text-red-500" />,
  };
  return iconMap[languageName] || null;
};

const getFrameworkIcon = (frameworkName: string) => {
  const iconMap: { [key: string]: ReactElement } = {
    VueJS: <SiVuedotjs className="text-green-500" />,
    ReactJS: <SiReact className="text-blue-500" />,
    "Spring Boot": <SiSpring className="text-green-600" />,
    JPA: <SiHibernate className="text-orange-500" />,
  };
  return iconMap[frameworkName] || null;
};

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen md:pt-20">
      <Title>Skills</Title>
      <div className="flex flex-col gap-8">
        {skills.languages.map((language) => (
          <div
            key={language.name}
            className="w-full p-6 rounded-lg bg-stone-900 dark:bg-white"
          >
            <div className="mb-2 flex items-center gap-3">
              <div className="text-3xl">{getLanguageIcon(language.name)}</div>
              <h3 className="text-2xl font-semibold dark:text-stone-900 text-stone-100">
                {language.name}
              </h3>
            </div>
            <div className="w-full dark:bg-stone-200 bg-stone-700 rounded-full h-3 mb-4">
              <div
                className="dark:bg-stone-900 bg-stone-100 h-3 rounded-full transition-all duration-500"
                style={{ width: `${language.skill}%` }}
              />
            </div>
            {language.frameworks && language.frameworks.length > 0 && (
              <div className="mt-4 pl-4 border-l-2 dark:border-stone-300 border-stone-600">
                <h4 className="text-sm font-semibold dark:text-stone-600 text-stone-400 mb-3 uppercase tracking-wide">
                  Frameworks
                </h4>
                <div className="flex flex-col gap-4">
                  {language.frameworks.map((framework) => (
                    <div key={`${language.name}-${framework.name}`}>
                      <div className="mb-1 flex items-center gap-3">
                        <div className="text-2xl">
                          {getFrameworkIcon(framework.name)}
                        </div>
                        <span className="text-base font-medium dark:text-stone-800 text-stone-200">
                          {framework.name}
                        </span>
                      </div>
                      <div className="w-full dark:bg-stone-200 bg-stone-700 rounded-full h-2">
                        <div
                          className="dark:bg-stone-700 bg-stone-400 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${framework.skill}%` }}
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
