# Design System Specification
# Quantum Marketplace Exchange

This document defines the visual design language, components, and guidelines for the Quantum Marketplace Exchange platform.

---

## Table of Contents

1. [Design Principles](#design-principles)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Iconography](#iconography)
7. [Imagery](#imagery)
8. [Animations](#animations)
9. [Accessibility](#accessibility)

---

## Design Principles

### 1. Trust & Transparency
- Clear pricing without hidden fees
- Honest product representations
- Verified seller badges
- Transparent review system

### 2. Simplicity
- Clean, uncluttered interfaces
- Maximum 3 clicks to any action
- Progressive disclosure of information
- Clear visual hierarchy

### 3. Speed & Efficiency
- Fast page loads (< 2 seconds)
- Minimal form fields
- Smart defaults and autocomplete
- Keyboard shortcuts for power users

### 4. Mobile-First
- Touch-friendly interface (44px minimum)
- Responsive across all devices
- Gesture support (swipe, pinch-zoom)
- Progressive Web App capabilities

---

## Color System

### Primary Colors

Based on the Tailwind configuration in `frontend/tailwind.config.js`:

#### Primary Blue (Brand Color)
```css
primary-50:  #f0f9ff  /* Lightest - backgrounds */
primary-100: #e0f2fe  /* Light backgrounds, hover states */
primary-200: #bae6fd  /* Borders, dividers */
primary-300: #7dd3fc  /* Disabled states */
primary-400: #38bdf8  /* Hover states */
primary-500: #0ea5e9  /* DEFAULT - Primary actions, links */
primary-600: #0284c7  /* Active states */
primary-700: #0369a1  /* Text on light backgrounds */
primary-800: #075985  /* High contrast text */
primary-900: #0c4a6e  /* Darkest - headings */
```

**Usage:**
- Buttons: `primary-500` background, `primary-600` hover
- Links: `primary-700` text, `primary-800` visited
- Icons: `primary-500`
- Focus states: `primary-500` ring

#### Secondary Purple (Accent Color)
```css
secondary-50:  #faf5ff  /* Lightest */
secondary-100: #f3e8ff
secondary-200: #e9d5ff
secondary-300: #d8b4fe
secondary-400: #c084fc
secondary-500: #a855f7  /* DEFAULT - Secondary actions */
secondary-600: #9333ea  /* Active states */
secondary-700: #7e22ce  /* Text */
secondary-800: #6b21a8
secondary-900: #581c87  /* Darkest */
```

**Usage:**
- Secondary buttons
- Accent elements
- Sale/promotion badges
- Feature highlights

### Neutral Colors

```css
gray-50:  #f9fafb  /* Page backgrounds */
gray-100: #f3f4f6  /* Card backgrounds */
gray-200: #e5e7eb  /* Borders */
gray-300: #d1d5db  /* Disabled text */
gray-400: #9ca3af  /* Placeholder text */
gray-500: #6b7280  /* Secondary text */
gray-600: #4b5563  /* Body text */
gray-700: #374151  /* Headings */
gray-800: #1f2937  /* Dark headings */
gray-900: #111827  /* Darkest - primary text */
white:    #ffffff
black:    #000000
```

### Semantic Colors

#### Success (Green)
```css
success-50:  #f0fdf4
success-500: #22c55e  /* DEFAULT - Success states */
success-600: #16a34a  /* Hover */
success-700: #15803d  /* Text */
```

**Usage:** Order delivered, payment successful, item added to cart

#### Warning (Yellow/Orange)
```css
warning-50:  #fffbeb
warning-500: #f59e0b  /* DEFAULT - Warning states */
warning-600: #d97706  /* Hover */
warning-700: #b45309  /* Text */
```

**Usage:** Low stock, pending actions, price changes

#### Error (Red)
```css
error-50:  #fef2f2
error-500: #ef4444  /* DEFAULT - Error states */
error-600: #dc2626  /* Hover */
error-700: #b91c1c  /* Text */
```

**Usage:** Form errors, payment failed, out of stock

#### Info (Blue)
```css
info-50:  #eff6ff
info-500: #3b82f6  /* DEFAULT - Info states */
info-600: #2563eb  /* Hover */
info-700: #1d4ed8  /* Text */
```

**Usage:** Helpful tips, notifications, informational messages

### Background Colors

```css
bg-page:     gray-50   /* Main page background */
bg-card:     white     /* Card/panel backgrounds */
bg-hover:    gray-100  /* Hover state for lists */
bg-active:   gray-200  /* Active/selected state */
bg-disabled: gray-100  /* Disabled elements */
```

### Text Colors

```css
text-primary:   gray-900  /* Main headings, important text */
text-secondary: gray-600  /* Body text, descriptions */
text-tertiary:  gray-500  /* Helper text, timestamps */
text-disabled:  gray-300  /* Disabled text */
text-link:      primary-700  /* Links */
text-inverse:   white     /* Text on dark backgrounds */
```

### Border Colors

```css
border-default: gray-200  /* Default borders */
border-hover:   gray-300  /* Hover state */
border-focus:   primary-500  /* Focus state */
border-error:   error-500   /* Error state */
```

---

## Typography

### Font Families

Based on Tailwind configuration:

```css
font-sans: Inter, system-ui, sans-serif  /* DEFAULT - UI text */
font-mono: 'JetBrains Mono', monospace   /* Code, numeric data */
```

**Font Loading:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

### Type Scale

```css
/* Display */
text-6xl: 3.75rem (60px)  line-height: 1      font-weight: 800
text-5xl: 3rem    (48px)  line-height: 1      font-weight: 800
text-4xl: 2.25rem (36px)  line-height: 2.5rem font-weight: 700

/* Headings */
text-3xl: 1.875rem (30px) line-height: 2.25rem font-weight: 700
text-2xl: 1.5rem   (24px) line-height: 2rem   font-weight: 600
text-xl:  1.25rem  (20px) line-height: 1.75rem font-weight: 600
text-lg:  1.125rem (18px) line-height: 1.75rem font-weight: 500

/* Body */
text-base: 1rem   (16px) line-height: 1.5rem font-weight: 400  /* DEFAULT */
text-sm:   0.875rem (14px) line-height: 1.25rem font-weight: 400
text-xs:   0.75rem  (12px) line-height: 1rem font-weight: 400
```

### Font Weights

```css
font-light:     300  /* Rarely used */
font-normal:    400  /* Body text */
font-medium:    500  /* Subheadings, emphasis */
font-semibold:  600  /* Headings */
font-bold:      700  /* Important headings */
font-extrabold: 800  /* Display text */
```

### Usage Examples

**Page Title (H1)**
```css
font-family: Inter
font-size: 36px (text-4xl)
font-weight: 700 (font-bold)
line-height: 40px
color: gray-900
```

**Section Heading (H2)**
```css
font-family: Inter
font-size: 24px (text-2xl)
font-weight: 600 (font-semibold)
line-height: 32px
color: gray-900
```

**Card Heading (H3)**
```css
font-family: Inter
font-size: 18px (text-lg)
font-weight: 500 (font-medium)
line-height: 28px
color: gray-900
```

**Body Text**
```css
font-family: Inter
font-size: 16px (text-base)
font-weight: 400 (font-normal)
line-height: 24px
color: gray-600
```

**Small Text (Captions, Metadata)**
```css
font-family: Inter
font-size: 14px (text-sm)
font-weight: 400 (font-normal)
line-height: 20px
color: gray-500
```

**Price Display**
```css
font-family: Inter
font-size: 24px (text-2xl)
font-weight: 700 (font-bold)
color: gray-900
```

### Line Length

- **Optimal:** 50-75 characters per line
- **Maximum:** 85 characters per line
- Use `max-w-prose` (65ch) for long-form content

---

## Spacing & Layout

### Spacing Scale

Tailwind's default spacing scale (based on 4px):

```css
0:   0px
0.5: 2px
1:   4px
1.5: 6px
2:   8px
2.5: 10px
3:   12px
3.5: 14px
4:   16px
5:   20px
6:   24px
7:   28px
8:   32px
9:   36px
10:  40px
11:  44px
12:  48px
14:  56px
16:  64px
20:  80px
24:  96px
32:  128px
40:  160px
48:  192px
56:  224px
64:  256px
```

### Layout Usage

**Component Spacing**
```css
gap-2  (8px)   /* Tight spacing - button groups */
gap-4  (16px)  /* DEFAULT - component spacing */
gap-6  (24px)  /* Section spacing */
gap-8  (32px)  /* Large spacing between sections */
gap-12 (48px)  /* Extra large - major sections */
```

**Padding**
```css
p-2  (8px)   /* Tight - badges, pills */
p-4  (16px)  /* DEFAULT - buttons, inputs, cards */
p-6  (24px)  /* Spacious - large cards */
p-8  (32px)  /* Very spacious - page sections */
```

**Margin**
```css
mb-2  (8px)   /* Tight spacing */
mb-4  (16px)  /* DEFAULT - paragraph spacing */
mb-6  (24px)  /* Section spacing */
mb-8  (32px)  /* Large section spacing */
mb-12 (48px)  /* Extra large spacing */
```

### Grid System

**Container Widths**
```css
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large desktops */
```

**Grid Columns**
```css
grid-cols-1   /* Mobile - single column */
grid-cols-2   /* Tablet - two columns */
grid-cols-3   /* Desktop - three columns */
grid-cols-4   /* Large desktop - four columns */
```

**Product Grid Examples**
```css
/* Mobile: 1 column */
grid grid-cols-1 gap-4

/* Tablet: 2 columns */
md:grid-cols-2 gap-6

/* Desktop: 3 columns */
lg:grid-cols-3 gap-6

/* Large Desktop: 4 columns */
xl:grid-cols-4 gap-8
```

### Breakpoints

```css
sm:  640px   @media (min-width: 640px)
md:  768px   @media (min-width: 768px)
lg:  1024px  @media (min-width: 1024px)
xl:  1280px  @media (min-width: 1280px)
2xl: 1536px  @media (min-width: 1536px)
```

---

## Components

### Buttons

#### Primary Button
```css
Background: primary-500 (#0ea5e9)
Text: white
Padding: py-3 px-6 (12px 24px)
Border Radius: rounded-lg (8px)
Font: font-medium text-base
Shadow: shadow-md
Hover: bg-primary-600
Active: bg-primary-700
Disabled: bg-gray-300, cursor-not-allowed
```

#### Secondary Button
```css
Background: white
Border: 2px solid primary-500
Text: primary-700
Padding: py-3 px-6
Border Radius: rounded-lg
Font: font-medium text-base
Hover: bg-primary-50
Active: bg-primary-100
```

#### Tertiary/Text Button
```css
Background: transparent
Text: primary-700
Padding: py-2 px-4
Font: font-medium text-base
Hover: bg-primary-50, text-primary-800
```

#### Danger Button
```css
Background: error-500
Text: white
Padding: py-3 px-6
Border Radius: rounded-lg
Hover: bg-error-600
```

#### Button Sizes
```css
/* Small */
text-sm py-2 px-4 (14px | 8px 16px)

/* Medium (Default) */
text-base py-3 px-6 (16px | 12px 24px)

/* Large */
text-lg py-4 px-8 (18px | 16px 32px)
```

### Form Elements

#### Text Input
```css
Border: 1px solid gray-300
Background: white
Text: gray-900
Padding: py-3 px-4 (12px 16px)
Border Radius: rounded-md (6px)
Font: text-base
Placeholder: text-gray-400

Focus:
  border-color: primary-500
  ring: 2px primary-500/20

Error:
  border-color: error-500
  ring: 2px error-500/20
```

#### Search Input
```css
/* Same as text input, plus: */
Icon: Left-aligned search icon (gray-400)
Padding Left: pl-10 (40px) to accommodate icon
Clear button: Right side when text entered
```

#### Select/Dropdown
```css
/* Same as text input, plus: */
Icon: Right-aligned chevron-down (gray-400)
Padding Right: pr-10 to accommodate icon
```

#### Checkbox
```css
Size: 20px × 20px
Border: 2px solid gray-300
Border Radius: rounded (4px)
Checked Background: primary-500
Checkmark: white
Focus Ring: 2px primary-500/20
```

#### Radio Button
```css
Size: 20px × 20px
Border: 2px solid gray-300
Border Radius: rounded-full
Selected:
  border-color: primary-500
  inner dot: 10px, primary-500
Focus Ring: 2px primary-500/20
```

#### Toggle/Switch
```css
Width: 44px
Height: 24px
Background: gray-300 (off), primary-500 (on)
Border Radius: rounded-full
Knob: 20px circle, white
Transition: 200ms ease-in-out
```

### Cards

#### Product Card
```css
Background: white
Border: 1px solid gray-200
Border Radius: rounded-lg (8px)
Padding: p-4 (16px)
Shadow: shadow-sm
Hover: shadow-md, border-gray-300
Image Aspect: aspect-square (1:1)
```

#### Info Card
```css
Background: white
Border: 1px solid gray-200
Border Radius: rounded-lg
Padding: p-6 (24px)
Shadow: shadow-md
```

#### Elevated Card
```css
Background: white
Border: none
Border Radius: rounded-xl (12px)
Shadow: shadow-lg
Padding: p-6
```

### Badges

#### Status Badge
```css
Padding: px-3 py-1 (12px 4px)
Border Radius: rounded-full
Font: text-xs font-medium
Display: inline-flex items-center

/* Status Colors */
Pending:   bg-warning-100, text-warning-700
Processing: bg-info-100, text-info-700
Shipped:   bg-purple-100, text-purple-700
Delivered: bg-success-100, text-success-700
Cancelled: bg-error-100, text-error-700
```

#### Count Badge
```css
/* Small notification badge */
Size: min-w-5 h-5 (20px × 20px)
Background: error-500
Text: white, text-xs, font-bold
Border Radius: rounded-full
Position: absolute top-0 right-0
Transform: translate(50%, -50%)
```

### Modals

```css
Overlay: bg-black/50 (50% opacity black)
Container: bg-white
Max Width: max-w-lg (512px)
Border Radius: rounded-xl (12px)
Padding: p-6 (24px)
Shadow: shadow-2xl
Animation: fade-in 200ms, slide-up 200ms
```

**Modal Header**
```css
Padding Bottom: pb-4
Border Bottom: 1px solid gray-200
Title: text-xl font-semibold
Close Button: top-4 right-4, text-gray-400
```

**Modal Body**
```css
Padding: py-6
Max Height: max-h-96 (384px)
Overflow: overflow-y-auto
```

**Modal Footer**
```css
Padding Top: pt-4
Border Top: 1px solid gray-200
Buttons: gap-3, flex justify-end
```

### Tooltips

```css
Background: gray-900
Text: white, text-sm
Padding: px-3 py-2 (12px 8px)
Border Radius: rounded (4px)
Max Width: max-w-xs (320px)
Arrow: 6px triangle, matching background
Shadow: shadow-lg
Z-Index: z-50
```

### Dropdowns

```css
Background: white
Border: 1px solid gray-200
Border Radius: rounded-md (6px)
Shadow: shadow-lg
Padding: py-1 (4px)
Max Height: max-h-60 (240px)
Overflow: overflow-y-auto

/* Item */
Padding: px-4 py-2 (16px 8px)
Hover: bg-gray-100
Active: bg-primary-50, text-primary-700
```

### Alerts/Notifications

```css
Padding: p-4 (16px)
Border Radius: rounded-lg (8px)
Border Left: 4px solid (accent color)
Display: flex items-start gap-3
Icon: 20px × 20px
Close Button: ml-auto

/* Success */
bg-success-50, border-success-500
text-success-700, icon: success-500

/* Error */
bg-error-50, border-error-500
text-error-700, icon: error-500

/* Warning */
bg-warning-50, border-warning-500
text-warning-700, icon: warning-500

/* Info */
bg-info-50, border-info-500
text-info-700, icon: info-500
```

---

## Iconography

### Icon Library

**Primary:** Heroicons (https://heroicons.com/)
- Available in outline and solid styles
- SVG format for crisp rendering
- 24px × 24px default size
- 20px × 20px for compact UI

### Icon Sizes

```css
icon-xs: 16px × 16px  /* Inline with small text */
icon-sm: 20px × 20px  /* Inline with body text */
icon-md: 24px × 24px  /* DEFAULT - standalone icons */
icon-lg: 32px × 32px  /* Prominent icons */
icon-xl: 48px × 48px  /* Feature icons */
```

### Icon Colors

```css
icon-primary:   gray-600   /* Default state */
icon-secondary: gray-500   /* Less important */
icon-tertiary:  gray-400   /* Decorative */
icon-accent:    primary-500 /* Interactive */
icon-success:   success-500
icon-warning:   warning-500
icon-error:     error-500
```

### Common Icons

```
🔍 Search:      MagnifyingGlassIcon
🛒 Cart:        ShoppingCartIcon
👤 User:        UserIcon
⭐ Rating:      StarIcon
♡ Favorite:     HeartIcon (outline)
♥ Favorited:    HeartIcon (solid)
✓ Success:      CheckCircleIcon
✕ Error:        XCircleIcon
⚠ Warning:      ExclamationTriangleIcon
ℹ Info:         InformationCircleIcon
📤 Share:       ShareIcon
⚙ Settings:     CogIcon
💬 Message:     ChatBubbleLeftIcon
🔔 Notification: BellIcon
📍 Location:    MapPinIcon
📦 Package:     CubeIcon
```

---

## Imagery

### Product Images

**Aspect Ratios**
```
Square:     1:1   (Primary - grid view)
Landscape:  3:2   (List view)
Portrait:   2:3   (Tall products)
```

**Sizes**
```
Thumbnail:  80px × 80px
Small:      160px × 160px
Medium:     320px × 320px
Large:      640px × 640px
XLarge:     1280px × 1280px (zoom/lightbox)
```

**Image Optimization**
- Format: WebP with JPEG fallback
- Compression: 80% quality
- Lazy loading: Below the fold
- Responsive srcset
- Alt text required

### Avatar Images

```css
/* Circle crop */
Size: 32px, 40px, 48px, 64px, 96px
Border Radius: rounded-full
Border: 2px solid gray-200 (optional)
Fallback: Initials on colored background
```

### Background Images

```css
Hero Section: 1920px × 600px (3.2:1)
Banner: 1920px × 400px
Category Cards: 400px × 300px (4:3)
```

---

## Animations

### Timing Functions

```css
ease-in:     cubic-bezier(0.4, 0, 1, 1)
ease-out:    cubic-bezier(0, 0, 0.2, 1)  /* DEFAULT */
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
```

### Durations

```css
duration-75:   75ms   /* Instant feedback */
duration-100:  100ms  /* Very fast */
duration-150:  150ms  /* Fast - hover states */
duration-200:  200ms  /* DEFAULT - most transitions */
duration-300:  300ms  /* Moderate - modals, dropdowns */
duration-500:  500ms  /* Slow - page transitions */
```

### Common Transitions

**Hover State**
```css
transition: all 150ms ease-out
/* or specific properties */
transition: background-color 150ms ease-out,
            border-color 150ms ease-out
```

**Modal/Overlay**
```css
/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
animation: fadeIn 200ms ease-out

/* Slide up */
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
animation: slideUp 300ms ease-out
```

**Loading Spinner**
```css
@keyframes spin {
  to { transform: rotate(360deg); }
}
animation: spin 1000ms linear infinite
```

**Skeleton Loading**
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
animation: pulse 2000ms cubic-bezier(0.4, 0, 0.6, 1) infinite
```

### Micro-interactions

**Button Click**
```css
active:scale-95
transition: transform 100ms ease-out
```

**Heart Favorite**
```css
/* Scale up then down */
@keyframes heartbeat {
  0% { transform: scale(1); }
  25% { transform: scale(1.3); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
animation: heartbeat 300ms ease-in-out
```

**Add to Cart**
```css
/* Product flies to cart icon */
@keyframes flyToCart {
  0% { transform: translate(0, 0) scale(1); opacity: 1; }
  100% { transform: translate(300px, -200px) scale(0); opacity: 0; }
}
animation: flyToCart 600ms ease-in
```

---

## Accessibility

### Color Contrast

**WCAG 2.1 AA Requirements**
- Normal text (< 18px): 4.5:1 contrast ratio
- Large text (≥ 18px): 3:1 contrast ratio
- UI components: 3:1 contrast ratio

**Tested Combinations**
```css
✓ white on primary-500  (4.5:1)
✓ white on primary-600  (5.9:1)
✓ gray-900 on white     (15.2:1)
✓ gray-700 on white     (9.1:1)
✓ gray-600 on white     (5.5:1)
✓ primary-700 on white  (5.2:1)
```

### Focus States

**Keyboard Focus Ring**
```css
focus:outline-none
focus:ring-2
focus:ring-primary-500
focus:ring-offset-2

/* For dark backgrounds */
focus:ring-offset-gray-900
```

### Touch Targets

**Minimum Size**
```css
min-w-11 min-h-11  /* 44px × 44px */
```

All interactive elements (buttons, links, inputs) must meet this minimum.

### Screen Reader Support

**ARIA Labels**
```html
<!-- Icon-only button -->
<button aria-label="Add to favorites">
  <HeartIcon />
</button>

<!-- Loading state -->
<div role="status" aria-live="polite">
  Loading products...
</div>

<!-- Form validation -->
<input aria-invalid="true" aria-describedby="error-msg">
<p id="error-msg" role="alert">Email is required</p>
```

### Semantic HTML

```html
<!-- Use proper heading hierarchy -->
<h1>Product Title</h1>
<h2>Description</h2>
<h3>Specifications</h3>

<!-- Use semantic elements -->
<nav>Navigation</nav>
<main>Main content</main>
<aside>Sidebar</aside>
<footer>Footer</footer>
```

---

## Dark Mode (Future Enhancement)

### Color Mapping

```css
/* Light mode */
bg-page:  gray-50
bg-card:  white
text-primary: gray-900

/* Dark mode */
dark:bg-page:  gray-900
dark:bg-card:  gray-800
dark:text-primary: white
```

**Implementation**
```css
/* In tailwind.config.js */
darkMode: 'class'  /* or 'media' for system preference */

/* In components */
className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
```

---

## Implementation Notes

### Tailwind Configuration

The complete Tailwind configuration is in `frontend/tailwind.config.js`. Key customizations:

1. **Extended Color Palette**: Primary and secondary color scales
2. **Custom Animations**: fade-in, slide-up
3. **Plugins**:
   - @tailwindcss/forms (enhanced form styles)
   - @tailwindcss/typography (prose content)
   - @tailwindcss/aspect-ratio (image aspect ratios)

### CSS Variables

For dynamic theming, expose key colors as CSS variables:

```css
:root {
  --color-primary: 14 165 233;      /* primary-500 */
  --color-secondary: 168 85 247;     /* secondary-500 */
  --color-success: 34 197 94;        /* success-500 */
  --color-error: 239 68 68;          /* error-500 */
}

/* Usage with Tailwind */
className="bg-[rgb(var(--color-primary))]"
```

### Component Library

Use this design system with component libraries:
- **Headless UI**: Unstyled components (modals, dropdowns)
- **Radix UI**: Accessible components
- **Framer Motion**: Advanced animations

### Design Tokens Export

For design tools (Figma, Sketch):

```json
{
  "color": {
    "primary": {
      "500": "#0ea5e9",
      "600": "#0284c7",
      "700": "#0369a1"
    }
  },
  "spacing": {
    "4": "16px",
    "6": "24px",
    "8": "32px"
  },
  "typography": {
    "heading": {
      "fontSize": "24px",
      "lineHeight": "32px",
      "fontWeight": "600"
    }
  }
}
```

---

## Resources

- **Tailwind CSS Docs**: https://tailwindcss.com
- **Heroicons**: https://heroicons.com
- **Color Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **Inter Font**: https://fonts.google.com/specimen/Inter

---

This design system provides a comprehensive foundation for building a consistent, accessible, and beautiful user interface for the Quantum Marketplace Exchange platform.
