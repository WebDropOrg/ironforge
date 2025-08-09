import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "/programs" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-gym-dark/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-gym-orange to-gym-orange-light p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Dumbbell className="h-6 w-6 text-black" />
            </div>
            <span className="text-xl font-bold gradient-text">
              IRON<span className="text-white">FORGE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-all duration-300 relative group",
                    location.pathname === item.path
                      ? "text-gym-orange"
                      : "text-white hover:text-gym-orange",
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-gym-orange transition-all duration-300 group-hover:w-full",
                      location.pathname === item.path ? "w-full" : "",
                    )}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary">
              Join Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gym-orange transition-colors duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-screen bg-gym-dark/98 backdrop-blur-md" : "max-h-0",
        )}
      >
        <div className="px-2 pt-2 pb-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-3 py-2 text-base font-medium transition-all duration-300",
                location.pathname === item.path
                  ? "text-gym-orange bg-gym-dark-light rounded-lg"
                  : "text-white hover:text-gym-orange hover:bg-gym-dark-light rounded-lg",
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center btn-primary"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
