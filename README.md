# Pokemon Explorer

A modern React application for exploring Pokemon using the PokeAPI, built with React Router and TypeScript.

## Features

- 🎮 Browse and search Pokemon
- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Offline-ready with Service Worker caching
- 🔒 TypeScript by default
- 🎨 TailwindCSS for styling
- 🧪 Jest & React Testing Library for testing

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Testing

Run the test suite:

```bash
npm test
```

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t pokemon-explorer .

# Run the container
docker run -p 3000:3000 pokemon-explorer
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`:

```
├── package.json
├── package-lock.json
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Project Structure

```
├── app/
│   ├── components/    # Reusable UI components
│   ├── pokedex/      # Pokedex-specific components
│   ├── routes/       # Route components
│   └── utils/        # Utility functions and helpers
├── public/           # Static assets
└── tests/           # Test files
```

## Tech Stack

- React
- React Router
- TypeScript
- Tailwind CSS
- Vite
- Jest
- PokeAPI

---

Built with ❤️ using React Router and PokeAPI
