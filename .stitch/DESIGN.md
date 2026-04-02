# Design System: Academia Refined

## 1. Visual Theme & Atmosphere
A balanced, academic "daily app" interface with high tactile agency. The atmosphere is structured and precise, avoiding the "over-scaled" feel of generic templates. Focus is on clarity, rhythmic spacing, and responsive interactions.

## 2. Component Stylings

### Buttons
- **Tactile Feedback:** Every button must use `-1px` vertical translate and `scale-95` on `:active` for a physical "click" feel.
- **Scaling:**
    - `sm`: 14px text, 1.5rem vertical padding.
    - `md` (Base): 14px text, 2.5rem vertical padding. Optimized for standard actions.
    - `lg`: Reserved for the main landing hero ONLY. Reduced from current size.
- **No Outer Glow:** Shadows are crisp, not neon.

### Cards & Interactivity
- **Container Interactivity:** Interactive cards MUST apply `cursor-pointer` to the entire wrapper, not just internal text.
- **Elevated Hover:** Hovering a card should trigger a `translate-y-[-4px]` shift and an increased `shadow-xl` density.
- **Border Polish:** Use `stitch-border` with a slight opacity (0.1) for subtle containment.

## 3. Motion & Interaction
- **Spring Physics:** Use `stiffness: 100, damping: 20` for premium, weighty feel.
- **Perpetual Micro-motion:** Subtle floating on hero icons.
- **Hardware Acceleration:** All animations strictly use `transform` and `opacity`.

## 4. Anti-Patterns (BANNED)
- **NO** Custom mouse cursors (use standard `pointer`).
- **NO** Over-scaled buttons that dominate the viewport.
- **NO** "Text-only" pointer triggers for card-level actions.
- **NO** Neon/outer glow shadows.
