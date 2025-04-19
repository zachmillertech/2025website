"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import ContactForm from "./ContactForm"
import TaskSubmissionForm from "./TaskSubmissionForm"

export default function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isTaskSubmissionOpen, setIsTaskSubmissionOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-primary-foreground p-4">
      <nav className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">Zach Miller Tech Consulting</h1>
        <div className="space-x-2">
          <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
            <DialogTrigger asChild>
              <Button className="bg-accent text-white hover:bg-white hover:text-accent border-2 border-white hover:border-purple-500 transition-all duration-300 ease-in-out">
                Contact Me
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <ContactForm onClose={() => setIsContactOpen(false)} />
            </DialogContent>
          </Dialog>
          <Dialog open={isTaskSubmissionOpen} onOpenChange={setIsTaskSubmissionOpen}>
            <DialogTrigger asChild>
              <Button className="bg-accent text-white hover:bg-white hover:text-accent border-2 border-white hover:border-purple-500 transition-all duration-300 ease-in-out">
                Submit a Task
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <TaskSubmissionForm onClose={() => setIsTaskSubmissionOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </nav>
    </header>
  )
}
