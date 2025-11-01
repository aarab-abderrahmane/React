# Todo List Application

A modern, feature-rich todo list application built with React, Vite, and styled-components. This application provides an elegant UI with smooth animations, local storage persistence, and inline editing capabilities.

## 🌟 Features

- ✅ **Add Tasks**: Quickly add new tasks to your todo list
- ✏️ **Inline Editing**: Edit tasks directly in the list
- ☑️ **Check/Uncheck**: Mark tasks as completed with animated checkboxes
- 💾 **Local Storage**: All tasks are automatically saved to browser storage
- 🎨 **Glass Morphism UI**: Modern, elegant design with glass effect
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- ⌨️ **Tailwind CSS**: Utility-first styling for rapid development
- 🎭 **Animated Elements**: Smooth animations for checkbox interactions

## 🚀 Tech Stack

- **React 19.1.1** - Latest React version with modern features
- **Vite 7.1.7** - Lightning-fast build tool and dev server
- **styled-components 6.1.19** - CSS-in-JS library for component styling
- **Tailwind CSS** - Utility-first CSS framework (via inline classes)
- **ESLint** - Code linting and quality assurance
- **React Hooks** - useState, useEffect, useContext for state management

## 📁 Project Structure

```
Todo/
├── src/
│   ├── components/
│   │   ├── TodoList.jsx      # Main todo list container
│   │   ├── List.jsx          # Individual todo item component
│   │   └── Checkbox.jsx      # Animated checkbox component
│   ├── App.jsx               # Root component with Context API
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles
├── public/                   # Static assets
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## 🎯 Core Components

### App.jsx
- Creates the `todosContext` using React Context API
- Manages global state for all todos
- Handles localStorage persistence
- Provides CRUD operations (Create, Read, Update, Delete)
- Implements the main layout with decorative typography

### TodoList.jsx
- Main todo list container component
- Renders the input field for new tasks
- Displays all todo items
- Implements scrollable list with glass morphism design

### List.jsx
- Individual todo item component
- Supports inline editing mode
- Shows/hides action buttons on hover
- Displays checkbox and edit/save controls

### Checkbox.jsx
- Custom animated checkbox component
- Built with styled-components
- Smooth check/uncheck animations
- Responsive sizing

## 🎨 Design Features

- **Glass Morphism**: Frosted glass effect with backdrop blur
- **Hover Effects**: Interactive elements reveal on hover
- **Responsive Typography**: Large decorative text on desktop
- **Color Scheme**: Customizable CSS variables
- **Drop Shadows**: Subtle depth with white shadow effects
- **Smooth Transitions**: Animated state changes

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Todo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint to check code quality

## 🗄️ State Management

The application uses React Context API for state management:

```javascript
todosContext provides:
- todos: Array of todo objects
- handleAdd: Function to add new todo
- handleCheck: Function to toggle todo completion
- handleEdit: Function to enable/disable edit mode
- handleInputChange: Function to update todo content
```

### Todo Object Structure
```javascript
{
  id: number,
  content: string,
  modeEdit: boolean,
  check: boolean
}
```

## 💾 Local Storage

All todos are automatically saved to browser's localStorage:
- **Key**: `'todos'`
- **Format**: JSON stringified array
- **Auto-save**: Triggers on every state change via useEffect
- **Initial load**: Retrieves saved todos or creates default examples

## 🎨 Customization

### CSS Variables
You can customize the color scheme by modifying CSS variables:
```css
--color-secondary: Background color for inputs and items
--color-placeholder: Placeholder text color
--color-button: Button background color
--color-text: Main text color
```

### Tailwind Configuration
The project uses Tailwind's utility classes. You can extend the configuration in `tailwind.config.js` (if present) or use inline classes.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues

- None currently reported

## 🔮 Future Enhancements

- [ ] Add task categories/tags
- [ ] Implement due dates
- [ ] Add priority levels
- [ ] Implement dark/light theme toggle
- [ ] Add task filtering (all, active, completed)
- [ ] Implement drag-and-drop reordering
- [ ] Add task search functionality
- [ ] Export/import todo lists
- [ ] Add keyboard shortcuts

## 📝 License

This project is open source and available under the [GPL License](https://github.com/aarab-abderrahmane/Todo?tab=GPL-3.0-1-ov-file).

## 👨‍💻 Author

Built with ❤️ aarab abderrahmane using React and Vite


## 📞 Support

If you have any questions or run into issues, please open an issue in the repository.

---

**Happy Task Managing! ✅**
