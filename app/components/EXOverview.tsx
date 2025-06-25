import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, Heart, Zap, Shield, Target } from "lucide-react"

export default function EXOverview() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Employee Experience (EX) Consulting</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Transform your workplace into a thriving environment where employees feel valued, supported, and empowered.
          Employee Experience is the foundation of organizational success, directly impacting productivity, retention,
          and business outcomes.
        </p>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg mb-8">
        <h3 className="text-2xl font-bold text-center mb-6">What is Employee Experience?</h3>
        <p className="text-center text-muted-foreground max-w-4xl mx-auto">
          Employee Experience encompasses every interaction an employee has with your organization, from their first day
          to their last. It includes the tools they use, the processes they follow, the support they receive, and the
          culture they experience. A positive EX drives engagement, productivity, and retention while reducing costs and
          improving business performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="text-green-600" size={24} />
              Increased Productivity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Engaged employees are 23% more profitable and show 18% higher productivity rates.
            </p>
            <ul className="space-y-1 text-sm">
              <li>• Streamlined workflows and processes</li>
              <li>• Reduced friction in daily tasks</li>
              <li>• Better access to tools and information</li>
              <li>• Faster problem resolution</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="text-red-600" size={24} />
              Higher Retention
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Companies with engaged employees see 40% lower turnover rates.
            </p>
            <ul className="space-y-1 text-sm">
              <li>• Improved job satisfaction</li>
              <li>• Better work-life balance</li>
              <li>• Clear career development paths</li>
              <li>• Recognition and feedback systems</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="text-yellow-600" size={24} />
              Faster Innovation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Engaged teams are 5x more likely to be high-performing and innovative.
            </p>
            <ul className="space-y-1 text-sm">
              <li>• Collaborative work environments</li>
              <li>• Idea sharing and feedback loops</li>
              <li>• Empowered decision-making</li>
              <li>• Continuous learning opportunities</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="text-blue-600" size={24} />
              Reduced Costs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Poor employee experience costs organizations up to $550 billion annually.
            </p>
            <ul className="space-y-1 text-sm">
              <li>• Lower recruitment and training costs</li>
              <li>• Reduced absenteeism</li>
              <li>• Fewer workplace incidents</li>
              <li>• Decreased support ticket volume</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-purple-600" size={24} />
              Better Culture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Strong employee experience creates a positive, inclusive workplace culture.
            </p>
            <ul className="space-y-1 text-sm">
              <li>• Improved communication</li>
              <li>• Stronger team collaboration</li>
              <li>• Inclusive and diverse environment</li>
              <li>• Aligned values and goals</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="text-orange-600" size={24} />
              Business Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Organizations with superior EX achieve 25% higher profitability.
            </p>
            <ul className="space-y-1 text-sm">
              <li>• Improved customer satisfaction</li>
              <li>• Higher revenue growth</li>
              <li>• Better brand reputation</li>
              <li>• Competitive advantage</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-center mb-6">Key Areas of Employee Experience</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-indigo-600 mb-2">IT Service Management</h4>
              <p className="text-xs text-muted-foreground">
                Streamlined IT support, self-service portals, and efficient incident resolution
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-green-600 mb-2">Workplace Technology</h4>
              <p className="text-xs text-muted-foreground">
                Modern tools, seamless integrations, and user-friendly interfaces
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-purple-600 mb-2">Process Optimization</h4>
              <p className="text-xs text-muted-foreground">
                Automated workflows, reduced bureaucracy, and efficient procedures
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-orange-600 mb-2">Communication & Feedback</h4>
              <p className="text-xs text-muted-foreground">
                Clear channels, regular surveys, and continuous improvement loops
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Employee Experience?</h3>
        <p className="text-lg mb-6">
          Let's work together to create an exceptional workplace that drives engagement, productivity, and business
          success.
        </p>
        <div className="text-sm opacity-90">
          <p>Explore our specialized EX solutions:</p>
        </div>
      </div>
    </div>
  )
}
