import React from 'react';
import publicImages from "@/core/frontend/publicImages";
import CustomMarquee from "@/core/frontend/components/marquees/CustomMarquee";

const NGOsMarquee = () => {
    const logos = [
        publicImages.NGOLogos.SACHDEVA_FOUNDATION,
        publicImages.NGOLogos.ANGELS_FOR_ANIMALS,
        publicImages.NGOLogos.EL_SHADDAI,
        publicImages.NGOLogos.AGAPE_AIDS_ORPHAN_CARE,
        publicImages.NGOLogos.PEHCHAAN_THE_STREET_SCHOOL,
        publicImages.NGOLogos.EARTH_FOCUS,
        publicImages.NGOLogos.AYANG,
    ];

    return <CustomMarquee logos={logos}/>;
};

export default NGOsMarquee;
