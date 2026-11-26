import { motion } from "framer-motion"
import { FaJs, FaPython, FaDatabase, FaJava, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaChartPie } from "react-icons/fa"
import { SiC, SiFlask, SiMysql, SiSqlite, SiPandas, SiNumpy, SiPytorch, SiScikitlearn } from "react-icons/si"
import { TbBrandVscode } from "react-icons/tb"

const skills = [
  { name: "Python", icon: <FaPython size={40} /> },
  { name: "PyTorch", icon: <SiPytorch size={40} /> },
  { name: "Scikit-Learn", icon: <SiScikitlearn size={40} /> },
  { name: "Pandas", icon: <SiPandas size={40} /> },
  { name: "NumPy", icon: <SiNumpy size={40} /> },
  { name: "Power BI", icon: <FaChartPie size={40} /> },
  { name: "SQL", icon: <FaDatabase size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} /> },
  { name: "SQLite", icon: <SiSqlite size={40} /> },
  { name: "Flask", icon: <SiFlask size={40} /> },
  { name: "C", icon: <SiC size={40} /> },
  { name: "Java", icon: <FaJava size={40} /> },
  { name: "JavaScript", icon: <FaJs size={40} /> },
  { name: "HTML5", icon: <FaHtml5 size={40} /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "GitHub", icon: <FaGithub size={40} /> },
  { name: "VS Code", icon: <TbBrandVscode size={40} /> },
]

const proficiencies = [
  { name: "Machine Learning (PyTorch, Scikit-Learn)", pct: 90 },
  { name: "Power BI & Data Visualization", pct: 90 },
  { name: "Python, C & Java", pct: 85 },
  { name: "Web Development (HTML/CSS, Flask, JS)", pct: 80 },
  { name: "MySQL & Relational Databases", pct: 75 },
]

export default function Skills() {
  return (
    <section className="pt-12 sm:pt-16 lg:pt-24 pb-10 lg:pb-16 px-5 sm:px-8 md:px-12 lg:px-16 mx-auto max-w-[1400px]" id="skills" aria-label="Technical skills">
      <motion.h2
        className="text-2xl sm:text-3xl text-center font-light"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        My <span className="font-medium">Skills</span>
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-6 mt-7 sm:mt-10 lg:mt-16 justify-center place-items-center">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="border border-black rounded-xl p-3 sm:p-4 w-full max-w-[135px] sm:max-w-[145px] lg:max-w-[155px] aspect-square flex flex-col items-center justify-center gap-2 sm:gap-3 cursor-pointer transition-all duration-400 hover:bg-black hover:text-white hover:shadow-lg hover:-translate-y-1"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.03 }}
            viewport={{ once: true, margin: "-30px" }}
          >
            <div className="text-3xl sm:text-4xl flex items-center justify-center">
              {skill.icon}
            </div>
            <p className="text-center text-xs sm:text-sm font-normal leading-tight">{skill.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Proficiency Strengths */}
      <div className="mt-12 sm:mt-16 max-w-3xl mx-auto space-y-4 px-1 sm:px-0">
        <h3 className="text-base sm:text-lg font-medium text-center text-black/80 mb-5 sm:mb-6">Core Competencies &amp; Proficiency</h3>
        {proficiencies.map((p, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex justify-between text-xs sm:text-sm font-medium">
              <span>{p.name}</span>
              <span className="text-black/60">{p.pct}%</span>
            </div>
            <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-black rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${p.pct}%` }}
                transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
