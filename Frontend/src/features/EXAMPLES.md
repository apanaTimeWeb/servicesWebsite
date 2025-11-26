# Feature Examples & Use Cases 💡

## Real-World Scenarios

### Scenario 1: Change Hero Section Background

**Task**: Change the hero section background from gradient to solid color

**Steps**:
1. Open `Home/components/HeroSection.jsx`
2. Find line ~17: `className="pt-24 pb-16 bg-gradient-to-br from-background to-muted..."`
3. Change to: `className="pt-24 pb-16 bg-blue-600..."`
4. Save and test

**AI Prompt**:
```
"In @features/Home/components/HeroSection.jsx, change the background 
from gradient to solid blue color"
```

### Scenario 2: Add New Service to Services Grid

**Task**: Add "Blockchain Development" service

**Steps**:
1. Open `Home/components/ServicesSection.jsx`
2. Find the `services` array (line ~9)
3. Add new service object:
```jsx
{
  icon: Blocks, // Import from lucide-react
  title: "Blockchain Development",
  description: "Decentralized applications and smart contracts",
  features: [
    "Smart Contracts",
    "DApp Development",
    "NFT Platforms",
    "Crypto Integration"
  ],
  link: "/services/blockchain-development",
}
```
4. Save and test

### Scenario 3: Update Contact Form Fields

**Task**: Add a "Budget" field to contact form

**Steps**:
1. Open `Contact/components/ContactForm.jsx`
2. Add to formData state (line ~10):
```jsx
const [formData, setFormData] = useState({
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "", // Add this
  message: "",
})
```
3. Add form field after service field (line ~90):
```jsx
<div>
  <Label htmlFor="budget">Budget Range</Label>
  <Input
    id="budget"
    name="budget"
    value={formData.budget}
    onChange={handleChange}
    placeholder="e.g., $10,000 - $50,000"
    className="mt-1"
  />
</div>
```
4. Update WhatsApp message to include budget
5. Save and test

### Scenario 4: Add New Menu Item to Header

**Task**: Add "Blog" link to navigation

**Steps**:
1. Open `Layout/components/Header.jsx`
2. Find desktop nav section (line ~30)
3. Add new link:
```jsx
<a href="/blog" className="text-foreground hover:text-primary transition-colors">
  Blog
</a>
```
4. Add to mobile menu too (line ~80)
5. Save and test

### Scenario 5: Change Footer Social Links

**Task**: Update social media URLs

**Steps**:
1. Open `Layout/components/Footer.jsx`
2. Find social links section (line ~15)
3. Update href attributes:
```jsx
<a
  href="https://twitter.com/yourcompany" // Change this
  target="_blank"
  rel="noopener noreferrer"
>
```
4. Repeat for all social links
5. Save and test

### Scenario 6: Modify Hero CTA Buttons

**Task**: Change button text and colors

**Steps**:
1. Open `Home/components/HeroSection.jsx`
2. Find buttons section (line ~45)
3. Modify button:
```jsx
<Button
  onClick={handleConsultation}
  size="lg"
  className="bg-green-600 hover:bg-green-700 text-white" // Changed
>
  Get Started Now {/* Changed text */}
  <ArrowRight className="ml-2 h-5 w-5" />
</Button>
```
4. Save and test

### Scenario 7: Add Animation to Section

**Task**: Add fade-in animation to About section

**Steps**:
1. Open `Home/components/AboutAimSection.jsx`
2. Add animation class to section:
```jsx
<section 
  id="about" 
  className="py-20 bg-muted/30 animate-[fade-in-up_0.6s_ease-out_both]" // Added
>
```
3. Save and test

### Scenario 8: Change Services Grid Layout

**Task**: Change from 3 columns to 4 columns on large screens

