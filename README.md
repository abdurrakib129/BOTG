# Brother On The Globe - Travel Website

A fully responsive, mobile-first traveling YouTube channel website built with HTML, CSS, and JavaScript.

## Features

- ✅ Fixed header with logo and navigation
- ✅ Loading animation with logo
- ✅ Welcome section with blurred background
- ✅ Social media icons (Facebook, Instagram, TikTok, YouTube, Gmail)
- ✅ Facebook and YouTube embedded showcases
- ✅ Animated "Follow Us" / "Subscribe Us" text
- ✅ Tour cards with hover effects and overlays
- ✅ About page with Mission/Vision and Team sections
- ✅ Tours page with "Show More" functionality
- ✅ Contact form with validation
- ✅ Fixed footer with scroll-to-top button
- ✅ Mobile-first responsive design
- ✅ Travel-themed color palette
- ✅ Smooth animations and transitions

## File Structure

```
BOTG/
├── index.html          # Home page
├── about.html          # About page
├── tours.html          # Tours page
├── contact.html        # Contact page
├── styles.css          # All styles
├── script.js           # All JavaScript functionality
├── Images/             # Image assets
│   ├── logo.png
│   ├── founder.jpg
│   ├── editor.jpg
│   ├── cameraman.jpg
│   └── 1.jpg - 12.jpg (tour images)
└── README.md
```

## Setup Instructions

1. Ensure all files are in the same directory
2. Make sure the `Images` folder contains all required images:
   - `logo.png` (required)
   - `founder.jpg`, `editor.jpg`, `cameraman.jpg` (for team section)
   - `1.jpg` through `12.jpg` (for tour images)
   - `team.png` (optional - will use `1.jpg` as fallback if not found)

3. Open `index.html` in a web browser

## Customization

### Update Facebook Page Embed
In `index.html`, find the Facebook iframe and update the `href` parameter:
```html
href=https%3A%2F%2Fwww.facebook.com%2Fyour-page-name
```

### Update YouTube Channel Embed
In `index.html`, find the YouTube iframe and replace `YOUR_CHANNEL_ID`:
```html
src="https://www.youtube.com/embed?listType=user_uploads&list=YOUR_CHANNEL_ID"
```

### Update Social Media Links
In `index.html`, update the `href` attributes of the social icons in the welcome section.

### Update Team Social Links
In `about.html`, update the `href` attributes in the team cards (currently set to `https://example.com`).

### Integrate Formspree.io
In `script.js`, uncomment and configure the Formspree.io integration in the contact form handler.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- The website uses pure HTML, CSS, and JavaScript (no frameworks)
- All animations are CSS-based for optimal performance
- The design is mobile-first and fully responsive
- The welcome section background uses `team.png` if available, otherwise falls back to `1.jpg`

## Developed By

Rakib

