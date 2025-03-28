import React, { useState } from 'react';
import { Search, Send } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import {
  setCurrentQuery,
  addToHistory,
  setLoading,
  setResults,
} from '../store/querySlice';

const mockData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
];

export const QueryInput: React.FC = () => {
  const dispatch = useDispatch();
  const { currentQuery, suggestions } = useSelector((state: RootState) => state.query);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentQuery.trim()) return;

    dispatch(addToHistory(currentQuery));
    dispatch(setLoading(true));

    // Simulate API call
    setTimeout(() => {
      dispatch(setResults(mockData));
      dispatch(setLoading(false));
    }, 1500);
  };

  return (
    <div className="relative w-full max-w-4xl">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={currentQuery}
            onChange={(e) => dispatch(setCurrentQuery(e.target.value))}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder="Ask anything about your data..."
            className="w-full pl-12 pr-12 py-4 bg-white rounded-lg shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-600"
          >
            <Send size={20} />
          </button>
        </div>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-150"
              onClick={() => {
                dispatch(setCurrentQuery(suggestion));
                setShowSuggestions(false);
              }}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};