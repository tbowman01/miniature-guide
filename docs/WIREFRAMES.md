# Wireframe Specifications
# Quantum Marketplace Exchange

This document provides detailed wireframe descriptions for all major screens and components in the Quantum Marketplace Exchange platform.

---

## Table of Contents

1. [Homepage](#1-homepage)
2. [Product Listing Page](#2-product-listing-page)
3. [Product Detail Page](#3-product-detail-page)
4. [Search Results](#4-search-results)
5. [Authentication Screens](#5-authentication-screens)
6. [User Dashboard](#6-user-dashboard)
7. [Seller Dashboard](#7-seller-dashboard)
8. [Checkout Flow](#8-checkout-flow)
9. [Messaging Interface](#9-messaging-interface)
10. [Review System](#10-review-system)

---

## 1. Homepage

### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER                                                      │
│  [Logo] [Search Bar..................] [Cart] [Messages] [👤]│
│  Categories: Electronics | Fashion | Home | Sports...       │
└─────────────────────────────────────────────────────────────┘
│                                                              │
│  HERO SECTION                                                │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                                                        │  │
│  │    Discover Your Next Great Find                      │  │
│  │    Buy, sell, and trade with confidence              │  │
│  │                                                        │  │
│  │    [Start Selling] [Browse Products]                  │  │
│  │                                                        │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  FEATURED CATEGORIES                                         │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│  │  [Icon] │ │  [Icon] │ │  [Icon] │ │  [Icon] │          │
│  │Electronics│Fashion  │  Home    │  Sports  │          │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘          │
│                                                              │
│  TRENDING PRODUCTS                                           │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │  Image   │ │  Image   │ │  Image   │ │  Image   │      │
│  │          │ │          │ │          │ │          │      │
│  │ Title    │ │ Title    │ │ Title    │ │ Title    │      │
│  │ $99.99   │ │ $149.99  │ │ $79.99   │ │ $199.99  │      │
│  │ ⭐⭐⭐⭐⭐ │ │ ⭐⭐⭐⭐⭐ │ │ ⭐⭐⭐⭐⭐ │ │ ⭐⭐⭐⭐⭐ │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│                                                              │
│  HOW IT WORKS                                                │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐       │
│  │   Step 1     │ │   Step 2     │ │   Step 3     │       │
│  │   [Icon]     │ │   [Icon]     │ │   [Icon]     │       │
│  │ Create Listing│ │ Get Offers  │ │ Ship & Earn  │       │
│  └──────────────┘ └──────────────┘ └──────────────┘       │
│                                                              │
│  RECENTLY VIEWED (if logged in)                              │
│  [Product Cards in horizontal scroll]                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
│  FOOTER                                                      │
│  About | Help | Terms | Privacy | Contact                   │
│  © 2025 Quantum Marketplace Exchange                         │
└─────────────────────────────────────────────────────────────┘
```

### Component Details

**Header**
- Logo: Left-aligned, links to homepage
- Search Bar: Center, prominent, with autocomplete dropdown
- Icons: Cart (with count badge), Messages (with unread badge), User profile
- Secondary Nav: Category pills with horizontal scroll on mobile

**Hero Section**
- Full-width background image/gradient
- Centered headline (H1)
- Subheadline (H3)
- Two CTA buttons: Primary (Start Selling), Secondary (Browse Products)
- Height: 500px desktop, 400px tablet, 300px mobile

**Featured Categories**
- 8 categories visible (4 on mobile)
- Icon + Label
- Clickable cards with hover state
- Equal width, responsive grid

**Trending Products**
- Product cards in 4-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Horizontal scroll alternative on mobile
- "View All" link at end

---

## 2. Product Listing Page

### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER (same as homepage)                                   │
├─────────────────────────────────────────────────────────────┤
│  Breadcrumb: Home > Electronics > Smartphones                │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐  ┌──────────────────────────────────┐    │
│  │   FILTERS    │  │  PRODUCTS (Grid View)            │    │
│  │──────────────│  │──────────────────────────────────│    │
│  │ Category     │  │  Sort: [Dropdown] View: [⊞] [☰]  │    │
│  │ □ Phones     │  │                                   │    │
│  │ □ Tablets    │  │  ┌────────┐ ┌────────┐ ┌────────┐│    │
│  │ □ Accessories│  │  │ Image  │ │ Image  │ │ Image  ││    │
│  │              │  │  │        │ │        │ │        ││    │
│  │ Price Range  │  │  │ Title  │ │ Title  │ │ Title  ││    │
│  │ $[__]-$[___] │  │  │ $99    │ │ $149   │ │ $79    ││    │
│  │ [━━━━━━━━━━]│  │  │ ⭐ 4.5 │ │ ⭐ 4.8 │ │ ⭐ 4.2 ││    │
│  │              │  │  │ [♡ 24] │ │ [♡ 18] │ │ [♡ 32] ││    │
│  │ Condition    │  │  └────────┘ └────────┘ └────────┘│    │
│  │ ☑ New        │  │                                   │    │
│  │ □ Like New   │  │  ┌────────┐ ┌────────┐ ┌────────┐│    │
│  │ □ Good       │  │  │ Image  │ │ Image  │ │ Image  ││    │
│  │              │  │  │ ...    │ │ ...    │ │ ...    ││    │
│  │ Location     │  │  └────────┘ └────────┘ └────────┘│    │
│  │ [Enter ZIP]  │  │                                   │    │
│  │ ○ 25 miles   │  │        [Load More]                │    │
│  │ ○ 50 miles   │  │                                   │    │
│  │              │  │  Showing 1-24 of 156 results      │    │
│  │ [Clear All]  │  │                                   │    │
│  └──────────────┘  └──────────────────────────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Component Details

**Filter Sidebar** (280px wide)
- Collapsible sections
- Category checkboxes with counts
- Dual-range price slider
- Condition radio buttons
- Location search with distance selector
- Shipping options checkboxes
- "Clear All" button at bottom
- Sticky positioning on scroll

**Product Grid**
- Toolbar: Sort dropdown + View toggle (grid/list)
- Grid: 3 columns (desktop), 2 (tablet), 1 (mobile)
- Infinite scroll or "Load More" pagination
- Results count displayed

**Product Card** (Grid View)
- Square image (1:1 ratio)
- Product title (2 lines max, ellipsis)
- Price (bold, large)
- Rating stars + count
- Favorite icon (heart)
- Hover: Show "Quick View" button overlay

**Product Card** (List View)
- Horizontal layout
- Rectangular image (3:2 ratio) on left
- Title, description snippet, price, rating on right
- Seller info included
- "Add to Cart" and "Quick View" buttons

---

## 3. Product Detail Page

### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER                                                      │
├─────────────────────────────────────────────────────────────┤
│  Breadcrumb: Home > Electronics > Smartphones > iPhone 14    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────┐  ┌──────────────────────────────┐│
│  │   IMAGE GALLERY      │  │   PRODUCT INFO               ││
│  │──────────────────────│  │──────────────────────────────││
│  │  ┌────────────────┐  │  │  iPhone 14 Pro - Unlocked    ││
│  │  │                │  │  │  Space Black, 256GB          ││
│  │  │   Main Image   │  │  │                              ││
│  │  │                │  │  │  ⭐⭐⭐⭐⭐ 4.8 (124 reviews) ││
│  │  │    (zoomable)  │  │  │                              ││
│  │  │                │  │  │  $999.99                     ││
│  │  └────────────────┘  │  │  Was $1,099  Save 9%         ││
│  │                      │  │                              ││
│  │  [◀] [▶]           │  │  Condition: ● New             ││
│  │  ┌──┐┌──┐┌──┐┌──┐  │  │                              ││
│  │  │ 1││ 2││ 3││ 4│  │  │  Color: ● Space Black         ││
│  │  └──┘└──┘└──┘└──┘  │  │         ○ Silver  ○ Gold     ││
│  │  └──┘└──┘└──┘      │  │                              ││
│  └──────────────────────┘  │  Storage: ● 256GB            ││
│                            │          ○ 128GB  ○ 512GB   ││
│  SELLER CARD               │                              ││
│  ┌──────────────────────┐  │  Quantity: [- 1 +]          ││
│  │  [Avatar] John Doe   │  │                              ││
│  │  ⭐ 4.9 (89 sales)   │  │  ✓ In Stock (3 available)    ││
│  │  Member since 2023   │  │  🚚 Free shipping            ││
│  │  [Message] [Profile] │  │  📦 Ships within 2 days      ││
│  └──────────────────────┘  │  🔒 Buyer protection         ││
│                            │                              ││
│  SHARE & SAVE              │  [Add to Cart] [Buy Now]     ││
│  [♡ Save] [📤 Share]      │  [Message Seller]            ││
│                            │                              ││
│                            │  Returns: 30-day return policy││
│                            │  Warranty: 1 year AppleCare  ││
│                            └──────────────────────────────┘│
│                                                              │
│  TABS                                                        │
│  ──────────────────────────────────────────────────────────│
│  [Description] [Specifications] [Shipping] [Reviews]        │
│  ──────────────────────────────────────────────────────────│
│                                                              │
│  Brand new iPhone 14 Pro, factory unlocked. Works with all  │
│  carriers. Comes with original box and accessories...       │
│                                                              │
│  Specifications:                                             │
│  • Display: 6.1" Super Retina XDR                           │
│  • Chip: A16 Bionic                                         │
│  • Camera: 48MP Main | 12MP Ultra Wide                      │
│  • Battery: Up to 23 hours video playback                   │
│                                                              │
│  ──────────────────────────────────────────────────────────│
│                                                              │
│  CUSTOMER REVIEWS                                            │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Overall Rating: 4.8/5 ⭐⭐⭐⭐⭐                      │  │
│  │  ─────────────────────────────────────────────────   │  │
│  │  5★ ████████████████████ 85                          │  │
│  │  4★ ████████ 28                                       │  │
│  │  3★ ██ 8                                              │  │
│  │  2★ █ 2                                               │  │
│  │  1★ █ 1                                               │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  [Write a Review]                                            │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  ⭐⭐⭐⭐⭐  Sarah M.  |  Verified Purchase            │  │
│  │  "Amazing phone!"                                      │  │
│  │  The camera quality is incredible. Fast shipping...   │  │
│  │  [👍 Helpful (24)] [Report]                           │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  SIMILAR PRODUCTS                                            │
│  [Product Cards in horizontal scroll]                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Component Details

**Image Gallery** (600px × 600px)
- Main image with zoom on hover/click
- Thumbnail strip below (4-5 visible)
- Arrow navigation
- Fullscreen lightbox option
- Video support if available

**Product Info Panel**
- Product title (H1)
- Rating with review count (clickable)
- Current price (large, bold)
- Original price (strikethrough) + savings
- Condition badge
- Variant selectors (color, size, storage, etc.)
- Quantity selector
- Stock status indicator
- Shipping info icons
- Two CTAs: "Add to Cart" (secondary), "Buy Now" (primary)
- "Message Seller" link

**Seller Card**
- Avatar (60px circle)
- Seller name (link to profile)
- Rating and sales count
- Member since date
- Message and Profile buttons

**Tabs Section**
- Description: Rich text, expandable
- Specifications: Key-value table
- Shipping: Timeline, tracking info, return policy
- Reviews: Full review section

**Reviews Section**
- Rating distribution bar chart
- Write review CTA
- Individual reviews with photos
- Helpful/Report actions
- Load more pagination

---

## 4. Search Results

### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER                                                      │
│  [Logo] [🔍 "wireless headphones"............] [Cart] [👤]  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Search results for "wireless headphones" (234 results)      │
│                                                              │
│  DID YOU MEAN: [wireless headset] [bluetooth headphones]     │
│                                                              │
│  FILTERS: [Price: Any ▼] [Condition: New ✕] [Clear All]    │
│                                                              │
│  ┌──────────────┐  ┌──────────────────────────────────┐    │
│  │   FILTERS    │  │  SEARCH RESULTS                   │    │
│  │──────────────│  │──────────────────────────────────│    │
│  │ (Same as     │  │  Sort: [Relevance ▼]             │    │
│  │  Product     │  │                                   │    │
│  │  Listing)    │  │  SPONSORED                        │    │
│  │              │  │  ┌────────────────────────────┐  │    │
│  │              │  │  │ [Ad] Premium Headphones    │  │    │
│  │              │  │  │ $179.99                    │  │    │
│  │              │  │  └────────────────────────────┘  │    │
│  │              │  │                                   │    │
│  │              │  │  ┌────────┐ ┌────────┐ ┌────────┐│    │
│  │              │  │  │ Image  │ │ Image  │ │ Image  ││    │
│  │              │  │  │wireless│ │wireless│ │wireless││    │
│  │              │  │  │ Title  │ │ Title  │ │ Title  ││    │
│  │              │  │  └────────┘ └────────┘ └────────┘│    │
│  │              │  │                                   │    │
│  │              │  │  [More results...]                │    │
│  └──────────────┘  └──────────────────────────────────┘    │
│                                                              │
│  SEARCH SUGGESTIONS                                          │
│  People also searched: [sony headphones] [bose] [airpods]   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Component Details

**Search Results Header**
- Search term highlighted
- Result count
- "Did you mean" suggestions for typos
- Active filter pills with remove (×) icons
- "Clear all" option

**Sponsored Listings**
- Clearly marked as "Sponsored" or "Ad"
- Distinct background color (light gray)
- Same card format as organic results

**No Results State**
```
┌─────────────────────────────────────────┐
│  No results found for "xyz12345"        │
│                                         │
│  Suggestions:                           │
│  • Check your spelling                  │
│  • Try different keywords               │
│  • Use more general terms               │
│                                         │
│  Browse popular categories:             │
│  [Electronics] [Fashion] [Home]         │
└─────────────────────────────────────────┘
```

---

## 5. Authentication Screens

### 5.1 Login Page

```
┌─────────────────────────────────────────────┐
│            [Logo]                           │
│                                             │
│        Welcome Back                         │
│        Log in to your account               │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │  Email                                 │ │
│  │  [email@example.com................] │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │  Password                              │ │
│  │  [••••••••••••••••••••] [👁]          │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ☐ Remember me    [Forgot password?]        │
│                                             │
│  [       Log In       ]                     │
│                                             │
│  ─────────── or ───────────                 │
│                                             │
│  [ 🔵 Continue with Google  ]               │
│  [ 📘 Continue with Facebook ]              │
│  [ 🍎 Continue with Apple   ]               │
│                                             │
│  Don't have an account? [Sign Up]           │
│                                             │
└─────────────────────────────────────────────┘
```

### 5.2 Registration Page

```
┌─────────────────────────────────────────────┐
│            [Logo]                           │
│                                             │
│        Create Account                       │
│        Join thousands of buyers and sellers │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │  First Name                            │ │
│  │  [John...........................]    │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │  Last Name                             │ │
│  │  [Doe............................]    │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │  Email                                 │ │
│  │  [john@example.com...............]    │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │  Username                              │ │
│  │  [johndoe123....................]    │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │  Password                              │ │
│  │  [••••••••••••••••••••] [👁]          │ │
│  │  ▰▰▰▱▱ Medium strength                │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ☑ I agree to Terms of Service and         │
│     Privacy Policy                          │
│                                             │
│  [       Create Account       ]             │
│                                             │
│  ─────────── or ───────────                 │
│                                             │
│  [ 🔵 Sign up with Google  ]                │
│  [ 📘 Sign up with Facebook ]               │
│                                             │
│  Already have an account? [Log In]          │
│                                             │
└─────────────────────────────────────────────┘
```

### 5.3 Two-Factor Authentication (2FA)

```
┌─────────────────────────────────────────────┐
│            [Logo]                           │
│                                             │
│        Two-Factor Authentication            │
│        Enter the code sent to               │
│        jo**@example.com                     │
│                                             │
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐     │
│  │ 1 │ │ 2 │ │ 3 │ │ 4 │ │ 5 │ │ 6 │     │
│  └───┘ └───┘ └───┘ └───┘ └───┘ └───┘     │
│                                             │
│  [Didn't receive code? Resend]              │
│                                             │
│  [       Verify       ]                     │
│                                             │
│  [← Back to login]                          │
│                                             │
└─────────────────────────────────────────────┘
```

### 5.4 Forgot Password

```
┌─────────────────────────────────────────────┐
│            [Logo]                           │
│                                             │
│        Reset Password                       │
│        Enter your email to receive a        │
│        password reset link                  │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │  Email                                 │ │
│  │  [email@example.com................] │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  [    Send Reset Link    ]                  │
│                                             │
│  [← Back to login]                          │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 6. User Dashboard

### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER                                                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐  ┌──────────────────────────────────┐    │
│  │   SIDEBAR    │  │   MAIN CONTENT                    │    │
│  │──────────────│  │──────────────────────────────────│    │
│  │ [👤 John Doe]│  │   Dashboard                       │    │
│  │              │  │──────────────────────────────────│    │
│  │ ● Dashboard  │  │                                   │    │
│  │ ○ Orders     │  │  QUICK STATS                      │    │
│  │ ○ Favorites  │  │  ┌──────┐┌──────┐┌──────┐┌──────┐│    │
│  │ ○ Messages   │  │  │ 12   ││ 8    ││ $450 ││ 3    ││    │
│  │ ○ Reviews    │  │  │Orders││Saved ││Spent ││Msgs  ││    │
│  │ ○ Settings   │  │  └──────┘└──────┘└──────┘└──────┘│    │
│  │──────────────│  │                                   │    │
│  │ ○ Sell       │  │  RECENT ORDERS                    │    │
│  │──────────────│  │  ┌─────────────────────────────┐ │    │
│  │ [Logout]     │  │  │ Order #12345  |  $99.99     │ │    │
│  └──────────────┘  │  │ iPhone Case                 │ │    │
│                    │  │ Status: ● Delivered          │ │    │
│                    │  │ [View] [Review]              │ │    │
│                    │  └─────────────────────────────┘ │    │
│                    │                                   │    │
│                    │  ┌─────────────────────────────┐ │    │
│                    │  │ Order #12344  |  $149.99    │ │    │
│                    │  │ Wireless Headphones          │ │    │
│                    │  │ Status: ● In Transit         │ │    │
│                    │  │ [Track] [Contact Seller]     │ │    │
│                    │  └─────────────────────────────┘ │    │
│                    │                                   │    │
│                    │  [View All Orders]                │    │
│                    │                                   │    │
│                    │  RECOMMENDED FOR YOU              │    │
│                    │  [Product Cards...]               │    │
│                    │                                   │    │
│                    └──────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

### Component Details

**Sidebar Navigation** (240px)
- User profile card with avatar
- Active state indicator (●)
- Icon + Label for each nav item
- Logout button at bottom
- Collapsible on mobile

**Quick Stats Cards**
- 4 metric cards in row
- Icon, number, label
- Clickable to relevant section

**Recent Orders**
- Order cards with key info
- Status badges (color-coded)
- Action buttons based on status
- "View All" link

**Orders Page**

```
┌─────────────────────────────────────────────────────────┐
│  Orders                                                  │
│  ─────────────────────────────────────────────────────  │
│  [All] [Processing] [Shipped] [Delivered] [Cancelled]   │
│                                                          │
│  Search orders: [........................] [🔍]         │
│                                                          │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Order #12345 • Placed on Jan 15, 2025           │   │
│  │ ─────────────────────────────────────────────── │   │
│  │ ┌────┐                                           │   │
│  │ │Img │  iPhone 14 Pro Case                      │   │
│  │ └────┘  Qty: 1  •  $99.99                       │   │
│  │                                                   │   │
│  │ Total: $104.99 (incl. shipping)                  │   │
│  │ Status: ✓ Delivered on Jan 18, 2025             │   │
│  │                                                   │   │
│  │ [View Details] [Write Review] [Buy Again]        │   │
│  └─────────────────────────────────────────────────┘   │
│                                                          │
│  [More orders...]                                        │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## 7. Seller Dashboard

### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│  SELLER DASHBOARD                                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐  ┌──────────────────────────────────┐    │
│  │   SIDEBAR    │  │   ANALYTICS                       │    │
│  │──────────────│  │──────────────────────────────────│    │
│  │ ● Analytics  │  │  Last 30 days                     │    │
│  │ ○ Listings   │  │                                   │    │
│  │ ○ Orders     │  │  PERFORMANCE METRICS              │    │
│  │ ○ Reviews    │  │  ┌────────┐┌────────┐┌────────┐  │    │
│  │ ○ Messages   │  │  │ $2,450 ││  45    ││  4.8⭐ │  │    │
│  │ ○ Settings   │  │  │Revenue ││ Sales  ││ Rating │  │    │
│  │──────────────│  │  └────────┘└────────┘└────────┘  │    │
│  │[+New Listing]│  │                                   │    │
│  └──────────────┘  │  SALES CHART                      │    │
│                    │  ┌──────────────────────────────┐ │    │
│                    │  │     📊                        │ │    │
│                    │  │    ▄▆█                        │ │    │
│                    │  │  ▃▅▇███▄▅                     │ │    │
│                    │  │ ██████████▇▅▃                 │ │    │
│                    │  │ ─────────────────────────     │ │    │
│                    │  │ Jan Feb Mar Apr May Jun       │ │    │
│                    │  └──────────────────────────────┘ │    │
│                    │                                   │    │
│                    │  RECENT ACTIVITY                  │    │
│                    │  • New order #12346               │    │
│                    │  • Review on "iPhone Case"        │    │
│                    │  • Message from buyer             │    │
│                    │                                   │    │
│                    │  TOP SELLING PRODUCTS             │    │
│                    │  1. iPhone Case (23 sales)        │    │
│                    │  2. Headphones (18 sales)         │    │
│                    │  3. Charger (15 sales)            │    │
│                    │                                   │    │
│                    └──────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

### Listings Management

```
┌─────────────────────────────────────────────────────────┐
│  My Listings                         [+ New Listing]     │
│  ─────────────────────────────────────────────────────  │
│  [Active (12)] [Draft (3)] [Sold (45)] [Inactive (2)]   │
│                                                          │
│  Search: [........................] Sort: [Recent ▼]     │
│                                                          │
│  ┌─────────────────────────────────────────────────┐   │
│  │ ┌────┐  iPhone 14 Pro - Space Black             │   │
│  │ │Img │  $999.99  •  Views: 234  •  Favorites: 18│   │
│  │ └────┘  Status: ● Active  •  Stock: 3           │   │
│  │                                                   │   │
│  │ [Edit] [Duplicate] [Deactivate] [Delete]         │   │
│  └─────────────────────────────────────────────────┘   │
│                                                          │
│  [More listings...]                                      │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Create/Edit Listing Form

```
┌─────────────────────────────────────────────────────────┐
│  Create New Listing                                      │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│  PRODUCT PHOTOS *                                        │
│  ┌────┐┌────┐┌────┐┌────┐┌─────┐                      │
│  │ 1  ││ 2  ││ 3  ││ 4  ││ +   │                      │
│  │[X] ││[X] ││[X] ││    ││ Add │                      │
│  └────┘└────┘└────┘└────┘└─────┘                      │
│  Drag to reorder • Up to 10 images                      │
│                                                          │
│  BASIC INFORMATION                                       │
│  Title *                                                 │
│  [iPhone 14 Pro - Unlocked, Like New...............]    │
│                                                          │
│  Category *                                              │
│  [Electronics ▼] > [Smartphones ▼]                      │
│                                                          │
│  Condition *                                             │
│  ○ New  ● Like New  ○ Good  ○ Fair  ○ Poor             │
│                                                          │
│  Description *                                           │
│  ┌──────────────────────────────────────────────────┐  │
│  │ [B] [I] [Link] [Bullet] [Number]                 │  │
│  │                                                   │  │
│  │ Brand new iPhone 14 Pro...                       │  │
│  │                                                   │  │
│  └──────────────────────────────────────────────────┘  │
│                                                          │
│  PRICING                                                 │
│  Price *         Original Price (optional)               │
│  [$999.99]       [$1,099.00]  (Show as sale)            │
│                                                          │
│  Quantity *                                              │
│  [3]                                                     │
│                                                          │
│  SHIPPING                                                │
│  ☑ Free shipping                                        │
│  ☑ Local pickup available                               │
│                                                          │
│  Shipping methods:                                       │
│  ☑ Standard (3-5 days) - $5.99                          │
│  ☑ Express (1-2 days) - $12.99                          │
│                                                          │
│  VARIANTS (Optional)                                     │
│  + Add variant (Color, Size, etc.)                      │
│                                                          │
│  [Save as Draft] [Preview] [Publish Listing]            │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## 8. Checkout Flow

### 8.1 Shopping Cart

```
┌─────────────────────────────────────────────────────────────┐
│  Shopping Cart (3 items)                                     │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  ┌────────────────────────────────┐  ┌─────────────────┐   │
│  │  CART ITEMS                    │  │  ORDER SUMMARY  │   │
│  │────────────────────────────────│  │─────────────────│   │
│  │  ☑ Select all                  │  │  Subtotal       │   │
│  │                                │  │  $348.97        │   │
│  │  ┌──────────────────────────┐ │  │                 │   │
│  │  │ ☑ ┌────┐                 │ │  │  Shipping       │   │
│  │  │   │Img │  iPhone Case     │ │  │  $5.99          │   │
│  │  │   └────┘  Space Black     │ │  │                 │   │
│  │  │           $99.99          │ │  │  Tax (est.)     │   │
│  │  │           Qty: [- 1 +]    │ │  │  $28.40         │   │
│  │  │           ♡ Save  🗑 Remove│ │  │                 │   │
│  │  └──────────────────────────┘ │  │  ─────────────  │   │
│  │                                │  │  Total          │   │
│  │  ┌──────────────────────────┐ │  │  $383.36        │   │
│  │  │ ☑ ┌────┐                 │ │  │                 │   │
│  │  │   │Img │  Headphones      │ │  │  [Proceed to   │   │
│  │  │   └────┘  Wireless        │ │  │   Checkout]     │   │
│  │  │           $149.99         │ │  │                 │   │
│  │  │           Qty: [- 1 +]    │ │  │  ─────────────  │   │
│  │  │           ♡ Save  🗑 Remove│ │  │                 │   │
│  │  └──────────────────────────┘ │  │  🔒 Secure      │   │
│  │                                │  │  checkout       │   │
│  │  [More items...]               │  │                 │   │
│  │                                │  │  Accepted:      │   │
│  │  [← Continue Shopping]         │  │  💳 🅿️ 🪙      │   │
│  └────────────────────────────────┘  └─────────────────┘   │
│                                                              │
│  RECOMMENDED FOR YOU                                         │
│  [Product cards based on cart items]                        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 8.2 Checkout - Shipping

```
┌─────────────────────────────────────────────────────────────┐
│  Checkout                                                    │
│  ─────────────────────────────────────────────────────────  │
│  ● Shipping  →  ○ Payment  →  ○ Review                      │
│                                                              │
│  ┌────────────────────────────────┐  ┌─────────────────┐   │
│  │  SHIPPING ADDRESS              │  │  ORDER SUMMARY  │   │
│  │────────────────────────────────│  │─────────────────│   │
│  │                                │  │  3 items        │   │
│  │  ● Use saved address           │  │                 │   │
│  │  ┌──────────────────────────┐ │  │  ┌────┐         │   │
│  │  │ ☑ John Doe               │ │  │  │Img │ x1      │   │
│  │  │   123 Main St            │ │  │  └────┘ $99.99  │   │
│  │  │   San Francisco, CA 94102│ │  │                 │   │
│  │  │   [Edit]                 │ │  │  ┌────┐         │   │
│  │  └──────────────────────────┘ │  │  │Img │ x1      │   │
│  │                                │  │  └────┘ $149.99 │   │
│  │  + Add new address             │  │                 │   │
│  │                                │  │  ─────────────  │   │
│  │  ○ Enter new address           │  │  Subtotal       │   │
│  │  Name                          │  │  $348.97        │   │
│  │  [...........................]│  │  Shipping       │   │
│  │                                │  │  $5.99          │   │
│  │  Address                       │  │  Tax            │   │
│  │  [...........................]│  │  $28.40         │   │
│  │                                │  │                 │   │
│  │  City        State     ZIP     │  │  Total          │   │
│  │  [........] [.....] [.....]   │  │  $383.36        │   │
│  │                                │  └─────────────────┘   │
│  │  ☐ Save this address           │                        │
│  │  ☐ Set as default              │                        │
│  │                                │                        │
│  │  SHIPPING METHOD               │                        │
│  │  ● Standard (3-5 days) - $5.99 │                        │
│  │  ○ Express (1-2 days) - $12.99 │                        │
│  │  ○ Overnight - $24.99          │                        │
│  │                                │                        │
│  │  [← Back to Cart]  [Continue]  │                        │
│  └────────────────────────────────┘                        │
└─────────────────────────────────────────────────────────────┘
```

### 8.3 Checkout - Payment

```
┌─────────────────────────────────────────────────────────────┐
│  Checkout                                                    │
│  ─────────────────────────────────────────────────────────  │
│  ✓ Shipping  →  ● Payment  →  ○ Review                      │
│                                                              │
│  ┌────────────────────────────────┐  ┌─────────────────┐   │
│  │  PAYMENT METHOD                │  │  ORDER SUMMARY  │   │
│  │────────────────────────────────│  │─────────────────│   │
│  │                                │  │  (Same as       │   │
│  │  ● Credit/Debit Card           │  │   previous)     │   │
│  │  ○ PayPal                      │  │                 │   │
│  │  ○ Cryptocurrency              │  │                 │   │
│  │                                │  │                 │   │
│  │  Card Number                   │  │                 │   │
│  │  [1234 5678 9012 3456]  💳    │  │                 │   │
│  │                                │  │                 │   │
│  │  Cardholder Name               │  │                 │   │
│  │  [JOHN DOE.................]  │  │                 │   │
│  │                                │  │                 │   │
│  │  Expiry Date    CVV            │  │                 │   │
│  │  [MM/YY]        [123]   ⓘ     │  │                 │   │
│  │                                │  │                 │   │
│  │  ☐ Save card for future        │  │                 │   │
│  │                                │  │                 │   │
│  │  BILLING ADDRESS               │  │                 │   │
│  │  ● Same as shipping            │  │                 │   │
│  │  ○ Use different address       │  │                 │   │
│  │                                │  │                 │   │
│  │  🔒 Your payment info is secure│  │                 │   │
│  │  We use 256-bit SSL encryption │  │                 │   │
│  │                                │  │                 │   │
│  │  [← Back]  [Place Order]       │  │                 │   │
│  └────────────────────────────────┘  └─────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### 8.4 Order Confirmation

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                    ✓ Order Confirmed!                        │
│                                                              │
│        Thank you for your purchase, John!                    │
│        Order #12347                                          │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Order Details                                        │  │
│  │──────────────────────────────────────────────────────│  │
│  │  Estimated Delivery: Jan 25-27, 2025                 │  │
│  │                                                        │  │
│  │  Items:                                                │  │
│  │  • iPhone Case x1                    $99.99           │  │
│  │  • Wireless Headphones x1            $149.99          │  │
│  │                                                        │  │
│  │  Shipping to:                                          │  │
│  │  John Doe                                              │  │
│  │  123 Main St, San Francisco, CA 94102                 │  │
│  │                                                        │  │
│  │  Total Paid: $383.36                                  │  │
│  │  Payment Method: Visa ****3456                        │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  A confirmation email has been sent to john@example.com      │
│                                                              │
│  [Track Order] [View Order Details] [Continue Shopping]      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 9. Messaging Interface

### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│  Messages                                            [+ New]  │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  ┌───────────────────┐  ┌────────────────────────────────┐ │
│  │  CONVERSATIONS    │  │  CONVERSATION                  │ │
│  │───────────────────│  │────────────────────────────────│ │
│  │  [Search.........]│  │  ┌────┐ Jane Smith             │ │
│  │                   │  │  │    │ About: iPhone 14 Pro   │ │
│  │  ┌─────────────┐ │  │  └────┘ [View Listing] [More]  │ │
│  │  │ ● Jane S.   │ │  │  ──────────────────────────────│ │
│  │  │ Can you ship│ │  │                                 │ │
│  │  │ to...       │ │  │  ┌──────────────────────────┐  │ │
│  │  │ 2m ago   [2]│ │  │  │ Hi! Is this still avail? │  │ │
│  │  └─────────────┘ │  │  │ Jane • 9:30 AM           │  │ │
│  │                   │  │  └──────────────────────────┘  │ │
│  │  ┌─────────────┐ │  │                                 │ │
│  │  │ ○ Mike T.   │ │  │      ┌──────────────────────┐  │ │
│  │  │ Thanks!     │ │  │      │ Yes! It's available  │  │ │
│  │  │ 1h ago      │ │  │      │ You • 9:32 AM        │  │ │
│  │  └─────────────┘ │  │      └──────────────────────┘  │ │
│  │                   │  │                                 │ │
│  │  ┌─────────────┐ │  │  ┌──────────────────────────┐  │ │
│  │  │ ○ Sarah K.  │ │  │  │ Can you ship to Canada?  │  │ │
│  │  │ Great!      │ │  │  │ Jane • 9:35 AM           │  │ │
│  │  │ 5h ago      │ │  │  └──────────────────────────┘  │ │
│  │  └─────────────┘ │  │                                 │ │
│  │                   │  │      ┌──────────────────────┐  │ │
│  │  [Load more...]   │  │      │ Yes, I can! Shipping │  │ │
│  │                   │  │      │ will be $15          │  │ │
│  │                   │  │      │ You • 9:37 AM        │  │ │
│  │                   │  │      │ [📷 image.jpg]       │  │ │
│  │                   │  │      └──────────────────────┘  │ │
│  │                   │  │                                 │ │
│  │                   │  │  ● Typing...                    │ │
│  │                   │  │  ──────────────────────────────│ │
│  │                   │  │  [📎] [Type message........][➤]│ │
│  └───────────────────┘  └────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Component Details

**Conversations List** (300px)
- Search bar
- Conversation items with:
  - Avatar
  - Name
  - Last message preview (truncated)
  - Timestamp
  - Unread count badge
- Active conversation highlighted
- Read/unread indicator (● filled = unread, ○ empty = read)

**Conversation Header**
- Contact info with avatar
- Product context (if applicable)
- "View Listing" link
- More options menu (Archive, Block, Report)

**Message Thread**
- Sender messages (left, gray background)
- Your messages (right, blue background)
- Timestamp under each message
- Image previews (expandable)
- Typing indicator
- Auto-scroll to latest

**Message Input**
- Attachment button (📎)
- Text input field
- Send button (➤)
- Emoji picker
- Image paste support

---

## 10. Review System

### 10.1 Write Review Modal

```
┌─────────────────────────────────────────────────────────────┐
│  Write a Review                                         [✕]  │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  Product: iPhone 14 Pro - Space Black                        │
│  Seller: Jane Smith                                          │
│                                                              │
│  OVERALL RATING *                                            │
│  ☆ ☆ ☆ ☆ ☆  (Click to rate)                                │
│                                                              │
│  REVIEW TITLE *                                              │
│  [Amazing product!...................................]      │
│                                                              │
│  YOUR REVIEW *                                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ This iPhone exceeded my expectations. The camera     │  │
│  │ quality is incredible and...                         │  │
│  │                                                       │  │
│  │                                                       │  │
│  └──────────────────────────────────────────────────────┘  │
│  0/1000 characters                                           │
│                                                              │
│  ADD PHOTOS (Optional)                                       │
│  ┌────┐┌────┐┌─────┐                                        │
│  │ 1  ││ 2  ││ +   │                                        │
│  │[X] ││[X] ││ Add │                                        │
│  └────┘└────┘└─────┘                                        │
│                                                              │
│  PRODUCT RATINGS (Optional)                                  │
│  Quality:        ☆ ☆ ☆ ☆ ☆                                 │
│  Value:          ☆ ☆ ☆ ☆ ☆                                 │
│  Shipping Speed: ☆ ☆ ☆ ☆ ☆                                 │
│                                                              │
│  ☑ I verify that this review is based on my own experience  │
│                                                              │
│  [Cancel] [Submit Review]                                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 10.2 Review Display (on Product Page)

```
┌─────────────────────────────────────────────────────────────┐
│  Customer Reviews                                            │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  ┌──────────────────┐  ┌──────────────────────────────┐    │
│  │  4.8 out of 5    │  │  Rating Breakdown             │    │
│  │  ⭐⭐⭐⭐⭐       │  │  5★ ████████████████ 85%      │    │
│  │  124 reviews     │  │  4★ ████ 20%                  │    │
│  │                  │  │  3★ ██ 10%                    │    │
│  │  [Write Review]  │  │  2★ █ 3%                      │    │
│  └──────────────────┘  │  1★ █ 2%                      │    │
│                        └──────────────────────────────┘    │
│                                                              │
│  Filter: [All ▼] [Most Recent ▼] [Verified Purchases Only]  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  ⭐⭐⭐⭐⭐  Sarah Martinez  ✓ Verified Purchase       │  │
│  │  "Amazing phone!"                                     │  │
│  │  ─────────────────────────────────────────────────   │  │
│  │  The camera quality is incredible. Fast shipping and │  │
│  │  great communication with the seller. Highly         │  │
│  │  recommend!                                           │  │
│  │                                                        │  │
│  │  ┌────┐┌────┐┌────┐                                  │  │
│  │  │Img ││Img ││Img │  (Review photos)                 │  │
│  │  └────┘└────┘└────┘                                  │  │
│  │                                                        │  │
│  │  Quality: ⭐⭐⭐⭐⭐  Value: ⭐⭐⭐⭐⭐                  │  │
│  │                                                        │  │
│  │  [👍 Helpful (24)] [Report] • Posted 2 days ago      │  │
│  │                                                        │  │
│  │  ┌────────────────────────────────────────────────┐  │  │
│  │  │  ↪ Seller Response (Jane Smith)               │  │  │
│  │  │  Thank you for the kind words! Enjoy!         │  │  │
│  │  │  • 1 day ago                                   │  │  │
│  │  └────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  [More reviews...]                                           │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Library

### Buttons

**Primary Button**
```
┌─────────────────────┐
│   Add to Cart       │  (Blue bg, white text, rounded)
└─────────────────────┘
```

**Secondary Button**
```
┌─────────────────────┐
│   Save for Later    │  (White bg, blue border, blue text)
└─────────────────────┘
```

**Icon Button**
```
[ ♡ ]  (Favorite - outline)
[ ♥ ]  (Favorited - filled)
```

### Form Elements

**Text Input**
```
┌───────────────────────────┐
│ Email                     │
│ [john@example.com........]│
└───────────────────────────┘
```

**Search Input**
```
┌───────────────────────────────┐
│ [🔍 Search products...........]│
└───────────────────────────────┘
```

**Dropdown/Select**
```
┌────────────────┐
│ Sort: Recent ▼ │
└────────────────┘
```

**Checkbox**
```
☐ Unchecked
☑ Checked
```

**Radio Button**
```
○ Unselected
● Selected
```

**Range Slider**
```
Price: $0 ─────●─────── $1000
```

### Cards

**Product Card**
```
┌──────────────────┐
│  ┌────────────┐  │
│  │   Image    │  │
│  │  (1:1)     │  │
│  └────────────┘  │
│  ♡ (top right)   │
│                  │
│  Product Title   │
│  (2 lines max)   │
│                  │
│  $99.99          │
│  ⭐⭐⭐⭐⭐ (24)   │
│                  │
│  [Add to Cart]   │
└──────────────────┘
```

**Order Card**
```
┌─────────────────────────────┐
│ Order #12345 • Jan 15, 2025 │
│ ─────────────────────────── │
│ ┌────┐                      │
│ │Img │ Product Name         │
│ └────┘ $99.99               │
│                             │
│ Status: ● Delivered         │
│ [View] [Review] [Buy Again] │
└─────────────────────────────┘
```

### Status Badges

```
● Pending     (Yellow)
● Processing  (Blue)
● Shipped     (Purple)
● Delivered   (Green)
● Cancelled   (Red)
● Refunded    (Orange)
```

### Notifications/Alerts

**Success**
```
┌──────────────────────────────────┐
│ ✓ Item added to cart successfully│
└──────────────────────────────────┘
(Green background)
```

**Error**
```
┌──────────────────────────────────┐
│ ✕ Payment failed. Please try again│
└──────────────────────────────────┘
(Red background)
```

**Warning**
```
┌──────────────────────────────────┐
│ ⚠ Only 2 items left in stock     │
└──────────────────────────────────┘
(Yellow background)
```

### Navigation

**Breadcrumbs**
```
Home > Electronics > Smartphones > iPhone 14
```

**Pagination**
```
[◀] 1 2 3 ... 10 [▶]
```

**Tabs**
```
[Description] [Specifications] [Reviews]
━━━━━━━━━━━
(Active tab has underline)
```

---

## Responsive Behavior

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Mobile Adaptations

**Header (Mobile)**
```
┌─────────────────────────┐
│ [☰] [Logo]    [🔍][🛒][👤]│
└─────────────────────────┘
```

**Product Grid (Mobile)**
- 1 column layout
- Larger touch targets (min 44px)
- Filters in slide-out drawer
- Sticky "Filter" and "Sort" buttons

**Navigation (Mobile)**
- Hamburger menu
- Full-screen overlay
- Swipe gestures for images

---

## Accessibility Notes

- All interactive elements have min 44px × 44px touch target
- Color contrast ratio ≥ 4.5:1 for text
- Focus states visible for keyboard navigation
- ARIA labels on icon-only buttons
- Form inputs have associated labels
- Error messages clearly associated with fields
- Skip to main content link
- Responsive images with alt text

---

This wireframe specification provides a complete visual blueprint for implementing the Quantum Marketplace Exchange platform. All measurements and layouts should be adapted based on the design system specifications.
