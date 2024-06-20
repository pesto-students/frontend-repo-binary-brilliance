import Section from "@/core/frontend/components/sections/Section";
import Heading from "@/core/frontend/components/headings/Heading";
import ContrastLink from "@/core/frontend/components/linksAsButtons/ContrastLink";
import {NAVIGATION_LINKS} from "@/core/frontend/constants";
import publicImages from "@/core/frontend/publicImages";
import React from "react";
import DefaultLayout from "@/core/frontend/components/layouts/DefaultLayout";
import NGOsMarquee from "@/core/frontend/components/marquees/NGOsMarquee";
import GridWithStickerItems from "@/core/frontend/components/grids/GridWithStickerItems";
import ReachOutToTKCSection from "@/core/frontend/components/sections/ReachOutToTKCSection";
import PageIntroSection from "@/core/frontend/components/sections/PageIntroSection";

const NGOsPage = () => {
    const points = [
        { description: `Find high-quality talent tailored to your needs through TKC's volunteer network.` },
        { description: `Access funding opportunities from top CSR funders in the country.` },
        { description: `Showcase your incredible work through TKC's social media presence.` },
        { description: `Upskill your team on communications, program management, and more through curated trainings.` }
    ];
    return (
        <DefaultLayout>
            <PageIntroSection headingLabelConfig={{blue: `Join`, black: `TKC`, isBlueFirst: true}}
                              body={
                                <>
                                    <p> {`Want to stand out from the crowd? TKC provides NGOs with access to skilled 
                                    volunteers, CSR funding, and capacity building opportunities. Build your NGO's brand
                                     visibility and unleash. your full potential through TKC.`} </p>
                                    <ContrastLink href={NAVIGATION_LINKS.CONTACT_US.LINK}
                                                  label={NAVIGATION_LINKS.CONTACT_US.LABEL} />
                                </>
                              }
                              imgSrc={publicImages.NGOsPageImages.MAIN_LOGO} />
            <Section isPadding={false} isTransparent={true} horizontalPositionOfChildren='center'>
                <Heading labelConfig={{blue: `Our NGO`, black: `Partners`, isBlueFirst: true}}/>
                <NGOsMarquee/>
            </Section>
            <Section isTransparent={true}>
                <Section isTransparent={true} layout='vertical'>
                    <img className='rounded-3xl' src={publicImages.NGOsPageImages.BANNER}/>
                </Section>
                <Section isTransparent={true} className='px-8' layout='vertical'>
                    <Heading labelConfig={{blue: `Love Us`, black: `Why NGOs`,}}/>
                    <GridWithStickerItems points={points}/>
                </Section>
            </Section>
            <ReachOutToTKCSection/>
        </DefaultLayout>
    );
};

export default NGOsPage;