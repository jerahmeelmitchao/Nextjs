'use client'
import { useEffect, useState } from 'react';
import { BlogPost } from '@/types/blog';

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('/api/blog').then(res => res.json()).then(setPosts);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      {posts.map(post => (
        <div key={post.id} className="border p-4 mb-4 rounded">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-sm">{new Date(post.date).toLocaleDateString()}</p>
          <a href={`/blog/${post.id}`} className="text-blue-600 underline">Read more</a>
        </div>
      ))}
    </div>
  );
}
