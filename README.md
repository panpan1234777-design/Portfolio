# Junior Web Developer Portfolio

A responsive personal portfolio starter built with Next.js App Router, TypeScript, Tailwind CSS v4, and Lucide icons. It includes animated hero artwork, About, Skills, three project case-study cards, project detail modals, Contact CTA, social links, and responsive navigation.

## 1. Requirements
- Node.js 20.9 or newer
- npm
- VS Code (recommended)

## 2. Run locally
Open this folder in VS Code, open Terminal, then run:

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

Before deployment, test a production build:

```bash
npm run build
```

## 3. Personalize before publishing
Search in `src/app/page.tsx` and replace:
- `Your Name` / `Your Name. All rights reserved.` with your name
- `your.email@example.com` with your professional email
- GitHub and LinkedIn profile URLs with your real profiles
- Project summaries and stack lists with details that accurately match each project
- Add real project repository links or demos when available

Place your real CV PDF at `public/cv.pdf`. To add a CV button, link to `/cv.pdf` with the `download` attribute. Do not add made-up credentials or claim that a demo is live when it is not.

Project cards currently open a detail modal, rather than claiming to link to live projects. Edit the `projects` array in `src/app/page.tsx` to add truthful links or extra details.

## 4. Push to GitHub
Create an empty repository on GitHub named `my-portfolio` (or your preferred name). In the VS Code terminal, run these commands from this project folder:

```bash
git init
git add .
git commit -m "Build developer portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/my-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. If Git prompts for identity, configure your name/email with `git config --global user.name "Your Name"` and `git config --global user.email "you@example.com"`. Do not commit `.env` files, passwords, or tokens.

## 5. Deploy to Vercel
1. Sign in at https://vercel.com using GitHub.
2. Choose **Add New → Project**.
3. Import your portfolio repository.
4. Keep the detected Next.js build settings.
5. Click **Deploy** and wait for the build to finish.
6. Open the generated `.vercel.app` URL and test it on desktop and mobile.

Subsequent pushes to the connected Git branch can trigger automatic deployments.

## Notes
- This is a starter portfolio, so personal details and project descriptions need review before publishing.
- Google Fonts are loaded through CSS; a network connection is needed for those fonts, but the site has fallback fonts.
- The project has no backend or contact-form submission service. The email CTA uses a `mailto:` link.
