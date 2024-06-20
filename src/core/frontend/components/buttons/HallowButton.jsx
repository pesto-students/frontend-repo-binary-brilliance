import React from "react";

const HallowButton = ({ label, icon, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center px-4 py-2 bg-transparent text-sm font-medium text-gray-700 border border-customYellow rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customYellow transition-colors whitespace-nowrap ${className}`}
        >
            {icon? icon: null}

            <span className="flex-1">{label}</span>
        </button>
    );
};

export default HallowButton;