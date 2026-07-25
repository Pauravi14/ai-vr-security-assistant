# AI-Powered VR Security Assistant

Portfolio demo for **adaptive authentication in VR**: session context signals are scored for risk, then the app recommends a security action (continue, re-auth, or lock).

Inspired by adaptive authentication concepts from VR security research. This is an **independent demo** — it does not contain private university project code.

**Live idea:** change the session inputs → watch risk score, level, explanation, and recommended action update instantly.

---

## Why this project

VR sessions often stay authenticated for a long time. Context can change (network, device proximity, time since last auth). This demo shows how a lightweight **risk engine** can drive **adaptive** security decisions without blocking every interaction.

Useful talking points for recruiters:
- Context-based risk scoring
- Clear decision thresholds (Low → Critical)
- Explainable recommendations (not a black box)

---

## Features

- Interactive **session inputs**
  - Trusted phone via Bluetooth (connected / disconnected)
  - Network type (trusted / public / unknown)
  - Login time behavior (normal / unusual / late-night)
  - Minutes since last authentication
- Live **risk score** (0–100) with level: Low · Medium · High · Critical
- **Recommended action** for the VR session
- Human-readable **explanation** of contributing signals

---

## Risk model (simplified)

| Signal | Example impact |
|--------|----------------|
| Trusted phone disconnected | +25 |
| Public Wi-Fi | +25 |
| Unknown network | +30 |
| Unusual / late-night login | +15 / +25 |
| Last auth > 1h / > 3h | +15 / +15 more |

| Score | Level | Action |
|------:|-------|--------|
| 0–30 | Low | Continue the VR session |
| 31–60 | Medium | Lightweight re-authentication |
| 61–80 | High | Stronger re-authentication |
| 81–100 | Critical | Lock the VR session |

---

## Tech stack

- **Next.js** (App Router) · **React** · **TypeScript**
- **Tailwind CSS**

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # run production server
```

---

## Project structure

```
app/
  page.tsx      # Risk UI + scoring logic
  layout.tsx    # App shell + metadata
  globals.css   # Styles
```

---

## Related work

On my CV this connects to **ADA-VR** (adaptive authentication in VR). This repo is a public, recruiter-friendly portfolio slice of those ideas.

---

## Author

**Pauravi Pardeshi**  
[GitHub](https://github.com/Pauravi14) · [LinkedIn](https://linkedin.com/in/pauravi-pardeshi) · [pauravipardeshi14@gmail.com](mailto:pauravipardeshi14@gmail.com)
