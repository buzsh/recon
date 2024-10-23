import React from "react";
import { Startup } from "../data/types";

interface StartupListProps {
  startups: Startup[];
  selectedStartupId: number | null;
  onSelectStartup: (startupId: number) => void;
}

const StartupList: React.FC<StartupListProps> = ({
  startups,
  selectedStartupId,
  onSelectStartup,
}) => {
  return (
    <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-gray-200 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Startups</h2>
        <ul>
          {startups.map((startup) => (
            <li key={startup.id}>
              <button
                onClick={() => onSelectStartup(startup.id)}
                className={`w-full text-left px-2 py-1 rounded ${
                  selectedStartupId === startup.id
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {startup.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StartupList;
