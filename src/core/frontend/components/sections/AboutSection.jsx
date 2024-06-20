import Link from "next/link";
import Heading from "@/core/frontend/components/headings/Heading";
import React from "react";
import Section from "@/core/frontend/components/sections/Section";
import AboutTKCDescription from "@/core/frontend/components/AboutTKCDescription";
import OurMissionOurVisionGrid from "@/core/frontend/components/grids/OurMissionOurVisionGrid";

const AboutSection = () => {
    return (
        <Section>
            <div className="flex-1 text-customBlue space-y-4">
                <Heading labelConfig={{ black: 'About', blue: 'The Kind Citizen - TKC' }} layout={'vertical'}/>
                <AboutTKCDescription/>
            </div>
            <OurMissionOurVisionGrid layout='vertical'/>
        </Section>
    );
};

export default AboutSection;