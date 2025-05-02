# Tasks App - Modern Vue.js Crash Course

This repository contains source code created by following along with the
[Syntax.fm YouTube Vue.js Crash Course](https://www.youtube.com/watch?v=5oKpoqmUj64).
The video, presented by CJ, walks through the fundamentals of building front-end
applications with Vue.js, demonstrating essential concepts and best practices.

## 🎥 About the Video

In the video this project is based on, CJ gives a crash course in building
modern front-end apps with Vue.js, covering:

- 🧩 Components, props, and scoped styles
- 📝 Lists, form state, and user input handling
- 📣 State management and event handling (emit/listen)
- 📦 Application structure and rendering logic

📺 [Watch the full video here](https://www.youtube.com/watch?v=5oKpoqmUj64)

## 🧰 Tech Stack

- [Vue.js](https://vuejs.org/)(v3), for building user interfaces
- [Vite](https://vite.dev/), as the build tool and development server
- _Optional:_ [Vue DevTools](https://devtools.vuejs.org/) for debugging

This project has some additional tools setup:

- [Pnpm](https://pnpm.io/) as the package manager
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io) for code
  quality

## 🚀 Getting Started

### 🛠 Development

To start a local development server:

```bash
pnpm install    # Install dependencies
pnpm run dev    # Start the development server
```

Once running, open your browser at <http://localhost:5173>

### 📦 Production

To build and preview the app in production mode:

```bash
pnpm install       # Install dependencies
pnpm run build     # Build the application for production
pnpm run preview   # Preview the production build locally
```

The preview server will be available at <http://localhost:4173>
