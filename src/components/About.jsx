import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.92,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: [0.19, 1, 0.22, 1],
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const photoVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.9, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: [0.19, 1, 0.22, 1], delay: 0.05 },
  },
};

export default function About() {
  return (
    <section
      className="relative px-5 sm:px-8 md:px-12 lg:px-28 py-10 sm:py-14 lg:py-24 flex justify-between items-center gap-8 sm:gap-10 lg:gap-14 flex-col lg:flex-row overflow-hidden"
      id="about"
      aria-label="About me"
    >
      {/* 3D Animated Constellation / Neural Network Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden flex items-center justify-center opacity-85">
        <img
          src="/assets/about-network-bg.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover select-none"
        />
        {/* Soft edge gradients so background naturally blends into adjacent sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20 pointer-events-none" />
      </div>

      {/* Simple Circular Profile Picture (Real HD Photo with Glass Frame) */}
      <motion.div
        className="lg:w-5/12 w-full flex justify-center items-center"
        variants={photoVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-2 sm:p-2.5 bg-white/30 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.9)] border border-white/60 ring-1 ring-black/[0.04] flex items-center justify-center group"
          style={{
            backdropFilter: "blur(24px) saturate(150%)",
            WebkitBackdropFilter: "blur(24px) saturate(150%)",
          }}
        >
          <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner">
            <img
              src="/assets/nithyashree.jpg"
              alt="Nithyashree G V"
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              loading="eager"
              decoding="async"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Translucent Glassmorphic About Box with Fluid Entrance Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="lg:w-7/12 w-full relative z-10 p-5 sm:p-7 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white/30 sm:bg-white/35 backdrop-blur-2xl border border-white/60 shadow-[0_12px_40px_0_rgba(31,38,135,0.07),inset_0_1px_2px_0_rgba(255,255,255,0.9)] ring-1 ring-black/[0.04] transition-all duration-500 hover:shadow-[0_18px_50px_0_rgba(31,38,135,0.1),inset_0_1px_2px_0_rgba(255,255,255,1)]"
        style={{
          backdropFilter: "blur(28px) saturate(160%)",
          WebkitBackdropFilter: "blur(28px) saturate(160%)",
        }}
      >
        {/* Specular light highlight along the top glass bevel */}
        <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none rounded-t-3xl" />

        <motion.div variants={childVariants} className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-black/80 animate-pulse" />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-zinc-900 tracking-tight">
            About <span className="font-semibold text-black">Me</span>
          </h2>
        </motion.div>

        <motion.p
          variants={childVariants}
          className="text-zinc-900 text-sm/6 sm:text-base mt-4 sm:mt-5 font-normal leading-relaxed"
        >
          I am a Pre-final-year B.Tech student in Artificial Intelligence and Data Science at M. Kumarasamy College of Engineering, Karur (2024–2028, 8.0 CGPA), aspiring to build a career in data analytics and applied AI/ML. Skilled in using Python, SQL, Pandas, and Power BI to explore data, identify patterns, and communicate insights through interactive visualizations.
        </motion.p>

        <motion.p
          variants={childVariants}
          className="text-zinc-900 text-sm/6 sm:text-base mt-3 sm:mt-3.5 font-normal leading-relaxed"
        >
          I build full-stack data-driven applications with Flask and relational databases (MySQL, SQLite), and have explored predictive analytics through impactful prototypes such as the AI Ambulance Assistance System, Glacier Disaster Early Warning, and Food Delivery Performance Analysis.
        </motion.p>

        <motion.p
          variants={childVariants}
          className="text-zinc-900 text-sm/6 sm:text-base mt-3 sm:mt-3.5 font-normal leading-relaxed"
        >
          My key achievements include being First Runner-Up at the ELECTRON X 26 IEEE Hackathon, 2nd Prize at the CRYOSAT’26 Project Presentation (Nandha College of Technology), 3rd Prize at GenCraft’25, and serving as an Internshala Student Partner (ISP 2026).
        </motion.p>

        <motion.p
          variants={childVariants}
          className="text-zinc-900 text-sm/6 sm:text-base mt-3 sm:mt-3.5 font-normal leading-relaxed"
        >
          Beyond data and development, I am passionate about photography, chess, and poster designing — creative pursuits that enhance my visual thinking, strategic planning, and design aesthetics.
        </motion.p>
      </motion.div>
    </section>
  );
}
