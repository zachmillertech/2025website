"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "./components/Header"
import About from "./components/About"
import Pricing from "./components/Pricing"
import Services from "./components/Services"
import Successes from "./components/Successes"
import EXOverview from "./components/EXOverview"
import CXOverview from "./components/CXOverview"
import FreshdeskConsulting from "./components/FreshdeskConsulting"
import ZendeskConsulting from "./components/ZendeskConsulting"
import FreshserviceConsulting from "./components/FreshserviceConsulting"
import ZoomSolutions from "./components/ZoomSolutions"
import {
  Info,
  DollarSign,
  Briefcase,
  Trophy,
  Users,
  Headphones,
  HelpCircle,
  MessageCircle,
  Settings,
} from "lucide-react"

export default function Home() {
  const currentYear = new Date().getFullYear()
  const [activeView, setActiveView] = useState("about")

  const handleViewChange = (view: string) => {
    setActiveView(view)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Tabs with content sections */}
      <div className="bg-background py-4">
        <div className="max-w-7xl mx-auto w-full px-4">
          <Tabs value={activeView} onValueChange={setActiveView} className="w-full">
            <TabsList className="flex flex-wrap w-full p-1 bg-muted rounded-lg mb-6">
              <TabsTrigger
                value="about"
                className="tab-trigger flex-1 flex items-center justify-center gap-2 text-blue-600 
                data-[state=active]:bg-blue-600 data-[state=active]:text-white
                text-xs sm:text-sm p-2"
              >
                <Info size={16} />
                <span className="hidden sm:inline">About</span>
              </TabsTrigger>

              {/* EX Tab with Dropdown */}
              <div className="flex-1 relative">
                <TabsTrigger
                  value="ex"
                  className="tab-trigger w-full flex items-center justify-center gap-2 text-indigo-600 
                  data-[state=active]:bg-indigo-600 data-[state=active]:text-white
                  text-xs sm:text-sm p-2"
                >
                  <Headphones size={16} />
                  <span className="hidden sm:inline">EX</span>
                </TabsTrigger>
                <div className="dropdown-menu">
                  <button
                    className="dropdown-item flex items-center gap-2"
                    onClick={() => handleViewChange("freshservice")}
                  >
                    <Settings size={16} className="text-green-600" />
                    Freshservice
                  </button>
                </div>
              </div>

              {/* CX Tab with Dropdown */}
              <div className="flex-1 relative">
                <TabsTrigger
                  value="cx"
                  className="tab-trigger w-full flex items-center justify-center gap-2 text-teal-600 
                  data-[state=active]:bg-teal-600 data-[state=active]:text-white
                  text-xs sm:text-sm p-2"
                >
                  <Users size={16} />
                  <span className="hidden sm:inline">CX</span>
                </TabsTrigger>
                <div className="dropdown-menu">
                  <button
                    className="dropdown-item flex items-center gap-2"
                    onClick={() => handleViewChange("freshdesk")}
                  >
                    <HelpCircle size={16} className="text-blue-600" />
                    Freshdesk
                  </button>
                  <button className="dropdown-item flex items-center gap-2" onClick={() => handleViewChange("zendesk")}>
                    <MessageCircle size={16} className="text-green-600" />
                    Zendesk
                  </button>
                </div>
              </div>

              {/* Zoom Tab with logo image */}
              <TabsTrigger
                value="zoom"
                className="tab-trigger flex-1 flex items-center justify-center gap-2 text-blue-500 
                data-[state=active]:bg-blue-500 data-[state=active]:text-white
                text-xs sm:text-sm p-2"
              >
                <img
                  src="https://logos-world.net/wp-content/uploads/2021/02/Zoom-Emblem.png"
                  alt="Zoom"
                  className="h-4 w-4 object-contain"
                />
                <span className="hidden sm:inline">Zoom</span>
              </TabsTrigger>

              <TabsTrigger
                value="services"
                className="tab-trigger flex-1 flex items-center justify-center gap-2 text-purple-600 
                data-[state=active]:bg-purple-600 data-[state=active]:text-white
                text-xs sm:text-sm p-2"
              >
                <Briefcase size={16} />
                <span className="hidden sm:inline">Services</span>
              </TabsTrigger>
              <TabsTrigger
                value="successes"
                className="tab-trigger flex-1 flex items-center justify-center gap-2 text-orange-600 
                data-[state=active]:bg-orange-600 data-[state=active]:text-white
                text-xs sm:text-sm p-2"
              >
                <Trophy size={16} />
                <span className="hidden sm:inline">Successes</span>
              </TabsTrigger>

              {/* Pricing Tab - at the end */}
              <TabsTrigger
                value="pricing"
                className="tab-trigger flex-1 flex items-center justify-center gap-2 text-green-600 
                data-[state=active]:bg-green-600 data-[state=active]:text-white
                text-xs sm:text-sm p-2"
              >
                <DollarSign size={16} />
                <span className="hidden sm:inline">Pricing</span>
              </TabsTrigger>
            </TabsList>

            {/* Tab content sections */}
            <TabsContent value="about" className="tab-content">
              <About />
            </TabsContent>
            <TabsContent value="ex" className="tab-content">
              <EXOverview />
            </TabsContent>
            <TabsContent value="cx" className="tab-content">
              <CXOverview />
            </TabsContent>
            {/* Zoom tab content */}
            <TabsContent value="zoom" className="tab-content">
              <ZoomSolutions />
            </TabsContent>
            <TabsContent value="pricing" className="tab-content">
              <Pricing />
            </TabsContent>
            <TabsContent value="services" className="tab-content">
              <Services />
            </TabsContent>
            <TabsContent value="successes" className="tab-content">
              <Successes />
            </TabsContent>
            <TabsContent value="freshdesk" className="tab-content">
              <FreshdeskConsulting />
            </TabsContent>
            <TabsContent value="zendesk" className="tab-content">
              <ZendeskConsulting />
            </TabsContent>
            <TabsContent value="freshservice" className="tab-content">
              <FreshserviceConsulting />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Moved gradient banner to bottom with merged text and bottom border */}
      <div className="bg-gradient-to-r from-red-500 via-white to-red-500 text-black py-2 text-center text-sm mt-auto border-b-2 border-gray-300">
        <p className="flex items-center justify-center">
          Made with
          <span className="mx-2 relative">
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="h-0.5 w-[150%] bg-black transform -scale-x-100 rotate-[150deg]"></span>
            </span>
            <span className="text-2xl">❤️</span>
          </span>
          the coolest, most powerful DX AI on the planet
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 262 52"
            height="18"
            className="inline-block ml-2"
          >
            <path
              fill="#000000"
              d="M59.8019 52L29.9019 0L0.00190544 52H59.8019ZM89.9593 49.6328L114.947 2.36365H104.139L86.9018 36.6921L69.6647 2.36365H58.8564L83.8442 49.6328H89.9593ZM260.25 2.36365V49.6329H251.302V2.36365H260.25ZM210.442 31.99C210.442 28.3062 211.211 25.0661 212.749 22.2699C214.287 19.4737 216.431 17.321 219.181 15.812C221.93 14.3029 225.146 13.5484 228.828 13.5484C225.146 43.7075 221.93 42.9529 219.181 41.4438C216.431 40.0018 214.287 37.8491 212.749 35.0529C211.211 32.2567 210.442 31.99Z"
            />
          </svg>
        </p>
      </div>
    </div>
  )
}
