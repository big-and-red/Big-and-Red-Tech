import React from "react";
import { MessageSquare, Map } from "lucide-react";

const Navigation = ({ activePage, setActivePage }) => {
  return (
    <nav className="mb-8">
      <ul className="flex space-x-6 justify-center border-b border-gray-200">
        <li>
          <button
            onClick={() => setActivePage("roadmap")}
            className={`pb-2 px-4 ${
              activePage === "roadmap"
                ? "border-b-2 border-red-500 text-red-500 font-medium"
                : "text-gray-500 hover:text-red-500"
            }`}
          >
            <div className="flex items-center space-x-2">
              <Map className="w-4 h-4" />
              <span>Roadmap</span>
            </div>
          </button>
        </li>
        <li>
          <button
            onClick={() => setActivePage("qa")}
            className={`pb-2 px-4 ${
              activePage === "qa"
                ? "border-b-2 border-red-500 text-red-500 font-medium"
                : "text-gray-500 hover:text-red-500"
            }`}
          >
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-4 h-4" />
              <span>Q&A</span>
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