**Steps**:
1. Open `Home/components/ServicesSection.jsx`
2. Find grid div (line ~70)
3. Change:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {/* Changed lg:grid-cols-3 to lg:grid-cols-4 */}
```
4. Save and test

### Scenario 9: Update Contact Information

**Task**: Change phone number and email

**Steps**:
1. Open `Contact/components/ContactForm.jsx`
2. Find contact info section (line ~120)
3. Update:
```jsx
<p className="text-muted-foreground">+91 9876543210</p> {/* New number */}
```
4. Update email:
```jsx
<p className="text-muted-foreground">contact@newdomain.com</p>
```
5. Also update in `Layout/components/Footer.jsx`
6. Save and test

### Scenario 10: Add New Section to Home Page

**Task**: Add "Testimonials" section

**Steps**:
1. Create `Home/components/TestimonialsSection.jsx`:
```jsx
export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        {/* Add testimonials content */}
      </div>
    </section>
  )
}
```
2. Import in `Home/index.jsx`:
```jsx
import { TestimonialsSection } from "./components/TestimonialsSection"
```
3. Add to page:
```jsx
<ExpertiseTrustSection />
<TestimonialsSection /> {/* Add here */}
```
4. Save and test

## Common Patterns

### Pattern 1: Adding a New Component

```jsx
// 1. Create component file
// features/Home/components/NewSection.jsx

export function NewSection() {
  return (
    <section className="py-20">
      {/* Your content */}
    </section>
  )
}

// 2. Import in index.jsx
import { NewSection } from "./components/NewSection"

// 3. Use in page
<NewSection />
```

### Pattern 2: Using Shared UI Components

```jsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button>Submit</Button>
    </Card>
  )
}
```

### Pattern 3: Adding Icons

```jsx
import { Icon1, Icon2 } from "lucide-react"

export function MyComponent() {
  return (
    <div>
      <Icon1 className="h-6 w-6 text-primary" />
      <Icon2 className="h-6 w-6 text-secondary" />
    </div>
  )
}
```

### Pattern 4: Responsive Design

```jsx
<div className="
  grid 
  grid-cols-1        /* Mobile: 1 column */
  md:grid-cols-2     /* Tablet: 2 columns */
  lg:grid-cols-3     /* Desktop: 3 columns */
  gap-8
">
  {/* Content */}
</div>
```

### Pattern 5: Hover Effects

```jsx
<div className="
  transition-all 
  duration-300 
  hover:shadow-lg 
  hover:-translate-y-1
  hover:border-primary
">
  {/* Content */}
</div>
```

## Tips & Tricks

### Tip 1: Finding Components
Use your IDE's search (Ctrl+P or Cmd+P) and type the component name

### Tip 2: Testing Changes
Always test on multiple screen sizes after making changes

### Tip 3: Using Tailwind
Refer to [Tailwind CSS docs](https://tailwindcss.com/docs) for class names

### Tip 4: Icons
Browse [Lucide Icons](https://lucide.dev/) for available icons

### Tip 5: Colors
Use theme colors: `text-primary`, `bg-card`, `border-border`

### Tip 6: Spacing
Use consistent spacing: `py-20` for sections, `mb-16` for headings

### Tip 7: Animations
Add animations with: `animate-[fade-in-up_0.6s_ease-out_both]`

### Tip 8: Responsive Text
Use: `text-3xl md:text-4xl lg:text-5xl` for responsive sizing

### Tip 9: Grid Layouts
Use: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

### Tip 10: Flexbox
Use: `flex flex-col md:flex-row items-center justify-between`

## Quick Reference

### Common Tailwind Classes

**Spacing**:
- `p-4` = padding 1rem
- `m-4` = margin 1rem
- `gap-4` = gap 1rem

**Colors**:
- `text-primary` = primary text color
- `bg-card` = card background
- `border-border` = border color

**Typography**:
- `text-xl` = 1.25rem
- `font-bold` = bold weight
- `text-center` = center align

**Layout**:
- `flex` = flexbox
- `grid` = grid
- `container` = max-width container

**Responsive**:
- `md:` = medium screens (768px+)
- `lg:` = large screens (1024px+)
- `xl:` = extra large (1280px+)

---

**Remember**: Start small, test often, and build incrementally! 🚀
