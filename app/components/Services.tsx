import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Settings, Mail, Globe, Shield, Cpu, Zap, GitBranch, Brain } from "lucide-react"

export default function Services() {
  const services = [
    { name: "SaaS configuration", icon: <Settings size={20} /> },
    { name: "Optimization", icon: <Zap size={20} /> },
    { name: "Troubleshooting", icon: <Cpu size={20} /> },
    { name: "Email management", icon: <Mail size={20} /> },
    { name: "Web hosting", icon: <Globe size={20} /> },
    { name: "Security", icon: <Shield size={20} /> },
    { name: "IT service management", icon: <Cpu size={20} /> },
    { name: "Automations", icon: <GitBranch size={20} /> },
    { name: "Workflows", icon: <GitBranch size={20} /> },
    { name: "AI assessment", icon: <Brain size={20} /> },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {services.map((service, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {service.icon}
              {service.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Comprehensive {service.name.toLowerCase()} services tailored to your business needs.</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
