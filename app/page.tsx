'use client'

import {
  ArrowRight,
  Check,
  Clock,
  Filter,
  Layers,
  LineChart,
  MessageSquare,
  Shield,
  TrendingUp,
  Users
} from 'lucide-react'

// Clarm Logo Component
const ClarmLogo = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.445 21.832a1 1 0 0 0 1.11 0l9-6A.998.998 0 0 0 21.8 14.4l-9-12c-.377-.504-1.223-.504-1.6 0l-9 12a1 1 0 0 0 .245 1.432l9 6zM13 19.131V6l6.565 8.754L13 19.131zM11 6v13.131l-6.565-4.377L11 6z" />
  </svg>
)

const funnelSteps = [
  {
    icon: Layers,
    step: 'Step 1',
    title: 'Existing traffic',
    description:
      'Assume 100% of existing inbound traffic. Visitors already have intent, but most of it never enters the funnel.',
    points: ['No growth assumptions', 'Demand already exists']
  },
  {
    icon: MessageSquare,
    step: 'Step 2',
    title: 'Entry point effect (chat vs email)',
    description:
      'Chat removes effort, delay, and uncertainty by appearing at the moment of decision.',
    points: [
      'Baseline: only 5 to 10% of visitors with questions email or submit a form',
      'With automated chat: 30 to 50% more conversations captured',
      'This surfaces existing demand, it does not create it'
    ]
  },
  {
    icon: Clock,
    step: 'Step 3',
    title: 'Speed-to-response effect',
    description:
      'Instant responses prevent intent decay and eliminate follow-up friction.',
    points: [
      'Baseline: email and ticket queues respond in hours or days',
      'With Revenue Desk: 100% of inbound receives an instant first response',
      'Instant response yields 100 to 400% higher conversion likelihood vs delayed response',
      'Supports a conservative 20 to 50% uplift in inbound-sourced revenue'
    ]
  },
  {
    icon: Filter,
    step: 'Step 4',
    title: 'Intent qualification',
    description:
      'Revenue-bearing conversations are identified immediately, not buried in the queue.',
    points: [
      'Roughly 25% of inbound contains buying or expansion intent',
      '100% of inbound is automatically classified',
      'Humans engage only where money is involved'
    ]
  },
  {
    icon: Users,
    step: 'Step 5',
    title: 'Human handoff and cost impact',
    description:
      'Automation removes reactive work and keeps coverage on after hours.',
    points: [
      '40 to 60% of reactive inbound work is fully automated',
      'About 60% of inbound arrives outside business hours',
      'Automation replaces 100 to 200% of after-hours coverage',
      'Teams focus on high-intent conversations and close faster'
    ]
  }
]

const roiCards = [
  {
    icon: TrendingUp,
    title: 'Revenue uplift',
    description: '20 to 50% increase in inbound-sourced revenue',
    points: [
      '30 to 50% more conversations captured',
      'Higher conversion from instant response',
      'No lost after-hours demand'
    ]
  },
  {
    icon: LineChart,
    title: 'Cost efficiency',
    description: '40 to 60% reduction in reactive inbound workload',
    points: ['No need to staff for around-the-clock coverage', 'Higher revenue per employee']
  },
  {
    icon: MessageSquare,
    title: 'Demand recovery',
    description: '30 to 50% more inbound conversations captured vs email-only',
    points: [
      'Email becomes a single-digit percent of inbound once chat is present',
      'Chat matches buyer behavior at decision time'
    ]
  },
  {
    icon: Shield,
    title: 'Availability advantage',
    description: '60% of inbound happens outside business hours',
    points: ['Automation turns downtime into revenue time', 'Coverage stays consistent and auditable']
  }
]

const reasons = [
  {
    title: 'Buyers initiate late',
    description:
      'Inbound conversations happen when buyers are already deep in the decision process, which makes them disproportionately valuable.'
  },
  {
    title: 'Speed beats sophistication',
    description:
      'Conversion is dominated by response time, not tooling depth. Instant answers outperform complex workflows.'
  },
  {
    title: 'Humans do not scale',
    description:
      'Live chat tools still rely on staffing. Revenue Desk makes around-the-clock coverage automatic.'
  },
  {
    title: 'Most inbound is repetitive',
    description:
      'Pricing, eligibility, status, renewals, and comparisons repeat endlessly. Automation handles this layer.'
  },
  {
    title: 'Other tools stop short',
    description:
      'Chatbots deflect but do not qualify revenue. Help desks optimize resolution, CRMs start after the conversation exists.'
  }
]

const intentSignals = [
  'Pricing questions',
  'Plan or product comparisons',
  'Eligibility or compliance checks',
  'Payment methods',
  'Contract length',
  'Upgrades',
  'Renewals'
]

const industries = [
  'Banks',
  'Insurers',
  'Asset managers',
  'Fintechs',
  'Payments companies',
  'Marketplaces',
  'Regulated service providers'
]

