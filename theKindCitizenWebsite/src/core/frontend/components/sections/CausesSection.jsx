import React from 'react';
import Image from 'next/image';
import publicImages from "@/core/frontend/publicImages";
import Section from "@/core/frontend/components/sections/Section";
import Heading from "@/core/frontend/components/headings/Heading";
import CauseCard from "@/core/frontend/components/cards/CauseCard";
import {EVENTS} from "@/core/common/constants";

const CausesSection = () => {
    return (
        <Section isGradientCream={true} layout='vertical' horizontalPositionOfChildren='center'>
            <Heading labelConfig={{blue: 'Care About', black: 'What We'}}
                     layout='horizontal'/>
            <div className="mx-auto max-w-screen-xl p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-8">
                {Object.keys(EVENTS.CAUSE_LOGOS).map((cause, index) => {
                    return <CauseCard key={index} title={cause} icon={EVENTS.CAUSE_LOGOS[cause]} />
                })}
            </div>
        </Section>
    );
};

export default CausesSection;