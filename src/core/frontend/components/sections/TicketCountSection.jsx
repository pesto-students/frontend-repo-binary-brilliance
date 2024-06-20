import Section from "@/core/frontend/components/sections/Section";
import EventInfoSection from "@/core/frontend/components/sections/EventInfoSection";
import HorizontalLine from "@/core/frontend/components/lines/HorizontalLine";
import Heading from "@/core/frontend/components/headings/Heading";
import TicketSummaryCard from "@/core/frontend/components/cards/TicketSummaryCard";
import React from "react";
import TicketCounter from "@/core/frontend/components/TicketCounter";
import TicketBookingPersonDetailsSection from "@/core/frontend/components/sections/TicketBookingPersonDetailsSection";

const TicketCountSection = ({ event = {}, venueID }) => {
    const {ticketPrice} = event;
    return (
        <>
            <Section layout='horizontal' isPadding={true} isGradientCream={true}>
                <Section layout='vertical' isPadding={false} isTransparent={true} className="relative">
                    <EventInfoSection isPadding={false} event={event} className={'pt-24'} isGradientCream={true}/>
                    <HorizontalLine isMargin={false}/>
                    <Section
                        isPadding={false}
                        layout="horizontal"
                        isTransparent={true}
                    >
                        <div className="flex w-full justify-between">
                            <Heading
                                labelConfig={{ blue: 'tickets', black: 'Select' }}
                                layout="horizontal"
                                size="small"
                            />
                            <TicketCounter ticketPrice={ticketPrice}/>
                        </div>
                    </Section>
                    <HorizontalLine isMargin={false}/>
                    <TicketBookingPersonDetailsSection/>
                </Section>
                <div className='sticky top-24 mt-24 w-full md:w-80 h-fit'>
                    <TicketSummaryCard event={event} venueID={venueID}/>
                </div>
            </Section>
        </>
    );
};

export default TicketCountSection;