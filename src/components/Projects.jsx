import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TbExternalLink, TbX } from "react-icons/tb"
import { BsGithub } from "react-icons/bs"

const projects = [
  { 
    id: 1, 
    title: "AI Ambulance Assistance System", 
    category: "Healthcare & AI", 
    description: "A decision-support prototype for Advanced Life Support ambulances. It brings together patient vital readings and camera analysis to identify risk indicators and generate clinical summaries for responders.", 
    features: ["Real-time Vitals Monitoring", "Camera-based Risk Analysis", "Clinical Summary Generation", "Emergency Decision Support"], 
    tech: ["Python", "Flask", "OpenCV", "SQLite", "HTML/CSS", "JavaScript"], 
    codeUrl: "https://github.com/Nithyashreegopal/AI-Ambulance-Assisstance" 
  },
  { 
    id: 2, 
    title: "PressMart E-Commerce Platform", 
    category: "Full-Stack Web App", 
    description: "An e-commerce website with a Flask API and MySQL database. The backend supports managing products, banners, promotions, and blog posts with responsive shopping and checkout flows.", 
    features: ["Product & Banner Management", "Promotions & Blog System", "Relational MySQL Backend", "Order Processing Pages"], 
    tech: ["Python", "Flask", "MySQL", "HTML5", "CSS3", "JavaScript"], 
    codeUrl: "https://github.com/Nithyashreegopal/e-commerce" 
  },
  { 
    id: 3, 
    title: "Real-Time Bus Tracking System", 
    category: "Transit & Data Viz", 
    description: "An interactive transit dashboard for viewing bus locations, routes, and estimated arrival times. Its map and charts help users plan trips and monitor transit information.", 
    features: ["Live Bus GPS Locations", "Route Mapping (Leaflet.js)", "Interactive Charts (Chart.js)", "ETA Predictions"], 
    tech: ["HTML5", "CSS3", "JavaScript", "Leaflet.js", "Chart.js"], 
    codeUrl: "https://github.com/Nithyashreegopal/bus-tracking-system" 
  },
  { 
    id: 4, 
    title: "Glacier Disaster Early Warning Prototype", 
    category: "Predictive Analytics", 
    description: "A prototype that simulates glacier deformation and seismic readings, applies rule-based risk classification, and presents the results in a dashboard with an alert workflow.", 
    features: ["Glacier Deformation Simulation", "Seismic Data Processing", "Rule-based Risk Classification", "Alert Workflow Dashboard"], 
    tech: ["Python", "Flask", "Flask-CORS", "Pandas", "HTML/CSS", "JavaScript"], 
    codeUrl: "https://github.com/Nithyashreegopal/Glacier-alert-system" 
  },
  { 
    id: 5, 
    title: "NoteVault", 
    category: "Web Application", 
    description: "A secure Flask note-taking application for organizing personal notes and pages. It includes account access and views for sharing notes or pages securely.", 
    features: ["Personal Notes Organizer", "Account Authentication", "Secure Note Sharing", "MySQL Data Persistence"], 
    tech: ["Python", "Flask", "MySQL", "Flask-MySQLdb", "Jinja2", "HTML5"], 
    codeUrl: "https://github.com/Nithyashreegopal/NoteVault" 
  },
  { 
    id: 6, 
    title: "Food Delivery Performance Analysis", 
    category: "Data Science & ML", 
    description: "A data-analysis project exploring delivery distance, time, ratings, and order value. It uses sample data, regression, and rich visualizations to examine delivery performance.", 
    features: ["Exploratory Data Analysis (EDA)", "Regression Modeling", "Statistical Visualizations", "Performance Insights"], 
    tech: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"], 
    codeUrl: "https://github.com/Nithyashreegopal/FOOD-DELIVERY-PERFORMANCE-ANALYSIS" 
  }
]

