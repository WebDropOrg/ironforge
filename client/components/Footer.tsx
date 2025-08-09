import { Link } from "react-router-dom";
import {
  Dumbbell,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gym-dark border-t border-gym-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-r from-gym-orange to-gym-orange-light p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Dumbbell className="h-6 w-6 text-black" />
              </div>
              <span className="text-xl font-bold gradient-text">
                IRON<span className="text-white">FORGE</span>
              </span>
            </Link>
            <p className="text-gym-gray-light max-w-xs">
              Transform your body, mind, and life with our state-of-the-art
              facilities and expert training programs.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gym-gray hover:text-gym-orange transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gym-gray hover:text-gym-orange transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gym-gray hover:text-gym-orange transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-gym-gray hover:text-gym-orange transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/programs"
                className="block text-gym-gray hover:text-gym-orange transition-colors duration-300"
              >
                Programs
              </Link>
              <Link
                to="/about"
                className="block text-gym-gray hover:text-gym-orange transition-colors duration-300"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-gym-gray hover:text-gym-orange transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Programs</h3>
            <div className="space-y-2">
              <p className="text-gym-gray">Weight Training</p>
              <p className="text-gym-gray">Cardio Fitness</p>
              <p className="text-gym-gray">Group Classes</p>
              <p className="text-gym-gray">Personal Training</p>
              <p className="text-gym-gray">Nutrition Coaching</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gym-gray">
                <MapPin className="h-4 w-4 text-gym-orange" />
                <span className="text-sm">
                  123 Fitness Street, Gym City, GC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gym-gray">
                <Phone className="h-4 w-4 text-gym-orange" />
                <span className="text-sm">(555) 123-IRON</span>
              </div>
              <div className="flex items-center space-x-3 text-gym-gray">
                <Mail className="h-4 w-4 text-gym-orange" />
                <span className="text-sm">info@ironforge.gym</span>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-sm text-gym-gray">
                <span className="text-white font-medium">Hours:</span>
                <br />
                Mon-Fri: 5:00 AM - 11:00 PM
                <br />
                Sat-Sun: 6:00 AM - 10:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gym-dark-light">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gym-gray text-sm">
              © 2024 IronForge Gym. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gym-gray hover:text-gym-orange transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gym-gray hover:text-gym-orange transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gym-gray hover:text-gym-orange transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
