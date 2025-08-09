import { Link } from "react-router-dom";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-16 min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* 404 Animation */}
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold gradient-text mb-4 animate-float">
              404
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-4">
              Page Not Found
            </div>
            <p className="text-xl text-gray-400 mb-8">
              Looks like this page decided to skip leg day and disappeared!
              Don't worry, we'll help you get back on track.
            </p>
          </div>

          {/* Search Icon Animation */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Search className="h-16 w-16 text-gym-orange animate-pulse" />
              <div className="absolute inset-0 bg-gym-orange/20 rounded-full animate-ping" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/" className="btn-primary flex items-center space-x-2">
              <Home className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="btn-secondary flex items-center space-x-2"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-gym-dark-light">
            <h3 className="text-lg font-semibold text-white mb-4">
              Popular Pages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                to="/programs"
                className="text-gray-400 hover:text-gym-orange transition-colors duration-300"
              >
                Programs
              </Link>
              <Link
                to="/about"
                className="text-gray-400 hover:text-gym-orange transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-gym-orange transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
