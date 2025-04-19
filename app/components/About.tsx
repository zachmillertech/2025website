import Image from "next/image"
import { User, Briefcase, Award } from "lucide-react"

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2 mt-10 pt-10 border-t-2 border-primary">
          <User size={24} />
          About Zach Miller Tech Consulting
        </h2>
        <p className="mb-4">
          With years of experience in the tech industry, Zach Miller offers comprehensive technology and digital
          footprint management services. Our expertise covers a wide range of areas including SaaS configuration,
          optimization, troubleshooting, email management, web hosting, security, IT service management, automations,
          workflows, and AI assessment.
        </p>
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <Briefcase size={20} />
          Our Expertise
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li className="flex items-center gap-2">
            <Award size={16} /> SaaS Configuration and Optimization
          </li>
          <li className="flex items-center gap-2">
            <Award size={16} /> IT Service Management
          </li>
          <li className="flex items-center gap-2">
            <Award size={16} /> Security Solutions
          </li>
          <li className="flex items-center gap-2">
            <Award size={16} /> Workflow Automation
          </li>
          <li className="flex items-center gap-2">
            <Award size={16} /> AI Integration and Assessment
          </li>
        </ul>
      </div>
      <div className="relative h-64 md:h-auto">
        <Image
          src="/images/zach-tech-session.png"
          alt="Zach Miller leading a tech session"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  )
}
