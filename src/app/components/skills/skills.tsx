"use client";
import { useState } from "react";
import type { ReactElement } from "react";
import { FaJava } from "react-icons/fa";
import { SiTypescript, SiPython } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { BiChevronDown } from "react-icons/bi";
import { skills, currentlyLearning } from "../../data/data";
import Title from "../ui/title";

const getLanguageIcon = (languageName: string) => {
  const iconMap: { [key: string]: ReactElement } = {
    "HTML/CSS/JS/TS": <SiTypescript className="text-sky-600" />,
    Python: <SiPython className="text-blue-400" />,
    Go: <FaGolang className="text-cyan-700 scale-125" />,
    Java: <FaJava className="text-red-500" />,
  };
  return iconMap[languageName] || null;
};

const Skills = () => {
  const [expandedSkills, setExpandedSkills] = useState<Set<number>>(new Set());

  const toggleSkill = (index: number) => {
    const newExpanded = new Set(expandedSkills);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSkills(newExpanded);
  };

  return (
    <div id="skills" className="min-h-screen md:pt-20 pb-20">
      <Title>Skills</Title>
      <div className="flex flex-col gap-8">
        {skills.skills.map((skill, index) => {
          const isCollapsible = index === 3; // Only the 4th skill (index 3) is collapsible
          const isExpanded = expandedSkills.has(index);
          const showEcosystems = !isCollapsible || isExpanded;
          const hasEcosystems =
            (skill.ecosystems && skill.ecosystems.length > 0) ||
            (skill.categories && skill.categories.length > 0);

          return (
            <div
              key={skill.name}
              className="w-full p-6 rounded-lg bg-custom-dark dark:bg-stone-100"
            >
              {isCollapsible && hasEcosystems ? (
                <button
                  type="button"
                  onClick={() => toggleSkill(index)}
                  className="w-full mb-2 flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
                  aria-label={
                    isExpanded ? "Collapse ecosystems" : "Expand ecosystems"
                  }
                >
                  <div className="text-3xl">{getLanguageIcon(skill.name)}</div>
                  <h3 className="text-2xl font-semibold dark:text-stone-700 text-stone-100">
                    {skill.name}
                  </h3>
                  <div className="ml-auto text-custom-main dark:text-stone-700 transition-transform duration-500">
                    <BiChevronDown
                      className={`text-2xl transition-transform duration-500 ${
                        isExpanded ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </button>
              ) : (
                <div className="mb-2 flex items-center gap-3">
                  <div className="text-3xl">{getLanguageIcon(skill.name)}</div>
                  <h3 className="text-2xl font-semibold dark:text-stone-700 text-stone-100">
                    {skill.name}
                  </h3>
                </div>
              )}
              {skill.skill && (
                <div className="w-full bg-white dark:bg-custom-main rounded-full h-3 mb-4">
                  <div
                    className="bg-violet-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${skill.skill}%` }}
                  />
                </div>
              )}
              {hasEcosystems && (
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    showEcosystems
                      ? "max-h-[2000px] opacity-100 mt-4"
                      : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <div className="pl-4 border-l-2 dark:border-stone-400 border-custom-main">
                    {skill.categories ? (
                      // Render categories for "Other Skills"
                      <div className="flex flex-col gap-6">
                        {skill.categories.map((category, catIndex) => (
                          <div
                            key={`${skill.name}-${category.title}-${catIndex}`}
                          >
                            <h4 className="text-sm font-semibold dark:text-stone-700 text-custom-main mb-3 uppercase tracking-wide">
                              {category.title}
                            </h4>
                            <div className="flex flex-col gap-4">
                              {category.ecosystems.map((ecosystem) => (
                                <div
                                  key={`${skill.name}-${category.title}-${ecosystem.name}`}
                                >
                                  <div className="mb-1">
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
                        ))}
                      </div>
                    ) : (
                      // Render regular ecosystems for other skills
                      <>
                        {skill.subtitle && (
                          <h4 className="text-sm font-semibold dark:text-stone-700 text-custom-main mb-3 uppercase tracking-wide">
                            {skill.subtitle}
                          </h4>
                        )}
                        <div className="flex flex-col gap-4">
                          {skill.ecosystems.map((ecosystem) => (
                            <div key={`${skill.name}-${ecosystem.name}`}>
                              <div className="mb-1">
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
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {currentlyLearning && (
        <div className="flex justify-center mt-8">
          <div className="inline-block px-6 py-3 rounded-full bg-custom-dark dark:bg-stone-100">
            <p className="text-base font-medium text-stone-200 dark:text-stone-800 text-center">
              Currently learning:{" "}
              <span className="font-semibold text-stone-100 dark:text-stone-700">
                {currentlyLearning}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
