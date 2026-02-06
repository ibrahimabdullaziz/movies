# 🎬 UrMovies

### [Live Demo: https://urmoviez.netlify.app/](https://urmoviez.netlify.app/)


[![React](https://img.shields.io/badge/React-18+-61DAFB.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Build%20System-Vite-646CFF.svg)](https://vitejs.dev/)
[![Production Ready](https://img.shields.io/badge/Status-Production%20Ready-blue.svg)]()

UrMovies is a high-performance cinematic discovery platform engineered for speed, scalability, and a premium user experience. This project serves as a showcase for advanced React patterns and aggressive frontend optimization techniques.

---

## Engineering Philosophy

The architecture of UrMovies is built on a **Performance-First Mindset**, ensuring that every millisecond of the Critical Rendering Path (CRP) is accounted for.

### 1. Separation of Concerns (Logic vs. UI)
I adopted a strict separation between the UI layer and the business logic. 
*   **UI Components:** Designed as "Dumb" functional components focused purely on presentation.
*   **Logic (Custom Hooks):** All data fetching, state management, and side effects are encapsulated within custom hooks (e.g., `useMovies`, `useSearch`). This ensures high testability and clean, readable components.

### 2. Composition over Inheritance
Utilizing **Compound Components** and sophisticated **Higher-Order Logic**, the application maintains a lean component tree while providing rich functionality through composition.

---

## Deep Dive: Optimization Techniques

Achieving a near-perfect Lighthouse score required a multi-layered optimization strategy:

### LCP (Largest Contentful Paint) 
*   **Adaptive Image Loading:** Instead of serving a one-size-fits-all asset, UrMovies dynamically switches between `w1280` and `w780` backdrops based on device DPR and viewport size.
*   **Priority Hints:** Critical images (like the Hero poster) use `fetchpriority="high"` to tell the browser to prioritize these assets during the initial download.

### TBT (Total Blocking Time) 
*   **LazyMotion by Framer Motion:** Instead of loading the entire Framer Motion library, I implemented `LazyMotion` to load only the necessary animation features asynchronously.
*   **Strategic Memoization:** Used `React.memo` and `useCallback` to prevent unnecessary re-renders in heavy list items, maintaining referential integrity across the application.
*   **DevTools Stripping:** All development-specific tools (like TanStack Query DevTools) are excluded from the production build to reduce bundle size and main-thread overhead.

### CLS (Cumulative Layout Shift) 
*   **Exact-Match Skeletons:** Skeleton loaders are engineered to match the exact aspect ratio and dimensions of the incoming content, preventing any layout shifts during the data hydration phase.
*   **Aspect Ratio Boxes:** Used `aspect-[2/3]` utility classes to reserve space for images before they load.

---

##  Lazy Loading Strategy

The application leverages the **Observer Pattern** (via Framer Motion's `whileInView` and `Intersection Observer`) to implement a highly efficient lazy loading mechanism for movie rows. 
*   **Deferred Hydration:** Rows are only rendered and data-fetched when they enter the user's viewport.
*   **Virtualization Logic:** This reduces the initial DOM size and preserves memory for a smoother scrolling experience.

---

## Design Patterns Used

*   **Compound Components:** Utilized for sophisticated UI structures like `PageTransitions`, allowing for shared state without prop drilling.
*   **Custom Hooks:** Specialized hooks like `useMovies` and `useDebounce` (via `useEffect` timers) handle all external interactions and data transformations.
*   **Observer Pattern:** Powering the `LazyRow` component for intelligent viewport awareness.

---

## 🛠 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | UI Library & State Management |
| **Vite** | Lightning-fast Build Tooling |
| **Tailwind CSS** | Utility-first Styling System |
| **Framer Motion** | Advanced Micro-interactions & Page Transitions |
| **TanStack Query** | High-performance Server State Management |
| **React Router v6** | Client-side Routing & Navigation |

---

## Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ibrahimabdullaziz/movies.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Setup Environment Variables:**
    Create a `.env` file and add your TMDB API Key:
    ```env
    VITE_TMDB_API_KEY=your_api_key_here
    VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
    ```
4.  **Launch the development server:**
    ```bash
    npm run dev
    ```

---

*Built with passion for performance by Ibrahim Abdullaziz.*
