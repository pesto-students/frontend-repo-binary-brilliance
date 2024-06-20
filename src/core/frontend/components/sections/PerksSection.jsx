import {FaScroll, FaTag, FaTshirt} from "react-icons/fa";
import React from "react";

const PerksSection = () => {
    return (
        <div className="w-full flex justify-between bg-transparent">
            <div className="flex items-center text-black">
                <FaScroll className="text-2xl mr-2" /> {/* This represents a scroll/certificate */}
                <span className="hidden sm:block">Certificates</span>
            </div>
            <div className="flex items-center text-black">
                <FaTshirt className="text-2xl mr-2" />
                <span className="hidden sm:block">Uniforms</span>
            </div>
            <div className="flex items-center text-black">
                <FaTag className="text-2xl mr-2" />
                <span className="hidden sm:block">Reward Coupons</span>
            </div>
        </div>
    );
};

export default PerksSection;