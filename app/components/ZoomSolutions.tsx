import { Shield, Users, Wrench, CheckCircle, Lock, Video, Settings, HeadphonesIcon } from "lucide-react"

export default function ZoomSolutions() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with Zoom branding */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img
              src="https://logos-world.net/wp-content/uploads/2021/02/Zoom-Logo.png"
              alt="Zoom Logo"
              className="h-12 object-contain"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600">Solutions</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I currently architect and manage a HIPAA-compliant Zoom environment for a private psychiatric practice. My
            work focuses on balancing rigorous security standards with a seamless user experience, ensuring that
            providers can focus on care while the platform handles the complexity of secure, encrypted communication.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Security & Compliance Pillar */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-600 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-blue-800">Security & Compliance</h2>
            </div>
            <h3 className="text-lg font-semibold text-blue-700 mb-3">HIPAA-Compliant Configuration & Governance</h3>
            <p className="text-blue-900 mb-4">
              Expert setup of locked-down environments that meet the high-stakes security needs of Enterprise and
              Healthcare clients.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-800">
                <Lock className="h-4 w-4" />
                <span className="text-sm">End-to-End Encryption (E2EE)</span>
              </div>
              <div className="flex items-center gap-2 text-blue-800">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Waiting Room Security</span>
              </div>
              <div className="flex items-center gap-2 text-blue-800">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Passcode Enforcement</span>
              </div>
              <div className="flex items-center gap-2 text-blue-800">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Restricted Cloud Recording</span>
              </div>
            </div>
          </div>

          {/* User Experience Pillar */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 border border-teal-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-teal-600 rounded-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-teal-800">User Experience</h2>
            </div>
            <h3 className="text-lg font-semibold text-teal-700 mb-3">Seamless Patient-Provider Workflows</h3>
            <p className="text-teal-900 mb-4">
              Bridging the gap between "secure" and "usable" — ensuring non-technical users have a frictionless
              experience.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-teal-800">
                <Video className="h-4 w-4" />
                <span className="text-sm">Healthcare-specific Features</span>
              </div>
              <div className="flex items-center gap-2 text-teal-800">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Specialized Waiting Room Notifications</span>
              </div>
              <div className="flex items-center gap-2 text-teal-800">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Patient-Friendly Interface Design</span>
              </div>
              <div className="flex items-center gap-2 text-teal-800">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Provider Workflow Optimization</span>
              </div>
            </div>
          </div>

          {/* Technical Troubleshooting Pillar */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-600 rounded-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-purple-800">Technical Troubleshooting</h2>
            </div>
            <h3 className="text-lg font-semibold text-purple-700 mb-3">Performance Optimization & Support</h3>
            <p className="text-purple-900 mb-4">
              Managing the admin side — user provisioning, license management, and real-time issue diagnosis.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-purple-800">
                <Settings className="h-4 w-4" />
                <span className="text-sm">User Provisioning & Management</span>
              </div>
              <div className="flex items-center gap-2 text-purple-800">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">License Optimization</span>
              </div>
              <div className="flex items-center gap-2 text-purple-800">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Connection Diagnostics</span>
              </div>
              <div className="flex items-center gap-2 text-purple-800">
                <HeadphonesIcon className="h-4 w-4" />
                <span className="text-sm">Real-time Audio/Visual Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Why This Matters</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">Security</div>
              <p className="text-gray-600 text-sm">
                Proves deep understanding of high-stakes security needs for Enterprise and Healthcare clients — a major
                focus for Zoom.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">Adoption</div>
              <p className="text-gray-600 text-sm">
                Demonstrates care for end-user experience, not just settings — aligning with Product Adoption best
                practices.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">Expertise</div>
              <p className="text-gray-600 text-sm">
                Validates "Technical Power User" capability — the person who knows how to fix things when a VP's meeting
                goes sideways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
