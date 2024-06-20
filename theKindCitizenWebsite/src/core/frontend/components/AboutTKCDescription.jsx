import Link from "next/link";
import React from "react";
import {NAVIGATION_LINKS} from "@/core/frontend/constants";

const AboutTKCDescription = () => {
    return (
        <>
            <p className="text-gray-600">{`India's most trusted social matchmaking platform connecting NGOs, Humans & Brands together.`}</p>
            <ul className="list-none text-gray-600">
                <li><Link href={NAVIGATION_LINKS.NGOS.LINK} className='text-customBlue'>{NAVIGATION_LINKS.NGOS.LABEL}</Link> get access to skilled volunteers & corporate initiatives.</li>
                <li><Link href={NAVIGATION_LINKS.INDIVIDUALS.LINK} className='text-customBlue'>{NAVIGATION_LINKS.INDIVIDUALS.LABEL}</Link> get a chance to work with the best NGOs.</li>
                <li><Link href={NAVIGATION_LINKS.CORPORATES.LINK} className='text-customBlue'>{NAVIGATION_LINKS.CORPORATES.LABEL}</Link> get to support social causes aligning with their CSR goals.</li>
            </ul>
        </>
    );
};

export default AboutTKCDescription;