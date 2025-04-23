import { Link } from "react-router";

export function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          PromiseTracker
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-blue-200">
            Dashboard
          </Link>
          <Link to="/promises" className="hover:text-blue-200">
            Promises
          </Link>
          <Link to="/politicians" className="hover:text-blue-200">
            Politicians
          </Link>
          <Link to="/parties" className="hover:text-blue-200">
            Parties
          </Link>
        </div>
        <div>
          <Link
            to="/login"
            className="bg-white text-blue-700 px-4 py-1 rounded hover:bg-blue-100"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
