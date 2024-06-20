import Heading from "@/core/frontend/components/headings/Heading";
import AboutCard from "@/core/frontend/components/cards/AboutCard";
import Section from "@/core/frontend/components/sections/Section";
import React from "react";
import publicImages from "@/core/frontend/publicImages";

const MeetTheLeadershipTeamSection = () => {
    const cardsData = [
        {
            id: 1,
            title: 'Manish Pandey',
            subtitle: 'Director',
            description: 'A digital marketer & coach to India’s leading content creators & companies  like Ranveer Allahbadia & Josh Talks, while also sharing a passion for positive change in the country, Manish guides TKC in building it’s communications & networking strategies.',
            imageUrl: publicImages.AboutUsPageImages.MEET_THE_LEADERSHIP_TEAM_SECTION.MANISH_PANDEY,
            mobileImageUrl: '/path-to-mobile-image.jpg'
        },
        {
            id: 2,
            title: 'Vipul Gupta',
            subtitle: 'Director',
            description: "A Philanthropist blending his business expertise in non-profit sector by setting up Earth Focus Foundation, a non-profit working on community-driven development for Baiga and Gond tribes in Kanha. Vipul has spent three decades building teams and organizations in the corporate sector, in the realm of manufacturing and distribution. Vipul guides TKC’s strategy & development.",
            imageUrl: publicImages.AboutUsPageImages.MEET_THE_LEADERSHIP_TEAM_SECTION.VIPUL_GUPTA,
        }
    ];
    return (
        <Section layout='vertical' horizontalPositionOfChildren='center' className="sm:flex sm:flex-col sm:items-center">
            <Heading labelConfig={{blue: `Leadership Team`, black: `Meet The`,}}/>
            <div className="flex flex-col md:flex-row md:gap-x-20 gap-y-10">
                {cardsData.map((card, index) => (
                    <AboutCard key={card.id} {...card} readMoreEnabled={true} />
                ))}
            </div>
        </Section>
    );
};

export default MeetTheLeadershipTeamSection;