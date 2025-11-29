import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  const allSkills = [
    ...Skill_data,
    ...Frontend_skill,
    ...Backend_skill,
    ...Full_stack,
    ...Other_skill,
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mt-10 w-full max-w-7xl px-4">
        {allSkills.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={(image as any).Image || image}
            width={(image as any).width || 80}
            height={(image as any).height || 80}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
