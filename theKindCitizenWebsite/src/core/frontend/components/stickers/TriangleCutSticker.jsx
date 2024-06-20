import React from "react";
import publicImages from "@/core/frontend/publicImages";

const TriangleCutSticker = ({ label, className }) => {
    return (
        <div className={`relative ${className} w-12 h-4`}>
            <img src={publicImages.STICKER} className="absolute top-0 left-0 w-full h-full" alt="Number Sticker" />
            <span className="absolute inset-0 flex items-center justify-center font-bold text-white">{label}</span>
        </div>
    );
};

export default TriangleCutSticker;