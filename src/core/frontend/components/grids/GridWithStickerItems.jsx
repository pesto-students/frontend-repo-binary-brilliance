import React from "react";
import TriangleCutSticker from "@/core/frontend/components/stickers/TriangleCutSticker";

const GridWithStickerItems = ({ points = [] }) => {
    return (
        <div className="max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {points.map((point, index) => (
                    <div key={index} className="relative bg-transparent rounded-lg shadow-md border border-gray-200">
                        <TriangleCutSticker label={index + 1} className={'top-0 left-0'}/>
                        <div className="px-8 py-2">{point.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GridWithStickerItems;