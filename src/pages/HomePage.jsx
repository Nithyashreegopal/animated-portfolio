import SEOHead from "../components/SEOHead"
import Home from "../components/Home"
import Skills from "../components/Skills"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Nithyashree G V | Artificial Intelligence & Full Stack Developer | MKCE Karur"
        description="Official portfolio of Nithyashree G V — Artificial Intelligence and Data Science undergraduate at M. Kumarasamy College of Engineering, Karur. Experienced in Python, Flask, MySQL, and ML."
        keywords="Nithyashree G V, Nithyashree, Nithyashree portfolio, Nithyashree MKCE, Nithyashree Karur, Nithyashree developer, Nithyashree Python, Nithyashree AI, AI Data Science, Full Stack Developer India, Flask Developer, MySQL, Machine Learning, MKCE Karur"
        canonicalPath="/"
        ogType="profile"
      />
      <Home />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </>
  )
}
