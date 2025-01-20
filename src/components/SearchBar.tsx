import { Search } from 'lucide-react';
import { useUsers } from '../context/UserContext';

export function SearchBar() {
  const { searchTerm, setSearchTerm, sortOrder, setSortOrder } = useUsers();

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5" />
        <input
          type="text"
          placeholder="Search users by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
        />
      </div>
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
        className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
      >
        <option value="asc">Sort A-Z</option>
        <option value="desc">Sort Z-A</option>
      </select>
    </div>
  );
}