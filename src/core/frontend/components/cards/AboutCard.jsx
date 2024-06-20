import React, { useState } from "react";

const AboutCard = ({ title, subtitle, description, imageUrl, readMoreEnabled = false }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const maxCharCountForFiveLines = 200;
    const shouldShowReadMore = readMoreEnabled && description.length > maxCharCountForFiveLines;

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="max-w-xs">
            <img className="w-full rounded-3xl border-8 border-solid border-customBlue" src={imageUrl} alt={title} />
            <div className="px-4 py-3">
                <div className="font-bold text-sm mb-2 text-customBlue">{title}</div>
                <div className="font-bold text-xs mb-2 text-gray-400">{subtitle}</div>
                <p className="text-gray-700 text-xs">
                    {shouldShowReadMore
                        ? isExpanded
                            ? description
                            : `${description.substring(0, maxCharCountForFiveLines)}...`
                        : description}
                </p>
                {shouldShowReadMore && (
                    <button onClick={toggleReadMore} className="text-customYellow text-xs mt-2">
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default AboutCard;