import type { Route } from "./+types/dashboard";
import { Navbar } from "../components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Political Accountability Tracker" },
    { name: "description", content: "Track political promises and their fulfillment" },
  ];
}

export default function Dashboard() {
  // Mock data for the dashboard
  const stats = {
    totalPromises: 1245,
    fulfilled: 328,
    inProgress: 412,
    notFulfilled: 505,
  };

  const recentPromises = [
    { id: 1, text: "Build 100 new hospitals", party: "Party A", politician: "John Doe", status: "In Progress", date: "2024-01-15" },
    { id: 2, text: "Reduce income tax by 5%", party: "Party B", politician: "Jane Smith", status: "Not Fulfilled", date: "2023-11-20" },
    { id: 3, text: "Create 1 million jobs", party: "Party A", politician: "Mike Johnson", status: "Fulfilled", date: "2024-02-10" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Political Accountability Tracker</h1>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Total Promises</h3>
            <p className="text-3xl font-bold text-blue-600">{stats.totalPromises}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Fulfilled</h3>
            <p className="text-3xl font-bold text-green-600">{stats.fulfilled}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">In Progress</h3>
            <p className="text-3xl font-bold text-yellow-600">{stats.inProgress}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Not Fulfilled</h3>
            <p className="text-3xl font-bold text-red-600">{stats.notFulfilled}</p>
          </div>
        </div>

        {/* Recent Promises */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4">Recent Promises</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Promise</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Party</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Politician</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentPromises.map((promise) => (
                  <tr key={promise.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{promise.text}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{promise.party}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{promise.politician}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${promise.status === 'Fulfilled' ? 'bg-green-100 text-green-800' : 
                          promise.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'}`}>
                        {promise.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{promise.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Browse by Party</h3>
            <p className="text-gray-600 mb-4">Explore promises made by different political parties</p>
            <a href="/parties" className="text-blue-600 hover:underline">View all parties →</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Browse by Politician</h3>
            <p className="text-gray-600 mb-4">Track promises made by individual politicians</p>
            <a href="/politicians" className="text-blue-600 hover:underline">View all politicians →</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Browse by Category</h3>
            <p className="text-gray-600 mb-4">Filter promises by categories like education, health, etc.</p>
            <a href="/categories" className="text-blue-600 hover:underline">View all categories →</a>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center">© {new Date().getFullYear()} Political Accountability Tracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
