# ADR-002: Hosting — Vercel Free Tier for Initial Phase

| Field | Value |
|-------|-------|
| **Status** | Accepted (Phase 1 — review at traffic trigger) |
| **Date** | May 2026 |
| **Decided by** | Ankur Nema |
| **Review trigger** | When monthly bandwidth exceeds 100 GB or site traffic exceeds 50,000 page views/month |

---

## Context

ankurnema.in is a Next.js 15 website using the App Router with Server-Side Rendering (SSR)
and Incremental Static Regeneration (ISR). The hosting platform must be able to run these
features — not just serve static HTML files.

Requirements for hosting at this stage:
- Works natively with Next.js SSR and App Router (not just static files)
- Zero or near-zero monthly cost while the site has little traffic
- Automatic deployments when code is pushed to GitHub
- Custom domain support (ankurnema.in)
- HTTPS out of the box — no manual SSL certificate setup
- Fast globally — content served close to visitors via a CDN
- Minimal operational overhead — one person is managing everything

> **Glossary for freshers:**
> - **SSR (Server-Side Rendering):** The server builds the page before sending it. Not all hosts
>   can do this — some can only serve pre-built static files.
> - **ISR (Incremental Static Regeneration):** Pages are pre-built but can refresh in the background
>   without a full redeploy. Useful for blog post pages.
> - **CDN (Content Delivery Network):** A network of servers spread globally. Your files are stored
>   in many locations, so visitors get served from the one closest to them — faster load times.
> - **CI/CD:** Continuous Integration / Continuous Deployment — push code to GitHub, it automatically
>   builds and deploys. No manual steps.

---

## Options Considered

### Option 1 — GitHub Pages

Free hosting from GitHub, commonly used for personal sites and documentation.

| | Detail |
|--|--------|
| Good | Completely free, tightly integrated with GitHub repos |
| Good | Simple for purely static sites |
| Bad | **Cannot run Next.js SSR.** GitHub Pages serves static HTML files only. |
| Bad | Next.js App Router with Server Components would need to be disabled entirely |
| Bad | Would require `output: 'export'` in Next.js config — loses SSR, ISR, API routes |
| Verdict | Rejected — incompatible with the chosen framework's key features |

---

### Option 2 — Netlify

A popular hosting platform similar to Vercel, supports both static and server-rendered sites.

| | Detail |
|--|--------|
| Good | Strong free tier (100 GB bandwidth, 300 build minutes/month) |
| Good | Supports Next.js SSR via Netlify Functions |
| Good | Preview deployments per branch |
| Neutral | Good Next.js support, but some App Router edge cases need configuration tweaks |
| Bad | Not built by the Next.js team — slightly behind on new Next.js features vs Vercel |
| Bad | Community reports occasional issues with latest Next.js App Router releases |
| Verdict | Rejected — Vercel's native support is stronger; no reason to choose Netlify here |

---

### Option 3 — AWS (S3 + CloudFront + WAF + Route 53)

Amazon Web Services is the industry leader in cloud infrastructure. Used by most large companies.

| | Detail |
|--|--------|
| Good | Full infrastructure control |
| Good | AWS CloudFront CDN has edge locations in India (Mumbai, Bangalore, Chennai, Delhi) |
| Good | AWS WAF provides enterprise-grade security (OWASP rules, bot management, DDoS protection) |
| Good | Route 53 is highly reliable DNS with health checks and failover |
| **Critical** | **S3 cannot host Next.js SSR.** S3 is a file store — it serves static files only. |
| Bad | To use AWS properly with Next.js SSR, you need AWS Amplify or Lambda@Edge — much more complex |
| Bad | Even at low traffic: ~₹830–1,000/month with basic WAF setup |
| Bad | Manual CI/CD pipeline setup — no automatic preview deployments |
| Bad | Significant setup and maintenance overhead for a single-person project |
| Verdict | Rejected for Phase 1 — powerful but overengineered for a pre-launch personal site |

> Full AWS vs Vercel comparison: `../../../ankurnema-brand/planning/technical/hosting-infrastructure-analysis.md`
> *(Private repo — see this file for detailed cost tables and phase-by-phase recommendation)*

---

