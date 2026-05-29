import { createFileRoute } from '@tanstack/react-router'
import {
  Activity,
  ArrowRight,
  Check,
  Gauge,
  HandCoins,
  Network,
  Receipt,
  Shield,
  Wallet,
} from 'lucide-react'
import { Logo } from '../components/Logo'

export const Route = createFileRoute('/')({ component: Home })

const BETA_MAILTO =
  'mailto:hello@toolmeter.ai?subject=ToolMeter%20private%20beta'

function Home() {
  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 antialiased">
      <Nav />
      <Hero />
      <ProblemStrip />
      <DemoSection />
      <RailAgnostic />
      <HowItWorks />
      <Features />
      <SdkSnippet />
      <UseCases />
      <Sequence />
      <Cta />
      <Footer />
    </div>
  )
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#08080a]/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
          <a href="#how" className="transition hover:text-zinc-100">
            How it works
          </a>
          <a href="#features" className="transition hover:text-zinc-100">
            Features
          </a>
          <a href="#sdk" className="transition hover:text-zinc-100">
            SDK
          </a>
          <a href="#use-cases" className="transition hover:text-zinc-100">
            Use cases
          </a>
        </nav>
        <a
          href={BETA_MAILTO}
          className="inline-flex h-8 items-center rounded-full bg-white px-3.5 text-[13px] font-medium text-zinc-950 transition hover:bg-zinc-200"
        >
          Join beta
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[640px]" />
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[640px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 lg:px-8 lg:pt-28 lg:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[12px] font-medium text-zinc-300 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Now in private beta · MCP-first · No crypto required
          </a>
          <h1 className="mt-6 text-[36px] leading-[1.1] font-semibold tracking-tight text-balance text-white sm:text-[52px] lg:text-[64px] lg:leading-[1.05]">
            Decide, meter, and account
            <br />
            <span className="bg-gradient-to-br from-blue-200 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              for every AI tool call.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-[17px] leading-7 text-zinc-400 sm:text-lg">
            Stripe and x402 move the money. ToolMeter decides whether the call
            is allowed, meters it, and writes an auditable receipt — for any
            agent, any end-user, under any subscription or license. Fiat-native,
            rail-agnostic, no crypto required.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={BETA_MAILTO}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              Join the private beta
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#demo"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              See the flow
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute -inset-x-12 -inset-y-8 -z-10 rounded-[40px] bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent blur-2xl" />
          <HeroDeviceCard />
        </div>
      </div>
    </section>
  )
}

function HeroDeviceCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70 shadow-2xl shadow-blue-500/10 backdrop-blur">
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        </div>
        <div className="font-mono text-[11px] text-zinc-500">
          POST /v1/authorize
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          200 OK
        </div>
      </div>
      <div className="grid divide-y divide-white/[0.06] md:grid-cols-2 md:divide-x md:divide-y-0">
        <div className="p-6 font-mono text-[12.5px] leading-6">
          <div className="text-zinc-500">{`// Agent intent`}</div>
          <div className="mt-1 text-zinc-300">
            <span className="text-blue-300">tool</span>:{' '}
            <span className="text-emerald-300">"render.screenshot"</span>
          </div>
          <div className="text-zinc-300">
            <span className="text-blue-300">input</span>:{' '}
            {`{ url, viewport }`}
          </div>
          <div className="mt-4 text-zinc-500">{`// ToolMeter policy check`}</div>
          <div className="mt-1 flex items-center gap-2 text-zinc-300">
            <Check className="h-3.5 w-3.5 text-emerald-400" />
            within user budget
          </div>
          <div className="flex items-center gap-2 text-zinc-300">
            <Check className="h-3.5 w-3.5 text-emerald-400" />
            agent allowed for category
          </div>
          <div className="flex items-center gap-2 text-zinc-300">
            <Check className="h-3.5 w-3.5 text-emerald-400" />
            license: inference_only
          </div>
          <div className="mt-4 text-zinc-500">{`// Estimated cost`}</div>
          <div className="mt-1 text-zinc-100">
            <span className="text-amber-300">$0.01</span> USD
          </div>
        </div>
        <div className="bg-white/[0.015] p-6">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium tracking-wider text-zinc-500 uppercase">
              Receipt
            </span>
            <span className="font-mono text-[11px] text-zinc-500">
              rcpt_8af3c2
            </span>
          </div>
          <dl className="mt-4 divide-y divide-white/[0.05] text-[13px]">
            <Row label="Tool" value="render.screenshot" />
            <Row label="Provider" value="verified" />
            <Row label="Units" value="1 render" />
            <Row
              label="Cost"
              value={<span className="text-zinc-100">$0.01 USD</span>}
            />
            <Row
              label="Status"
              value={
                <span className="inline-flex items-center gap-1.5 text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  success
                </span>
              }
            />
            <Row label="Budget left" value="$4.79 of $5.00" />
          </dl>
          <div className="mt-6 flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
            <div className="flex items-center gap-2 text-[12px] text-zinc-400">
              <Gauge className="h-3.5 w-3.5 text-blue-300" />
              this month
            </div>
            <div className="font-mono text-[12px] text-zinc-300">
              0.21 / 5.00
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Row({
  label,
  value,
}: {
  label: string
  value: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <dt className="text-zinc-500">{label}</dt>
      <dd className="font-mono text-zinc-300">{value}</dd>
    </div>
  )
}

