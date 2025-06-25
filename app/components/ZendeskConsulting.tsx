import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { MessageSquare, Cog, TrendingUp, Users2, Puzzle, Smartphone } from "lucide-react"

export default function ZendeskConsulting() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Zendesk Consulting Services</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Unlock the full potential of Zendesk with comprehensive consulting services. From initial setup to advanced
          customizations, I help organizations create seamless customer support experiences that scale with growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cog className="text-blue-600" size={24} />
              Platform Configuration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Multi-brand setup and management</li>
              <li>• Custom ticket fields and forms</li>
              <li>• Business rules and triggers</li>
              <li>• Macro and template creation</li>
              <li>• View and filter optimization</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="text-green-600" size={24} />
              Analytics & Reporting
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Custom dashboard development</li>
              <li>• KPI tracking and monitoring</li>
              <li>• Advanced reporting setup</li>
              <li>• Data visualization strategies</li>
              <li>• Performance benchmarking</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Puzzle className="text-purple-600" size={24} />
              Integrations & Apps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Marketplace app selection</li>
              <li>• Custom app development</li>
              <li>• CRM and business tool integration</li>
              <li>• API implementation</li>
              <li>• Data synchronization setup</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users2 className="text-orange-600" size={24} />
              Agent Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Workspace customization</li>
              <li>• Productivity tool setup</li>
              <li>• Agent training programs</li>
              <li>• Workflow optimization</li>
              <li>• Performance coaching</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="text-red-600" size={24} />
              Customer Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Help Center design and content</li>
              <li>• Self-service portal optimization</li>
              <li>• Community forum setup</li>
              <li>• Omnichannel support strategy</li>
              <li>• Customer satisfaction programs</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="text-teal-600" size={24} />
              Omnichannel Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Chat and messaging setup</li>
              <li>• Social media integration</li>
              <li>• Phone system configuration</li>
              <li>• Mobile app optimization</li>
              <li>• Channel routing strategies</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-center mb-4">Zendesk Success Stories</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
            <p className="text-sm">Average reduction in first response time</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">25%</div>
            <p className="text-sm">Increase in customer satisfaction scores</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
            <p className="text-sm">Improvement in agent productivity</p>
          </div>
        </div>
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Zendesk Suite Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Zendesk Support</h4>
            <p className="text-sm text-muted-foreground">
              Complete ticketing system optimization and agent workflow enhancement.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Zendesk Guide</h4>
            <p className="text-sm text-muted-foreground">
              Knowledge base creation and self-service portal development.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Zendesk Chat</h4>
            <p className="text-sm text-muted-foreground">
              Live chat implementation and proactive engagement strategies.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Zendesk Explore</h4>
            <p className="text-sm text-muted-foreground">Advanced analytics setup and custom reporting solutions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
