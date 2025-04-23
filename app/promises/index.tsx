import type { Route } from "+types/app/promises/+types";
import { Navbar } from "../components/Navbar";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Promises | Political Accountability Tracker" },
    { name: "description", content: "Browse and filter political promises" },
  ];
}

export default function Promises() {
  // Mock data for promises
  const mockPromises = [
    {
      id: 1,
      text: "Build 100 new hospitals across the country",
      party: "Party A",
      politician: "John Doe",
      status: "In Progress",
      date: "2024-01-15",
      category: "Healthcare",
      election: "General Election 2023",
      evidence: "https://example.com/evidence1",
    },
    {
      id: 2,
      text: "Reduce income tax by 5% for middle class",
      party: "Party B",
      politician: "Jane Smith",
      status: "Not Fulfilled",
      date: "2023-11-20",
      category: "Economy",
      election: "General Election 2023",
      evidence: "https://example.com/evidence2",
    },
    {
      id: 3,
      text: "Create 1 million jobs in the technology sector",
      party: "Party A",
      politician: "Mike Johnson",
      status: "Fulfilled",
      date: "2024-02-10",
      category: "Employment",
      election: "General Election 2023",
      evidence: "https://example.com/evidence3",
    },
    {
      id: 4,
      text: "Implement free education for all up to 12th grade",
      party: "Party C",
      politician: "Sarah Williams",
      status: "In Progress",
      date: "2023-12-05",
      category: "Education",
      election: "State Election 2022",
      evidence: "https://example.com/evidence4",
    },
    {
      id: 5,
      text: "Build 500km of new highways",
      party: "Party B",
      politician: "Robert Brown",
      status: "Fulfilled",
      date: "2023-10-18",
      category: "Infrastructure",
      election: "General Election 2023",
      evidence: "https://example.com/evidence5",
    },
    {
      id: 6,
      text: "Increase minimum wage by 10%",
      party: "Party A",
      politician: "John Doe",
      status: "Not Fulfilled",
      date: "2024-03-01",
      category: "Economy",
      election: "State Election 2022",
      evidence: "https://example.com/evidence6",
    },
  ];

  // Filter states
  const [filters, setFilters] = useState({
    party: "",
    politician: "",
    status: "",
    category: "",
    election: "",
  });

  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Filter options (derived from mock data)
  const parties = [...new Set(mockPromises.map((p) => p.party))];
  const politicians = [...new Set(mockPromises.map((p) => p.politician))];
  const categories = [...new Set(mockPromises.map((p) => p.category))];
  const elections = [...new Set(mockPromises.map((p) => p.election))];
  const statuses = ["Fulfilled", "In Progress", "Not Fulfilled"];

  // Handle filter changes
  const handleFilterChange = (filterName, value) => {
    setFilters({
      ...filters,
      [filterName]: value,
    });
  };

  // Apply filters and search
  const filteredPromises = mockPromises.filter((promise) => {
    // Apply search term
    if (
      searchTerm &&
      !promise.text.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    // Apply filters
    if (filters.party && promise.party !== filters.party) return false;
    if (filters.politician && promise.politician !== filters.politician)
      return false;
    if (filters.status && promise.status !== filters.status) return false;
    if (filters.category && promise.category !== filters.category) return false;
    if (filters.election && promise.election !== filters.election) return false;

    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Political Promises
        </h1>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search promises..."
              className="w-full p-4 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-3 top-4">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Panel */}
          <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-bold mb-4">Filters</h2>

            {/* Party Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Party
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={filters.party}
                onChange={(e) => handleFilterChange("party", e.target.value)}
              >
                <option value="">All Parties</option>
                {parties.map((party) => (
                  <option key={party} value={party}>
                    {party}
                  </option>
                ))}
              </select>
            </div>

            {/* Politician Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Politician
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={filters.politician}
                onChange={(e) =>
                  handleFilterChange("politician", e.target.value)
                }
              >
                <option value="">All Politicians</option>
                {politicians.map((politician) => (
                  <option key={politician} value={politician}>
                    {politician}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={filters.status}
                onChange={(e) => handleFilterChange("status", e.target.value)}
              >
                <option value="">All Statuses</option>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={filters.category}
                onChange={(e) => handleFilterChange("category", e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Election Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Election
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={filters.election}
                onChange={(e) => handleFilterChange("election", e.target.value)}
              >
                <option value="">All Elections</option>
                {elections.map((election) => (
                  <option key={election} value={election}>
                    {election}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Filters Button */}
            <button
              className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition"
              onClick={() =>
                setFilters({
                  party: "",
                  politician: "",
                  status: "",
                  category: "",
                  election: "",
                })
              }
            >
              Reset Filters
            </button>
          </div>

          {/* Promises List */}
          <div className="w-full md:w-3/4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="text-xl font-semibold">
                  {filteredPromises.length} Promises Found
                </h2>
              </div>

              {filteredPromises.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {filteredPromises.map((promise) => (
                    <li key={promise.id} className="p-6 hover:bg-gray-50">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900 mb-1">
                            {promise.text}
                          </h3>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {promise.party}
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                              {promise.politician}
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {promise.category}
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                              {promise.election}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">
                            Made on: {promise.date}
                          </p>
                          <a
                            href={promise.evidence}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline mt-1 inline-block"
                          >
                            View Evidence
                          </a>
                        </div>
                        <div className="flex items-center">
                          <span
                            className={`px-3 py-1 text-sm font-semibold rounded-full 
                              ${
                                promise.status === "Fulfilled"
                                  ? "bg-green-100 text-green-800"
                                  : promise.status === "In Progress"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                          >
                            {promise.status}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-gray-500">
                    No promises found matching your filters. Try adjusting your
                    search criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center">
            © {new Date().getFullYear()} Political Accountability Tracker. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
