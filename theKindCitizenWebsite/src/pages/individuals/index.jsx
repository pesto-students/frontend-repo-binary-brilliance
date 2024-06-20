import DefaultLayout from "@/core/frontend/components/layouts/DefaultLayout";
import Section from "@/core/frontend/components/sections/Section";
import Heading from "@/core/frontend/components/headings/Heading";
import ContrastLink from "@/core/frontend/components/linksAsButtons/ContrastLink";
import {NAVIGATION_LINKS} from "@/core/frontend/constants";
import publicImages from "@/core/frontend/publicImages";
import React from "react";
import SecondaryHeading from "@/core/frontend/components/headings/SecondaryHeading";
import ReachOutToTKCSection from "@/core/frontend/components/sections/ReachOutToTKCSection";
import PageIntroSection from "@/core/frontend/components/sections/PageIntroSection";

const IndividualsPage = () => {
    return (
        <DefaultLayout>
            <PageIntroSection headingLabelConfig={{blue: `Opportunities`, black: ` with TKC`, isBlueFirst: true}}
                              body={
                                <>
                                    <SecondaryHeading label='Coming Soon...'/>
                                    <p>You will now be able to volunteer for NGOs. Stay tuned for the updates!</p>
                                    <ContrastLink href={NAVIGATION_LINKS.CONTACT_US.LINK}
                                                  label={NAVIGATION_LINKS.CONTACT_US.LABEL} />
                                </>
                              }
                              imgSrc={publicImages.CorporatesPageImages.MAIN_LOGO}/>
            <ReachOutToTKCSection/>
        </DefaultLayout>
    );
};

export default IndividualsPage;