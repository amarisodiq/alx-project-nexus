import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Heart, Home } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Recommendations",
  description: "Discover and save your favorite movies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              {/* Logo and Home Link */}
              <Link href="/" className="flex items-center gap-3">
                <h1 className="text-2xl font-bold">🎬 MovieHub</h1>
              </Link>

              {/* Navigation */}
              <nav>
                <Link
                  href="/favorites"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors font-medium"
                >
                  <Heart size={20} />
                  Favorites
                </Link>
              </nav>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
