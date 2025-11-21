# Theme Configuration Guide

This directory contains the centralized theme configuration for the Tech Bridge website.

## Overview

The theme system provides distinct, professional color schemes for each page:

- **Home Page**: Blue/Teal (trust, technology)
- **HR Services**: Purple/Violet (creativity, people)
- **Software Development**: Green/Emerald (growth, innovation)
- **Supply Chain**: Orange/Amber (energy, logistics)
- **SaaS Products**: Indigo/Blue (professional, digital)

## Files

- `theme.config.ts` - TypeScript configuration with all theme settings

## Usage

### Applying Themes to Pages

Add the theme class to your page's root div:

```tsx
// Home page (default theme, no class needed)
<div className="min-h-screen">

// HR Services page
<div className="min-h-screen theme-hr-services">

// Software Development page
<div className="min-h-screen theme-software-dev">

// Supply Chain page
<div className="min-h-screen theme-supply-chain">

// SaaS Products page
<div className="min-h-screen theme-saas-products">
```

### Using Theme Colors in Components

All theme colors are available as CSS variables:

```tsx
// Primary color
sx={{ bgcolor: 'primary.main', color: 'primary.foreground' }}

// Gradients
sx={{ background: 'linear-gradient(135deg, hsl(var(--hero-gradient-from)), hsl(var(--hero-gradient-to)))' }}

// Shadows
sx={{ boxShadow: 'var(--shadow-elegant)' }}

// Card gradients
className="gradient-card"
```

### Custom Utility Classes

Available utility classes in `index.css`:

- `.gradient-hero` - Hero section gradient background
- `.gradient-card` - Subtle card gradient background
- `.shadow-elegant` - Elegant shadow effect
- `.shadow-glow` - Glowing shadow effect
- `.text-gradient` - Gradient text effect

## Adding New Themes

To add a new theme:

1. Add theme configuration to `theme.config.ts`:

```typescript
newPage: {
  name: 'New Page',
  colors: {
    primary: '...',
    // ... other colors
  },
  gradients: {
    hero: '...',
    card: '...'
  }
}
```

2. Add CSS variables in `src/index.css`:

```css
.theme-new-page {
  --primary: ...;
  --hero-gradient-from: ...;
  /* ... other variables */
}
```

3. Apply the theme class to your page component

## Typography

- **Headings**: Poppins (weights: 400, 500, 600, 700, 800)
- **Body**: Inter (weights: 300, 400, 500, 600, 700)

Fonts are loaded from Google Fonts in `index.html`.

## Color Format

All colors use HSL format for consistency and easy manipulation:

```
hsl(hue saturation% lightness%)
Example: 217 91% 60%
```

Benefits:
- Easy to adjust brightness/saturation
- Consistent color manipulation
- Better for theming

## Best Practices

1. **Always use semantic tokens** - Use design system variables instead of hardcoded colors
2. **Maintain contrast** - Ensure text is readable on all backgrounds
3. **Test both themes** - Check light and dark mode
4. **Use animations** - Leverage framer-motion for smooth transitions
5. **Keep it consistent** - Follow the established color patterns

## Need Help?

Refer to:
- `src/index.css` for CSS variable definitions
- `tailwind.config.ts` for Tailwind configuration
- Material-UI theme provider in `src/App.tsx`
