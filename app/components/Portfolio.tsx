import { Briefcase } from "lucide-react"
import ProjectTemplate from "./ProjectTemplate"

export default function Portfolio() {
  // Sample project data - you can replace this with your actual projects
  const projects = [
    {
      id: "project1",
      title: "Enterprise SaaS Migration",
      companyLogo: "/placeholder.svg?height=40&width=120",
      companyName: "TechCorp Inc.",
      situation: "Legacy systems causing operational inefficiencies and high maintenance costs.",
      problem: "Multiple disconnected systems led to data silos and manual processes that were error-prone.",
      solution: "Implemented a unified cloud-based SaaS platform with custom integrations and automated workflows.",
      outcome: "Reduced operational costs by 35% and improved team productivity by 40% within six months.",
    },
    {
      id: "project2",
      title: "Security Infrastructure Overhaul",
      companyLogo: "/placeholder.svg?height=40&width=120",
      companyName: "SecureFinance Ltd.",
      situation: "Financial institution with outdated security protocols vulnerable to modern cyber threats.",
      problem: "Increasing security incidents and compliance risks with regulatory requirements.",
      solution:
        "Designed and implemented a comprehensive security framework with multi-factor authentication and real-time monitoring.",
      outcome: "Zero security breaches in the following year and passed all compliance audits with flying colors.",
    },
  ]

  return (
    <div className="space-y-16 pb-12">
      <h2 className="text-2xl font-bold mb-8 text-primary flex items-center gap-2 border-b-2 border-primary pb-4">
        <Briefcase size={24} />
        Portfolio
      </h2>

      <div className="space-y-24">
        {projects.map((project) => (
          <ProjectTemplate key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
