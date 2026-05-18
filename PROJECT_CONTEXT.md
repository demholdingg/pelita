# Project Documentation: Pelita Bioenergi Nusantara Redesign

## 1. Project Overview

- **Name:** Pelita Bioenergi Nusantara (Corporate Website)
- **Goal:** Redesigning the current website (`pelitaenergi.com`) to be more professional, credible, and modern for the B2B energy sector.
- **Vibe:** Sustainable, Corporate, High-Tech, and Nature-focused.

## 2. Technical Stack (The "Modern Web" Tier)

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Animation:** GSAP (GreenSock) & ScrollTrigger for high-performance scroll animations.
- **Icons:** Lucide React / React Icons
- **Deployment Infrastructure:** Self-hosted physical server (Linux) using Docker.
- **Optimization:** Next.js `standalone` output for efficient, lightweight containerization.

## 3. Design Language & Identity

### Color Palette

- **Primary:** `Forest Green` (#064e3b / Tailwind: `green-900`) - Represents nature and sustainability.
- **Secondary:** `Gold/Amber` (#fbbf24 / Tailwind: `amber-400`) - Represents bioenergy and innovation.
- **Background:** `Slate White` (#f8fafc / Tailwind: `slate-50`) - Clean, professional corporate feel.
- **Text:** `Charcoal` (#1e293b / Tailwind: `slate-800`) - For high readability.

### Typography

- **Headings:** `Plus Jakarta Sans` or `Inter` (Bold, professional).
- **Body:** `Inter` (Clean, modern sans-serif).

## 4. Animation Strategy (Island Architecture)

- **Concept:** Smooth, organic scroll-triggered animations representing "energy flow" and environmental growth.
- **Implementation:** Use GSAP `@gsap/react` inside specific isolated Client Components (e.g., `HeroParallax.tsx`).
- **Rule:** Keep the main pages (`page.tsx`) as Server Components for maximum SEO and fast initial load, only wrapping animated sections with `'use client'`.

## 5. Site Architecture & Content

- **[Home]:** Parallax Hero (Forest/Factory), Value Proposition, Environmental Impact Stats.
- **[About]:** Vision, Mission, and ESG focus.
- **[Products]:** B2B catalog of bioenergy products.
- **[Certificates]:** Trust-building section (ISO/Global certifications).

## 6. Directory Structure Standard

- `/app`: Routing and Server Components.
- `/components/sections`: Major page blocks (Hero, About, etc.).
- `/components/ui`: Small reusable elements (Buttons, Cards).
- `/public/images`: All static visual assets.
- Root contains `Dockerfile` and `docker-compose.yml` for self-hosted deployment.

## 7. AI Instructions (System Prompt Context)

When generating code for this project:

1. **B2B Oriented:** Aim for clean, corporate aesthetics. No flashy/cluttered UI.
2. **Performance First:** Strictly use `next/image` for assets. Implement GSAP efficiently without memory leaks using `useGSAP()`.
3. **DevOps Ready:** Write code that plays nicely with Docker (e.g., proper environment variable handling for runtime).
