import publicImages from "@/core/frontend/publicImages";
import CustomMarquee from "@/core/frontend/components/marquees/CustomMarquee";
import React from "react";

const CorporatesMarquee = () => {
    const logos = Object.values(publicImages.CORPORATE_LOGOS);
    return <CustomMarquee logos={logos}/>;
};

export default CorporatesMarquee;