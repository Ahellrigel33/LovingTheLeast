# Loving the Least - Style Guide & Color Coordination

## Current Color Scheme

### Primary Colors
- **Orange**: Used for primary actions, accents, and brand elements
  - `orange-400`: #fb923c (gradients and accents)
  - `orange-500`: #f97316 (buttons and call-to-action)
  - `orange-600`: #ea580c (text links and highlights)

- **Pink**: Used for emotional elements, hearts, and secondary accents
  - `pink-400`: #f472b6 (gradients)
  - `pink-500`: #ec4899 (heart icons and emotional elements)
  - `pink-600`: #db2777 (hover states)

### Secondary Colors
- **Blue**: Used for trust, calm, and informational elements
  - `blue-50`: #eff6ff (background gradients)
  - `blue-600`: #2563eb (navigation and secondary buttons)
  - `sky-500`: #0ea5e9 (social media icons)

### Neutral Colors
- **Slate**: Main text and backgrounds
  - `slate-50`: #f8fafc (light backgrounds)
  - `slate-500`: #64748b (muted text)
  - `slate-600`: #475569 (body text)
  - `slate-700`: #334155 (headings)
  - `slate-800`: #1e293b (primary headings)
  - `slate-900`: #0f172a (main headings)

### Accent Colors
- **Amber/Yellow**: Warm accents and highlights
  - `amber-50`: #fffbeb (warm backgrounds)
  - `yellow-500`: #eab308 (special highlights)
  - `yellow-600`: #ca8a04 (icons)

## Typography

### Fonts
- **Heading Font**: Playfair Display (serif, literary feel)
- **Body Font**: Inter (clean, readable)
- **Handwritten Font**: Kalam (personal, warm touch)

### Font Sizes
- Hero Title: `text-3xl` to `text-7xl` (responsive)
- Section Headings: `text-2xl` to `text-4xl`
- Body Text: `text-base` to `text-lg`
- Small Text: `text-xs` to `text-sm`

## Key Design Elements

### Gradients
- Primary Gradient: `from-orange-500 to-pink-500` (buttons, accents)
- Background Gradient: `from-slate-50 via-white to-blue-50`
- Warm Gradient: `from-amber-50 via-orange-50 to-rose-50`

### Shadows and Effects
- Card Shadow: `shadow-lg` with `hover:shadow-xl`
- Book Shadow: Custom shadow with blue glow effect
- Buttons: Transform `hover:-translate-y-0.5` with scale effects

### Animations
- Fade-in effects with staggered delays
- Heartbeat animation for heart icons
- Book floating animation
- Hover transforms and scaling

## Future Color Coordination

When the new book cover arrives, follow these steps to update the color scheme:

### Step 1: Extract Colors
1. Identify 2-3 dominant colors from the new book cover
2. Determine primary, secondary, and accent colors
3. Consider adding gold accents as mentioned

### Step 2: Update CSS Variables
The current implementation uses Tailwind classes, but we can add CSS custom properties for easy updates:

```css
:root {
  --color-primary: #f97316; /* orange-500 */
  --color-primary-light: #fb923c; /* orange-400 */
  --color-primary-dark: #ea580c; /* orange-600 */
  
  --color-secondary: #ec4899; /* pink-500 */
  --color-secondary-light: #f472b6; /* pink-400 */
  --color-secondary-dark: #db2777; /* pink-600 */
  
  --color-accent: #eab308; /* yellow-500 - can be updated to gold */
  --color-accent-light: #fbbf24; /* yellow-400 */
  --color-accent-dark: #ca8a04; /* yellow-600 */
}
```

### Step 3: Update Components
Key areas to update when colors change:
1. **Header gradient**: Navigation background
2. **Button gradients**: Primary and secondary buttons
3. **Book labels**: "Book One" and future book indicators
4. **Accent elements**: Hearts, decorative elements
5. **Footer background**: Warm gradient coordination

### Step 4: Maintain Accessibility
- Ensure color contrast ratios remain WCAG compliant
- Test text readability on all backgrounds
- Maintain hover state visibility

## Design Patterns

### Cards
- White background with subtle shadows
- Rounded corners (`rounded-xl` or `rounded-2xl`)
- Hover effects with transform and shadow changes

### Buttons
- Primary: Gradient background with white text
- Secondary: White background with colored border and text
- Disabled: Reduced opacity with cursor-not-allowed

### Layout
- Maximum width containers (`max-w-6xl`)
- Consistent padding and margins
- Grid layouts for responsive design
- Fade-in animations for all sections

### Icons
- Lucide React icons throughout
- Consistent sizing (w-4 h-4 to w-8 h-8)
- Hover animations and color transitions

## Brand Elements

### Logo/Title Treatment
- "Only Jesus Knows" in gradient text
- Book icon with animated heart overlay
- Consistent across all pages

### Emotional Elements
- Floating heart decorations
- Handwritten-style text for personal touches
- Warm, inviting color palette
- Soft gradients and shadows

### Book Display
- Shadow and glow effects
- Floating animation
- "Book One" label coordination with overall color scheme
- Responsive sizing

## Implementation Notes

### Current Structure
- Uses Tailwind CSS utility classes
- Responsive design with mobile-first approach
- CSS custom properties for complex animations
- Intersection observers for scroll-triggered animations

### Future Considerations
- Easy color updates through CSS variables
- Maintain brand consistency across new pages
- Consider seasonal or special edition color variations
- Accessibility-first approach to color changes

## Testing Checklist

When updating colors:
- [ ] Test on mobile, tablet, and desktop
- [ ] Verify accessibility compliance
- [ ] Check print styles
- [ ] Test dark mode compatibility (if implemented)
- [ ] Validate gradient combinations
- [ ] Ensure book cover coordination looks natural
- [ ] Test hover states and animations
- [ ] Verify social media icon visibility
- [ ] Check form element styling
- [ ] Validate navigation visibility

This style guide ensures consistent brand application and provides a clear pathway for future color coordination when the new book cover is available.
