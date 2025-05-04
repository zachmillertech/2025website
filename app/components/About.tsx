import Image from "next/image"
import { User, Briefcase, Award } from "lucide-react"

export default function About() {
  return (
    <div className="space-y-8">
      {/* Hero section moved up within the About tab */}
      <div className="hero-section relative h-[350px] flex items-center justify-center mb-8">
        <Image
          src="/images/kona-tech-wrinkles.jpg"
          alt="Shar Pei dog with headphones"
          layout="fill"
          objectFit="cover"
          className="opacity-75"
        />
        <div className="z-10 text-center flex flex-col justify-center h-full">
          <h2 className="hero-text hero-text-top">Tech got you in wrinkles?</h2>
          <div className="h-[100px]"></div> {/* This adds 100px vertical spacing */}
          <h2 className="hero-text hero-text-bottom">
            The <span className="line-through">bark</span> buck stops here
          </h2>
        </div>
      </div>

      {/* About content moved down */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2 mt-10 pt-10 border-t-2 border-primary">
            <User size={24} />
            About Zach Miller Tech Consulting
          </h2>
          <p className="mb-4">
            With years of experience in the tech industry, I offer comprehensive technology and digital footprint
            management services. My expertise covers a wide range of areas including SaaS configuration, optimization,
            troubleshooting, email management, web hosting, security, IT service management, automations, workflows, and
            AI assessment.
          </p>
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Briefcase size={20} />
            My Expertise
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
          {/* Updated image container to prevent cropping on mobile */}
          <div className="md:hidden w-full h-full min-h-[250px] relative">
            <Image
              src="/images/zach-tech-session.png"
              alt="Zach Miller leading a tech session"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          {/* Keep original styling for larger screens */}
          <div className="hidden md:block w-full h-full relative">
            <Image
              src="/images/zach-tech-session.png"
              alt="Zach Miller leading a tech session"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
