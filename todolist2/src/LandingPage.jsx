import React from "react";

const features = [
  "Add Tasks: Quickly add new tasks to your todo list",
  "Inline Editing: Edit tasks directly in the list",
  "Check/Uncheck: Mark tasks as completed with animated checkboxes",
  "Local Storage: All tasks are automatically saved to browser storage",
  "Glass Morphism UI: Modern, elegant design with glass effect",
  "Responsive Design: Works seamlessly on desktop, tablet, and mobile devices",
  "Tailwind CSS: Utility-first styling for rapid development",
  "Animated Elements: Smooth animations for checkbox interactions",
];

const techStack = [
  "React 19.1.1 - Latest React version with modern features",
  "Vite 7.1.7 - Lightning-fast build tool and dev server",
  "styled-components 6.1.19 - CSS-in-JS library for component styling",
  "Tailwind CSS - Utility-first CSS framework",
  "ESLint - Code linting and quality assurance",
  "React Hooks - useState, useEffect, useContext for state management",
];

const projectStructure = [
  "src/components/TodoList.jsx - Main todo list container",
  "src/components/List.jsx - Individual todo item component",
  "src/components/Checkbox.jsx - Animated checkbox component",
  "App.jsx - Root component with Context API",
  "main.jsx - Application entry point",
  "index.css - Global styles",
];

const futureEnhancements = [
  "Add task categories/tags",
  "Implement due dates",
  "Add priority levels",
  "Implement dark/light theme toggle",
  "Add task filtering (all, active, completed)",
  "Implement drag-and-drop reordering",
  "Add task search functionality",
  "Export/import todo lists",
  "Add keyboard shortcuts",
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 p-6 flex flex-col items-center font-sans">
      {/* Hero Section */}
      <section className="w-full max-w-6xl text-center py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-white to-pink-300 opacity-30 -z-10 blur-3xl"></div>
        <h1 className="text-6xl font-extrabold text-gray-900 drop-shadow-lg mb-6">
          Todo List Application
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          A modern, feature-rich todo list application built with React, Vite, and styled-components.
          Elegant UI with smooth animations, local storage persistence, and inline editing capabilities.
        </p>
        <button className="px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-xl transition-all transform hover:scale-105">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">🌟 Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-6 shadow-lg flex items-center space-x-4 hover:scale-105 transition-transform"
            >
              <span className="text-2xl">⭐</span>
              <p className="text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full max-w-5xl mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">🚀 Tech Stack</h2>
        <ul className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-8 space-y-3 shadow-lg">
          {techStack.map((tech, idx) => (
            <li key={idx} className="text-gray-700">
              • {tech}
            </li>
          ))}
        </ul>
      </section>

      {/* Project Structure */}
      <section className="w-full max-w-5xl mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">📁 Project Structure</h2>
        <ul className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-8 space-y-2 shadow-lg">
          {projectStructure.map((item, idx) => (
            <li key={idx} className="text-gray-700 font-mono">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Future Enhancements */}
      <section className="w-full max-w-5xl mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">🔮 Future Enhancements</h2>
        <ul className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-8 space-y-2 shadow-lg">
          {futureEnhancements.map((item, idx) => (
            <li key={idx} className="text-gray-700">
              • {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-3xl text-center mb-16">
        <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Boost Your Productivity Today</h2>
          <p className="text-gray-700 mb-6">
            Experience a modern todo list app with Glassmorphism design, responsive layout, animated interactions, and full browser support.
          </p>
          <button className="px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-xl transition-all transform hover:scale-105">
            Try it Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-5xl text-center py-12 text-gray-600">
        <p>Built with ❤️ by aarab abderrahmane</p>
        <p className="mt-2">
          License: <a href="https://github.com/aarab-abderrahmane/Todo?tab=GPL-3.0-1-ov-file" className="text-purple-600 hover:underline">GPL</a>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
