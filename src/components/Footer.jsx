import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { BsGithub } from "react-icons/bs"
import { IoLogoLinkedin } from "react-icons/io5"
import { BiLogoGmail } from "react-icons/bi"

const socials = [
  { Icon: BiLogoGmail, href: "mailto:nithyashreegopal2006@gmail.com", label: "Email" },
  { Icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/nithyashree-gv-42905b323/", label: "LinkedIn" },
  { Icon: BsGithub, href: "https://github.com/Nithyashreegopal", label: "GitHub" },
]

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
]

export default function Footer() {
  return (
    <footer className="mt-12 sm:mt-16 border-t border-black/10 px-5 sm:px-8 md:px-12 lg:px-28" role="contentinfo">
      <div className="py-8 sm:py-10 lg:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
        <div>
          <Link to="/" aria-label="Go to homepage">
            <h3 className="text-2xl font-medium text-black">Nithyashree <span className="text-[#71717A]">GV</span></h3>
          </Link>
          <p className="mt-2 text-[#71717A] text-sm font-light">AI &amp; Data Science Developer</p>
          <nav className="mt-4 flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer navigation">
            {navLinks.map(({ label, path }) => (
              <Link key={path} to={path} className="text-sm text-black/50 hover:text-black transition-colors duration-300 font-light">
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer me"
                aria-label={label}
                className="p-2 rounded border border-black/80 transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
          <p className="text-xs font-light text-[#71717A]">© {new Date().getFullYear()} Nithyashree G V</p>
        </div>
      </div>
    </footer>
  )
}
