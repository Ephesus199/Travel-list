# Travel List

A small React app for tracking items to pack for a trip. This project was built as part of a React tutorial and demonstrates component-driven UI, state management with hooks, and a minimal Vite setup.

**[LIVE DEMO](https://travel-list-lovat-rho.vercel.app/)**

## Features

- Add items with name and quantity
- Mark items as packed/unpacked
- Remove individual items
- Clear all items
- Shows total items and packed count

## Tech Stack

- React (functional components + hooks)
- Vite (development server & build)
- Plain CSS for styling

## Getting Started

Prerequisites: Node.js (v14+) and npm.

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build

```bash
npm run preview
```

## Project Structure

- [src](src) — application source
  - [src/main.jsx](src/main.jsx) — entry point
  - [src/App.jsx](src/App.jsx) — root component
  - [src/PackingList.jsx](src/PackingList.jsx) — main list logic
  - [src/Item.jsx](src/Item.jsx) — single item component
  - [src/Form.jsx](src/Form.jsx) — add-item form
  - [src/Logo.jsx](src/Logo.jsx) — simple logo component
  - [src/index.css](src/index.css) and [src/App.css](src/App.css) — styles

## Component Overview

- `App.jsx`: Holds top-level layout and renders `PackingList`.
- `PackingList.jsx`: Manages item state (add, remove, toggle, clear) and derives counts.
- `Item.jsx`: Displays a single item with controls to toggle and delete.
- `Form.jsx`: Controlled form to add new packing items.
- `Logo.jsx`: Visual branding and title.

## Usage

- Add an item using the form. Specify quantity if needed.
- Click the checkbox or item to mark it packed/unpacked.
- Use the delete button to remove an item.
- Use the "Clear" control to remove all items.

## Development Notes

- This project uses Vite for fast HMR during development.
- Keep components small and focused; lifting state to `PackingList` simplifies data flow.


