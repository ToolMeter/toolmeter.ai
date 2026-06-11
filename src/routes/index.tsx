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
      <Thesis />
      <Decision />
      <Sdk />
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
            Private beta · for people who run MCP servers
          </p>
          <h1 className="mt-5 text-[34px] leading-[1.08] font-semibold tracking-tight text-zinc-50 sm:text-[44px]">
            Your agent wants to call a paid tool. Should it?
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-7 text-zinc-400">
            ToolWarden sits in front of your MCP servers and APIs. On every call
            it answers that one question: is this agent, for this user, on this
            plan, allowed to spend here? Then it meters the call and files a
            receipt you can actually audit. Payment rails move the money.
            ToolWarden decides whether they should, and keeps the books.
          </p>
          <div className="mt-8 flex items-center gap-5">
            <a
              href={BETA_MAILTO}
              className="inline-flex h-10 items-center gap-2 rounded-md bg-zinc-100 px-4 text-[14px] font-medium text-zinc-950 hover:bg-white"
            >
              Request beta access
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#sdk"
              className="text-[14px] text-zinc-400 hover:text-zinc-200"
            >
              Read the SDK →
            </a>
          </div>
          <p className="mt-8 text-[13px] text-zinc-600">
            Fiat through Stripe. No wallet, no token, no chain to learn.
          </p>
        </div>
        <AuthorizeCard />
      </div>
    </section>
  )
}

function AuthorizeCard() {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-zinc-950/60 font-mono text-[12.5px] shadow-xl shadow-black/40">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5 text-[11px] text-zinc-500">
        <span>POST /authorize</span>
        <span className="text-emerald-400">200</span>
      </div>
      <div className="space-y-1 p-5 leading-6">
        <div className="text-zinc-500">{`// the agent asked to run`}</div>
        <div className="text-zinc-300">
          <span className="text-sky-300">render.screenshot</span>(url,
          viewport)
        </div>
        <div className="pt-3 text-zinc-500">{`// toolwarden checked`}</div>
        <Line ok>birk@acme is on the screenshot-pro plan</Line>
        <Line ok>this agent is cleared for render.*</Line>
        <Line ok>$0.01, under the $0.05 per-call cap</Line>
        <div className="flex items-center gap-2 pt-3 text-zinc-100">
          <ArrowRight className="h-3.5 w-3.5 text-zinc-500" />
          allowed
        </div>
      </div>
      <div className="grid grid-cols-2 gap-px border-t border-white/[0.06] bg-white/[0.04] text-[11.5px]">
        <div className="flex items-center gap-2 bg-[#0b0b0e] px-4 py-3 text-zinc-400">
          <Receipt className="h-3.5 w-3.5 text-sky-300" />
          receipt rcpt_8af3c2
        </div>
        <div className="flex items-center gap-2 bg-[#0b0b0e] px-4 py-3 text-zinc-400">
          <Gauge className="h-3.5 w-3.5 text-sky-300" />
          $4.79 of $5.00 left
        </div>
      </div>
    </div>
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

function Thesis() {
  return (
    <section id="how" className="border-b border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-[22px] font-semibold tracking-tight text-zinc-100">
            Two things already exist. The thing in between doesn't.
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-7 text-zinc-400">
            <p>
              Stripe and x402 can move a fraction of a cent. MCP can carry the
              call. But neither one knows whether the call should happen. That's
              the part that actually keeps you up at night, once an agent is
              spending on someone's behalf.
            </p>
            <p>
              So most paid tools end up gated by a hand-rolled mix of API keys,
              a usage table, a cron job that emails an invoice, and a Slack
              message when something looks wrong. It works until it doesn't, and
              it's nobody's idea of a good time to build twice.
            </p>
            <p className="text-zinc-300">
              ToolWarden is the one HTTP call that answers it:{' '}
              <span className="text-zinc-100">
                can this agent, for this user, on this plan, within budget, call
                this tool right now?
              </span>{' '}
              Then it records what it decided. That's it. Everything else is
              downstream of getting that answer right.
            </p>
          </div>
        </div>
      </div>
    </section>
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
  return (
    <section className="border-b border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-[24px] font-semibold tracking-tight text-zinc-100">
          If you've already started building the billing part by hand, talk to
          us first.
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-zinc-400">
          The beta is small and hands-on. We're working directly with the first
          handful of MCP and API providers. Tell us what you're charging for.
        </p>
        <a
          href={BETA_MAILTO}
          className="mt-7 inline-flex h-10 items-center gap-2 rounded-md bg-zinc-100 px-4 text-[14px] font-medium text-zinc-950 hover:bg-white"
        >
          hello@toolwarden.ai
          <ArrowRight className="h-4 w-4" />
        </a>
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
