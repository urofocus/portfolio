# My Portfolio

A plain HTML portfolio with three pages. There is no build step.

```
index.html            main portfolio  ->  /
design/index.html     graphic design  ->  /design/
security/index.html   ethical hacking ->  /security/
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

## Things to replace

Search for these in each `index.html` and put in your own details.

- `Your Name` and the `YN` initials (main page, design page, security page)
- `fiverr.com/your-username` and `you@example.com` (contact sections)
- The placeholder tiles in `design/index.html`. Save your finished images in `images/` and swap each `<svg>` tile for `<img src="/images/your-file.jpg" alt="Describe the piece">`.
- The sample project entries on the main page and in `security/index.html`
- The skill lists, so they match what you really do

## Notes

- Fonts load from Google Fonts, so no extra files are needed.
- The page background animation stays still for visitors who have "reduce motion" turned on.
- On the security page, only describe testing on systems you own or have written permission to test.
