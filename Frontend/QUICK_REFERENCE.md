# Quick Reference Card 🚀

## Where to Find What

### 🏠 Home Page
**Location**: `src/features/Home/`

| What to Change | File |
|----------------|------|
| Hero banner text/buttons | `components/HeroSection.jsx` |
| Scrolling showcase | `components/MediaMarquee.jsx` |
| Services grid | `components/ServicesSection.jsx` |
| About/Company info | `components/AboutAimSection.jsx` |
| Why choose us section | `components/WhyChooseUsSection.jsx` |
| Stats & expertise | `components/ExpertiseTrustSection.jsx` |

### 📞 Contact Page
**Location**: `src/features/Contact/`

| What to Change | File |
|----------------|------|
| Contact form | `components/ContactForm.jsx` |
| Form fields | `components/ContactForm.jsx` (line 60-100) |
| Contact info | `components/ContactForm.jsx` (line 120-180) |

### 🎨 Layout (Header & Footer)
**Location**: `src/features/Layout/components/`

| What to Change | File |
|----------------|------|
| Navigation menu | `Header.jsx` (line 30-50) |
| Logo/Brand name | `Header.jsx` (line 25) |
| Footer links | `Footer.jsx` (line 80-120) |
| Social media links | `Footer.jsx` (line 15-60) |

## 🎯 Common Changes

### Change Hero Text
```
File: src/features/Home/components/HeroSection.jsx
Find: "Transform Your Business with"
```

### Add Menu Item
```
File: src/features/Layout/components/Header.jsx
Find: <nav className="hidden md:block">
```

### Update Contact Info
```
File: src/features/Contact/components/ContactForm.jsx
Find: "Get in Touch" section
```

### Change Footer Copyright
```
File: src/features/Layout/components/Footer.jsx
Find: "© {new Date().getFullYear()}"
```

## 🤖 AI Prompts

### Home Page
```
"Change the hero section heading in @features/Home/components/HeroSection.jsx"
```

### Contact Page
```
"Add a phone field to the form in @features/Contact/components/ContactForm.jsx"
```

### Header
```
"Add a new menu item in @features/Layout/components/Header.jsx"
```

## 📂 Folder Structure at a Glance

```
features/
├── Home/           → Home page
├── Contact/        → Contact page
└── Layout/         → Header & Footer
```

## ⚡ Quick Tips

1. **Home page issue?** → Look in `features/Home/`
2. **Contact form issue?** → Look in `features/Contact/`
3. **Header/Footer issue?** → Look in `features/Layout/`
4. **Need to add new page?** → Create new folder in `features/`

## 🎨 Styling

All components use Tailwind CSS classes. Common patterns:
- `className="text-primary"` → Primary color
- `className="bg-card"` → Card background
- `className="hover:text-primary"` → Hover effect

## 📱 Responsive Design

Components are already responsive:
- `md:` prefix → Medium screens and up
- `lg:` prefix → Large screens and up
- `sm:` prefix → Small screens and up

---

**Remember**: Each feature is isolated. Changes in one won't affect others! 🎉
