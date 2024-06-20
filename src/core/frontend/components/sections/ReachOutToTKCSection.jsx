import SectionCard from "@/core/frontend/components/cards/SectionCard";
import publicImages from "@/core/frontend/publicImages";
import Section from "@/core/frontend/components/sections/Section";
import React from "react";
import {NAVIGATION_LINKS} from "@/core/frontend/constants";

const ReachOutToTKCSection = () => {
    return (
        <Section>
            <SectionCard headingConfig={{ blue: 'TKC Today', black: 'Reach Out to' }}
                         linkHref={NAVIGATION_LINKS.CONTACT_US.LINK}
                         imgSrc={publicImages.ILLUSTRATOR_CONTACT_US}>
                <ul className="list-disc ml-4">
                    <li>Register as an NGO Partner</li>
                    <li>Register as a Corporate Partner</li>
                    <li>Organize an event with your NGO</li>
                    <li>Are there any concerns? We are listening!</li>
                </ul>
            </SectionCard>
        </Section>
    );
};

export default ReachOutToTKCSection;