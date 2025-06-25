import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Wrench, Database, Users, BarChart, Shield, Zap } from "lucide-react"

export default function FreshserviceConsulting() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Freshservice IT Service Management</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Streamline your IT operations with expert Freshservice consulting. I help organizations implement robust ITSM
          processes, automate workflows, and deliver exceptional internal IT support experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="text-blue-600" size={24} />
              ITSM Implementation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Service desk setup and configuration</li>
              <li>• Incident management workflows</li>
              <li>• Problem management processes</li>
              <li>• Change management implementation</li>
              <li>• Service catalog creation</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="text-green-600" size={24} />
              Asset Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• CMDB setup and maintenance</li>
              <li>• Asset discovery and tracking</li>
              <li>• Software license management</li>
              <li>• Hardware lifecycle planning</li>
              <li>• Vendor and contract management</li>
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
              <li>• Automated ticket routing</li>
              <li>• SLA and escalation rules</li>
              <li>• Approval workflows</li>
              <li>• Self-service automation</li>
              <li>• Integration orchestration</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-orange-600" size={24} />
              Employee Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Employee portal customization</li>
              <li>• Self-service catalog design</li>
              <li>• Mobile app optimization</li>
              <li>• User onboarding automation</li>
              <li>• Feedback and survey systems</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="text-red-600" size={24} />
              Analytics & Reporting
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• KPI dashboard creation</li>
              <li>• Performance metrics tracking</li>
              <li>• Custom report development</li>
              <li>• Trend analysis and insights</li>
              <li>• Executive reporting</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="text-teal-600" size={24} />
              Security & Compliance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Access control and permissions</li>
              <li>• Audit trail configuration</li>
              <li>• Compliance reporting</li>
              <li>• Data security measures</li>
              <li>• Risk management processes</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-center mb-6">ITIL Best Practices Implementation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white rounded-lg">
            <h4 className="font-semibold text-blue-600 mb-2">Incident Management</h4>
            <p className="text-xs text-muted-foreground">Rapid resolution and service restoration</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg">
            <h4 className="font-semibold text-green-600 mb-2">Change Management</h4>
            <p className="text-xs text-muted-foreground">Controlled and risk-assessed changes</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg">
            <h4 className="font-semibold text-purple-600 mb-2">Problem Management</h4>
            <p className="text-xs text-muted-foreground">Root cause analysis and prevention</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg">
            <h4 className="font-semibold text-orange-600 mb-2">Service Level Management</h4>
            <p className="text-xs text-muted-foreground">SLA monitoring and improvement</p>
          </div>
        </div>
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Why Choose Freshservice?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Modern ITSM Platform</h4>
            <p className="text-sm text-muted-foreground">
              Cloud-native solution with intuitive interface and powerful automation capabilities.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Scalable Architecture</h4>
            <p className="text-sm text-muted-foreground">
              Grows with your organization from small teams to enterprise-scale operations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Cost-Effective Solution</h4>
            <p className="text-sm text-muted-foreground">
              Competitive pricing with comprehensive features and no hidden costs.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Rapid Implementation</h4>
            <p className="text-sm text-muted-foreground">
              Quick deployment with minimal disruption to existing operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
