import type { Route } from "+types/app/parties/+types";
import { Navbar } from "../components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Parties | Political Accountability Tracker" },
    { name: "description", content: "Browse political parties and their promises" },
  ];
}

export default function Parties() {
  // Mock data for parties
  const parties = [
    { id: 1, name: "Party A", color: "#3B82F6", promisesFulfilled: 40, promisesTotal: 80, inPower: true },
    { id: 2, name: "Party B", color: "#EF4444", promisesFulfilled: 30, promisesTotal: 75, inPower: false },
    { id: 3, name: "Party C", color: "#10B981", promisesFulfilled: 15, promisesTotal: 50, inPower: false },
    { id: 4, name: "Party D", color: "#F59E0B", promisesFulfilled: 5, promisesTotal: 30, inPower: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Political Parties</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {parties.map((party) => (
            <div key={party.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-3" style={{ backgroundColor: party.color }}></div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">{party.name}</h2>
                  {party.inPower && (
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      Currently in Power
                    </span>
                  )}
                </div>
                
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Promise Fulfillment</h3>
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                      <div 
                        style={{ 
                          width: `${(party.promisesFulfilled / party.promisesTotal) * 100}%`,
                          backgroundColor: party.color
                        }} 
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600 mt-1">
                      <span>{party.promisesFulfilled} Fulfilled</span>
                      <span>{party.promisesTotal} Total</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600">
                      {Math.round((party.promisesFulfilled / party.promisesTotal) * 100)}% success rate
                    </p>
                  </div>
                  <a href={`/parties/${party.id}`} className="text-blue-600 hover:underline">
                    View Details →
                  </a>
                </div>
              </div>
            </div>
          ))}
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
