import React from 'react';
import { History } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const QueryHistory: React.FC = () => {
  const { queryHistory } = useSelector((state: RootState) => state.query);

  if (queryHistory.length === 0) return null;

  return (
    <div className="w-full max-w-4xl">
      <div className="flex items-center gap-2 mb-4">
        <History size={20} className="text-gray-500" />
        <h2 className="text-lg font-semibold text-gray-700">Recent Queries</h2>
      </div>
      <div className="space-y-2">
        {queryHistory.map((query, index) => (
          <div
            key={index}
            className="p-3 bg-white rounded-lg shadow-sm border border-gray-200"
          >
            {query}
          </div>
        ))}
      </div>
    </div>
  );
};