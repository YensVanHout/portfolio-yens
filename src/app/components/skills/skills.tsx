import { skills } from "../../data/data";
import Title from "../title/title";

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen md:pt-20">
      <Title>Skills</Title>
      <div className="flex flex-col gap-8">
        {skills.languages.map((language) => (
          <div
            key={language.name}
            className="w-full p-6 rounded-lg bg-white dark:bg-stone-800 shadow-md"
          >
            <div className="mb-2">
              <h3 className="text-2xl font-semibold text-stone-900 dark:text-stone-100">
                {language.name}
              </h3>
            </div>
            <div className="w-full bg-stone-200 dark:bg-stone-700 rounded-full h-3 mb-4">
              <div
                className="bg-stone-900 dark:bg-stone-100 h-3 rounded-full transition-all duration-500"
                style={{ width: `${language.skill}%` }}
              />
            </div>
            {language.frameworks && language.frameworks.length > 0 && (
              <div className="mt-4 pl-4 border-l-2 border-stone-300 dark:border-stone-600">
                <h4 className="text-sm font-semibold text-stone-600 dark:text-stone-400 mb-3 uppercase tracking-wide">
                  Frameworks
                </h4>
                <div className="flex flex-col gap-4">
                  {language.frameworks.map((framework) => (
                    <div key={`${language.name}-${framework.name}`}>
                      <div className="mb-1">
                        <span className="text-base font-medium text-stone-800 dark:text-stone-200">
                          {framework.name}
                        </span>
                      </div>
                      <div className="w-full bg-stone-200 dark:bg-stone-700 rounded-full h-2">
                        <div
                          className="bg-stone-700 dark:bg-stone-400 h-2 rounded-full transition-all duration-500"
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
