import {Inter} from "next/font/google";
import DefaultLayout from "@/core/frontend/components/layouts/DefaultLayout";
import NGOsMarquee from "@/core/frontend/components/marquees/NGOsMarquee";
import AboutSection from "@/core/frontend/components/sections/AboutSection";
import BrowseEventsSection from "@/core/frontend/components/sections/BrowseEventsSection";
import CausesSection from "@/core/frontend/components/sections/CausesSection";
import OurImpactSection from "@/core/frontend/components/sections/OurImpactSection";
import NGOsNearYouSection from "@/core/frontend/components/sections/NGOsNearYouSection";
import CorporatePartnerSection from "@/core/frontend/components/sections/CorporatePartnerSection";
import publicImages from "@/core/frontend/publicImages";
import ChangingImageSection from "@/core/frontend/components/sections/ChangingImageSection";
import SectionCard from "@/core/frontend/components/cards/SectionCard";
import Section from "@/core/frontend/components/sections/Section";
import React from "react";
import EventRequests from "@/core/frontend/requests/EventRequests";
import ReachOutToTKCSection from "@/core/frontend/components/sections/ReachOutToTKCSection";
import Heading from "@/core/frontend/components/headings/Heading";

const inter = Inter({ subsets: ["latin"] });

const Home = ({events}) => {
    const imageConfigs = [
        {
            src: publicImages.HomePageBackgroundImages.image1,
            href: '/ngos',
            overlayContents: {
                title: "WORK",
                subtitle: "with Non-Profits",
                buttonText: "Know more"
            },
        },
        {
            src: publicImages.HomePageBackgroundImages.image2,
            href: '/events',
            overlayContents: {
                title: "ATTEND",
                subtitle: "Impactful Events",
                buttonText: "Know more"
            },
        },
        {
            src: publicImages.HomePageBackgroundImages.image3,
            href: '/corporates',
            overlayContents: {
                title: "SIMPLIFY",
                subtitle: "Coporate volunteering",
                buttonText: "Know more",
            },
        }
    ]
    return (
        <DefaultLayout>
            <ChangingImageSection imageConfigs={imageConfigs}/>
            <Section isPadding={false} isTransparent={true} horizontalPositionOfChildren='center' layout='vertical'>
                <Heading labelConfig={{blue: `NGO Partners`, black: `Our Trusted`}} size='small'/>
                <NGOsMarquee/>
            </Section>
            <AboutSection/>
            <BrowseEventsSection events={events}/>
            <CausesSection/>
            <OurImpactSection/>
            <NGOsNearYouSection/>
            <CorporatePartnerSection/>
            <ReachOutToTKCSection/>
        </DefaultLayout>
    );
};

export default Home;

export const getServerSideProps = async (context) => {
    try {
        const events = await EventRequests.fetchEvents(context.query);
        return {
            props: {
                events
            }
        };
    } catch (error) {
        console.error('An error occurred while fetching events:', error.message);
        return {
            props: {
                events: [],
                error: 'Failed to load events.'
            }
        };
    }
};