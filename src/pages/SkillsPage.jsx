import SEOHead from "../components/SEOHead"
import Skills from "../components/Skills"

export default function SkillsPage() {
  return (
    <div className="mt-24">
      <SEOHead
        title="Skills of Nithyashree G V | Python, C, Java, SQL, Flask, MySQL, IoT"
        description="Technical skills of Nithyashree G V — Python, C, Java, SQL, Flask, HTML5, CSS3, JavaScript, Bootstrap, MySQL, Git, GitHub, Power BI, Google Colab. AI & Data Science undergraduate at MKCE Karur."
        keywords="Nithyashree G V skills, Nithyashree tech stack, Python Developer, Flask Developer, SQL, MySQL, Machine Learning, Java, C, Git, GitHub, Power BI, MKCE Karur"
        canonicalPath="/skills"
      />
      <Skills />
    </div>
  )
}
