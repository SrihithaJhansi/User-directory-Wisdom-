import React from 'react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { User } from '../types/user';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{user.name}</h2>
          <div className="flex items-center mt-2 text-gray-600 dark:text-gray-300">
            <Mail className="h-4 w-4 mr-2" />
            <a href={`mailto:${user.email}`} className="hover:text-blue-600 dark:hover:text-blue-400">
              {user.email}
            </a>
          </div>
          <div className="flex items-center mt-2 text-gray-600 dark:text-gray-300">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{user.address.city}</span>
          </div>
        </div>
        <Link
          to={`/user/${user.id}`}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center"
        >
          <span className="mr-1">View</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}