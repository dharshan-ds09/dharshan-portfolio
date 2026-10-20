# Dharshan - Cybersecurity & Software Development Portfolio

A modern, fast, and responsive portfolio website designed for **Dharshan**, a 2nd-year B.Tech student passionate about **cybersecurity** and **software development**.

Built with a polished dark theme, off-white typography, electric-green accents, and an interactive cyber CLI console.

---

## ⚡ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Linter**: [Oxlint](https://oxc.rs/) (ultra-fast JS/TS linter)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Cyber SVGs
- **Deployment Target**: [Vercel](https://vercel.com/) (Zero-config)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Local Preview
```bash
npm run build
npm run preview
```

### 4. Run Linter
```bash
npm run lint
```

---

## ⚙️ Customization & Placeholders

All personal information, links, and project records are centralized in a single configuration file:

📁 **`src/data/portfolioData.ts`**

### What to Replace:
1. **Contact Details**: Update `socials.email`, `personal.location`.
2. **Social Handles**: Update `socials.github`, `socials.linkedin`, `socials.tryhackme`, `socials.twitter`.
3. **Academic Details**: Update `education[0].institution` (your college name) and `grade` (your CGPA/percentage).
4. **Projects**: Replace the placeholder project cards with your real repository links and screenshots.
5. **Resume**: Drop your real PDF resume into the `public/` directory (e.g. `public/dharshan_resume.pdf`) and update `personal.resumeFileName`.

---

## 🌐 Deploying to Vercel

### Option A: Deploy via GitHub (Recommended)
1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio"
   ```
2. Push this project to a new repository on your [GitHub](https://github.com).
3. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
4. Import your GitHub repository.
5. Vercel automatically detects **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**. Your portfolio will be live with free global CDN and automatic HTTPS!

### Option B: Deploy via Vercel CLI
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Deploy directly from your terminal:
   ```bash
   vercel
   ```
3. For production deployment:
   ```bash
   vercel --prod
   ```

---

## 🛡️ Key Features Included

- **Polished Dark Theme**: Obsidian background (`#080c14`) paired with electric-green glow highlights (`#00ff66`).
- **Interactive Cyber CLI Console**: Visitors can type `help`, `skills`, `projects`, `scan`, or `contact`, or use quick buttons.
- **Categorized Skills**: Filter skills by Cybersecurity, Languages, Web Development, and DevOps.
- **Projects Showcase & Spec Inspector**: Filterable project gallery with detailed architecture modal popups.
- **Academic Timeline**: Structured 2nd-year B.Tech presentation with relevant CS coursework and certifications.
- **Functional Contact Form & Email Copier**: Client-side validation, direct mailto fallback, and 1-click clipboard copy.
- **Config Guide Modal**: Direct in-browser instructions for editing placeholders.
