import Section from "@/core/frontend/components/sections/Section";
import Heading from "@/core/frontend/components/headings/Heading";
import ContrastLink from "@/core/frontend/components/linksAsButtons/ContrastLink";
import {NAVIGATION_LINKS} from "@/core/frontend/constants";
import publicImages from "@/core/frontend/publicImages";
import React from "react";

const PageIntroSection = ({headingLabelConfig, body, imgSrc}) => {
    return (
        <Section className='pt-28' isGradientCream={true}>
            <Section className='md:px-12 md:py-12' isTransparent={true} layout='vertical' isPadding={false}>
                <Heading labelConfig={headingLabelConfig}/>
                {body}
            </Section>
            <Section isTransparent={true} isPadding={false} layout='vertical'>
                <img src={imgSrc}/>
            </Section>
        </Section>
    );
};

export default PageIntroSection;