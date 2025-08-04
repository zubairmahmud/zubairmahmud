import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Palette, Settings2 } from 'lucide-react';

const skills = [
  { icon: <Code size={32} />, label: 'Web Development' },
  { icon: <Palette size={32} />, label: 'Design' },
  { icon: <Settings2 size={32} />, label: 'SEO & Marketing' },
  { icon: <Cpu size={32} />, label: 'Problem Solving' }
];

const Skills = () => {
  return (
    <motion.section className="py-16 px-6 md:px-20" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <div key={i} className="flex flex-col items-center space-y-2">
            <div className="text-indigo-600">{skill.icon}</div>
            <p>{skill.label}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;