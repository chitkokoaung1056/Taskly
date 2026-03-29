"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-inherit text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 shadow-sm bg-white">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          Taskly
        </Link>

        <div className="hidden md:flex gap-8 font-medium">
          <a href="#home" className="hover:text-indigo-600">
            Home
          </a>
          <a href="#features" className="hover:text-indigo-600">
            Features
          </a>
          <a href="#about" className="hover:text-indigo-600">
            About
          </a>
        </div>

        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-linear-to-br from-indigo-50 to-white">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
          Organize Your Tasks <span className="text-indigo-600">Smarter</span>
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          Taskly helps you manage your daily tasks efficiently and stay
          productive with a clean and powerful interface.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/register"
            className="px-6 py-3 rounded-xl bg-indigo-600 text-white text-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
          <Link
            href="#features"
            className="px-6 py-3 rounded-xl border border-indigo-600 text-indigo-600 text-lg hover:bg-indigo-50 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-8 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">
          Powerful Features
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-3">Task Management</h4>
            <p className="text-gray-600">
              Create, edit and delete tasks easily with real-time updates.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-3">Smart Organization</h4>
            <p className="text-gray-600">
              Categorize tasks and track progress with intuitive UI.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-3">Secure & Fast</h4>
            <p className="text-gray-600">
              Built with modern technologies for speed and security.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t text-gray-500 bg-white">
        ©  Taskly. All rights reserved.
      </footer>
    </main>
  );
}
