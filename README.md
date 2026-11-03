# My Portfolio

A single-page, plain HTML portfolio. There is no build step.

```
index.html            the whole portfolio (one page)
assets/theme.css      colors and fonts
assets/anim.css       animation styles
assets/anim.js        scroll progress bar and reveal effects
assets/bg.js          dot-grid background
images/               profile photo and your design images
vercel.json           Vercel settings
```

## Sections (all in index.html)

1. Home: name, title, short introduction, profile photo, Hire Me and View My Work buttons
2. About me: who you are, background, interests, career goals
3. Skills: graphic design, cybersecurity fundamentals, computer skills, creative skills
4. Projects: logo designs, poster designs, cybersecurity labs and projects
5. Education and experience: Higher Secondary, Blitz Academy, Frankys, courses and certifications
6. Contact: email, LinkedIn, GitHub, Instagram, contact form

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

- `Your Name` and the `YN` initials (top bar, hero, footer)
- Your profile photo: save it as `images/profile.jpg`. It appears in the hero circle automatically.
- The "Who I am" text in the About section
- `you@example.com`, the LinkedIn, GitHub and Instagram links (search for `your-username`)
- The school name, years and certificates in Education and experience (the "add year" and "add list" labels)
- The placeholder logo and poster tiles. Save your finished images in `images/` and swap each `<svg>` tile for `<img src="/images/your-file.jpg" alt="Describe the piece">`.
- The three sample cybersecurity lab entries and their "add link" labels
- The skill lists, so they match what you really do

## Contact form

A static site cannot send email by itself, so the form works in one of two ways.

- **Default:** when someone clicks Send, their email app opens with the message filled in, addressed to the email in `data-email` on the `<form>` tag. Change that email address to yours.
- **Real form service (recommended):** create a free form on formspree.io, copy its URL, and paste it into `data-endpoint=""` on the `<form>` tag. Messages then arrive in your inbox without opening an email app.

## Notes

- Fonts load from Google Fonts, so no extra files are needed.
- `assets/theme.css` holds the colors and fonts. Change the values at the top to restyle the whole page.
- All animation stays still for visitors who have "reduce motion" turned on.
- Only describe security testing on systems you own or have written permission to test.
