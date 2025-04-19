"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectProps {
  project: {
    id: string
    title: string
    companyLogo: string
    companyName: string
    situation: string
    problem: string
    solution: string
    outcome: string
  }
}

export default function ProjectTemplate({ project }: ProjectProps) {
  const [activeCard, setActiveCard] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && activeCard < 3) {
      setActiveCard((prev) => prev + 1)
    }
    if (isRightSwipe && activeCard > 0) {
      setActiveCard((prev) => prev - 1)
    }
  }

  const cards = [
    { title: "Situation", content: project.situation },
    { title: "Problem", content: project.problem },
    { title: "Solution", content: project.solution },
    { title: "Outcome", content: project.outcome },
  ]

  const goToCard = (index: number) => {
    setActiveCard(index)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-32">
          <Image
            src={project.companyLogo || "/placeholder.svg"}
            alt={`${project.companyName} logo`}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h3 className="text-xl font-bold">{project.title}</h3>
      </div>

      {/* Mobile view with swipe */}
      {isMobile && (
        <div className="md:hidden" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          <div className="relative">
            <Card className="min-h-[250px]">
              <CardHeader>
                <CardTitle>{cards[activeCard].title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{cards[activeCard].content}</p>
              </CardContent>
            </Card>

            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
              {activeCard > 0 && (
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/80 backdrop-blur-sm"
                  onClick={() => goToCard(activeCard - 1)}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous card</span>
                </Button>
              )}
            </div>

            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
              {activeCard < 3 && (
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/80 backdrop-blur-sm"
                  onClick={() => goToCard(activeCard + 1)}
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next card</span>
                </Button>
              )}
            </div>
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {cards.map((_, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className={`w-2 h-2 p-0 rounded-full ${activeCard === index ? "bg-primary" : "bg-muted"}`}
                onClick={() => goToCard(index)}
              >
                <span className="sr-only">Go to card {index + 1}</span>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Desktop view with grid */}
      <div className="hidden md:grid md:grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{card.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
