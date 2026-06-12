import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Check, Gauge, Receipt } from 'lucide-react'
import { Logo } from '../components/Logo'

export const Route = createFileRoute('/')({ component: Home })

const BETA_MAILTO = 'mailto:hello@toolwarden.ai?subject=ToolWarden%20beta'

function Home() {
  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 antialiased">
      <Nav />
      <Hero />
      <Fears />
      <HowItWorks />
      <Product />
      <Vignettes />
      <Decision />
      <Sdk />
      <NotBlock />
      <UseCases />
      <Cta />
      <Footer />
    </div>
  )
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#08080a]/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-[13px] text-zinc-400 sm:flex">
          <a href="#how" className="hover:text-zinc-100">
            How it works
          </a>
          <a href="#product" className="hover:text-zinc-100">
            Product
          </a>
          <a href="#sdk" className="hover:text-zinc-100">
            SDK
          </a>
          <a
            href="https://github.com/toolwarden"
            className="hover:text-zinc-100"
          >
            GitHub
          </a>
        </nav>
        <a
          href={BETA_MAILTO}
          className="text-[13px] text-zinc-300 underline decoration-zinc-700 underline-offset-4 hover:text-white hover:decoration-zinc-400"
        >
          Request access
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06]">
      <div className="hero-glow pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 opacity-50" />
      <div className="relative mx-auto grid max-w-5xl gap-14 px-6 pt-20 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:pt-24">
        <div>
          <p className="font-mono text-[12px] text-zinc-500">
            For teams putting AI agents to work
          </p>
          <h1 className="mt-5 text-[36px] leading-[1.08] font-semibold tracking-tight text-zinc-50 sm:text-[46px]">
            Your AI agents ask permission.
          </h1>
          <p className="mt-6 max-w-xl text-[16.5px] leading-7 text-zinc-400">
            ToolWarden sits between your agents and their tools. It enforces
            your budgets and rules on every call, pauses the risky ones until
            a human taps Approve, and files a tamper-evident receipt for
            everything. Let agents act without holding your breath.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href={BETA_MAILTO}
              className="inline-flex h-10 items-center gap-2 rounded-md bg-zinc-100 px-4 text-[14px] font-medium text-zinc-950 hover:bg-white"
            >
              Request beta access
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://toolwarden-cloud.bskyum.workers.dev/demo"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-blue-500/40 px-4 text-[14px] font-medium text-blue-300 hover:border-blue-400/60 hover:text-blue-200"
            >
              View live demo
            </a>
            <a
              href="https://github.com/toolwarden/toolwarden-gateway"
              className="text-[14px] text-zinc-400 hover:text-zinc-200"
            >
              Open-source gateway →
            </a>
          </div>
          <p className="mt-8 text-[13px] text-zinc-600">
            Works with MCP today. No wallet, no token, no chain to learn.
          </p>
        </div>
        <ApprovalLoop />
      </div>
    </section>
  )
}

