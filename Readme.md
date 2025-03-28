# Gen AI Analytics Dashboard

A modern, React-based analytics dashboard that demonstrates natural language query processing and data visualization capabilities. This project showcases a user-friendly interface for data analysis through conversational queries.

![Dashboard Preview](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000)

## Features

- 🔍 Natural Language Query Interface
- 📊 Interactive Data Visualization
- 📝 Query History Tracking
- 💡 Smart Query Suggestions
- ⚡ Real-time Query Processing
- 📱 Responsive Design

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Vite

## Project Structure

```
src/
├── components/           # React components
│   ├── QueryInput.tsx   # Search input with suggestions
│   ├── QueryHistory.tsx # Historical queries display
│   └── ResultsDisplay.tsx # Data visualization
├── store/               # Redux store configuration
│   ├── store.ts        # Redux store setup
│   └── querySlice.ts   # Query-related state management
└── App.tsx             # Main application component
```

## Components

### QueryInput
- Handles user query input with real-time suggestions
- Implements type-ahead functionality
- Dispatches query processing actions

### QueryHistory
- Displays recent queries in chronological order
- Provides context for user interactions
- Maintains session history

### ResultsDisplay
- Visualizes query results using Recharts
- Handles loading and error states
- Responsive chart display

## State Management

The application uses Redux Toolkit for state management with the following structure:

```typescript
interface QueryState {
  currentQuery: string;      // Current user input
  queryHistory: string[];    // List of previous queries
  isLoading: boolean;        // Loading state indicator
  error: string | null;      // Error message if any
  results: any[];           // Query results
  suggestions: string[];    // Query suggestions
}
```

### Actions
- `setCurrentQuery`: Updates the current query input
- `addToHistory`: Adds a query to the history
- `setLoading`: Updates loading state
- `setError`: Sets error message
- `setResults`: Updates query results

## Styling

The project uses Tailwind CSS for styling with a focus on:
- Clean, modern UI components
- Responsive design principles
- Consistent spacing and typography
- Professional color scheme

## Getting Started

1. **Clone the repository**
```bash
git clone <repository-url>
cd gen-ai-analytics
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## Development Guidelines

### Component Creation
- Use functional components with TypeScript
- Implement proper type definitions
- Follow React hooks best practices

### State Management
- Use Redux for global state
- Implement local state for component-specific data
- Follow Redux Toolkit patterns

### Styling
- Use Tailwind CSS utility classes
- Maintain consistent spacing
- Ensure responsive design

### Performance
- Implement proper memoization
- Optimize re-renders
- Follow React performance best practices

## Future Enhancements

1. **Advanced Features**
   - Real AI integration for query processing
   - Advanced visualization options
   - Export functionality
   - Custom dashboard layouts

2. **Technical Improvements**
   - Unit test coverage
   - E2E testing
   - Performance optimizations
   - Accessibility improvements

3. **User Experience**
   - More interactive visualizations
   - Advanced filtering options
   - Customizable themes
   - Saved queries feature

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React team for the amazing framework
- Redux team for state management solutions
- Tailwind CSS for the utility-first CSS framework
- Recharts for the charting library
- Lucide React for the beautiful icons