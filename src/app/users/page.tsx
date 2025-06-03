'use client'
import { useEffect, useState } from 'react';
import { User } from '@/types/user';

export default function UserListPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('/api/users').then(res => res.json()).then(setUsers);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id}>
            <a href={`/users/${user.id}`} className="text-blue-600 underline">{user.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
