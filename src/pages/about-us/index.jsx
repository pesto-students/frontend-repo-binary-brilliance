import DefaultLayout from "@/core/frontend/components/layouts/DefaultLayout";
import Section from "@/core/frontend/components/sections/Section";
import ContrastLink from "@/core/frontend/components/linksAsButtons/ContrastLink";
import {NAVIGATION_LINKS} from "@/core/frontend/constants";
import publicImages from "@/core/frontend/publicImages";
import React from "react";
import AboutTKCDescription from "@/core/frontend/components/AboutTKCDescription";
import OurMissionOurVisionGrid from "@/core/frontend/components/grids/OurMissionOurVisionGrid";
import ReachOutToTKCSection from "@/core/frontend/components/sections/ReachOutToTKCSection";
import PageIntroSection from "@/core/frontend/components/sections/PageIntroSection";
import MeetTheFounderSection from "@/core/frontend/components/sections/MeetTheFounderSection";
import MeetTheLeadershipTeamSection from "@/core/frontend/components/sections/MeetTheLeadershipTeamSection";
import FriendsOfTKCSection from "@/core/frontend/components/sections/FriendsOfTKCSection";

const AboutUsPage = () => {
    return (
        <DefaultLayout>
            <PageIntroSection headingLabelConfig={{blue: `About`, black: `TKC`, isBlueFirst: true}}
                              body={
                                <>
                                    <AboutTKCDescription/>
                                    <ContrastLink href={NAVIGATION_LINKS.CONTACT_US.LINK}
                                                  label={NAVIGATION_LINKS.CONTACT_US.LABEL} />
                                </>
                              }
                              imgSrc={publicImages.AboutUsPageImages.MAIN_LOGO}/>
            <Section isTransparent={true}>
                <OurMissionOurVisionGrid/>
            </Section>
            <MeetTheFounderSection/>
            <MeetTheLeadershipTeamSection/>
            {/*<FriendsOfTKCSection/>*/}
            <ReachOutToTKCSection/>
        </DefaultLayout>
    );
};

export default AboutUsPage;