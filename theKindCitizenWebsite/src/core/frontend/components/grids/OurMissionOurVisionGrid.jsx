import React from "react";

const OurMissionOurVisionGrid = ({layout = 'horizontal'}) => {
    const containerClasses = layout === 'horizontal' ? `flex flex-col md:flex-row space-y-6 md:space-x-6 md:space-y-0` : `flex flex-col space-y-6`;
    return (
        <div className={containerClasses}>
            <div className="flex flex-col items-start p-4 gap-2 rounded-lg shadow-lg bg-customPink w-full h-50 md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
                <h2 className="text-xl font-semibold">Our Mission</h2>
                <p className="text-gray-600">Foster impactful social change and collective purpose by connecting NGOs, Individuals and corporates together.</p>
            </div>
            <div className="flex flex-col items-start p-4 gap-2 rounded-lg shadow-lg bg-customPink w-full h-50 md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
                <h2 className="text-xl font-semibold">Our Vision</h2>
                <p className="text-gray-600">A world where social value creation thrives through seamless connections and purpose-driven initiatives.</p>
            </div>
        </div>
    );
};

export default OurMissionOurVisionGrid;