# How to Add Resume/CV Download

If you want to add a "Download Resume" button to your portfolio, follow these steps:

## Step 1: Add Your Resume File
1. Save your resume as `resume.pdf` (or any name you prefer)
2. Place it in the root directory of your portfolio: `/home/abu/Repos/abrakingoo.github.io/resume.pdf`

## Step 2: Add Download Button to HTML

Add this code in the sidebar contact section (around line 50 in index.html):

```html
<a href="resume.pdf" download="Abraham_Kingoo_Resume.pdf" class="btn-resume">
    Download Resume
</a>
```

Or add it after the "Get In Touch" button:

```html
<a href="resume.pdf" download="Abraham_Kingoo_Resume.pdf" class="btn-resume" style="margin-top: 10px;">
    📄 Download Resume
</a>
```

## Alternative: Link to External Resume

If your resume is hosted elsewhere (Google Drive, Dropbox, etc.):

```html
<a href="YOUR_RESUME_LINK_HERE" target="_blank" rel="noopener noreferrer" class="btn-resume">
    View Resume
</a>
```

## The CSS is Already Added!

The `.btn-resume` class is already styled in your CSS, so the button will automatically match your portfolio theme.

---

# Analytics Setup

To track visitors to your portfolio:

## Google Analytics

1. Go to https://analytics.google.com
2. Create a new property for your portfolio
3. Get your Measurement ID (looks like: G-XXXXXXXXXX)
4. In `index.html`, uncomment the Google Analytics code and replace `GA_MEASUREMENT_ID` with your actual ID

## Alternative: Simple Analytics

For a privacy-focused alternative, consider:
- Plausible Analytics (https://plausible.io)
- Simple Analytics (https://simpleanalytics.com)
- Fathom Analytics (https://usefathom.com)

---

# Features Now Available

✅ Dark/Light Mode Toggle - Click the moon/sun icon in navigation
✅ Project Filtering - Filter projects by technology (All, Go, C, Blockchain)
✅ Project Dates - Each project shows the year
✅ Smooth Animations - All sections animate on scroll
✅ Responsive Design - Works on all devices
✅ SEO Optimized - Meta tags for search engines and social media
