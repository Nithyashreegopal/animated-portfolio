import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IoLogoLinkedin } from "react-icons/io5"
import { BiLogoGmail } from "react-icons/bi"
import { BsGithub } from "react-icons/bs"
import ThreeBackground from "./ThreeBackground"

const socials = [
  { Icon: BiLogoGmail, link: "mailto:nithyashreegopal2006@gmail.com", label: "Email" },
  { Icon: IoLogoLinkedin, link: "https://www.linkedin.com/in/nithyashree-gv-42905b323/", label: "LinkedIn" },
  { Icon: BsGithub, link: "https://github.com/Nithyashreegopal", label: "GitHub" },
]

const HERO_SLIDES = [
  {
    role: "I am Nithyashree G V",
    prefix: "Specialized in",
    highlight: "AI & Data Science",
    suffix: "Pre-Final Year Student.",
    image: "/assets/hero/hero-portrait.png",
    alt: "Nithyashree G V - AI & Data Science Student",
  },
  {
    role: "Aspiring Data Scientist",
    prefix: "Professional at",
    highlight: "Data Analytics",
    suffix: "AI & ML Enthusiast.",
    image: "/assets/hero/hero-developer.png",
    alt: "Nithyashree G V - Aspiring Data Analyst & Developer",
  },
  {
    role: "Visual Storyteller",
    prefix: "Interested in",
    highlight: "Creative Photography",
    suffix: "Poster Designer & Storyteller.",
    image: "/assets/hero/hero-photographer.png",
    alt: "Nithyashree G V - Photography & Visual Design",
  },
]

function TypewriterRole({ text }) {
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    setDisplayed("")
    let i = 0
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 45)
    return () => clearInterval(interval)
  }, [text])

  return (
    <span className="inline-flex items-center">
      <span>{displayed}</span>
      <span className="inline-block w-[2px] h-[0.85em] bg-black ml-1 animate-pulse align-middle" />
    </span>
  )
}

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } }
}
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 4800)
    return () => clearInterval(timer)
  }, [])

  const currentSlide = HERO_SLIDES[slideIndex]

  return (
    <section
      className="relative min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-5rem)] mt-20 flex flex-col justify-center overflow-hidden"
      id="home"
      aria-label="Hero section"
    >
      <div className="hidden lg:block"><ThreeBackground /></div>
      <div className="flex justify-between items-center px-5 sm:px-8 md:px-12 lg:px-28 lg:flex-row flex-col-reverse relative z-10 w-full my-auto py-4 lg:py-0 gap-6 lg:gap-0">
        <motion.div
          className="lg:w-[48%] w-full flex flex-col justify-center"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeUp} className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl flex flex-col mt-2 lg:mt-0 gap-1.5 lg:gap-3 font-light">
            <h1 className="min-h-[2.8rem] sm:min-h-[2.4rem] lg:min-h-[2.2rem] flex items-center flex-wrap leading-tight">
              Hello,&nbsp;<TypewriterRole text={currentSlide.role} />
            </h1>

            <div className="min-h-[4.2rem] sm:min-h-[4.6rem] lg:min-h-[5.2rem] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-1.5 lg:gap-2.5"
                >
                  <h2 className="leading-tight">
                    <span className="font-medium">{currentSlide.prefix}</span>{" "}
                    <span
                      className="text-white font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
                      style={{ WebkitTextStroke: "1px black" }}
                    >
                      {currentSlide.highlight}
                    </span>
                  </h2>
                  <h2 className="leading-tight">
                    <span className="font-medium">{currentSlide.suffix}</span>
                  </h2>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p variants={fadeUp} className="text-[#71717A] text-sm sm:text-base mt-3 lg:mt-4 font-light leading-relaxed max-w-lg">
            Pre-final-year B.Tech student in Artificial Intelligence and Data Science at M. Kumarasamy College of Engineering, aspiring to build a career in data analytics and applied AI/ML. Skilled in Python, SQL, Pandas, Power BI, and Flask.
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center gap-x-4 lg:gap-x-5 mt-5 lg:mt-8">
            {socials.map(({ Icon, link, label }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer me"
                aria-label={label}
                className="p-2 sm:p-2.5 lg:p-3 rounded border-2 border-black transition-colors duration-300"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.92 }}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-[48%] w-full flex flex-col items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          {/* Hero Illustration Stage */}
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[400px] lg:max-w-[430px] xl:max-w-[470px] flex flex-col items-center">
            {/* Character Stage - grounded to the static baseline */}
            <div className="relative w-full h-[240px] sm:h-[280px] md:h-[310px] lg:h-[340px] xl:h-[380px] flex items-end justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full flex items-end justify-center"
                >
                  <img
                    className="max-h-full max-w-full object-contain select-none pointer-events-none"
                    src={currentSlide.image}
                    alt={currentSlide.alt}
                    loading="eager"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Static Ground Baseline Line */}
            <div className="w-full h-[2.5px] bg-black rounded-full z-10" />
          </div>

          {/* Interactive Slide indicator pills */}
          <div className="flex items-center gap-2.5 mt-3.5 z-20">
            {HERO_SLIDES.map((slide, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`h-2 rounded-full transition-all duration-500 touch-manipulation ${
                  i === slideIndex ? "w-8 bg-black" : "w-2 bg-black/25 hover:bg-black/50"
                }`}
                aria-label={`Switch to ${slide.role}`}
                title={slide.role}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
