import type { Route } from "./+types/politicians";
import { Navbar } from "../components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Politicians | Political Accountability Tracker" },
    { name: "description", content: "Browse politicians and their promises" },
  ];
}

export default function Politicians() {
  // Mock data for politicians
  const politicians = [
    { id: 1, name: "John Doe", party: "Party A", promisesFulfilled: 12, promisesTotal: 25, currentPosition: "Minister of Finance" },
    { id: 2, name: "Jane Smith", party: "Party B", promisesFulfilled: 8, promisesTotal: 20, currentPosition: "Member of Parliament" },
    { id: 3, name: "Mike Johnson", party: "Party A", promisesFulfilled: 15, promisesTotal: 18, currentPosition: "Minister of Health" },
    { id: 4, name: "Sarah Williams", party: "Party C", promisesFulfilled: 5, promisesTotal: 15, currentPosition: "Opposition Leader" },
    { id: 5, name: "Robert Brown", party: "Party B", promisesFulfilled: 10, promisesTotal: 22, currentPosition: "Minister of Education" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Politicians</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Browse Politicians</h2>
          </div>
          
          <ul className="divide-y divide-gray-200">
            {politicians.map((politician) => (
              <li key={politician.id} className="p-6 hover:bg-gray-50">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{politician.name}</h3>
                    <p className="text-sm text-gray-600">{politician.currentPosition}</p>
                    <div className="mt-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {politician.party}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="text-center">
                      <span className="text-xl font-bold text-green-600">{politician.promisesFulfilled}</span>
                      <span className="text-gray-500"> / </span>
                      <span className="text-xl font-bold text-gray-700">{politician.promisesTotal}</span>
                      <p className="text-sm text-gray-500">Promises Fulfilled</p>
                    </div>
                    <a href={`/politicians/${politician.id}`} className="mt-2 inline-block text-blue-600 hover:underline">
                      View Profile →
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
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
