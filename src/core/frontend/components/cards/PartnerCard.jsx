import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import InstagramFollowButton from "@/core/frontend/components/buttons/InstagramFollowButton";

const PartnerCard = ({ name, imgSrc, handleFollow }) => {
    return (
        <div className="w-40 max-w-xs rounded-lg overflow-hidden shadow-lg bg-customCream p-4 flex flex-col items-center">
            <div className="bg-white rounded-full p-2 my-3">
                <img src={imgSrc} alt="Logo" className="h-12 w-12" /> {/* Adjust size as needed */}
            </div>
            <div className="text-center">
                <div className="text-lg font-semibold text-gray-700">{name}</div>
                <div className="text-sm text-gray-600">Impact Partner</div>
            </div>
            <InstagramFollowButton handleFollow={handleFollow}/>
        </div>
    );
};

export default PartnerCard;
