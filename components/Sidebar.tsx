import React from "react";
import { Industry } from "../data/types";
import { FaInbox, FaEnvelope, FaPaperPlane, FaTrash, FaFolder } from "react-icons/fa";

interface SidebarProps {
  industries: Industry[];
  selectedIndustryId: number | null;
  onSelectIndustry: (industryId: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  industries,
  selectedIndustryId,
  onSelectIndustry,
}) => {
  return (
    <aside className="w-full md:w-64 bg-gray-100 overflow-y-auto font-['SF_Pro_Display',system-ui,sans-serif]">
      <div className="p-4">
        <h2 className="text-[21px] font-semibold text-gray-500 mb-4 pl-2 leading-[25px] tracking-[0.23px]">
          Mailboxes
        </h2>
        <ul className="space-y-1">
          {[
            { icon: FaInbox, name: "Inbox" },
            { icon: FaEnvelope, name: "Drafts" },
            { icon: FaPaperPlane, name: "Sent" },
            { icon: FaTrash, name: "Trash" },
          ].map((item, index) => (
            <li key={index}>
              <button
                className="w-full flex items-center px-2 py-1.5 rounded-md text-gray-700 hover:bg-gray-200 sidebar-item"
              >
                <item.icon className="w-4 h-4 mr-3 text-blue-500 flex-shrink-0" />
                <span className="truncate">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4">
        <h2 className="text-[21px] font-semibold text-gray-500 mb-4 pl-2 leading-[25px] tracking-[0.23px]">
          Industries
        </h2>
        <ul className="space-y-1">
          {industries.map((industry) => (
            <li key={industry.id}>
              <button
                onClick={() => onSelectIndustry(industry.id)}
                className={`w-full flex items-center px-2 py-1.5 rounded-md sidebar-item ${
                  selectedIndustryId === industry.id
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                <FaFolder className={`w-4 h-4 mr-3 flex-shrink-0 ${
                  selectedIndustryId === industry.id ? "text-white" : "text-blue-500"
                }`} />
                <span className="truncate">{industry.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
