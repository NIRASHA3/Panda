# 🐼 Panda Token Landing Page

A fully responsive, highly interactive React application built for the Panda Token community. This project features complex CSS animations, custom polygon clip-paths, and a custom mathematical scaling engine to perfectly translate strict Figma designs across all devices.

## ✨ Key Features

- **Intelligent Responsive Scaling Engine:** Rather than relying solely on CSS media queries that break at edge-case screen sizes, this app calculates a precise `transform: scale()` multiplier on the fly. This ensures overlapping absolute elements and complex illustrations remain mathematically perfect on *any* device (from a 320px phone to a 4K ultrawide monitor).
- **Memory-Efficient Architecture:** Utilizes a custom `useResponsiveLayout` hook paired with React conditional rendering. Only the active layout tree (Desktop, Tablet, or Mobile) is mounted to the DOM at any given time, eliminating layout jank and optimizing browser memory.
- **Component-Based Design:** The UI is strictly modularized into view controllers (`DesktopView`, `TabletView`, `MobileView`) with shared atomic elements (`DesktopTabletContent`) to maintain DRY principles.
- **Rich Interactions:** Pure CSS keyframe animations for floating bubbles, bouncing characters, interactive hover states, and dynamic clip-path shapes.

## 🛠️ Tech Stack

- **Framework:** React 
- **Language:** TypeScript
- **Styling:** Standard CSS3 (Flexbox, CSS Variables, Custom Keyframes)
- **Build Tool:** Create React App / Webpack (or Vite)

## 🚀 Installation & Setup
Clone the repository:

bash
git clone https://github.com/NIRASHA3/Panda.git
cd panda-token
Install dependencies:

bash
npm install
Start the development server:

bash
npm start
The app will automatically open in your browser at http://localhost:3000.



