import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Mail } from 'lucide-react'
import { TypewriterCardTitle, TypewriterText } from '@/components/ui/TypewriterText'
import { ROTATE_SETS } from '@/data/rotateWords'
import { siteConfig } from '@/data/siteConfig'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ContactForm } from '@/components/ui/ContactForm'
import { Button } from '@/components/ui/Button'
import { fadeUp, defaultViewport } from '@/utils/animations'
import { TW_CHAR_FAST } from '@/utils/typewriterConfig'

export function Contact() {
  return (
    <section className="section-padding flex flex-1 flex-col pt-32 md:pt-40">
      <div className="container-wide flex flex-1 flex-col">
          <SectionHeader
            eyebrow="Contact"
            title=""
            rotateWords={[...ROTATE_SETS.contact]}
            titleAfterRotate="let's discuss."
            description="Tell us what you need and we will get back to you with a straight answer on scope and cost."
            className="mb-12 md:mb-16"
          />

          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <motion.aside
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="lg:col-span-2"
            >
              <div className="space-y-6">
                <div className="glass rounded-2xl p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border surface-highlight">
                    <Calendar className="h-5 w-5 text-foreground" strokeWidth={1.5} />
                  </div>
                  <TypewriterCardTitle className="text-lg font-medium">
                    Book a call
                  </TypewriterCardTitle>
                  <p className="mt-2 text-sm leading-relaxed">
                    <TypewriterText
                      text="Prefer to talk it through? Schedule a discovery call and we will map out the best path forward."
                      muted
                      delay={0.5}
                      charDelay={TW_CHAR_FAST}
                    />
                  </p>
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    className="mt-4 w-full"
                    magnetic
                  >
                    Book a Call
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="glass rounded-2xl p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border surface-highlight">
                    <Mail className="h-5 w-5 text-foreground" strokeWidth={1.5} />
                  </div>
                  <TypewriterCardTitle className="text-lg font-medium" delay={0.2}>
                    Email us
                  </TypewriterCardTitle>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
                  >
                    <TypewriterText
                      text={siteConfig.contact.email}
                      delay={1}
                      charDelay={0.03}
                    />
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.aside>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3"
            >
              <ContactForm />
            </motion.div>
          </div>
      </div>
    </section>
  )
}
