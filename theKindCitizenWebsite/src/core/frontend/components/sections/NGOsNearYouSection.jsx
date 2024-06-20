import React from 'react';
import publicImages from "@/core/frontend/publicImages";
import Section from "@/core/frontend/components/sections/Section";
import Heading from "@/core/frontend/components/headings/Heading";
import ContrastLink from "@/core/frontend/components/linksAsButtons/ContrastLink";
import SecondaryHeading from "@/core/frontend/components/headings/SecondaryHeading";

const NGOsNearYouSection = () => {
    return (
        <Section isGradientCream={true} layout='vertical'>
            <div className="flex flex-col md:flex-row w-full items-center md:justify-between space-y-4 md:space-y-0">
                <div className="flex-1">
                    <Heading labelConfig={{blue: 'Near you', black: 'Find NGOS'}} className="mb-4"/>
                    <div className='my-4'><SecondaryHeading label={'Coming soon...'} className="mb-4"/></div>
                    <div>
                        <p>Find trusted NGOs That need your support in your preferred location.</p>
                        <p >Stay tuned for updates!</p>
                    </div>
                    <div className='my-4'>
                        <ContrastLink label={'Get notified'} href={'/getnotified'} className="mb-8 md:mb-0"/>
                    </div>
                </div>
                <div className="md:ml-8">
                    <img src={publicImages.NGOS_NEAR_YOU_LOGO} alt="Descriptive Alt Text" className="w-64 h-auto" />
                </div>
            </div>
        </Section>
    );
};

export default NGOsNearYouSection;