const roles = [
  'CFOs',
  'Heads of Sales',
  'Heads of Support',
  'Digital transformation leads',
  'Operations and RevOps'
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--finance-bg)]/90 backdrop-blur-md border-b border-[var(--finance-border)]">
        <div className="finance-container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <ClarmLogo className="w-8 h-8" />
              <span className="text-xl font-bold">
                Clarm <span className="font-medium text-[var(--finance-muted)]">Revenue Desk</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#audience" className="finance-body-sm hover:text-[var(--finance-primary)] transition-colors">
                Audience
              </a>
              <a href="#funnel" className="finance-body-sm hover:text-[var(--finance-primary)] transition-colors">
                Funnel
              </a>
              <a href="#roi" className="finance-body-sm hover:text-[var(--finance-primary)] transition-colors">
                ROI
              </a>
              <a href="#trust" className="finance-body-sm hover:text-[var(--finance-primary)] transition-colors">
                Why it works
              </a>
              <a href="https://cal.com/stormm" className="finance-btn-primary !py-2 !px-4">
                Get Demo
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 finance-grid-bg relative overflow-hidden">
        <div className="finance-hero-grid" aria-hidden="true" />
        <div className="finance-hero-glow animate-glow" aria-hidden="true" />
        <div className="finance-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center gap-4 mb-8 animate-fade-in-up">
              <div className="finance-badge animate-pulse-soft">New product launch</div>
              <div className="finance-pill-group justify-start">
                <span className="finance-pill">Revenue Desk for Finance</span>
                <span className="finance-pill">Your inbound, working around the clock</span>
              </div>
            </div>

            <h1 className="finance-display mb-6 animate-fade-in-up animation-delay-100">
              Turn inbound to revenue, on autopilot
            </h1>

            <p className="finance-body-lg max-w-3xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
              Revenue Desk captures inbound conversations across chat and email, qualifies revenue intent in real time, captures intent that would otherwise be lost, and routes only high-value opportunities to humans around the clock without adding headcount.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
              <a href="https://cal.com/stormm" className="finance-btn-primary">
                Book a demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#funnel" className="finance-btn-secondary">
                See the funnel
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-10 animate-fade-in-up animation-delay-400">
              {[
                'Capture more intent without more traffic',
                'Convert faster without hiring',
                'Automate inbound so humans focus on money'
              ].map((item) => (
                <span key={item} className="finance-pill">
                  {item}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-[var(--finance-border)] animate-fade-in-up animation-delay-400">
              <div className="finance-stat">
                <div className="finance-stat-value">20-50%</div>
                <div className="finance-stat-label">Inbound Revenue Uplift</div>
              </div>
              <div className="finance-stat">
                <div className="finance-stat-value">30-50%</div>
                <div className="finance-stat-label">More Conversations Captured</div>
              </div>
              <div className="finance-stat">
                <div className="finance-stat-value">40-60%</div>
                <div className="finance-stat-label">Reactive Work Automated</div>
              </div>
              <div className="finance-stat">
                <div className="finance-stat-value">60%</div>
                <div className="finance-stat-label">Inbound After Hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section id="audience" className="finance-section">
        <div className="finance-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="finance-badge mb-4">Who this is for</div>
            <h2 className="finance-h2 mb-4">Revenue Desk is built for finance leaders who need ROI clarity</h2>
            <p className="finance-body-lg">
              Banks, insurers, and regulated service providers adopt Revenue Desk to increase revenue and reduce cost
              without changing pricing or adding staff.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="finance-card">
              <h3 className="finance-h3 mb-4">Primary audience</h3>
              <div className="finance-pill-group justify-start">
                {industries.map((industry) => (
                  <span key={industry} className="finance-pill">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
            <div className="finance-card">
              <h3 className="finance-h3 mb-4">Secondary audience</h3>
              <div className="finance-pill-group">
                {roles.map((role) => (
                  <span key={role} className="finance-pill">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Promise Section */}
      <section id="promise" className="finance-section bg-[var(--finance-bg-subtle)]">
        <div className="finance-container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="finance-card">
              <div className="finance-badge mb-4">Core promise</div>
              <h2 className="finance-h2 mb-4">Clarm changes what happens after inbound arrives</h2>
              <p className="finance-body-md mb-6">
                Clarm does not generate traffic. Clarm does not change pricing. Clarm does not require more staff.
              </p>
              <div className="space-y-3">
                {[
                  'No growth assumptions',
                  'No headcount increase',
                  'No changes to your existing pricing or positioning'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[var(--finance-muted)]" />
                    <span className="finance-body-md">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="finance-card-elevated">
              <h3 className="finance-h3 mb-4">What Revenue Desk does</h3>
              <p className="finance-body-md mb-6">
                Clarm increases revenue and reduces cost by changing how inbound is captured, responded to, and triaged.
              </p>
              <div className="space-y-4">
                {[
                  'Capture more intent from the traffic you already have',
                  'Respond instantly, every time, without queues',
                  'Qualify revenue intent in real time and route only high-value conversations'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-white" />
                    <span className="finance-body-md">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funnel Section */}
      <section id="funnel" className="finance-section">
        <div className="finance-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="finance-badge mb-4">Conversion funnel</div>
            <h2 className="finance-h2 mb-4">Where the revenue lift comes from</h2>
            <p className="finance-body-lg">
              Revenue Desk makes the inbound funnel explicit. It captures demand that already exists, responds instantly,
              and prioritizes only revenue-bearing conversations.
            </p>
          </div>

          <div className="grid gap-6">
            {funnelSteps.map((step) => (
              <div key={step.title} className="finance-step">
                <div className="finance-step-icon">
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="finance-step-kicker">{step.step}</div>
                  <h3 className="finance-h3 mb-2">{step.title}</h3>
                  <p className="finance-body-md mb-4">{step.description}</p>
                  <div className="finance-step-metrics">
                    {step.points.map((point) => (
                      <div key={point} className="finance-step-metric">
                        <Check className="w-4 h-4 text-[var(--finance-light)]" />
                        <span className="finance-body-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section id="roi" className="finance-section bg-[var(--finance-bg-subtle)]">
        <div className="finance-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="finance-badge mb-4">ROI, in percentages only</div>
            <h2 className="finance-h2 mb-4">Financial impact you can defend</h2>
            <p className="finance-body-lg">
              These are the only numbers Revenue Desk uses because they map directly to inbound performance,
              not vanity metrics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {roiCards.map((card) => (
              <div key={card.title} className="finance-card">
                <div className="finance-icon-container mb-4">
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="finance-h3 mb-2">{card.title}</h3>
                <p className="finance-body-md mb-4">{card.description}</p>
                <div className="space-y-2">
                  {card.points.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[var(--finance-light)]" />
                      <span className="finance-body-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intent Qualification Section */}
      <section className="finance-section">
        <div className="finance-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="finance-badge mb-4">Intent qualification</div>
              <h2 className="finance-h2 mb-4">Revenue Desk finds money moments in real time</h2>
              <p className="finance-body-lg mb-8">
                Roughly 25% of inbound conversations include buying or expansion intent. Revenue Desk identifies those
                signals immediately so humans only engage where money is involved.
              </p>
              <div className="finance-card">
                <h3 className="finance-h3 mb-4">High-intent signals Revenue Desk captures</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {intentSignals.map((signal) => (
                    <div key={signal} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[var(--finance-muted)]" />
                      <span className="finance-body-sm">{signal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="finance-card-elevated animate-float-slow">
                <h3 className="finance-h3 mb-4">Always-on coverage</h3>
                <p className="finance-body-md mb-6">
                  Automation converts after-hours demand into revenue time. Your inbound never waits and never goes dark.
                </p>
                <div className="space-y-3">
                  {[
                    '60% of inbound arrives outside business hours',
                    '100% of inbound receives an instant first response',
                    'Reactive work drops by 40 to 60%'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-white" />
                      <span className="finance-body-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="finance-card">
                <h3 className="finance-h3 mb-3">Operationally credible by design</h3>
                <p className="finance-body-md">
                  Predictable, auditable workflows replace manual triage. You see exactly where revenue was captured and
                  why it was routed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="finance-section bg-[var(--finance-bg-subtle)]">
        <div className="finance-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="finance-badge mb-4">Why this works</div>
            <h2 className="finance-h2 mb-4">Operational leverage beats hype</h2>
            <p className="finance-body-lg">
              Revenue Desk wins because it removes friction at the exact moments where revenue is usually lost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason) => (
              <div key={reason.title} className="finance-card">
                <h3 className="finance-h3 mb-2">{reason.title}</h3>
                <p className="finance-body-md">{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="finance-callout mt-12">
            <TrendingUp className="w-5 h-5 text-white" />
            <p className="finance-body-md">
              Clarm does not win because it is smarter. Clarm wins because it removes friction exactly where inbound
              revenue is usually lost.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="finance-section">
        <div className="finance-container">
          <div className="rounded-2xl p-8 md:p-12 text-center bg-white">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Launch Revenue Desk for Finance</h2>
              <p className="text-lg mb-8 text-neutral-600">
                Turn inbound into revenue without more traffic, without pricing changes, and without more staff.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://cal.com/stormm"
                  className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-lg transition-colors bg-black text-white hover:bg-neutral-800"
                >
                  Book a demo
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="mailto:hello@clarm.com"
                  className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-lg transition-colors bg-neutral-100 text-black hover:bg-neutral-200"
                >
                  Contact sales
                </a>
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
              <span className="text-xl font-bold">
                Clarm <span className="font-medium text-[var(--finance-muted)]">Revenue Desk</span>
              </span>
            </div>
            <div className="flex items-center gap-8">
              <a href="https://clarm.com/privacy" className="finance-body-sm hover:text-[var(--finance-primary)]">
                Privacy
              </a>
              <a href="https://clarm.com/tos" className="finance-body-sm hover:text-[var(--finance-primary)]">
                Terms
              </a>
              <a href="mailto:hello@clarm.com" className="finance-body-sm hover:text-[var(--finance-primary)]">
                Contact
              </a>
            </div>
            <div className="finance-body-sm">© 2026 Dialin AI Inc. d/b/a Clarm</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
