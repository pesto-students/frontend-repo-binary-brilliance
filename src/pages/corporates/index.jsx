import DefaultLayout from "@/core/frontend/components/layouts/DefaultLayout";
import Section from "@/core/frontend/components/sections/Section";
import Heading from "@/core/frontend/components/headings/Heading";
import publicImages from "@/core/frontend/publicImages";
import ContrastLink from "@/core/frontend/components/linksAsButtons/ContrastLink";
import {NAVIGATION_LINKS} from "@/core/frontend/constants";
import CorporatesMarquee from "@/core/frontend/components/marquees/CorporatesMarquee";
import OurImpactSection from "@/core/frontend/components/sections/OurImpactSection";
import React from "react";
import ReachOutToTKCSection from "@/core/frontend/components/sections/ReachOutToTKCSection";
import GridWithStickerItems from "@/core/frontend/components/grids/GridWithStickerItems";
import PageIntroSection from "@/core/frontend/components/sections/PageIntroSection";

const CorporatesPage = () => {
    const points = [
        { description: 'Curated database of verified & trusted NGOs across the country' },
        { description: 'Tailored employee volunteering solutions aligned with CSR goals' },
        { description: 'End-to-end management for CSR project implementation' },
        { description: 'Detailed impact reporting in written & multimedia formats' }
    ];

    return (
        <DefaultLayout>
            <PageIntroSection headingLabelConfig={{blue: `Partner With`, black: `TKC`, isBlueFirst: true}}
                              body={
                                <>
                                    <div>
                                        <p className='mb-4'> Unlock the full potential of your corporate social responsibility (CSR) initiatives.
                                            TKC seamlessly connects corporates with a diverse network of NGOs, facilitating impactful
                                            employee volunteering opportunities and third-party project execution. </p>
                                        <p> Contact The Kind Citizen - TKC to drive impactful social change and demonstrate your commitment to corporate citizenship.</p>
                                    </div>
                                    <ContrastLink href={NAVIGATION_LINKS.CONTACT_US.LINK}
                                                  label={NAVIGATION_LINKS.CONTACT_US.LABEL} />
                                </>
                              }
                              imgSrc={publicImages.CorporatesPageImages.MAIN_LOGO}
                              />
            <Section isTransparent={true} isPadding={false} horizontalPositionOfChildren='center'>
                <Heading labelConfig={{blue: `Our Corporate`, black: `Partners`, isBlueFirst: true}}/>
                <CorporatesMarquee/>
            </Section>
            <Section isTransparent={true}>
                <Section isTransparent={true} isPadding={false} layout='vertical'>
                    <img className='rounded-3xl' src={publicImages.CorporatesPageImages.BANNER}/>
                </Section>
                <Section isTransparent={true} isPadding={false} className='px-8' layout='vertical'>
                    <Heading labelConfig={{blue: `For Corporates`, black: `Our Offerings`,}}/>
                    <GridWithStickerItems points={points}/>
                </Section>
            </Section>
            <OurImpactSection/>
            <ReachOutToTKCSection/>
        </DefaultLayout>
    );
};

export default CorporatesPage;