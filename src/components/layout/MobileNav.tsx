import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { siteConfig } from '@/data/siteConfig'
import { TypewriterText } from '@/components/ui/TypewriterText'
import { Button } from '@/components/ui/Button'

interface MobileNavProps {
  onClose: () => void
}

export function MobileNav({ onClose }: MobileNavProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-40 md:hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-background/90 backdrop-blur-xl"
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex h-full flex-col px-5 pb-8 pt-24"
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col gap-1">
          {siteConfig.nav.map((item, i) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 + i * 0.05 }}
            >
              <Link
                to={item.href}
                onClick={onClose}
                className="block py-4 text-3xl font-medium tracking-tight"
              >
                <TypewriterText
                  text={item.label}
                  startOnView={false}
                  delay={0.1 + i * 0.15}
                  charDelay={0.05}
                />
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-auto"
        >
          <Button href="/contact" variant="primary" size="lg" className="w-full" magnetic>
            Book a Call
          </Button>
        </motion.div>
      </motion.nav>
    </motion.div>
  )
}
