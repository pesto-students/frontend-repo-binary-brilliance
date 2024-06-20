import Section from "@/core/frontend/components/sections/Section";
import Heading from "@/core/frontend/components/headings/Heading";
import ContrastLink from "@/core/frontend/components/linksAsButtons/ContrastLink";
import React from "react";

const SectionCard = ({headingConfig, children, imgSrc, linkHref}) => {
    const { blue, black, isBlueFirst} = headingConfig;
    return (
        <div className='min-h-full min-w-full px-8 py-8 bg-customDarkCream rounded-3xl flex flex-col sm:flex-row shadow-[4px_5px_1px_#FFB9B9]'>
            <div className="flex flex-col flex-1">
                <Section isPadding={false} layout='vertical' isTransparent={true}>
                    <Heading labelConfig={{ blue, black, isBlueFirst }} layout='horizontal' />
                    {children}
                    <ContrastLink href={linkHref} label={'Contact Us'}/>
                </Section>
            </div>
            <div className="flex-none sm:mt-0">
                <img src={imgSrc} alt="Your Image" className="w-96 h-auto mx-auto mt-4" />
            </div>
        </div>
    );
};

export default SectionCard;