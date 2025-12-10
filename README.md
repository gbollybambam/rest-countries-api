# REST Countries API - Next.js 16 (App Router)

![Design Preview](./images/desktop-design-home-dark.jpg)
<div align="center">

  ### [🔴 Live Demo](https://rest-countries-api-hazel-kappa.vercel.app/) | [🎨 Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca)

  **A pixel-perfect, performance-optimized country explorer application built with modern Next.js features.**

</div>

## 🚀 Overview

This project is a solution to the **REST Countries API** challenge on Frontend Mentor.

While the challenge requires a simple UI, I engineered this application to demonstrate mastery of **Modern Next.js Architecture**. Instead of relying on client-side fetching (`useEffect`), this app leverages **Server Components**, **Streaming**, and **URL-Based State Management** to deliver a lightning-fast, SEO-friendly experience without layout shifts.

### ✨ Key Features

* **Server-Side Rendering (SSR):** All data fetching happens on the server for instant initial load and SEO.
* **URL-Based State Management:** Search, Filter, and Pagination states are stored in the URL (`?q=nigeria&page=2`), making results shareable and bookmarkable.
* **Streaming & Suspense:** The main content loads instantly, while heavier data (like Border Countries) streams in via `<Suspense>` without blocking the UI.
* **Dark Mode:** A flicker-free theme toggle that persists preference, using **Tailwind v4** and `next-themes`.
* **Robust Error Handling:** Custom Error Boundaries (`error.tsx`) and 404 Pages ensure the app never crashes gracefully.
* **Optimized Images:** Automatic image optimization using `next/image` with proper aspect ratios to prevent Layout Shift (CLS).

## 🛠️ Tech Stack

| Category | Technology | Reason |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16 (App Router)** | For Server Components, Streaming, and cutting-edge performance. |
| **Language** | **TypeScript** | For strict type safety and reducing runtime errors. |
| **Styling** | **Tailwind CSS v4** | For rapid, utility-first styling with the new engine. |
| **State** | **URL Search Params** | To keep the UI in sync with the URL (No `useState` for filters). |
| **Data Fetching** | **Native Fetch API** | Enhanced by Next.js for caching and revalidation. |
| **Theming** | **next-themes** | For managing dark/light mode classes without hydration mismatch. |
| **Deployment** | **Vercel** | CI/CD and Edge Network hosting. |



## 🏗️ Architecture Highlights

### 1. The "Fetch-Then-Render" Pattern
Instead of traditional Client-Side Fetching:
```javascript
// ❌ Traditional (Client)
const [data, setData] = useState([]);
useEffect(() => { fetch('/api').then(setData) }, []);


utilized Async Server Components:

TypeScript

// ✅ Modern (Server)
export default async function Home({ searchParams }) {
  const data = await getCountriesData(searchParams.q, searchParams.region);
  return <Grid data={data} />;
}
Benefit: Zero client-side JavaScript needed for initial data load.

2. Streaming Suspense
The "Border Countries" section requires a secondary API call that resolves country codes (e.g., FRA) to names (France). Instead of delaying the entire page, I wrapped that specific component in <Suspense>:

TypeScript

<Suspense fallback={<Skeleton />}>
  <BorderCountries codes={country.borders} />
</Suspense>
Benefit: The user sees the main content immediately, and the borders "pop in" when ready.

🚦 Running Locally
Clone the repository:

Bash

git clone [https://github.com/gbollybambam/rest-countries-api.git](https://github.com/gbollybambam/rest-countries-api.git)
cd rest-countries-api
Install dependencies:

Bash

pnpm install
Run the development server:

Bash

pnpm dev
Open http://localhost:3000 with your browser.

## 👤 Author

**Gbolly Bambam**
* GitHub: [@gbollybambam](https://github.com/gbollybambam)
* Frontend Mentor: [@gbollybambam](https://www.frontendmentor.io/profile/gbollybambam)