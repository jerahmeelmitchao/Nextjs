// app/layout.tsx

import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "My Final Exam Project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-600 text-white p-4 flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/users">Users</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/categories">Categories</Link> {/* ← ✅ Add this */}
        </nav>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
