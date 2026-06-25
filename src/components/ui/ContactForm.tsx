import { useEffect, useRef, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'

const projectTypes = [
  'Website',
  'Dashboard',
  'Automation',
  'API Integration',
  'Shopify',
  'Full Digital System',
  'Not sure yet',
] as const

const budgetOptions = ['€2k to €5k', '€5k to €10k', '€10k to €20k', '€20k+'] as const

export function ContactForm() {
  const [projectType, setProjectType] = useState<string>('')
  const [budget, setBudget] = useState<string>('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const successRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (submitted) {
      successRef.current?.focus()
    }
  }, [submitted])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        ref={successRef}
        tabIndex={-1}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-strong rounded-2xl p-8 text-center md:p-12"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-border surface-highlight">
          <CheckCircle className="h-7 w-7 text-foreground" strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-medium text-foreground">Message received</h3>
        <p className="mt-3 text-muted">
          Thanks for reaching out. We will review your project details and get back to you
          within 24 hours on business days.
        </p>
        <Button
          variant="secondary"
          size="md"
          className="mt-8"
          onClick={() => {
            setSubmitted(false)
            setProjectType('')
            setBudget('')
            setMessage('')
          }}
        >
          Send another message
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="glass-strong space-y-8 rounded-2xl p-6 md:p-10">
      <fieldset>
        <legend className="mb-4 text-sm font-medium text-foreground">
          Project type
        </legend>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setProjectType(type)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm transition-colors duration-200',
                projectType === type
                  ? 'border-border-hover surface-highlight-strong text-foreground'
                  : 'border-border text-muted hover:border-border-hover hover:text-foreground',
              )}
            >
              {type}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-4 text-sm font-medium text-foreground">Budget range</legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {budgetOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setBudget(option)}
              className={cn(
                'rounded-xl border px-4 py-3 text-sm transition-colors duration-200',
                budget === option
                  ? 'border-border-hover surface-highlight-strong text-foreground'
                  : 'border-border text-muted hover:border-border-hover hover:text-foreground',
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="mb-3 block text-sm font-medium text-foreground">
          Tell us about your project
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What are you building? What problems are you trying to solve?"
          className="w-full resize-none rounded-xl border border-border surface-highlight px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-border-hover focus:outline-none focus:ring-1 focus:ring-foreground/10"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto" magnetic>
        Send Message
        <Send className="h-4 w-4" />
      </Button>
    </form>
  )
}
