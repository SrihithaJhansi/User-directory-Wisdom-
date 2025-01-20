import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Loader2, Building2, Globe, Phone, Mail, MapPin } from 'lucide-react';
import type { User } from '../types/user';

export function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) throw new Error('User not found');
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-purple-500 dark:text-purple-400" />
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-center">
          <h2 className="text-2xl font-bold mb-2">Error</h2>
          <p>{error || 'User not found'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-600 dark:to-purple-600 text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Go Back
      </Link>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 transform hover:scale-[1.01] transition-all duration-300">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-600 dark:to-purple-600 -mx-8 -mt-8 px-8 py-6 mb-8 rounded-t-lg">
          <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
          <p className="text-purple-100 dark:text-blue-100 opacity-90">{user.company.name}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start group">
              <Mail className="h-5 w-5 mr-3 text-purple-500 dark:text-purple-400 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">Email</p>
                <a href={`mailto:${user.email}`} className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
                  {user.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-start group">
              <Phone className="h-5 w-5 mr-3 text-purple-500 dark:text-purple-400 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">Phone</p>
                <p className="text-gray-900 dark:text-gray-100">{user.phone}</p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <Globe className="h-5 w-5 mr-3 text-purple-500 dark:text-purple-400 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">Website</p>
                <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
                  {user.website}
                </a>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start group">
              <Building2 className="h-5 w-5 mr-3 text-purple-500 dark:text-purple-400 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">Company</p>
                <p className="font-semibold text-gray-900 dark:text-white">{user.company.name}</p>
                <p className="text-purple-600 dark:text-purple-400 italic">{user.company.catchPhrase}</p>
                <p className="text-gray-500 dark:text-gray-500">{user.company.bs}</p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <MapPin className="h-5 w-5 mr-3 text-purple-500 dark:text-purple-400 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">Address</p>
                <p className="text-gray-900 dark:text-gray-100">{user.address.street}, {user.address.suite}</p>
                <p className="text-gray-900 dark:text-gray-100">{user.address.city}, {user.address.zipcode}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}