import React from 'react';
import { useUsers } from '../context/UserContext';
import { SearchBar } from '../components/SearchBar';
import { UserCard } from '../components/UserCard';
import { Loader2 } from 'lucide-react';

export function Home() {
  const { filteredUsers, loading, error } = useUsers();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-center">
          <h2 className="text-2xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">User Directory</h1>
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      {filteredUsers.length === 0 && (
        <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
          No users found matching your search criteria.
        </div>
      )}
    </div>
  );
}