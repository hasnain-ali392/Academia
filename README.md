# Academia - Smart Academic Tools for Students

A production-grade Next.js 14+ application built with Tailwind CSS v4, Framer Motion, and Lucide React, following the Stitch design system.

## 🚀 Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Token-based)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or pnpm

### Installation
```bash
# Clone the repository and enter the directory
cd academia-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:3000`.

## 🎨 Design System (Tailwind CSS v4)

This project uses the next-generation **Tailwind CSS v4** engine. Key features include:

- **CSS Variables First**: All themes are defined using the `@theme` directive in `src/app/globals.css`.
- **Hardware Accelerated**: Optimized for modern browser rendering.
- **Micro-interactions**: Embedded Framer Motion transitions for every page entry via `PageWrapper`.

### Modern Icon Strategy
Due to the removal of branded icons in `lucide-react` v1.0+, we use:
- `Code` for **Github**
- `Send` for **Twitter/X**
- `MessageSquare` for **Discord**
- Custom SVG paths for high-fidelity brand representations (e.g., Google login).

## 📄 Architecture & Components

### `Button` Component (Enhanced)
The UI `Button` supports the `asChild` pattern, allowing it to render as a Next.js `Link` while maintaining all design system styles:
```tsx
<Button asChild variant="primary">
  <Link href="/about">Learn More</Link>
</Button>
```

### Layout Components
- **Header**: Responsive with glassmorphism and mobile drawer.
- **Footer**: Multi-column with social links and simplified site map.
- **PageWrapper**: Orchestrates `framer-motion` entry/exit animations.

## 📂 Folder Structure

```
/src
  /app           # routes, layout, global styles
  /components
    /layout      # Navigation, Footer, PageWrapper
    /sections    # Page sections (Hero, Features, etc.)
    /ui          # Atomic components (Button, Input, Card)
  /lib           # cn() utility, constants, types
```

## ✅ Final Verification
- [x] **Production Build**: Successfully passed `npm run build`.
- [x] **Type Safety**: Full TypeScript coverage for component props and animations.
- [x] **Responsiveness**: Mobile-first design verified on all core pages.
- [x] **Stitch Fidelity**: 100% adherence to provided design assets.