const Card = ({ project, onSelect }) => (
  <motion.div
    className="flex-shrink-0 w-[84vw] max-w-[320px] sm:w-[340px] lg:w-[380px] cursor-pointer group"
    onClick={() => onSelect(project)}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className="h-full rounded-2xl border border-black/10 p-5 sm:p-6 relative transition-all duration-400 hover:shadow-xl hover:border-black/15 bg-white/70 backdrop-blur-sm">
      <div className="absolute -right-2 top-1/2 -translate-y-1/2 text-[90px] sm:text-[100px] font-light text-black/[0.03] select-none pointer-events-none">{String(project.id).padStart(2, "0")}</div>
      <div className="relative">
        <div className="flex justify-between items-center"><span className="text-[10px] font-normal tracking-widest uppercase text-black/40">{project.category}</span><span className="text-xs font-mono text-black/20">{String(project.id).padStart(2, "0")}</span></div>
        <h3 className="text-lg sm:text-xl font-medium mt-3 leading-snug">{project.title}</h3>
        <p className="text-black/50 text-sm mt-3 line-clamp-3 font-light leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">{project.tech.map(t => <span key={t} className="px-2.5 py-1 text-[11px] font-light bg-black/[0.04] rounded-md text-black/60">{t}</span>)}</div>
        <div className="mt-6 pt-4 border-t border-black/5 flex justify-between items-center">
          <span className="text-black/40 group-hover:text-black text-sm font-light transition-colors duration-300">View Details →</span>
          <div className="flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="p-2 rounded-full bg-black text-white transition-transform duration-200 hover:scale-110" aria-label={`Live demo of ${project.title}`}><TbExternalLink size={14} /></a>}
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="p-2 rounded-full border border-black/20 hover:bg-black hover:text-white hover:border-black transition-all duration-300" aria-label={`Source code of ${project.title}`}><BsGithub size={14} /></a>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)

const Modal = ({ project, onClose }) => project && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/30 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.92, opacity: 0, y: 24 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.92, opacity: 0, y: 24 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-lg max-h-[88vh] overflow-y-auto glassmorphism rounded-2xl shadow-2xl p-5 sm:p-6 lg:p-7 relative border border-white/60"
      onClick={e => e.stopPropagation()}
    >
      <motion.button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-black/5 hover:bg-black hover:text-white transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Close modal"
      >
        <TbX size={16} />
      </motion.button>
      <span className="text-[10px] font-normal tracking-widest uppercase text-black/40">{project.category}</span>
      <h2 className="text-xl sm:text-2xl font-medium mt-2 mb-3 pr-8 leading-snug">{project.title}</h2>
      <p className="text-black/60 text-sm sm:text-base mb-6 font-light leading-relaxed">{project.description}</p>
      <h4 className="text-[10px] font-normal tracking-widest uppercase text-black/40 mb-3">Features</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
        {project.features.map((f, i) => (
          <motion.div
            key={f}
            className="flex items-center gap-2 p-2.5 rounded-lg bg-black/[0.03]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
          >
            <div className="w-1 h-1 rounded-full bg-black/30 flex-shrink-0" />
            <span className="text-xs text-black/70 font-light">{f}</span>
          </motion.div>
        ))}
      </div>
      <h4 className="text-[10px] font-normal tracking-widest uppercase text-black/40 mb-3">Stack</h4>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">{project.tech.map(t => <span key={t} className="px-3 py-1.5 text-xs bg-black/90 text-white rounded-md font-light shadow-sm">{t}</span>)}</div>
      <div className="flex gap-3">
        {project.liveUrl && (
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl bg-black/90 hover:bg-black text-white text-sm font-normal shadow-md transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <TbExternalLink size={16} />Live
          </motion.a>
        )}
        <motion.a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl border-2 border-black/80 text-black/80 text-sm font-normal hover:bg-black hover:text-white hover:border-black transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <BsGithub size={16} />Code
        </motion.a>
      </div>
    </motion.div>
  </motion.div>
)

export default function Projects() {
  const [selected, setSelected] = useState(null)

  useEffect(() => { document.body.style.overflow = selected ? "hidden" : "" }, [selected])

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-24" id="projects" aria-label="Projects showcase">
        <div className="px-5 sm:px-8 md:px-12 lg:px-28 mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 sm:gap-4">
            <div>
              <span className="text-[10px] font-normal tracking-widest uppercase text-black/40 block mb-2">Selected Work</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium">Projects</h2>
            </div>
            <p className="text-black/40 text-xs sm:text-sm max-w-xs font-light">Swipe to explore my work.</p>
          </div>
        </div>
        
        <div className="px-5 sm:px-8 md:px-12 lg:px-28">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-5 lg:gap-6 pb-4 pr-5">
              {projects.map(p => <Card key={p.id} project={p} onSelect={setSelected} />)}
              <motion.a
                href="https://github.com/Nithyashreegopal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-[150px] flex flex-col items-center justify-center gap-3 text-black/30 hover:text-black group transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                aria-label="View more projects on GitHub"
              >
                <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300"><BsGithub size={24} /></div>
                <span className="text-xs text-center">More on<br />GitHub</span>
              </motion.a>
            </div>
          </div>
        </div>
      </section>
      <AnimatePresence>{selected && <Modal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </>
  )
}
