import { useEffect, useState } from "react";
import SkillList from "../data/skills";
import { motion } from "framer-motion";

const Skills = () => {
  const [skillSets, setSkillSets] = useState([]);

  useEffect(() => {
    setSkillSets(SkillList);
  }, []);

  return (
    <section
      id="skills"
      className="w-full mt-6 px-6 flex flex-col items-center justify-start gap-4"
    >
      <h1 className="text-3xl font-bold text-center mb-6">Skills</h1>

      {/* For Smaller Screens */}

      <div className="lg:hidden">
        {skillSets && (
          <ul className="flex justify-evenly items-center gap-2 flex-wrap">
            {skillSets.map((skill, i) => (
              <motion.li
                key={skill.id}
                className="p-2 rounded-full shadow-xl bg-base-100 w-[20%] text-center text-xs"
                initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                {skill.title}
              </motion.li>
            ))}
          </ul>
        )}
      </div>

      {/* For Bigger Screens */}
      <div className="hidden w-100 lg:flex items-center justify-evenly flex-wrap gap-3">
        {SkillList.map((skill, i) => (
          <motion.div
            key={skill.id}
            className="card card-side bg-base-100 shadow-xl w-[25%] rounded-full px-2 border border-1 border-slate-700 flex items-center justify-center"
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <figure className="w-20 h-20 rounded-full">
              <img
                src={skill.image}
                alt={skill.title}
                className="object-contain"
              />
            </figure>
            <div className="card-body flex items-center justify-center">
              <h2 className="card-title">{skill.title}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
