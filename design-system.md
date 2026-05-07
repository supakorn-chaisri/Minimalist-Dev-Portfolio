# Design System: Pro-Developer Portfolio

This document summarizes the design tokens and style guidelines for the **Pro-Developer Portfolio** project (ID: `8514455886125654743`).

## Tech Stack
- **Framework**: Next.js 16+ (App Router)
- **Styling**: Tailwind CSS (v4)
- **Language**: TypeScript

## Brand & Style
The design system is built on precision, clarity, and premium minimalism. It captures a "Hardware-as-Software" aesthetic, combining minimalism with subtle glassmorphism. It prioritizes extreme legibility and intentional negative space.

## Color Palette
The palette is predominantly monochrome, emphasizing high contrast between whites and blacks.

| Token | Value | Description |
| :--- | :--- | :--- |
| **Background** | `#faf8fe` | Main page background |
| **Surface** | `#faf8fe` | Surface background |
| **Surface Container** | `#eeedf3` | Secondary surface level |
| **Primary** | `#000000` | High-emphasis text and branding |
| **On-Primary** | `#ffffff` | Text on primary background |
| **Secondary (Accent)** | `#005cba` | Interactive links and primary CTAs |
| **Tertiary/Neutral** | `#000000` | Neutral accents |
| **Error** | `#ba1a1a` | Error states |
| **Outline** | `#7e7576` | Hairline borders and dividers |

## Typography
The system uses **Inter** as the primary typeface for its neutral and systematic characteristics.

| Style | Font Family | Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display XL** | Inter | 80px | 700 | 1.1 | -0.02em |
| **Headline LG** | Inter | 48px | 600 | 1.2 | -0.01em |
| **Headline MD** | Inter | 32px | 600 | 1.25 | -0.01em |
| **Body LG** | Inter | 21px | 400 | 1.5 | 0 |
| **Body MD** | Inter | 17px | 400 | 1.47 | 0 |
| **Label SM** | Inter | 12px | 500 | 1.3 | 0.02em |

## Spacing & Layout
A **Fixed Grid** model is used for desktop, centered within the viewport.

- **Base Unit:** `8px`
- **Max Width:** `1200px` (12-column grid)
- **Gutter:** `24px`
- **Section Padding:** `120px` (emphasizing breathability)
- **Stack SM:** `16px`
- **Stack MD:** `32px`
- **Stack LG:** `64px`

## Shapes & Elevation
- **Standard Corners (Buttons/Small Cards):** `0.5rem` (8px)
- **Container Corners (Large Cards/Images):** `1.5rem` (24px)
- **Elevation:** Depth is achieved via **Glassmorphism** (20px-30px backdrop blur) and **Ambient Shadows** (ultra-diffused, 10-15% opacity).
- **Borders:** 1px hairline borders for defining edges without visual weight.

## Components Guidelines
- **Buttons:** Solid black (primary) or "Ghost" style with 1px border (secondary).
- **Cards:** White background with subtle 1px border; 1.02x scale on hover.
- **Navigation:** Top-sticky with glassmorphism effect.
## Motion & Interaction
The system leverages **Framer Motion** to reinforce the "Hardware-as-Software" feel through intentional, high-performance transitions.

- **Entrance Animations**: Use `whileInView` with a 20px-30px offset (`y` or `x`) and a duration of 0.6s - 0.8s for a smooth "mounting" effect.
- **Staggered Rhythms**: Lists and grids should use a 0.1s - 0.15s stagger delay between children to create a visual sequence.
- **Tactile Feedback**:
  - **Hover**: Subtle scale-up (1.02x) for cards and buttons.
  - **Tap/Active**: Subtle scale-down (0.98x) to simulate physical compression.
- **Easing**: Favor `easeOut` for entrances and `backOut` for small UI components to add a professional "snap".
- **AnimatePresence**: Use for layout transitions (e.g., mobile menu) to ensure smooth exit animations.

---
*Updated: 2026-05-07*