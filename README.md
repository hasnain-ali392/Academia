# Academia Frontend (Stitch Design System)

Academia is a Next.js 14 application built to provide smart academic tools for students. This repository has been completely overhauled to strictly follow the **Stitch Design Token System**.

## Tech Stack Overview
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict)
- **Styling**: Tailwind CSS 4 with CSS Custom Properties
- **Base Components**: Custom primitive library building on Tailwind (`src/components/ui/`)
- **Animations**: Framer Motion (page transitions, hover states)
- **Icons**: Lucide React
- **Fonts**: `next/font/google` (Fraunces & Public Sans)

---

## Getting Started

### Installation
```bash
npm install
```

### Running Locally
```bash
npm run dev
```
Navigate to [http://localhost:3000](http://localhost:3000)

---

## Design Token Guide

All design aesthetics (Colors, Border Radius, Shadow) are controlled by absolute tokens derived from the `stitch_assets/landing_page` constraints.

**How to update colors:**
Never hardcode hex values inside React components! Instead:
1. Open `src/app/globals.css`.
2. Locate the `:root` pseudo-class.
3. Update the value (e.g., `--stitch-primary: #141E30;`).
4. Consume it via standard Tailwind UI classes everywhere (e.g., `bg-stitch-primary`).

---

## How to Add a New Page (Future-Page Contract)

Creating new routes requires 0 setup other than creating the page file:

1. Create a new folder and page file: `src/app/[new-route]/page.tsx`
2. Wrap your layout in `<PageWrapper>` for native page-switch animations.
3. Utilize existing UI elements from `src/components/ui/`.
4. Add the route to the `NAV_LINKS` array inside `src/lib/constants.ts` to automatically populate navigation.
5. Export as a default React component! Active states in `Header.tsx` will map instantly to your new route.

---

## How to Add a New UI Component

Keep elements semantic, typed, and reusable via the `cn()` merge function. Example setup:

```tsx
import { cn } from "@/lib/utils";
import * as React from "react";

interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  // custom props
}

export const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      // ONLY consume stitch tailwind bindings to ensure consistent aesthetics
      className={cn("bg-stitch-surface border-stitch-border", className)}
      {...props}
    />
  )
)
MyComponent.displayName = "MyComponent"
```

---

## Folder Structure

```
├── public/                 # Static assets
├── src/
│   ├── app/                # App Router Routes
│   │   ├── about/page.tsx  # About Route
│   │   ├── calculator/page.tsx # Interactive Calculator Route
│   │   ├── contact/page.tsx # Contact Form Route
│   │   ├── globals.css     # 🔑 Source of truth CSS Custom Properties
│   │   ├── layout.tsx      # Font provider & Global HTML layout
│   │   └── page.tsx        # Home Landing Page
│   │
│   ├── components/
│   │   ├── layout/         # Structural wrappers
│   │   │   ├── Header.tsx  # Responsive navigation 
│   │   │   └── PageWrapper.tsx # Framer Motion logic
│   │   └── ui/             # Core interface primitives
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       └── Textarea.tsx
│   │
│   └── lib/                # Utilities
│       ├── constants.ts    # Global vars i.e. NAV_LINKS
│       └── utils.ts        # cn() classname merger
│
├── tailwind.config.ts      # Tailwind Token Extender
└── README.md
```
