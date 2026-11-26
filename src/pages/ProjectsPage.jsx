import SEOHead from "../components/SEOHead"
import Projects from "../components/Projects"

export default function ProjectsPage() {
  return (
    <div className="mt-24">
      <SEOHead
        title="Projects by Nithyashree G V | AI Ambulance Assistance, Bus Tracking & Full-Stack Apps"
        description="Explore projects by Nithyashree G V — AI Ambulance Assistance System with real-time patient monitoring and ML health-risk detection, Real-Time Bus Tracking System for Small Cities with live GPS mapping, and Flask full-stack applications."
        keywords="Nithyashree G V projects, AI Ambulance Assistance System, Real-Time Bus Tracking System, Flask Projects, Python Projects, Machine Learning Projects, IoT Projects, MKCE Karur"
        canonicalPath="/projects"
      />
      <Projects />
    </div>
  )
}
