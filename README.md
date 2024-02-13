# Fran Carmona - Portfolio

### 2024 Fran Carmona. Build with [Astro](https://astro.build/) 🧑‍🚀, [TailwindCSS](https://tailwindcss.com/) 🧑‍🎨 and [Svelte](https://svelte.dev/)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
📦
├─ public
├─ src
│  ├─ components
│  │  ├─ About.astro
│  │  ├─ Career
│  │  │  ├─ Career.astro
│  │  │  └─ CareerCard.astro
│  │  ├─ Companies.astro
│  │  ├─ Contact
│  │  │  ├─ Contact.astro
│  │  │  ├─ ContactForm.svelte
│  │  │  └─ RadarPing.astro
│  │  ├─ Footer
│  │  │  ├─ Footer.astro
│  │  │  └─ SocialLinks
│  │  │     ├─ SocialLink.astro
│  │  │     └─ SocialLinks.astro
│  │  ├─ Header
│  │  │  ├─ Header.astro
│  │  │  └─ ThemeToggle.astro
│  │  ├─ PageNotFound.astro
│  │  ├─ Projects
│  │  │  ├─ AnchorWrapper.astro
│  │  │  ├─ ProjectCard.astro
│  │  │  ├─ ProjectCardContent.astro
│  │  │  ├─ ProjectImage.astro
│  │  │  └─ Projects.astro
│  │  ├─ Skills
│  │  │  ├─ SkillCard.astro
│  │  │  └─ Skills.astro
│  │  └─ shared
│  │     ├─ Badge.astro
│  │     ├─ Section
│  │     │  ├─ Section.astro
│  │     │  ├─ SectionBody.astro
│  │     │  ├─ SectionDescription.astro
│  │     │  └─ SectionTitle.astro
│  │     ├─ constants.ts
│  │     └─ icons
│  ├─ layout
│  │  └─ Layout.astro
│  ├─ pages
│  │  ├─ 404.astro
│  │  ├─ api
│  │  │  └─ contact.ts
│  │  └─ index.astro
│  └─ services
│     └─ email
│        ├─ index.ts
│        └─ utils.ts
├─ .gitignore
├─ .prettierrc
├─ .vscode
├─ README.md
├─ astro.config.mjs
├─ package-lock.json
├─ package.json
├─ svelte.config.js
└─ tailwind.config.mjs
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run format`          | Format code with Prettier                        |

```

```
