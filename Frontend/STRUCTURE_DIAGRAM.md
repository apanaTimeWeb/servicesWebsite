# Project Structure Diagram 📊

## Visual Overview

```
techserviceswebsite1/
└── Frontend/
    └── src/
        ├── features/                    🎯 MAIN FEATURES FOLDER
        │   │
        │   ├── Home/                   🏠 HOME PAGE FEATURE
        │   │   ├── index.jsx          ← Main Home page component
        │   │   └── components/        ← Home-specific components
        │   │       ├── HeroSection.jsx           (Hero banner)
        │   │       ├── MediaMarquee.jsx          (Scrolling showcase)
        │   │       ├── ServicesSection.jsx       (Services grid)
        │   │       ├── AboutAimSection.jsx       (About company)
        │   │       ├── WhyChooseUsSection.jsx    (Benefits)
        │   │       └── ExpertiseTrustSection.jsx (Stats)
        │   │
        │   ├── Contact/               📞 CONTACT PAGE FEATURE
        │   │   ├── index.jsx         ← Main Contact page component
        │   │   └── components/       ← Contact-specific components
        │   │       └── ContactForm.jsx           (Contact form)
        │   │
        │   ├── Layout/               🎨 LAYOUT COMPONENTS
        │   │   └── components/
        │   │       ├── Header.jsx               (Navigation bar)
        │   │       └── Footer.jsx               (Footer section)
        │   │
        │   └── Services/             🛠️ SERVICES (Future)
        │       └── components/
        │
        ├── components/               🧩 SHARED COMPONENTS
        │   └── ui/                  ← Reusable UI components
        │       ├── button.jsx
        │       ├── card.jsx
        │       ├── input.jsx
        │       └── ... (50+ UI components)
        │
        ├── hooks/                   🪝 CUSTOM HOOKS
        │   ├── use-mobile.js
        │   └── use-toast.js
        │
        ├── lib/                     🔧 UTILITIES
        │   └── utils.js
        │
        ├── pages/                   📄 OLD PAGES (Deprecated)
        │   └── services/
        │
        ├── App.jsx                  🚀 MAIN APP
        └── main.jsx                 ⚡ ENTRY POINT
```

## Feature Isolation Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         Your Website                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ├── Header (Layout)
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
   ┌─────────┐          ┌─────────┐          ┌─────────┐
   │  Home   │          │ Contact │          │Services │
   │ Feature │          │ Feature │          │ Feature │
   └─────────┘          └─────────┘          └─────────┘
        │                     │                     │
        │                     │                     │
   ┌────┴────┐           ┌────┴────┐          ┌────┴────┐
   │Components│          │Components│          │Components│
   └─────────┘           └─────────┘          └─────────┘
                              │
                              └── Footer (Layout)
```

## Data Flow

```
User Action
    │
    ▼
┌─────────┐
│ App.jsx │ ◄── Routes to features
└─────────┘
    │
    ├──► Home Feature
    │    ├── HeroSection
    │    ├── MediaMarquee
    │    ├── ServicesSection
    │    ├── AboutAimSection
    │    ├── WhyChooseUsSection
    │    └── ExpertiseTrustSection
    │
    ├──► Contact Feature
    │    └── ContactForm
    │
    └──► Layout
         ├── Header
         └── Footer
```

## Component Hierarchy

### Home Page
```
HomePage (index.jsx)
├── HeroSection
│   ├── Button (from ui/)
│   └── Icons (lucide-react)
│
├── MediaMarquee
│   └── Images
│
├── ServicesSection
│   ├── Card (from ui/)
│   ├── Button (from ui/)
│   └── Icons (lucide-react)
│
├── AboutAimSection
│   ├── Badge (from ui/)
│   ├── Card (from ui/)
│   └── Icons (lucide-react)
│
├── WhyChooseUsSection
│   ├── Badge (from ui/)
│   ├── Card (from ui/)
│   └── Icons (lucide-react)
│
└── ExpertiseTrustSection
    ├── Badge (from ui/)
    ├── Card (from ui/)
    ├── Progress (from ui/)
    └── Icons (lucide-react)
```

### Contact Page
```
ContactPage (index.jsx)
└── ContactForm
    ├── Card (from ui/)
    ├── Input (from ui/)
    ├── Textarea (from ui/)
    ├── Button (from ui/)
    ├── Label (from ui/)
    └── Icons (lucide-react)
```

### Layout
```
App.jsx
├── Header
│   ├── Button (from ui/)
│   ├── Menu (lucide-react)
│   └── Navigation Links
│
├── [Page Content]
│
└── Footer
    ├── Button (from ui/)
    ├── Social Icons (react-icons)
    └── Links
```

## Import Relationships

```
App.jsx
  │
  ├─imports─► HomePage from "@/features/Home"
  ├─imports─► ContactPage from "@/features/Contact"
  ├─imports─► Header from "@/features/Layout/components/Header"
  └─imports─► Footer from "@/features/Layout/components/Footer"

HomePage (features/Home/index.jsx)
  │
  ├─imports─► HeroSection from "./components/HeroSection"
  ├─imports─► MediaMarquee from "./components/MediaMarquee"
  ├─imports─► ServicesSection from "./components/ServicesSection"
  ├─imports─► AboutAimSection from "./components/AboutAimSection"
  ├─imports─► WhyChooseUsSection from "./components/WhyChooseUsSection"
  └─imports─► ExpertiseTrustSection from "./components/ExpertiseTrustSection"

Each Component
  │
  └─imports─► UI Components from "@/components/ui/"
```

## Modification Flow

```
Need to change Home page?
    │
    ▼
Go to features/Home/
    │
    ├── Change layout? ──► Edit index.jsx
    │
    ├── Change hero? ──► Edit components/HeroSection.jsx
    │
    ├── Change services? ──► Edit components/ServicesSection.jsx
    │
    └── Change about? ──► Edit components/AboutAimSection.jsx
```

## Feature Independence

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│     Home     │     │   Contact    │     │   Services   │
│   Feature    │     │   Feature    │     │   Feature    │
│              │     │              │     │              │
│  ┌────────┐  │     │  ┌────────┐  │     │  ┌────────┐  │
│  │Component│  │     │  │Component│  │     │  │Component│  │
│  └────────┘  │     │  └────────┘  │     │  └────────┘  │
│              │     │              │     │              │
│  ┌────────┐  │     │  ┌────────┐  │     │  ┌────────┐  │
│  │Component│  │     │  │Component│  │     │  │Component│  │
│  └────────┘  │     │  └────────┘  │     │  └────────┘  │
└──────────────┘     └──────────────┘     └──────────────┘
       ↓                    ↓                     ↓
   Independent         Independent           Independent
   No cross-           No cross-             No cross-
   dependencies        dependencies          dependencies
```

## Shared Resources

```
All Features
    │
    ├──► components/ui/  (Shared UI components)
    │    ├── button.jsx
    │    ├── card.jsx
    │    ├── input.jsx
    │    └── ...
    │
    ├──► hooks/  (Custom hooks)
    │    ├── use-mobile.js
    │    └── use-toast.js
    │
    └──► lib/  (Utilities)
         └── utils.js
```

## Color Legend

- 🎯 Main features folder
- 🏠 Home page feature
- 📞 Contact page feature
- 🎨 Layout components
- 🛠️ Services feature (future)
- 🧩 Shared components
- 🪝 Custom hooks
- 🔧 Utilities
- 🚀 Main app
- ⚡ Entry point

---

**Remember**: Each box is isolated. Changes in one don't affect others! 🎉
