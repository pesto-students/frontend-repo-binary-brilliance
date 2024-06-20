import Heading from "@/core/frontend/components/headings/Heading";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Section from "@/core/frontend/components/sections/Section";
import React from "react";

const EventInfoSection = ({event = {}, className = '', isPadding = true, isGradientCream = false, isTransparent = true}) => {
    const { eventName, startDate, endDate, city, cause, startTime, endTime } = event;
    if (isTransparent) {
        isGradientCream = false;
    }
    return (
        <Section layout='vertical' isPadding={isPadding} isGradientCream={isGradientCream} isTransparent={isTransparent}  className={className} >
            <Heading labelConfig={{blue: 'Event title', black: eventName, isBlueFirst: true}} layout='hortizontal' size='small'/>
            <span className='text-red-500'>{`#${cause}`}</span>
            <div className="flex space-x-2 mt-1">
                    <span className='flex justify-center items-center'>
                        <EventNoteIcon style={{ fontSize: '1rem', marginRight: '4px' }} />
                        <p>{startDate === endDate ? startDate : `${startDate} - ${endDate}`}</p>
                    </span>
                <span className='flex justify-center items-center'>
                        <AccessTimeIcon style={{ fontSize: '1rem', marginRight: '4px' }} />
                        <p> {`${startTime} - ${endTime}`}</p>
                    </span>
                <span className='flex justify-center items-center'>
                    <LocationOnIcon style={{ fontSize: '1rem', marginRight: '4px'}}/>
                    <p>{city}</p>
                </span>
            </div>
        </Section>
    );
};

export default EventInfoSection;