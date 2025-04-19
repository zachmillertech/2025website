import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { TrendingUp, Shield, Zap } from "lucide-react"

export default function Successes() {
  const successes = [
    {
      title: "Streamlined SaaS Integration",
      description:
        "Reduced operational costs by 30% for a mid-size company through efficient SaaS integration and optimization.",
      icon: <TrendingUp size={24} className="text-green-500" />,
    },
    {
      title: "Enhanced Security Measures",
      description:
        "Implemented robust security protocols, preventing potential data breaches and saving a client an estimated $1M in potential losses.",
      icon: <Shield size={24} className="text-blue-500" />,
    },
    {
      title: "Automated Workflow Revolution",
      description:
        "Designed and implemented automated workflows, increasing productivity by 40% for a large enterprise client.",
      icon: <Zap size={24} className="text-yellow-500" />,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-4">
        {successes.map((success, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {success.icon}
                {success.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{success.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="relative h-full min-h-[300px]">
        {/* Option 1: SVG image */}
        <img
          src="/images/tech-success.svg"
          alt="Technology success visualization"
          className="w-full h-full object-cover rounded-lg"
        />

        {/* Option 2: React component (uncomment if SVG doesn't work) */}
        {/* <SuccessImage /> */}
      </div>
    </div>
  )
}
