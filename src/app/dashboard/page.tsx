import React from "react";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* NAVBAR */}
      <nav className="bg-white shadow-md px-4 py-5 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Task Dashboard</h1>

        {/* Mobile menu icon */}
        <button className="md:hidden text-gray-700">
          ☰
        </button>

        {/* Desktop user */}
        <div className="hidden md:block text-sm text-gray-600">
          Welcome back 👋
        </div>
      </nav>

      {/* MAIN LAYOUT */}
      <div className="flex">
        
        {/* SIDEBAR */}
        <aside className="hidden md:flex flex-col w-64 bg-white shadow-lg p-4 space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">Menu</h2>

          <a href="#" className="text-gray-600 hover:text-indigo-600">
            Dashboard
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">
            Tasks
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">
            Profile
          </a>
        </aside>

        {/* CONTENT */}
        <main className="flex-1 p-4 md:p-6">
          
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
            <h2 className="text-2xl font-bold text-gray-800">
              My Tasks
            </h2>

            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              + Add Task
            </button>
          </div>

          {/* TASK GRID */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* CARD */}
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-gray-800">
                Example Task
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                This is a sample task description.
              </p>
              <span className="inline-block mt-3 text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded">
                Pending
              </span>
            </div>

            {/* Repeat cards */}
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-gray-800">
                Another Task
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Example content here.
              </p>
              <span className="inline-block mt-3 text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                Done
              </span>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;