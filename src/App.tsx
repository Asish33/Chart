import { Provider } from 'react-redux';
import { store } from './store/store';
import { QueryInput } from './components/QueryInput';
import { QueryHistory } from './components/QueryHistory';
import { ResultsDisplay } from './components/ResultsDisplay';
import { BarChart2 } from 'lucide-react';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center space-x-3">
              <BarChart2 className="text-blue-500" size={24} />
              <h1 className="text-xl font-semibold text-gray-800">Gen AI Analytics</h1>
            </div>
          </div>
        </nav>
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-8">
            <QueryInput />
            <ResultsDisplay />
            <QueryHistory />
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;