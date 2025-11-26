# Features Folder Structure

This folder contains all feature-based modules. Each feature is self-contained with its own components, styles, and logic.

## Structure

```
features/
├── Home/                    # Home page feature
│   ├── index.jsx           # Main Home page component
│   └── components/         # Home-specific components
│       ├── HeroSection.jsx
│       ├── MediaMarquee.jsx
│       ├── ServicesSection.jsx
│       ├── AboutAimSection.jsx
│       ├── WhyChooseUsSection.jsx
│       └── ExpertiseTrustSection.jsx
│
├── Services/               # Services pages feature
│   ├── index.jsx          # Services listing/router
│   └── components/        # Service-specific components
│       ├── MobileDevelopment/
│       ├── WebDevelopment/
│       ├── DashboardDesign/
│       ├── AiChatbots/
│       ├── MlPrediction/
│       ├── DataAnalytics/
│       └── GameDevelopment/
│
├── Contact/               # Contact page feature
│   ├── index.jsx         # Main Contact page
│   └── components/       # Contact-specific components
│       └── ContactForm.jsx
│
├── Layout/               # Layout components (Header, Footer)
│   └── components/
│       ├── Header.jsx
│       └── Footer.jsx
│
└── README.md            # This file
```

## Benefits

1. **Isolation**: Each feature is self-contained. Changes in one feature don't affect others.
2. **Easy Maintenance**: If there's a UI issue in Home, just work in the Home folder.
3. **Scalability**: Easy to add new features without cluttering the codebase.
4. **Team Collaboration**: Different team members can work on different features simultaneously.
5. **AI-Friendly**: You can load just one feature folder to AI for targeted changes.

## Usage

### Importing a Feature
```jsx
import HomePage from '@/features/Home'
import { Header } from '@/features/Layout/components/Header'
```

### Adding a New Feature
1. Create a new folder in `features/`
2. Add `index.jsx` as the main component
3. Add feature-specific components in `components/` subfolder
4. Import and use in your routes

## Guidelines

- Keep feature components inside their respective folders
- Shared UI components stay in `/components/ui/`
- Shared utilities stay in `/lib/` and `/hooks/`
- Each feature should be as independent as possible
