import React from 'react';
import { Card, CardActions, CardContent, Typography, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Box from '@mui/material/Box';
import LightButton from "@/core/frontend/components/buttons/LightButton";
import ContrastButton from "@/core/frontend/components/buttons/ContrastButton";
import {useRouter} from "next/router";
import DateUtils from "@/core/common/utils/DateUtils";
import publicImages from "@/core/frontend/publicImages";

const EventCard = ({ event, className }) => {
    const {id, eventName, startDate, endDate, ticketPrice, thumbnailLink, city, cause, description, Venue } = event;
    const router = useRouter();
    const classToBeApplied = `${className} w-60 h-98 bg-white rounded-lg shadow-[4px_5px_1px_#FFB9B9] flex flex-col overflow-hidden`;
    const formattedStartDate = DateUtils.convertUTCDateToReadableFormat(startDate);
    const formattedEndDate = DateUtils.convertUTCDateToReadableFormat(endDate);
    return (
        <Box className={classToBeApplied}>
            <Box className="absolute py-1 px-3 bg-customYellow rounded-tl-lg rounded-br-lg">
                <Typography variant="body1" className="text-white font-bold">
                    {cause}
                </Typography>
            </Box>
            <img
                src={publicImages.WORK_AROUNDS.EVENT_CARD_THUMBNAIL}
                alt={eventName}
                className="w-full h-40 object-cover"
            />
            <CardContent className="flex-grow p-4">
                <Box className="flex justify-between">
                    <Typography gutterBottom variant="p" component="p" className="text-lg font-bold break-words text-gray-800">
                        {eventName.split('_').join(' ')}
                    </Typography>
                    <Typography variant="h6" component="p" className="text-lg font-bold text-gray-800">
                        ₹{ticketPrice}
                    </Typography>
                </Box>
                <Box className="flex flex-col text-sm text-gray-600">
                    <Typography variant="body2" component="p" className="flex items-center">
                        <LocationOnIcon style={{ fontSize: '1rem', marginRight: '4px' }} />
                        {city}
                    </Typography>
                    <Typography variant="body2" component="p" className="flex items-center">
                        <EventNoteIcon style={{ fontSize: '1rem', marginRight: '4px' }} />
                        { formattedStartDate === formattedEndDate ? formattedStartDate : `${formattedStartDate} - ${formattedEndDate}`}
                    </Typography>
                    <Typography variant="body2" component="p" className="flex items-center">
                        <AccessTimeIcon style={{ fontSize: '1rem', marginRight: '4px' }} />
                        {event.time} - {event.time}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions className="pb-4 flex justify-between items-center">
                <LightButton label={'View Details'} onClick={() => router.push(`/events/${event.id}`)}/>
                <ContrastButton label={'Buy Ticket'} isRed={true}/>
            </CardActions>
        </Box>
    );
};

export default EventCard;
