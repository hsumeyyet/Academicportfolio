import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-sm font-medium tracking-tight">
            H. Sümeyye Taşdelen
          </Link>

          <div className="flex gap-8">
            <Link
              to="/"
              className={`text-sm tracking-wide transition-colors ${
                isActive("/")
                  ? "text-gray-900 font-medium"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Atlas
            </Link>
            <Link
              to="/about"
              className={`text-sm tracking-wide transition-colors ${
                isActive("/about")
                  ? "text-gray-900 font-medium"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              About
            </Link>
            <Link
              to="/cv"
              className={`text-sm tracking-wide transition-colors ${
                isActive("/cv")
                  ? "text-gray-900 font-medium"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              CV
            </Link>
            <Link
              to="/contact"
              className={`text-sm tracking-wide transition-colors ${
                isActive("/contact")
                  ? "text-gray-900 font-medium"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