function ApprovalLoop() {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-zinc-950/60 shadow-xl shadow-black/40">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5 font-mono text-[11px] text-zinc-500">
        <span>live: an agent hits a guarded action</span>
        <span className="text-zinc-600">replays every 12s</span>
      </div>
      <div className="min-h-[150px] space-y-1.5 px-5 py-4 font-mono text-[12.5px] leading-6">
        <div className="tw-a1 text-zinc-300">
          <span className="text-sky-300">claude-code</span> → fs:write_file{' '}
          <span className="text-zinc-500">deploy.yaml</span>
        </div>
        <div className="tw-a2 text-amber-300/90">policy: writes need approval</div>
        <div className="tw-a3 text-zinc-500">holding the call · a human has been asked…</div>
        <div className="tw-a4 text-emerald-300">approved by maria · 4.2s</div>
        <div className="tw-a5 text-zinc-400">
          receipt <span className="text-zinc-300">rcpt_8af3c2</span> filed and countersigned
        </div>
      </div>
      <div className="tw-acard border-t border-white/[0.06] bg-white/[0.02] px-5 py-3.5">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[12px] font-medium text-zinc-200">
              ToolWarden · approval needed
            </div>
            <div className="truncate text-[12px] text-zinc-500">
              claude-code wants fs:write_file on prod-eu-1
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2 font-mono text-[12px]">
            <span className="tw-apress">Approve</span>
            <span className="rounded-md border border-rose-400/30 px-2.5 py-0.5 text-rose-300">Deny</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Fears() {
  const items = [
    {
      title: 'Runaway spend',
      body: 'Monthly budgets, per-call ceilings, and hourly rate limits stop a looping agent at call 100, not on the invoice.',
    },
    {
      title: 'Unsafe actions',
      body: 'Allow, deny, or ask: risky calls pause until a person approves, from a dashboard inbox or a one-tap Slack link.',
    },
    {
      title: 'No paper trail',
      body: 'Every decision becomes a hash-chained, countersigned receipt. An auditor can verify the whole month offline.',
    },
  ]
  return (
    <section className="border-b border-white/[0.06]">
      <div className="mx-auto grid max-w-5xl gap-px overflow-hidden px-6 py-14 md:grid-cols-3 md:gap-8">
        {items.map((f) => (
          <div key={f.title}>
            <h3 className="text-[15px] font-semibold text-zinc-100">{f.title}</h3>
            <p className="mt-2 text-[14px] leading-6 text-zinc-400">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      n: '1',
      title: 'An agent calls a tool',
      body: 'Your agents keep working exactly as before. ToolWarden sits invisibly between them and every tool they use.',
    },
    {
      n: '2',
      title: 'The warden decides',
      body: 'Your policy answers in milliseconds: allow it, block it, or hold it for a human. Budgets and rate limits apply to every call.',
    },
    {
      n: '3',
      title: 'A receipt is filed',
      body: 'Allowed or not, the decision lands in a tamper-evident audit trail you can search, export, and prove to anyone.',
    },
  ]
  return (
    <section id="how" className="border-b border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-[22px] font-semibold tracking-tight text-zinc-100">
          How it works
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-lg border border-white/10 bg-zinc-950/50 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2a78f0]/15 font-mono text-[12px] text-[#5b9bf5]">
                  {s.n}
                </span>
                <h3 className="text-[14.5px] font-medium text-zinc-100">{s.title}</h3>
                {i < 2 && (
                  <ArrowRight className="absolute -right-5 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-zinc-700 md:block" />
                )}
              </div>
              <p className="mt-3 text-[13.5px] leading-6 text-zinc-400">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Product() {
  return (
    <section id="product" className="border-b border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-[22px] font-semibold tracking-tight text-zinc-100">
          This is what your team sees
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-zinc-400">
          One dashboard for the whole fleet: spend, blocked calls, alerts, and
          the approval queue. These are real screenshots of a live workspace,
          and you can{' '}
          <a
            href="https://toolwarden-cloud.bskyum.workers.dev/demo"
            className="text-blue-300 underline decoration-blue-500/40 underline-offset-4 hover:text-blue-200"
          >
            browse that workspace yourself
          </a>
          , receipts and all. No signup.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <figure>
            <div className="overflow-hidden rounded-lg border border-white/10 shadow-2xl shadow-black/50">
              <img src="/shots/dashboard.png" alt="ToolWarden Cloud dashboard: spend by day, alerts, gateways with countersigned chain heads" loading="lazy" />
            </div>
            <figcaption className="mt-3 text-[13px] text-zinc-500">
              Fleet overview: spend by day, a rate-limit alert, and three
              gateways with countersigned audit chains.
            </figcaption>
          </figure>
          <figure>
            <div className="overflow-hidden rounded-lg border border-white/10 shadow-2xl shadow-black/50">
              <img src="/shots/approvals.png" alt="ToolWarden approvals inbox with pending requests and approve/deny buttons" loading="lazy" />
            </div>
            <figcaption className="mt-3 text-[13px] text-zinc-500">
              The approval queue: approve once, for an hour, or for the day.
              Slack gets one-tap signed links.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

function Vignettes() {
  const stories = [
    {
      when: 'Friday, 4:52 pm',
      story:
        'Claude Code wants to edit a production config. ToolWarden holds the call and pings Slack. Maria reads the diff context, taps Approve. The edit lands, receipt filed, weekend saved.',
    },
    {
      when: 'Tuesday, 3 am',
      story:
        'An agent gets stuck in a loop on a paid search API. At call 120 in an hour, the rate limit cuts it off and posts an alert. Total damage: 48 cents, not a four-digit invoice.',
    },
    {
      when: 'End of quarter',
      story:
        'The auditor asks what your agents actually did. You send one file. They verify every receipt, chain link, and signature offline in their browser. Twenty minutes, no meetings.',
    },
  ]
  return (
    <section className="border-b border-white/[0.06] bg-white/[0.015]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {stories.map((v) => (
            <div key={v.when}>
              <p className="font-mono text-[12px] text-[#5b9bf5]">{v.when}</p>
              <p className="mt-3 text-[14.5px] leading-7 text-zinc-300">{v.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NotBlock() {
  const nots = [
    ['Not a payment rail.', 'Stripe and x402 move money fine. ToolWarden decides whether they should, then keeps the books.'],
    ['Not an agent framework.', 'Keep LangGraph, Claude Code, whatever you run. ToolWarden is the checkpoint they pass through.'],
    ['Not a proxy you must trust blindly.', 'The gateway is open source, runs on your machines, and its receipts are verifiable without us.'],
    ['Not a replacement for built-in safety modes.', 'Auto modes inside agent runtimes are useful. ToolWarden is the layer your org controls no matter which agent runs, with evidence the runtime cannot grade itself on.'],
  ]
  return (
    <section className="border-b border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-[16px] font-semibold text-zinc-200">
          Four things ToolWarden is not
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {nots.map(([head, body]) => (
            <p key={head} className="text-[14px] leading-6 text-zinc-400">
              <span className="text-zinc-200">{head}</span> {body}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

function Line({ ok, children }: { ok?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-zinc-300">
      {ok && <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" />}
      {children}
    </div>
  )
}

function Decision() {
  const decisions = [
    { tool: 'render.screenshot', cost: '$0.01', v: 'allow', why: 'under the per-call cap' },
    { tool: 'company.registry.lookup', cost: '$0.04', v: 'allow', why: "plan covers it" },
    { tool: 'market.data.snapshot', cost: '$0.12', v: 'ask', why: 'over the $0.10 confirm line' },
    { tool: 'dataset.export', cost: '$2.80', v: 'deny', why: 'license forbids training use' },
  ] as const
  return (
    <section className="border-b border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="max-w-2xl text-[22px] font-semibold tracking-tight text-zinc-100">
          You write the policy once. It runs on every call.
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-zinc-400">
          The provider sets the price. You set the rules. ToolWarden resolves
          both the moment a tool is invoked.
        </p>

        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] md:grid-cols-2">
          <div className="bg-[#0b0b0e]">
            <div className="border-b border-white/[0.06] px-4 py-2.5 font-mono text-[11px] text-zinc-500">
              policy.yaml
            </div>
            <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-6 text-zinc-300">
{`# who's calling
on_behalf_of: birk@acme
plan: screenshot-pro

# the rules
per_call_max: $0.05
confirm_over: $0.10
deny:
  - training_use
  - unverified_providers`}
            </pre>
          </div>

          <div className="bg-[#0b0b0e]">
            <div className="border-b border-white/[0.06] px-4 py-2.5 font-mono text-[11px] text-zinc-500">
              this morning
            </div>
            <ul>
              {decisions.map((d) => (
                <li
                  key={d.tool}
                  className="flex items-center gap-3 border-b border-white/[0.04] px-5 py-3.5 last:border-0"
                >
                  <Verdict v={d.v} />
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-mono text-[12.5px] text-zinc-200">
                      {d.tool}
                    </div>
                    <div className="truncate text-[12px] text-zinc-500">
                      {d.why}
                    </div>
                  </div>
                  <span className="font-mono text-[12px] text-zinc-400">
                    {d.cost}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Verdict({ v }: { v: 'allow' | 'ask' | 'deny' }) {
  const styles = {
    allow: 'text-emerald-300',
    ask: 'text-amber-300',
    deny: 'text-rose-300',
  }
  return (
    <span className={`w-10 font-mono text-[11px] ${styles[v]}`}>{v}</span>
  )
}

function Sdk() {
  return (
    <section id="sdk" className="border-b border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="order-2 overflow-hidden rounded-lg border border-white/10 bg-zinc-950/60 lg:order-1">
            <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5 font-mono text-[11px] text-zinc-500">
              <span>screenshot-server.ts</span>
              <span>@toolwarden/mcp</span>
            </div>
            <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-6 text-zinc-300">
{`server.tool(
  "render_screenshot",
  { url: z.string(), viewport: z.string() },
  meter({
    id: "render.screenshot",
    price: "$0.01 / call",
    run: ({ url, viewport }) =>
      screenshot(url, viewport),
  }),
)`}
            </pre>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-[22px] font-semibold tracking-tight text-zinc-100">
              Wrap one handler. Keep the rest of your server.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-zinc-400">
              The wrapper checks the policy before your code runs, charges only
              on a clean return, and refunds itself if your handler throws.
              You don't write any of it.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-zinc-400">
              The SDK, the receipt format, and the pricing schema are MIT. Run
              them against a local gateway, no account needed to start.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function UseCases() {
  return (
    <section className="border-b border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="max-w-2xl text-[22px] font-semibold tracking-tight text-zinc-100">
          The tools nobody's going to hand-integrate for you.
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-zinc-400">
          The big assistants will wire up flights and hotels themselves. They
          will not wire up your marina-slipway database, your geocoder, your
          patent search, your PDF renderer, your regional company registry, or
          the thousand other specialist things an agent occasionally needs and
          should pay a few cents to use. That long tail is the whole point.
        </p>
      </div>
    </section>
  )
}

function Cta() {
  const [state, setState] = React.useState<'idle' | 'busy' | 'done' | 'error'>('idle')
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    setState('busy')
    try {
      const res = await fetch('https://toolwarden-cloud.bskyum.workers.dev/v1/waitlist', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email: form.get('email'),
          segment: form.get('segment'),
          website: form.get('website'),
        }),
      })
      setState(res.ok ? 'done' : 'error')
    } catch {
      setState('error')
    }
  }
  return (
    <section className="border-b border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-[24px] font-semibold tracking-tight text-zinc-100">
          If you've already started building the billing part by hand, talk to
          us first.
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-zinc-400">
          The beta is small and hands-on. We're working directly with the first
          handful of teams running agents in production. Leave an email and a
          hint of what you're building.
        </p>
        {state === 'done' ? (
          <p className="mt-7 text-[15px] text-emerald-300">
            You're on the list. We'll be in touch soon.
          </p>
        ) : (
          <form onSubmit={submit} className="mt-7 flex flex-wrap items-center gap-3">
            <input
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              className="h-10 w-64 rounded-md border border-white/10 bg-zinc-950 px-3 text-[14px] text-zinc-100 placeholder:text-zinc-600 focus:border-white/25 focus:outline-none"
            />
            <select
              name="segment"
              className="h-10 rounded-md border border-white/10 bg-zinc-950 px-2 text-[13px] text-zinc-300 focus:outline-none"
              defaultValue=""
            >
              <option value="">what fits best?</option>
              <option value="agent-builder">I build agent products</option>
              <option value="platform-team">I run agents at a company</option>
              <option value="tool-provider">I sell a tool or API</option>
              <option value="curious">Just curious</option>
            </select>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <button
              type="submit"
              disabled={state === 'busy'}
              className="inline-flex h-10 items-center gap-2 rounded-md bg-zinc-100 px-4 text-[14px] font-medium text-zinc-950 hover:bg-white disabled:opacity-60"
            >
              {state === 'busy' ? 'Joining…' : 'Join the beta'}
              <ArrowRight className="h-4 w-4" />
            </button>
            {state === 'error' && (
              <span className="text-[13px] text-rose-300">
                That didn't work; email us at hello@toolwarden.ai instead.
              </span>
            )}
          </form>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-[13px] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <Logo showWordmark />
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/toolwarden/toolwarden-gateway/tree/main/docs"
            className="hover:text-zinc-300"
          >
            Docs
          </a>
          <a
            href="https://toolwarden-cloud.bskyum.workers.dev/demo"
            className="hover:text-zinc-300"
          >
            Live demo
          </a>
          <a href="https://github.com/toolwarden" className="hover:text-zinc-300">
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/org/toolwarden"
            className="hover:text-zinc-300"
          >
            npm
          </a>
          <a href="mailto:hello@toolwarden.ai" className="hover:text-zinc-300">
            hello@toolwarden.ai
          </a>
        </div>
      </div>
    </footer>
  )
}