function ProblemStrip() {
  return (
    <section className="border-y border-white/5 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_2fr]">
          <p className="text-[11px] font-medium tracking-wider text-zinc-500 uppercase">
            The missing layer
          </p>
          <p className="text-balance text-[20px] leading-8 text-zinc-200 sm:text-[22px]">
            Payment rails move money. MCP moves calls. Neither answers the
            question that actually gates a tool call:{' '}
            <span className="text-white">
              can this agent, acting for this end-user, under this
              subscription or license, within this budget, call this tool right
              now?
            </span>{' '}
            ToolMeter is the control plane that resolves that decision, meters
            the call, and accounts for it — in fiat, above whatever rail you
            settle on.
          </p>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      n: '01',
      title: 'Provider wraps a tool',
      body: 'Install the SDK, declare a price, and expose your MCP tool or API. No billing code to write.',
    },
    {
      n: '02',
      title: 'Agent requests access',
      body: 'Before calling the tool, the agent asks ToolMeter to authorize the call against the user policy.',
    },
    {
      n: '03',
      title: 'ToolMeter meters and settles',
      body: 'We check the budget, run the call through the gateway, record usage, and emit a structured receipt.',
    },
    {
      n: '04',
      title: 'Everyone gets an audit trail',
      body: 'Provider sees revenue and usage. Consumer sees receipts and remaining budget. Compliance is built in.',
    },
  ]
  return (
    <section id="how" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="A transaction layer for tool invocations"
          subtitle="Every tool call becomes a structured transaction: intent, authorization, policy, entitlement, execution, metering, receipt."
        />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="flex flex-col gap-3 bg-[#0b0b0e] p-6 lg:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-zinc-500">
                  {s.n}
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-zinc-700" />
              </div>
              <h3 className="text-[15px] font-medium text-zinc-100">
                {s.title}
              </h3>
              <p className="text-[13.5px] leading-6 text-zinc-400">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    {
      icon: Shield,
      title: 'Access control',
      body: 'Decide which agents, users, teams, or apps are allowed to call a tool, under which licenses.',
    },
    {
      icon: Activity,
      title: 'Usage metering',
      body: 'Measure calls, batches, rows, renders, compute time, or any tool-specific unit you define.',
    },
    {
      icon: Wallet,
      title: 'Budgets and limits',
      body: 'Enforce monthly budgets, per-call ceilings, quotas, and approval thresholds at the gateway.',
    },
    {
      icon: Receipt,
      title: 'Audit-grade provenance',
      body: 'Every call emits an independently verifiable, exportable receipt — agent, end-user, license, cost, and hashes — built for compliance, not as a payment byproduct.',
    },
    {
      icon: Network,
      title: 'MCP-first',
      body: 'Drop-in middleware for MCP servers. Start with the protocol agents already speak.',
    },
    {
      icon: HandCoins,
      title: 'Provider payouts',
      body: 'Let tool and data providers monetize usage without building billing, auth, and dashboards from scratch.',
    },
  ]
  return (
    <section id="features" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <SectionHeader
          eyebrow="Features"
          title="Everything between the agent and the tool"
          subtitle="ToolMeter is the boring infrastructure that makes paid AI tools actually shippable."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <div
              key={f.title}
              className="group relative flex flex-col gap-3 bg-[#0b0b0e] p-6 transition hover:bg-[#0e0e12]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-blue-300">
                <f.icon className="h-4 w-4" />
              </div>
              <h3 className="text-[15px] font-medium text-zinc-100">
                {f.title}
              </h3>
              <p className="text-[13.5px] leading-6 text-zinc-400">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DemoSection() {
  const decisions = [
    {
      tool: 'render.screenshot',
      cost: '$0.01',
      verdict: 'allow',
      reason: 'under per-call limit',
    },
    {
      tool: 'company.registry.lookup',
      cost: '$0.04',
      verdict: 'allow',
      reason: 'within monthly budget',
    },
    {
      tool: 'market.data.snapshot',
      cost: '$0.12',
      verdict: 'ask',
      reason: 'above ask_above threshold',
    },
    {
      tool: 'dataset.export',
      cost: '$2.80',
      verdict: 'deny',
      reason: 'license: training_use forbidden',
    },
  ] as const
  return (
    <section
      id="demo"
      className="relative border-t border-white/5 bg-gradient-to-b from-[#0a0a0d] to-[#08080a]"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <SectionHeader
          eyebrow="The access decision"
          title="Who can call what, for whom, under which license."
          subtitle="Pricing belongs to the provider. Permission belongs to you. ToolMeter joins agent, end-user, subscription, license, and budget into one allow / ask / deny verdict at the moment a tool is called — in a single round trip."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70">
            <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
              <span className="text-[11px] font-medium tracking-wider text-zinc-500 uppercase">
                policy.yaml
              </span>
              <span className="font-mono text-[11px] text-zinc-600">
                workspace_acme
              </span>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-[12.5px] leading-6 text-zinc-300">
{`identity:
  agent:        naming-agent
  on_behalf_of: birk@acme
  subscription: domain-pro

monthly_budget:  $20.00
max_per_call:    $0.05
ask_above:       $0.10

allow_licenses:
  - inference_only
  - commercial_inference

deny_categories:
  - gambling
  - persuasion
  - training_use

verified_providers_only: true`}
            </pre>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70">
            <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
              <span className="text-[11px] font-medium tracking-wider text-zinc-500 uppercase">
                Live decisions
              </span>
              <span className="font-mono text-[11px] text-zinc-600">
                gateway.toolmeter.ai
              </span>
            </div>
            <ul className="divide-y divide-white/[0.05]">
              {decisions.map((d) => (
                <li key={d.tool} className="flex items-center gap-3 px-5 py-4">
                  <span
                    className={`inline-flex h-6 items-center rounded-full px-2 font-mono text-[10.5px] tracking-wide uppercase ${
                      d.verdict === 'allow'
                        ? 'border border-emerald-400/20 bg-emerald-400/10 text-emerald-300'
                        : d.verdict === 'ask'
                          ? 'border border-amber-400/20 bg-amber-400/10 text-amber-200'
                          : 'border border-rose-400/20 bg-rose-400/10 text-rose-300'
                    }`}
                  >
                    {d.verdict}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-mono text-[12.5px] text-zinc-200">
                      {d.tool}
                    </div>
                    <div className="truncate text-[11.5px] text-zinc-500">
                      {d.reason}
                    </div>
                  </div>
                  <span className="font-mono text-[12px] text-zinc-300">
                    {d.cost}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-white/[0.06] bg-white/[0.015] px-5 py-3 text-[11.5px] text-zinc-500">
              <span className="inline-flex items-center gap-2">
                <Receipt className="h-3.5 w-3.5 text-blue-300" />
                Every approved call emits a receipt
              </span>
              <span className="font-mono">avg 18ms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RailAgnostic() {
  const rails = ['x402', 'Stripe MPP', 'Visa Intelligent Commerce', 'Google AP2']
  return (
    <section className="border-t border-white/5 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-[11px] font-medium tracking-wider text-blue-300/80 uppercase">
              No crypto required
            </p>
            <h2 className="mt-3 text-balance text-[26px] font-semibold tracking-tight text-white sm:text-[30px]">
              Pick your rail. Keep your control plane.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-zinc-400">
              ToolMeter sits <span className="text-zinc-200">above</span> the
              payment layer, not inside it. Settle in fiat through Stripe today,
              or route over x402, Visa, or AP2 later — the access decisions,
              metering, and receipts stay exactly the same. No wallets, no DIDs,
              no on-chain settlement forced on your agents or your finance team.
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-3">
            <div className="flex flex-wrap gap-2.5">
              {rails.map((r) => (
                <span
                  key={r}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[12px] text-zinc-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                  {r}
                </span>
              ))}
            </div>
            <div className="mt-1 flex items-center justify-center gap-2 rounded-xl border border-blue-400/20 bg-blue-400/[0.06] px-4 py-3 text-[13px] text-blue-100">
              <Shield className="h-4 w-4 text-blue-300" />
              <span className="font-medium text-white">ToolMeter</span>
              <span className="text-blue-200/80">
                — one fiat-native control plane over all of them
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SdkSnippet() {
  return (
    <section id="sdk" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <SectionHeader
          eyebrow="Drop-in SDK"
          title="Charge for a tool call in five lines"
          subtitle="Wrap your MCP tool or API handler. ToolMeter handles authorization, metering, receipts, and payouts."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
                <div className="flex items-center gap-2 text-[12px] text-zinc-400">
                  <span className="font-mono">@toolmeter/mcp</span>
                  <span className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[10.5px] text-zinc-400">
                    typescript
                  </span>
                </div>
                <span className="font-mono text-[11px] text-zinc-600">
                  paid-screenshot-tool.ts
                </span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-[12.5px] leading-6 text-zinc-300">
{`import { ToolMeter } from "@toolmeter/mcp"

const tm = new ToolMeter({
  providerKey: process.env.TOOLMETER_PROVIDER_KEY,
})

server.tool(
  "render_screenshot",
  { url: z.string(), viewport: z.string() },
  tm.meteredTool({
    toolId: "render.screenshot",
    price: { amount: 0.01, currency: "USD", unit: "call" },
    handler: async ({ url, viewport }) => {
      return renderScreenshot(url, viewport)
    },
  }),
)`}
              </pre>
            </div>
          </div>
          <div className="space-y-3 lg:col-span-2">
            {[
              {
                title: 'Authorize before execution',
                body: 'The gateway resolves identity, budget, license, and quota in one call.',
              },
              {
                title: 'Emit a structured receipt',
                body: 'Every successful run produces a signed record agents can cite.',
              },
              {
                title: 'Refund on tool error',
                body: 'No charge if your handler throws or returns an invalid schema.',
              },
              {
                title: 'Open schema, open SDK',
                body: 'Pricing, receipts, and the MCP wrapper are MIT-licensed.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
              >
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
                  <div>
                    <h4 className="text-[13.5px] font-medium text-zinc-100">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[12.5px] leading-5 text-zinc-400">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function UseCases() {
  const groups = [
    {
      title: 'Live data',
      items: [
        'Domain availability',
        'Company registry lookup',
        'Event and venue listings',
        'Flight and transit data',
        'Geospatial datasets',
        'Patent and trademark search',
      ],
    },
    {
      title: 'Compute and rendering',
      items: [
        'Web screenshots',
        'PDF rendering',
        'Geocoding',
        'OCR and file conversion',
        'Simulation and calculation',
        'Custom renderers',
      ],
    },
    {
      title: 'Specialist APIs',
      items: [
        'SERP and search APIs',
        'Translation APIs',
        'Email and identity validation',
        'Regulatory lookup',
        'Scientific databases',
        'Niche catalog services',
      ],
    },
  ]
  return (
    <section id="use-cases" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <SectionHeader
          eyebrow="What gets metered"
          title="The long tail no big platform will integrate by hand"
          subtitle="Browsers and assistants will wire up flights, hotels, and shopping. ToolMeter is for the thousands of specialist tools and live datasets that won't get a bespoke connector."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <h3 className="text-[14px] font-medium text-zinc-100">
                {g.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-[13.5px] text-zinc-400">
                {g.items.map((i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Sequence() {
  const phases = [
    { n: '1', label: 'Metered access', state: 'now' },
    { n: '2', label: 'Receipts and provenance', state: 'now' },
    { n: '3', label: 'Trust registry', state: 'next' },
    { n: '4', label: 'Marketplace', state: 'later' },
  ]
  return (
    <section className="border-t border-white/5 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-[11px] font-medium tracking-wider text-zinc-500 uppercase">
              Sequence
            </p>
            <h2 className="mt-3 text-[24px] font-semibold tracking-tight text-zinc-100">
              We start with the boring layer.
            </h2>
            <p className="mt-3 text-[14px] leading-6 text-zinc-400">
              A marketplace without payments, receipts, and trust signals is a
              directory. We build the transaction layer first, then the
              network on top of real usage.
            </p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {phases.map((p) => (
              <li
                key={p.n}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#0b0b0e] p-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 font-mono text-[12px] text-zinc-400">
                  {p.n}
                </span>
                <span className="text-[14px] text-zinc-200">{p.label}</span>
                <span
                  className={`ml-auto rounded-full px-2 py-0.5 text-[10.5px] font-medium tracking-wide uppercase ${
                    p.state === 'now'
                      ? 'border border-emerald-400/20 bg-emerald-400/10 text-emerald-300'
                      : p.state === 'next'
                        ? 'border border-blue-400/20 bg-blue-400/10 text-blue-200'
                        : 'border border-white/10 bg-white/[0.03] text-zinc-500'
                  }`}
                >
                  {p.state}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function Cta() {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-full opacity-60" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
        <h2 className="text-[34px] font-semibold tracking-tight text-white sm:text-[42px]">
          Building an AI-callable tool?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15.5px] leading-7 text-zinc-400">
          We're working with MCP server builders, API providers, data-product
          owners, and agent app developers for the first private beta.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={BETA_MAILTO}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
          >
            Join the private beta
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:hello@toolmeter.ai?subject=ToolMeter%20question"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            hello@toolmeter.ai
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 text-[13px] text-zinc-500 sm:flex-row sm:items-center lg:px-8">
        <div className="flex items-center gap-2.5">
          <Logo showWordmark />
          <span className="text-zinc-700">·</span>
          <span>Metered access for AI tools</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/toolmeter"
            className="transition hover:text-zinc-200"
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/org/toolmeter"
            className="transition hover:text-zinc-200"
          >
            npm
          </a>
          <a
            href="mailto:hello@toolmeter.ai"
            className="transition hover:text-zinc-200"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-[11px] font-medium tracking-wider text-blue-300/80 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-[32px] font-semibold tracking-tight text-white sm:text-[40px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[15.5px] leading-7 text-balance text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  )
}
