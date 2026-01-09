import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";
import { RiBloggerLine } from "react-icons/ri";

const Footer = () => {
  const navigateTo = useNavigate();

  return (
    <footer className="border-t border-gray-300 bg-gray-100 mt-20">
      <div className="max-w-[90%] mx-auto py-10 flex flex-col gap-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-around gap-6">
          {/* Logo & Description */}
          <div className="max-w-sm">
            <a href="/" className="flex items-center gap-2">
              <RiBloggerLine size={36} />
              <span className="text-lg font-semibold">Blogger</span>
            </a>
            <p className="text-sm text-gray-600 mt-3">
              Discover simplified articles, summarized content, and daily posts
              designed to help you learn faster and smarter.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-10">
            <div>
              <h4 className="font-semibold mb-3">Explore</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <a href="/articles" className="hover:underline">
                    Articles
                  </a>
                </li>
                <li>
                  <a href="/support" className="hover:underline">
                    Support
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:justify-center items-center border-t border-gray-300 pt-6 gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Blogger. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
