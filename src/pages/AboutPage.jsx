import SEOHead from "../components/SEOHead"
import About from "../components/About"

export default function AboutPage() {
  return (
    <div className="mt-24">
      <SEOHead
        title="About Nithyashree G V | AI & Full Stack Developer | MKCE Karur"
        description="Learn about Nithyashree G V — an Artificial Intelligence and Data Science undergraduate at M. Kumarasamy College of Engineering, Karur (CGPA: 8.0). Full-stack web developer with hands-on experience in Python, Flask, MySQL, and Machine Learning."
        keywords="About Nithyashree G V, Nithyashree G V biography, Nithyashree MKCE, Nithyashree Karur, Full Stack Developer, AI Data Science, B.Tech AI, MKCE Karur"
        canonicalPath="/about"
      />
      <About />
    </div>
  )
}
