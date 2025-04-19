"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Loader2 } from "lucide-react"
import dynamic from "next/dynamic"

const ConfettiExplosion = dynamic(() => import("react-confetti-explosion"), { ssr: false })

export default function TaskSubmissionForm({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [priority, setPriority] = useState("")
  const [serviceType, setServiceType] = useState("")
  const [description, setDescription] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isExploding, setIsExploding] = useState(false)

  useEffect(() => {
    if (isSuccess) {
      setIsExploding(true)
      const timer = setTimeout(() => setIsExploding(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [isSuccess])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const response = await fetch("/api/submit-task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          phone,
          priority,
          serviceType,
          description,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit task")
      }

      // Clear form and show success
      setEmail("")
      setPhone("")
      setPriority("")
      setServiceType("")
      setDescription("")
      setIsSuccess(true)
    } catch (error) {
      console.error("Error submitting task:", error)
      setErrorMessage(error instanceof Error ? error.message : "An unexpected error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold mb-4 text-primary">Submit a Task</h2>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="priority">Priority</Label>
          <Select value={priority} onValueChange={setPriority} disabled={isSubmitting}>
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Urgent - within 24 hrs</SelectItem>
              <SelectItem value="2">High - within 2 business days</SelectItem>
              <SelectItem value="3">Medium - within 5 business days</SelectItem>
              <SelectItem value="4">Low - within 10 business days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceType">What do you need?</Label>
          <Select value={serviceType} onValueChange={setServiceType} disabled={isSubmitting}>
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="saas">SaaS Configuration</SelectItem>
              <SelectItem value="email">Email Management</SelectItem>
              <SelectItem value="security">Security Solutions</SelectItem>
              <SelectItem value="automation">Workflow Automation</SelectItem>
              <SelectItem value="ai">AI Integration</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Task Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="h-32"
            disabled={isSubmitting}
          />
        </div>

       <Button
          type="submit"
          className="w-full bg-accent text-white hover:bg-white hover:text-accent border-2 border-white hover:border-purple-500 transition-all duration-300 ease-in-out"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
            </>
          ) : (
            "Submit Task"
          )}
        </Button>
      </form>

      {/* Error Dialog */}
      <Dialog open={!!errorMessage} onOpenChange={() => setErrorMessage(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Error</DialogTitle>
            <DialogDescription>{errorMessage}</DialogDescription>
          </DialogHeader>
          <Button onClick={() => setErrorMessage(null)}>Close</Button>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={isSuccess} onOpenChange={() => setIsSuccess(false)}>
        <DialogContent className="bg-gradient-to-r from-primary to-secondary text-white">
          {isExploding && <ConfettiExplosion />}
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Task Submitted Successfully!</DialogTitle>
            <DialogDescription className="text-lg text-white opacity-90">
              Thank you for submitting your task. I'll review it and get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => {
              setIsSuccess(false)
              onClose()
            }}
            className="mt-4 bg-white text-primary hover:bg-opacity-90"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
