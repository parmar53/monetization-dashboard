"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Link from "next/link";
import { ThemeProvider, useTheme } from "@/lib/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import Sidebar from "@/components/ui/Sidebar";

const inter = Inter({ subsets: ["latin"] });

function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold text-indigo-400">⚡ LiveOps</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="md:hidden p-2 rounded-lg bg-gray-800 text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 border-t border-gray-800 pt-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-sm text-gray-300 hover:text-white transition">Dashboard</Link>
          <Link href="/promotions" onClick={() => setMenuOpen(false)} className="text-sm text-gray-300 hover:text-white transition">Promotions</Link>
          <Link href="/segments" onClick={() => setMenuOpen(false)} className="text-sm text-gray-300 hover:text-white transition">Segments</Link>
        </div>
      )}
    </nav>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen transition-colors duration-300`}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider>
              <NavBar />
              <div className="flex">
                <Sidebar />
                <main className="flex-1 p-6">{children}</main>
              </div>
            </ThemeProvider>
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  );
}