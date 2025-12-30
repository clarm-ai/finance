'use client'

import { 
  Shield, 
  Zap, 
  FileCheck, 
  Lock, 
  Server,
  ArrowRight,
  Check,
  Clock,
  TrendingUp,
  AlertCircle,
  Database,
  Search,
  Brain,
  HeadphonesIcon,
  Monitor
} from 'lucide-react'
import Link from 'next/link'

// Clarm Logo Component
const ClarmLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.445 21.832a1 1 0 0 0 1.11 0l9-6A.998.998 0 0 0 21.8 14.4l-9-12c-.377-.504-1.223-.504-1.6 0l-9 12a1 1 0 0 0 .245 1.432l9 6zM13 19.131V6l6.565 8.754L13 19.131zM11 6v13.131l-6.565-4.377L11 6z"/>
  </svg>
)

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--finance-bg)]/90 backdrop-blur-md border-b border-[var(--finance-border)]">
        <div className="finance-container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <ClarmLogo className="w-8 h-8" />
              <span className="text-xl font-bold">Clarm <span className="font-medium text-[var(--finance-muted)]">for Finance</span></span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#use-cases" className="finance-body-sm hover:text-[var(--finance-primary)] transition-colors">
                Use Cases
              </Link>
              <Link href="#features" className="finance-body-sm hover:text-[var(--finance-primary)] transition-colors">
                Features
              </Link>
              <Link href="#security" className="finance-body-sm hover:text-[var(--finance-primary)] transition-colors">
                Security
              </Link>
              <Link 
                href="https://cal.com/stormm" 
                className="finance-btn-primary !py-2 !px-4"
              >
                Get Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 finance-grid-bg relative overflow-hidden">
        <div className="finance-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center gap-4 mb-8 animate-fade-in-up">
              <Link 
                href="https://www.ycombinator.com/companies/clarm" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#FF6600]/10 border border-[#FF6600]/20 hover:bg-[#FF6600]/20 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FF6600">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <div className="text-left">
                  <div className="text-sm font-semibold text-[#FF6600]">Backed by Y Combinator</div>
                  <div className="text-xs text-[var(--finance-muted)]">X25 Batch · Top 0.5% of startups globally</div>
                </div>
              </Link>
              <p className="text-xs text-[var(--finance-light)] max-w-md">
                Y Combinator is Silicon Valley&apos;s most prestigious startup accelerator, having backed Stripe, Airbnb, Coinbase, and 4,000+ companies worth over $600B.
              </p>
            </div>
            
            <h1 className="finance-display mb-6 animate-fade-in-up animation-delay-100">
              AI agents that
              <span className="finance-gradient-text"> understand finance</span>
            </h1>
            
            <p className="finance-body-lg max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
              Deep research agents for customer service, knowledge search, and document intelligence. 
              Built by ex-Deutsche Bank AI leaders for high-trust financial workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
              <Link href="https://cal.com/stormm" className="finance-btn-primary">
                Schedule Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#use-cases" className="finance-btn-secondary">
                See Use Cases
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-[var(--finance-border)] animate-fade-in-up animation-delay-400">
              <div className="finance-stat">
                <div className="finance-stat-value">40+</div>
                <div className="finance-stat-label">Enterprise Integrations</div>
              </div>
              <div className="finance-stat">
                <div className="finance-stat-value">85%</div>
                <div className="finance-stat-label">Faster Resolution</div>
              </div>
              <div className="finance-stat">
                <div className="finance-stat-value">Zero</div>
                <div className="finance-stat-label">Hallucinations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="finance-section bg-[var(--finance-bg-subtle)]">
        <div className="finance-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="finance-h2 mb-4">
              Generic AI doesn&apos;t work for finance
            </h2>
            <p className="finance-body-lg">
              ChatGPT hallucinates. Generic tools lack compliance. Your customers 
              and analysts deserve AI that actually understands financial services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: AlertCircle,
                title: "LLMs hallucinate facts",
                description: "Generic AI makes up numbers, cites non-existent regulations, and can't be trusted for compliance-critical work."
              },
              {
                icon: Clock,
                title: "Analysts waste hours searching",
                description: "Knowledge is scattered across PDFs, emails, and legacy systems. Finding the right answer takes forever."
              },
              {
                icon: TrendingUp,
                title: "Customer service is slow",
                description: "Reps toggle between 10+ systems to answer simple questions. Customers wait, satisfaction drops."
              }
            ].map((item, index) => (
              <div key={index} className="finance-card">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="finance-h3 mb-2">{item.title}</h3>
                <p className="finance-body-md">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="finance-section">
        <div className="finance-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="finance-badge mb-4">Use Cases</div>
            <h2 className="finance-h2 mb-4">
              AI agents for every financial workflow
            </h2>
            <p className="finance-body-lg">
              From customer support to compliance research, Clarm agents handle 
              complex queries with precision and zero hallucinations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: HeadphonesIcon,
                title: "Customer Service Automation",
                description: "AI agents that answer customer queries instantly by searching across all your systems - accounts, policies, transactions, and documents. Reduce handle time by 70%.",
                features: ["Multi-system search", "Policy lookups", "Account inquiries", "Transaction history"]
              },
              {
                icon: Search,
                title: "Knowledge Search & Research",
                description: "Deep research agents that find answers across regulatory docs, internal policies, market data, and historical records. No more hunting through PDFs.",
                features: ["Regulatory research", "Policy search", "Market analysis", "Precedent lookup"]
              },
              {
                icon: FileCheck,
                title: "Document Intelligence",
                description: "Extract and validate data from financial documents with 99%+ accuracy. Tax returns, statements, contracts - all automated with full audit trails.",
                features: ["Tax return parsing", "Statement analysis", "Contract extraction", "Compliance checks"]
              },
              {
                icon: Brain,
                title: "Analyst Copilot",
                description: "Augment your analysts with AI that synthesizes data from 40+ enterprise systems. Generate reports, surface insights, and accelerate due diligence.",
                features: ["Data synthesis", "Report generation", "Risk analysis", "Due diligence"]
              }
            ].map((useCase, index) => (
              <div key={index} className="finance-card-elevated">
                <div className="finance-icon-container mb-6">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="finance-h3 mb-3">{useCase.title}</h3>
                <p className="finance-body-md mb-6">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {useCase.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-white/60" />
                      <span className="finance-body-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="finance-section bg-[var(--finance-bg-subtle)]">
        <div className="finance-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="finance-badge mb-4">Platform</div>
            <h2 className="finance-h2 mb-4">
              Built different for high-trust environments
            </h2>
            <p className="finance-body-lg">
              Not another chatbot wrapper. Clarm agents execute precise, repeatable workflows 
              across your enterprise systems with zero hallucinations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Database,
                title: "40+ Integrations",
                description: "Connect to Salesforce, ServiceNow, core banking systems, document stores, and more. Your data stays where it is."
              },
              {
                icon: Shield,
                title: "Zero Hallucinations",
                description: "Every response is grounded in your data with full citations. No made-up facts, no compliance risks."
              },
              {
                icon: Zap,
                title: "Sub-second Responses",
                description: "Agents search across millions of records in milliseconds. Your customers and analysts don't wait."
              },
              {
                icon: Lock,
                title: "Full Audit Trail",
                description: "Every query, every answer, every source - logged and traceable. Meet regulatory requirements with confidence."
              },
              {
                icon: Monitor,
                title: "Browser Automation",
                description: "Agents navigate banking portals, regulatory sites, and market data platforms to gather and verify information automatically."
              },
              {
                icon: Server,
                title: "Deploy Anywhere",
                description: "Cloud, on-premise, or air-gapped. Your security requirements, our flexibility."
              }
            ].map((feature, index) => (
              <div key={index} className="finance-card">
                <div className="finance-icon-container mb-4">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="finance-body-md">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="finance-section">
        <div className="finance-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="finance-badge mb-4">Security First</div>
              <h2 className="finance-h2 mb-6">
                Built for regulated industries
              </h2>
              <p className="finance-body-lg mb-8">
                We understand that security isn&apos;t optional in financial services. 
                That&apos;s why compliance is baked into everything we do.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "SOC 2 Type II Certified",
                    description: "Independently audited security controls and processes."
                  },
                  {
                    icon: Lock,
                    title: "HIPAA Compliant",
                    description: "Full compliance for healthcare-related financial documents."
                  },
                  {
                    icon: Server,
                    title: "On-Premise Option",
                    description: "Deploy in your own environment for maximum control."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="finance-body-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="finance-card-elevated">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-white" />
                  <span className="text-white font-mono text-sm">Encryption at Rest & Transit</span>
                </div>
                <div className="bg-white/5 rounded-lg p-4 font-mono text-sm">
                  <div className="text-[var(--finance-light)]">// Your data never leaves your control</div>
                  <div className="text-white/80 mt-2">✓ AES-256 encryption</div>
                  <div className="text-white/80">✓ TLS 1.3 in transit</div>
                  <div className="text-white/80">✓ Zero data retention option</div>
                  <div className="text-white/80">✓ No training on your data</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-white/60" />
                  <span className="text-white/60 font-mono text-sm">Air-gapped deployment available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="finance-section">
        <div className="finance-container">
          <div className="rounded-2xl p-8 md:p-12 text-center bg-white">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                Ready to deploy AI that actually works?
              </h2>
              <p className="text-lg mb-8 text-neutral-600">
                See how Clarm agents can transform your customer service, research, 
                and document workflows in a 30-minute demo.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="https://cal.com/stormm" 
                  className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-lg transition-colors bg-black text-white hover:bg-neutral-800"
                >
                  Schedule a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="mailto:marcus@clarm.com" 
                  className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-lg transition-colors bg-neutral-100 text-black hover:bg-neutral-200"
                >
                  Email our CEO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[var(--finance-border)]">
        <div className="finance-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <ClarmLogo className="w-8 h-8" />
              <span className="text-xl font-bold">Clarm <span className="font-medium text-[var(--finance-muted)]">for Finance</span></span>
            </div>
            <div className="flex items-center gap-8">
              <Link href="https://clarm.com/privacy" className="finance-body-sm hover:text-[var(--finance-primary)]">
                Privacy
              </Link>
              <Link href="https://clarm.com/tos" className="finance-body-sm hover:text-[var(--finance-primary)]">
                Terms
              </Link>
              <Link href="mailto:hello@clarm.com" className="finance-body-sm hover:text-[var(--finance-primary)]">
                Contact
              </Link>
            </div>
            <div className="finance-body-sm">
              © 2026 Dialin AI Inc. d/b/a Clarm
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
