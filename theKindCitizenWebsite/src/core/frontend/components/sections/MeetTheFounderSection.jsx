import React from 'react';
import Section from "@/core/frontend/components/sections/Section";
import Heading from "@/core/frontend/components/headings/Heading";
import publicImages from "@/core/frontend/publicImages";
import AboutCard from "@/core/frontend/components/cards/AboutCard";

const MeetTheFounderSection = () => {
    const cardsData = [
        {
            id: 1,
            title: 'Dolly Aswani',
            description: 'An Engineer turned into a full-time social impact professional working in the domains of education, women welfare, skill-development & fundraising, and now building TKC as a one-stop platform for NGOs, Volunteers & Corporates.',
            imageUrl: publicImages.AboutUsPageImages.MEET_THE_FOUNDER_SECTION.IMAGE1,
            arrow: publicImages.AboutUsPageImages.MEET_THE_FOUNDER_SECTION.ARROW1
        },
        {
            id: 2,
            title: 'Navigating the social sector was not easy',
            description: "It wasn't easy to find work in the social sector, to acquire the right skills needed to grow in this space, to access the right mentors & a social community for guidance.",
            imageUrl: publicImages.AboutUsPageImages.MEET_THE_FOUNDER_SECTION.IMAGE2,
            arrow: publicImages.AboutUsPageImages.MEET_THE_FOUNDER_SECTION.ARROW2
        },
        {
            id: 3,
            title: 'Saw an Opportunity',
            description: 'Working as a dedicated volunteer for more than seven years herself, she saw an opportunity to build a platform that helps an individual make social work a full-time career.',
            imageUrl: publicImages.AboutUsPageImages.MEET_THE_FOUNDER_SECTION.IMAGE3,
            arrow: publicImages.AboutUsPageImages.MEET_THE_FOUNDER_SECTION.ARROW1
        },
        {
            id: 4,
            title: 'The Kind Citizen-TKC was born',
            description: 'She decided to build TKC like a consumer who needed this platform five years ago, who needs this today and who will need it five years down the line, giving access to resources, opportunities & a network all at one place.',
            imageUrl: publicImages.AboutUsPageImages.MEET_THE_FOUNDER_SECTION.IMAGE4,
        }
    ];
    return (
        <Section isCream={true} layout='vertical' horizontalPositionOfChildren='center'>
            <Heading labelConfig={{blue: `Founder`, black: `Meet The`,}}/>
            {cardsData.map((card, index) => (
                <div key={card.id} className={`flex w-full justify-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <AboutCard {...card} />
                    {card.arrow ? <img className='hidden md:block md:mx-5 md:w-1/2 md:h-auto' src={card.arrow} alt="Descriptive text" /> : <div className='hidden md:block md:w-1/2' />}
                </div>
            ))}
        </Section>
    );
};

export default MeetTheFounderSection;