### Option 4 — DigitalOcean App Platform / Render

Simple Platform-as-a-Service (PaaS) options that can host Node.js apps.

| | Detail |
|--|--------|
| Good | Simple setup, reasonable performance |
| Good | Supports Node.js and thus Next.js SSR |
| Bad | Costs ₹500–₹1,500/month even for small apps (no genuinely free tier) |
| Bad | No specialized Next.js support — manual configuration needed |
| Bad | No CDN included — would need separate CDN setup for performance |
| Verdict | Rejected — costs money with no advantage over Vercel at this stage |

---

### Option 5 — Vercel Free Tier (Chosen)

Vercel is the company that created and maintains Next.js. Their hosting platform is purpose-built
for Next.js.

| | Detail |
|--|--------|
| Good | Zero cost on free tier |
| Good | Native Next.js support — App Router, SSR, ISR, Server Actions all work out of the box |
| Good | Zero-config deployment — connect GitHub repo, push code, site is live |
| Good | Preview deployments: every Pull Request gets its own live URL for testing |
| Good | Instant rollback to any previous deployment |
| Good | Global CDN included — no extra setup |
| Good | Automatic HTTPS — SSL certificate managed for you |
| Good | 100 GB bandwidth/month — enough for ~50,000 page views/month |
| Neutral | CDN PoPs are global but not India-specific (nearest is Asia-Pacific region) |
| Neutral | Vendor alignment: Vercel also made Next.js, so some advanced features are Vercel-optimized |
| Bad | Free tier: 100 builds/month cap, no password protection on preview URLs |
| Bad | Basic DDoS protection only — not enterprise-grade WAF |
| Verdict | Accepted for Phase 1 |

---

## Decision

**Vercel free tier** for Phase 1 (pre-launch through the first traffic milestone).

**Upgrade path is clear:**
- Vercel Pro ($20/month ≈ ₹1,660/month) when bandwidth exceeds 100 GB/month
- Add Cloudflare (free) in front of Vercel for Indian CDN PoPs and basic WAF if needed
- Evaluate AWS Amplify + CloudFront + WAF only when monthly revenue exceeds ₹50,000 and
  operational overhead is justified

---

## Reasons

**Zero cost at launch is critical.**
The site has zero visitors at launch. Paying ₹800–₹2,000/month for AWS infrastructure before a
single visitor arrives is wasteful. Vercel free tier gives everything needed at this stage for ₹0.

**Native Next.js support eliminates a whole category of problems.**
Vercel created Next.js. When a new Next.js version ships, Vercel supports it on day one. There is
no risk of "the latest App Router feature doesn't work on our host" — it always works.

**Preview deployments accelerate development.**
Every branch or Pull Request automatically gets a unique live URL. Test on the real deployment
before merging to the live site. This is a professional workflow that makes iteration faster.

**Upgrade path is well-defined.**
The hosting-infrastructure-analysis document maps out exactly when and how to move to Vercel Pro
or AWS. This decision is not permanent — it is the right choice for Phase 1.

---

## Consequences

**Benefits:**
- Infrastructure cost = ₹0 for Phase 1
- Deployment pipeline = push to GitHub, live in ~90 seconds
- No SSL management, no CDN configuration, no server maintenance
- Preview deployments for every branch

**Tradeoffs:**
- 100 GB bandwidth/month cap (sufficient for 50,000 page views — not a concern for Phase 1)
- No enterprise WAF (acceptable for a personal brand site at launch)
- Some Next.js features are more optimized on Vercel than other hosts (a benefit, not a drawback here)

**DNS setup:**
- Domain: ankurnema.in registered at Hostinger
- DNS: Hostinger DNS → Vercel (add CNAME record pointing to `cname.vercel-dns.com`)
- HTTPS: Vercel provisions and renews the certificate automatically

---

## Review Trigger

Revisit this decision when **any** of the following occur:
- Monthly bandwidth exceeds 100 GB consistently
- Monthly site traffic exceeds 50,000 page views
- A security incident requires enterprise-grade WAF
- Monthly consulting revenue exceeds ₹50,000 (infra cost becomes trivial relative to revenue)

Next step when triggered: evaluate Vercel Pro ($20/month) first before considering AWS.
