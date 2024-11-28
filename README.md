## Movie Explorer

application to search, view, and manage favorite movies using the OMDb API. The app is designed with a focus on responsiveness, accessibility, and reusable components.

You can access the live version of the application here:
[Movie Explorer](http://188.245.69.243:5173/)

### Table of Contents

- Installation
- Technologies
- Features
- Best Practices
- Testing
- improvement

### Project Setup

1. Clone the repository:

```bash
git clone https://github.com/bahaar-ghafari/movie-explorer.git
```

2. Navigate to the project directory:

```bash
cd movie-explorer
```

3. Install dependencies:

```bash
npm install
```

4. Create a .env file by copying .env.sample and updating the API key:

```bash
VITE_BASE_URL=https://www.omdbapi.com/
VITE_API_KEY=your_api_key
```

5. Start the development server:

```bash
npm run dev
```

6. Open your browser and navigate to http://localhost:5173.

### Technologies

- Vue 3: Reactive framework for building scalable front-end applications.
- TypeScript: Ensures type safety and reduces runtime errors, ideal for handling complex data structures.
- Pinia: A modern, Vue 3-compatible state management library with excellent TypeScript support.
- Vue Router: Handles application navigation with dynamic route management.
- Tailwind CSS: Utility-first framework for building responsive, customizable designs efficiently.
- Vitest: Fast and Vite-native testing framework, optimized for Vue 3.
- Vue Toastification: A lightweight, customizable library for user-friendly notifications.

### Features

- Search Movies: Search for movies by query.
- Advanced Search: Perform filtered searches using additional parameters.
- Movie Details: View detailed information about selected movies.
- Favorite Movies: Add or remove movies from your favorites list.
- Sorting: Sort movies by title or release year.
- Responsive Design: Optimized for both desktop and mobile views.
- Accessibility: Components are accessible and keyboard-friendly.
- Error Handling: Graceful error messages with toast notifications.

### Best Practices

1. Reusable Components: Modular and maintainable UI building blocks.
2. Composables: Centralized, reusable hooks for cleaner logic separation.
3. Utility Functions: Shared logic (e.g., sorting, localStorage management) for DRY code.
4. Route Enum: Centralized route management for maintainability and error reduction.
5. Interceptors: Handles API headers, retries, and error responses centrally.
6. Lazy Loading: Improves performance by loading components only when needed.

### Testing

This project uses Vitest for unit testing. Run tests with:

```bash
npm run test
```

### Improvements

- Enhance Test Coverage: Write unit tests for all components, composables, and utility functions to ensure reliability and maintainability.
- Add Pagination: Improve user experience by implementing pagination for search results and favorite movies.
- Localization and Language Support: Add support for multiple languages and locale-based formatting for a broader audience reach.
