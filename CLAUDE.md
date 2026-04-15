# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Clínica Galvão is a medical clinic website built as a single-page application with React and Vite. The site features a modern design with smooth animations, showcasing medical specialists, services, clinic environment, and location information.

## Tech Stack

- **React 18.3.1** - UI library with hooks and functional components
- **Vite 6.0.7** - Build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework with custom color scheme
- **Framer Motion 11.15.0** - Animation library for smooth transitions and gestures
- **Lucide React 0.468.0** - Icon library

## Development Commands

```bash
npm run dev      # Start development server on port 3000 with auto-open
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build locally
```

## Project Structure

```
src/
├── components/
│   ├── layout/          # Structural layout components
│   │   ├── Navbar.jsx   # Fixed nav with scroll-based hide/show and glassmorphism
│   │   ├── Footer.jsx   # Site footer with contact info
│   │   └── MobileMenu.jsx # Mobile navigation menu
│   ├── sections/        # Page sections (in order of appearance)
│   │   ├── Hero.jsx     # Landing hero section
│   │   ├── Specialties.jsx # Services/specialties display
│   │   ├── Environment.jsx # Clinic environment gallery
│   │   ├── Team.jsx     # Specialists carousel with infinite scroll
│   │   └── Location.jsx # Map and contact information
│   ├── ui/              # Reusable UI components
│   │   ├── SectionWrapper.jsx # Animated section wrapper with viewport detection
│   │   ├── Button.jsx   # Primary CTA button component
│   │   └── Card.jsx     # Generic card component
│   └── shared/          # Shared functionality
│       └── WhatsAppButton.jsx # Fixed WhatsApp contact button
├── assets/
│   ├── team/            # Specialist photos (real photos + photo-mock.jpg placeholder)
│   └── [logos & images]
├── App.jsx              # Main app component, composes all sections
├── main.jsx             # React entry point
└── index.css            # Tailwind imports + custom base/utilities
```

## Architecture Patterns

### Component Organization
- **Layout components** handle structural elements (Navbar, Footer, MobileMenu)
- **Section components** represent distinct page sections with `SectionWrapper` for consistent animations
- **UI components** are reusable, presentational components
- **Shared components** provide cross-cutting functionality (e.g., WhatsApp contact)

### Animation Strategy
- Uses Framer Motion for all animations
- `SectionWrapper` provides viewport-triggered fade-in animations for sections
- `AnimatePresence` for enter/exit animations (mobile menu, WhatsApp button)
- Scroll-based animations in Navbar (hide on scroll down, show on scroll up)
- Custom animation in Team section: infinite auto-scroll carousel with drag support

### Responsive Design
- Mobile-first approach with Tailwind breakpoints (`sm`, `md`, `lg`)
- Mobile menu for screens below `lg` breakpoint (1024px)
- Responsive grid layouts in cards and sections
- Full-width carousel with negative margins for edge-to-edge display

### Navigation System
- Smooth scroll to section with offset for fixed navbar (80px)
- Section IDs: `home`, `specialties`, `environment`, `team`, `location`
- Navbar state management: scroll position detection, visibility toggle, mobile menu

## Custom Configuration

### Tailwind Theme Colors
```javascript
primary: '#22b1a9'          // Teal/turquoise (main brand color)
primary-dark: '#1a9d96'     // Darker teal
primary-light: '#3dd1c9'    // Lighter teal
secondary: '#717171'        // Gray (text color)
secondary-dark: '#5a5a5a'   // Darker gray
secondary-light: '#8a8a8a'  // Lighter gray
```

### Vite Config
- Dev server runs on port 3000
- Auto-opens browser on start
- React plugin for JSX transformation

## Key Implementation Details

### Team Section Carousel
- Infinite scroll effect using array duplication
- Auto-scroll animation with `requestAnimationFrame` for smooth 60fps performance
- Drag-to-scroll interaction with momentum disabled
- Pauses on hover, resumes on mouse leave
- Normalizes position to create seamless infinite loop

### WhatsApp Integration
- Fixed floating button (bottom-right: 6rem from edges)
- Pulse animation for attention
- Opens WhatsApp with pre-filled message
- Default phone: `5585996438060`

### Glassmorphism Effects
- Navbar uses backdrop blur with transparency
- Gradient backgrounds for depth
- Border with transparency for edge definition

### Accessibility
- Aria labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Smooth scroll behavior for better UX

## Content Management

### Team/Specialists Data
- Specialist information is hardcoded in `Team.jsx`
- Each specialist has: `name`, `specialty`, `crm` (license number), `photo`, `bio`
- Some specialists use real photos, others use `photo-mock.jpg` placeholder
- When updating photos, place them in `src/assets/team/` and import in `Team.jsx`

### Section Content
- Most content is hardcoded within section components
- Text is in Portuguese (Brazilian)
- Medical specialties and clinic information are static

## Development Notes

- All components use functional components with React hooks
- No state management library (uses React's built-in `useState`, `useEffect`, `useCallback`)
- No routing (single-page smooth scroll navigation)
- Images are imported directly (no optimization beyond build process)
- Custom scrollbar utility class `.scrollbar-hide` available in `index.css`
- All interactive elements have proper cursor styling via base CSS