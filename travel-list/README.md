# Packing List App

A simple and interactive React application for creating and managing a travel packing checklist. Users can add items, mark them as packed, remove items, and view packing statistics.

## 📂 Project Structure

```text
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── components
│   │   ├── App.js
│   │   ├── Item.js
│   │   ├── PackingList.js
│   │   ├── Stats.js
│   │   ├── Form.js
│   │   └── Logo.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── README.md
├── notes.txt
├── package-lock.json
└── package.json
```

---

## 🚀 Features

- Add items to your packing list
- Specify quantity for each item
- Mark items as packed/unpacked
- Remove items from the list
- Clear the entire packing list
- View packing progress and statistics
- Responsive and clean user interface

---

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- CSS3
- HTML5

---

## 📦 Components Overview

### `App.js`

Main application component that manages the application state and renders all child components.

### `Logo.js`

Displays the application logo or title.

### `Form.js`

Handles user input for adding new packing items.

### `PackingList.js`

Renders the list of packing items and manages list-related actions.

### `Item.js`

Represents a single packing item with controls for toggling packed status and deleting the item.

### `Stats.js`

Displays packing statistics such as:

- Total items
- Packed items
- Packing completion percentage

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/packing-list-app.git
```

### Navigate to the project directory

```bash
cd packing-list-app
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

---

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

---

## 📜 Available Scripts

### `npm start`

Runs the app in development mode.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production.

### `npm run eject`

Ejects the Create React App configuration.

---

## 🎯 Learning Objectives

This project demonstrates:

- React Components
- Props and State Management
- Event Handling
- Conditional Rendering
- List Rendering with `.map()`
- Component Composition
- React Hooks (`useState`)
- Basic React Application Architecture

---

## 📸 Future Improvements

- Local Storage persistence
- Item categories
- Search and filter functionality
- Dark mode
- Drag-and-drop item sorting
- User authentication

---
