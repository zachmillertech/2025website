import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Check, Star } from "lucide-react"

export default function Pricing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star size={20} />
            Basic
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">$99/month</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <Check size={16} className="text-green-500" /> SaaS configuration
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-green-500" /> Email management
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-green-500" /> Basic security setup
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star size={20} />
            Pro
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">$299/month</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <Check size={16} className="text-green-500" /> Everything in Basic
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-green-500" /> Advanced security
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-green-500" /> IT service management
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-green-500" /> Basic automations
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star size={20} />
            Enterprise
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">Custom pricing</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <Check size={16} className="text-green-500" /> Everything in Pro
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-green-500" /> Advanced automations
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-green-500" /> AI assessment
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-green-500" /> 24/7 support
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
