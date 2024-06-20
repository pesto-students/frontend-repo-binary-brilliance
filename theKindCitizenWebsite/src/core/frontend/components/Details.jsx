import Heading from "@/core/frontend/components/headings/Heading";
import VenueSection from "@/core/frontend/components/sections/VenueSection";
import React from "react";
import Section from "@/core/frontend/components/sections/Section";
import HorizontalLine from "@/core/frontend/components/lines/HorizontalLine";
import PartnerCard from "@/core/frontend/components/cards/PartnerCard";
import PerksSection from "@/core/frontend/components/sections/PerksSection";
import EventInfoSection from "@/core/frontend/components/sections/EventInfoSection";
import publicImages from "@/core/frontend/publicImages";

const Details = ({event}) => {
    const {eventName, startDate, endDate, city, imageLink, description, ticketPrice, cause, startTime, endTime, Venue, EventNGORelationship} = event;
    const isUsedInThreePartLayout = true;
    const maxWidthStyle = isUsedInThreePartLayout ? 'max-w-5xl' : 'w-full';
    const colourStyles = isUsedInThreePartLayout ? '' : 'bg-customCream';
    return(
        <div className={`${maxWidthStyle} mx-auto pl-8 pr-8 ${colourStyles}`}>
            {!isUsedInThreePartLayout ? <Section isTransparent={true} className='min-h-20' /> : null}
            <img src={imageLink || publicImages.WORK_AROUNDS.EVENT_DETAILS_BANNER} alt="Event" className="w-full h-auto rounded-3xl shadow-md mb-4" />
            <EventInfoSection event={event} isPadding={false} isTransparent={true}/>
            <HorizontalLine/>
            <Section id={'eventInformation'}
                     isTransparent={true}
                     layout='vertical'
                     isPadding={false}>
                <Heading labelConfig={{ black: 'Event', blue: 'About', isBlueFirst: true }}
                         size='small'/>
                <p>{description}</p>
            </Section>
            <HorizontalLine/>
            <Section id={'refundPolicy'}
                     isTransparent={true}
                     layout='vertical'
                     isPadding={false}>
                <Heading labelConfig={{ black: 'Policy', blue: 'Refund', isBlueFirst: true }}
                         size='small'/>
                <p>Our fee is non refundable</p>
            </Section>
            <HorizontalLine/>
            <Section id={'venueSelection'}
                     isTransparent={true}
                     layout='vertical'
                     isPadding={false}>
                <Heading labelConfig={{ black: 'Select', blue: 'Venue' }}
                         size='small'/>
                <VenueSection venues={Venue} />
            </Section>
            <HorizontalLine/>
            <Section id={'perks'}
                     isTransparent={true}
                     layout='vertical'
                     horizontalPositionOfChildren='start'
                     isPadding={false}>
                <Heading labelConfig={{ blue: 'Perks' }}
                         size='small'/>
                <PerksSection/>
            </Section>
            <HorizontalLine/>
            <Section id='impactPartners'
                     isTransparent={true}
                     layout='vertical'
                     horizontalPositionOfChildren='start'
                     isPadding={false}>
                <Heading labelConfig={{ blue: 'Impact Partner', black: 'Our'}}
                         size='small'/>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {EventNGORelationship && EventNGORelationship.map((ngoObject, index) => {
                        const { NGO } = ngoObject;
                        return <PartnerCard key={index}
                                     name={NGO.Organization.name}
                                     imgSrc={NGO.LogoLink}
                                     handleFollow={() => window.open(NGO.InstagramLink, '_blank')}/>
                    })}
                </div>
            </Section>
            <HorizontalLine/>
        </div>
    );
};

export default Details;