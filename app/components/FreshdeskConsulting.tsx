import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Headphones, Settings, BarChart3, Users, Zap, Shield } from "lucide-react"

export default function FreshdeskConsulting() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Freshdesk Consulting Services</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Transform your customer support with expert Freshdesk implementation, optimization, and ongoing management. I
          help businesses maximize their Freshdesk investment and deliver exceptional customer experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="text-blue-600" size={24} />
              Implementation & Setup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Complete Freshdesk instance configuration</li>
              <li>• Custom field and form setup</li>
              <li>• Workflow and automation rules</li>
              <li>• Agent role and permission management</li>
              <li>• Email integration and routing</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="text-green-600" size={24} />
              Optimization & Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Performance metrics and KPI setup</li>
              <li>• Custom dashboard creation</li>
              <li>• SLA policy optimization</li>
              <li>• Ticket routing efficiency</li>
              <li>• Response time improvements</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="text-purple-600" size={24} />
              Automation & Workflows
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Intelligent ticket assignment</li>
              <li>• Escalation rule configuration</li>
              <li>• Auto-response templates</li>
              <li>• Time-based actions</li>
              <li>• Custom workflow creation</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-orange-600" size={24} />
              Team Training & Adoption
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Agent onboarding programs</li>
              <li>• Best practices workshops</li>
              <li>• Admin training sessions</li>
              <li>• Change management support</li>
              <li>• Ongoing coaching</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="text-red-600" size={24} />
              Integration & Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Third-party app integrations</li>
              <li>• SSO implementation</li>
              <li>• Data security compliance</li>
              <li>• API customizations</li>
              <li>• Backup and recovery planning</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Headphones className="text-teal-600" size={24} />
              Ongoing Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Monthly health checks</li>
              <li>• Performance monitoring</li>
              <li>• Feature updates and rollouts</li>
              <li>• Troubleshooting support</li>
              <li>• Strategic consultation</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-center mb-4">Why Choose My Freshdesk Consulting?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Proven Expertise</h4>
            <p className="text-sm text-muted-foreground">
              Years of experience implementing Freshdesk for businesses of all sizes, from startups to enterprise
              organizations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Tailored Solutions</h4>
            <p className="text-sm text-muted-foreground">
              Every implementation is customized to your specific business needs, industry requirements, and growth
              goals.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">ROI-Focused</h4>
            <p className="text-sm text-muted-foreground">
              I focus on configurations that deliver measurable improvements in customer satisfaction and operational
              efficiency.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Ongoing Partnership</h4>
            <p className="text-sm text-muted-foreground">
              Beyond implementation, I provide continuous support to ensure your Freshdesk instance evolves with your
              business.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
