import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { MessageSquare, Star, TrendingUp, Users, Zap, Target } from "lucide-react"

export default function CXOverview() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Customer Experience (CX) Consulting</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Deliver exceptional customer experiences that drive loyalty, growth, and competitive advantage. Customer
          Experience is the key differentiator in today's market, directly impacting revenue, retention, and brand
          reputation.
        </p>
      </div>

      <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-lg mb-8">
        <h3 className="text-2xl font-bold text-center mb-6">What is Customer Experience?</h3>
        <p className="text-center text-muted-foreground max-w-4xl mx-auto">
          Customer Experience is the sum of all interactions a customer has with your brand across every touchpoint and
          channel. It encompasses everything from initial awareness through purchase, support, and ongoing relationship
          management. Exceptional CX creates emotional connections that drive loyalty and advocacy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="text-green-600" size={24} />
              Revenue Growth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Companies with superior CX achieve 5.7x more revenue growth than competitors.
            </p>
            <ul className="space-y-1 text-sm">
              <li>• Increased customer lifetime value</li>
              <li>• Higher conversion rates</li>
              <li>• Premium pricing opportunities</li>
              <li>• Cross-sell and upsell success</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="text-yellow-600" size={24} />
              Customer Loyalty
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              86% of customers will pay more for a better customer experience.
            </p>
            <ul className="space-y-1 text-sm">
              <li>• Reduced customer churn</li>
              <li>• Increased repeat purchases</li>
              <li>• Higher Net Promoter Scores</li>
              <li>• Stronger brand advocacy</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="text-purple-600" size={24} />
              Operational Efficiency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Great CX reduces support costs by up to 33% through self-service and prevention.
            </p>
            <ul className="space-y-1 text-sm">
              <li>• Automated customer journeys</li>
              <li>• Reduced support ticket volume</li>
              <li>• Faster issue resolution</li>
              <li>• Improved first-contact resolution</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="text-blue-600" size={24} />
              Omnichannel Excellence
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Customers expect seamless experiences across all channels and touchpoints.
            </p>
            <ul className="space-y-1 text-sm">
              <li>• Consistent messaging and branding</li>
              <li>• Unified customer data and history</li>
              <li>• Seamless channel transitions</li>
              <li>• Personalized interactions</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-orange-600" size={24} />
              Customer Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Data-driven CX strategies deliver 60% higher profits than competitors.
            </p>
            <ul className="space-y-1 text-sm">
              <li>• Customer behavior analytics</li>
              <li>• Journey mapping and optimization</li>
              <li>• Predictive customer needs</li>
              <li>• Real-time feedback loops</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="text-red-600" size={24} />
              Competitive Advantage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              CX is the top brand differentiator, outweighing price and product features.
            </p>
            <ul className="space-y-1 text-sm">
              <li>• Market differentiation</li>
              <li>• Brand reputation enhancement</li>
              <li>• Customer acquisition advantage</li>
              <li>• Resilience during market changes</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-center mb-6">Customer Experience Transformation Areas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-teal-600 mb-2">Support & Service</h4>
              <p className="text-xs text-muted-foreground">
                Multi-channel support, knowledge bases, and proactive service delivery
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-600 mb-2">Digital Experiences</h4>
              <p className="text-xs text-muted-foreground">
                User-friendly interfaces, mobile optimization, and self-service portals
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-green-600 mb-2">Customer Journey</h4>
              <p className="text-xs text-muted-foreground">
                End-to-end journey mapping, touchpoint optimization, and experience design
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-purple-600 mb-2">Analytics & Insights</h4>
              <p className="text-xs text-muted-foreground">
                Customer feedback systems, performance metrics, and continuous improvement
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Elevate Your Customer Experience?</h3>
        <p className="text-lg mb-6">
          Transform your customer relationships with strategic CX consulting that drives measurable business results.
        </p>
        <div className="text-sm opacity-90">
          <p>Discover our specialized CX platforms:</p>
        </div>
      </div>
    </div>
  )
}
