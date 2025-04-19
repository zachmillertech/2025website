"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Loader2 } from "lucide-react"

export default function ContactForm({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      // Clear form and show confirmation
      setName("")
      setEmail("")
      setPhone("")
      setMessage("")
      setShowConfirmation(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold mb-4 text-primary">Contact Me</h2>
        <p className="text-sm text-muted-foreground mb-4">
          How can I help with your new project? I'd love to hear about it! I'll respond within 2 business days to
          discuss how we can work together.
        </p>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border-secondary"
          disabled={isSubmitting}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border-secondary"
          disabled={isSubmitting}
        />
        <Input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="border-secondary"
          disabled={isSubmitting}
        />
        <Textarea
          placeholder="How can I help with your project?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="border-secondary"
          disabled={isSubmitting}
        />

        <Button type="submit" className="w-full bg-accent text-white hover:bg-accent/90" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
            </>
          ) : (
            "Send"
          )}
        </Button>
      </form>

      {/* Error Dialog */}
      <Dialog open={!!error} onOpenChange={() => setError(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-red-500">Error</DialogTitle>
            <DialogDescription>{error}</DialogDescription>
          </DialogHeader>
          <Button onClick={() => setError(null)}>Close</Button>
        </DialogContent>
      </Dialog>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-green-500">Message Sent!</DialogTitle>
            <DialogDescription>
              Thank you for reaching out. I'll get back to you within 2 business days.
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => {
              setShowConfirmation(false)
              onClose()
            }}
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
