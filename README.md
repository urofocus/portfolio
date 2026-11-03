# My Portfolio

A single-page, plain HTML portfolio. There is no build step.

```
index.html            the whole portfolio (one page)
assets/theme.css      colors and fonts
assets/anim.css       animation styles
assets/anim.js        scroll progress bar and reveal effects
assets/bg.js          dot-grid background
images/               put your design images here
vercel.json           Vercel settings
```

## Put it on GitHub

1. Create a new empty repository on github.com (for example `portfolio`).
2. In this folder, run:

```bash
git init
git add .
git commit -m "First version of my portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

## Deploy on Vercel

1. Go to vercel.com and sign in with GitHub.
2. Choose **Add New > Project** and import your `portfolio` repository.
3. Framework Preset: **Other**. Leave Build Command and Output Directory empty.
4. Click **Deploy**.

Every time you push to GitHub, Vercel updates your site automatically.
To use your own domain, open the project on Vercel and go to **Settings > Domains**.

## Things to replace in index.html

- `Your Name` (top bar and footer)
- `fiverr.com/your-username` and `you@example.com` (contact section)
- The six placeholder tiles in the design grid. Save your finished images in `images/` and swap each `<svg>` tile for `<img src="/images/your-file.jpg" alt="Describe the piece">`.
- The three sample security entries, and the "add link" labels
- The skill lists, so they match what you really do

## Notes

- Fonts load from Google Fonts, so no extra files are needed.
- `assets/theme.css` holds the colors and fonts. Change the values at the top to restyle the whole page.
- All animation stays still for visitors who have "reduce motion" turned on.
- Only describe security testing on systems you own or have written permission to test.
