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
                  <div className="dropdown-menu">
                    <button
                      className="dropdown-item flex items-center gap-2"
                      onClick={() => handleViewChange("freshservice")}
                    >
                      <Settings size={16} className="text-green-600" />
                      Freshservice
                    </button>
                  </div>
                </TabsTrigger>
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
                  <div className="dropdown-menu">
                    <button
                      className="dropdown-item flex items-center gap-2"
                      onClick={() => handleViewChange("freshdesk")}
                    >
                      <HelpCircle size={16} className="text-blue-600" />
                      Freshdesk
                    </button>
                    <button
                      className="dropdown-item flex items-center gap-2"
                      onClick={() => handleViewChange("zendesk")}
                    >
                      <MessageCircle size={16} className="text-green-600" />
                      Zendesk
                    </button>
                  </div>
                </TabsTrigger>
              </div>

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
              d="M59.8019 52L29.9019 0L0.00190544 52H59.8019ZM89.9593 49.6328L114.947 2.36365H104.139L86.9018 36.6921L69.6647 2.36365H58.8564L83.8442 49.6328H89.9593ZM260.25 2.36365V49.6329H251.302V2.36365H260.25ZM210.442 31.99C210.442 28.3062 211.211 25.0661 212.749 22.2699C214.287 19.4737 216.431 17.321 219.181 15.812C221.93 14.3029 225.146 13.5484 228.828 13.5484C232.09 13.5484 235.026 14.2585 237.636 15.6788C240.245 17.0991 242.319 19.2074 243.857 22.0036C245.395 24.7998 246.187 28.2174 246.234 32.2564V34.3202H219.88C220.066 37.2496 220.928 39.5576 222.466 41.2442C224.051 42.8864 226.171 43.7075 228.828 43.7075C230.505 43.7075 232.043 43.2637 233.441 42.376C234.839 41.4883 235.888 40.2899 236.587 38.7808L245.745 39.4466C244.626 42.7754 242.529 45.4385 239.453 47.4358C236.377 49.4331 232.835 50.4317 228.828 50.4317C225.146 50.4317 221.93 49.6772 219.181 48.1681C216.431 46.6591 214.287 44.5064 212.749 41.7102C211.211 38.914 210.442 35.6739 210.442 31.99ZM237.006 28.6612C236.68 25.7762 235.771 23.668 234.28 22.3365C232.789 20.9606 230.971 20.2726 228.828 20.2726C226.358 20.2726 224.354 21.0049 222.816 22.4696C221.278 23.9343 220.322 25.9982 219.95 28.6612H237.006ZM195.347 22.3365C196.838 23.5348 197.77 25.1993 198.143 27.3297L207.371 26.8637C207.044 24.1562 206.089 21.8039 204.505 19.8066C202.92 17.8093 200.869 16.278 198.353 15.2128C195.883 14.1032 193.157 13.5484 190.174 13.5484C186.492 13.5484 183.277 14.3029 180.527 15.812C177.777 17.321 175.634 19.4737 174.096 22.2699C172.558 25.0661 171.789 28.3062 171.789 31.99C171.789 35.6739 172.558 38.914 174.096 41.7102C175.634 44.5064 177.777 46.6591 180.527 48.1681C183.277 49.6772 186.492 50.4317 190.174 50.4317C193.25 50.4317 196.046 49.8769 198.563 48.7673C201.079 47.6133 203.13 45.9933 204.714 43.9072C206.299 41.8212 207.254 39.38 207.58 36.5838L198.283 36.1844C197.957 38.5367 197.048 40.3565 195.557 41.6436C194.065 42.8864 192.271 43.5078 190.174 43.5078C187.285 43.5078 185.048 42.5091 183.463 40.5118C181.879 38.5145 181.086 35.6739 181.086 31.99C181.086 28.3062 181.879 25.4656 183.463 23.4683C185.048 21.471 187.285 20.4723 190.174 20.4723C192.178 20.4723 193.902 21.0937 195.347 22.3365ZM149.955 14.3457H158.281L158.522 21.1369C159.113 19.2146 159.935 17.7218 160.988 16.6585C162.514 15.1166 164.642 14.3457 167.371 14.3457H170.771V21.6146H167.302C165.359 21.6146 163.763 21.8789 162.514 22.4075C161.311 22.9362 160.386 23.7732 159.739 24.9186C159.137 26.064 158.837 27.5178 158.837 29.2799V49.6328H149.955V14.3457ZM111.548 22.2699C110.01 25.0661 109.241 28.3062 109.241 31.99C109.241 35.6739 110.01 38.914 111.548 41.7102C113.086 44.5064 115.229 46.6591 117.979 48.1681C120.729 49.6772 123.944 50.4317 127.626 50.4317C131.634 50.4317 135.176 49.4331 138.252 47.4358C141.327 45.4385 143.425 42.7754 144.543 39.4466L135.385 38.7808C134.686 40.2899 133.638 41.4883 132.24 42.376C130.842 43.2637 129.304 43.7075 127.626 43.7075C124.97 43.7075 122.849 42.8864 121.265 41.2442C119.727 39.5576 118.865 37.2496 118.678 34.3202H145.032V32.2564C144.986 28.2174 144.194 24.7998 142.656 22.0036C141.118 19.2074 139.044 17.0991 136.434 15.6788C133.824 14.2585 130.888 13.5484 127.626 13.5484C123.944 13.5484 120.729 14.3029 117.979 15.812C115.229 17.321 113.086 19.4737 111.548 22.2699ZM133.079 22.3365C134.57 23.668 135.479 25.7762 135.805 28.6612H118.748C119.121 25.9982 120.076 23.9343 121.614 22.4696C123.152 21.0049 125.156 20.2726 127.626 20.2726C129.77 20.2726 131.587 20.9606 133.079 22.3365Z"
            />
          </svg>
        </p>
      </div>

      <footer className="bg-gradient-to-r from-secondary to-primary text-primary-foreground p-4">
        <div className="max-w-7xl mx-auto text-center">
          © {currentYear} Zach Miller Tech Consulting. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
