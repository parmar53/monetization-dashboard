# ⚡ LiveOps Monetization Dashboard

A high-performance, enterprise-grade LiveOps dashboard built to simulate real-world game studio monetization workflows — inspired by platforms like Xsolla. Built as a frontend showcase project demonstrating modern React/Next.js architecture, state management, animations, and responsive design.

## 🌐 Live Demo


## 📸 Screenshots

> Dashboard — Metric cards, revenue chart, and activity feed
> Promotions — Filter tabs, animated table, and create modal
> Segments — Player segmentation cards with live search

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, SSR) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| State Management | Redux Toolkit + React Query |
| Animations | Framer Motion |
| Charts | Recharts |
| Forms | React Hook Form |
| Icons | Lucide React |
| Deployment | Vercel |

## ✨ Features

- 📊 **SSR Dashboard** — Metric cards and revenue chart rendered server-side with Next.js App Router
- 🎯 **Promotions Manager** — Filter by status (Active/Scheduled/Expired), animated table rows, create new promotions via validated modal
- 👥 **Player Segmentation** — Live search across segment cards with Redux state management
- 🌗 **Theme Toggle** — Dark/Light mode with localStorage persistence and OS preference detection
- 💀 **Skeleton Loading** — Theme-aware shimmer skeletons on all data components
- 📱 **Fully Responsive** — Animated sidebar on desktop, hamburger menu on mobile
- ✨ **Framer Motion** — Page animations, card entrances, sidebar hover effects, modal transitions

## 🏃 Run Locally

```bash
git clone https://github.com/parmar53/monetization-dashboard.git
cd monetization-dashboard
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure
src/
├── app/ # Next.js App Router pages (SSR)
│ ├── page.tsx # Dashboard home
│ ├── promotions/ # Promotions manager
│ └── segments/ # Player segmentation
├── components/
│ ├── ui/ # Reusable: Sidebar, Skeleton
│ ├── dashboard/ # MetricCard, RevenueChart, ActivityFeed
│ └── promotions/ # CreatePromoModal
├── store/ # Redux store + slices
├── hooks/ # React Query data hooks
├── lib/ # Mock data + ThemeContext
└── types/ # Shared TypeScript interfaces


## 🧠 Architecture Decisions

- **SSR vs Client:** Dashboard metrics use Next.js server components for fast initial load; interactive pages (Promotions, Segments) use client components for real-time interactivity
- **Redux + React Query:** Redux manages UI state (filters, modal open/close); React Query handles async data fetching — clean separation of concerns
- **Tailwind v4:** CSS-based config with `@variant dark` for class-driven theming without a config file
- **Framer Motion:** Used for mount animations, layout transitions, and modal enter/exit — keeping interactions smooth and intentional

## 👨‍💻 Author

**Dhanrajsinh Parmar**
[GitHub](https://github.com/parmar53)
