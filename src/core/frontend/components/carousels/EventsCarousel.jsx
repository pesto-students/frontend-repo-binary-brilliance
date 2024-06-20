import {Box} from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper/core';
import EventCard from "@/core/frontend/components/cards/EventCard";
import { Pagination, Navigation, Scrollbar } from "swiper/modules";
import React from "react";
import Message from "@/core/frontend/components/UIMessages/Message";

SwiperCore.use([Pagination, Navigation, Scrollbar]);

const EventsCarousel = ({ events }) => {
    return (
        <Swiper
            slidesPerView={1}
            // spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            navigation={false}
            breakpoints={{
                620: {
                    slidesPerView: 2
                },
                915: {
                    slidesPerView: 3
                },
                1150: {
                    slidesPerView: 4,
                },
            }}
            className="w-full max-w-screen-xl mx-auto"
        >
            { events.length === 0 ? (
                <Message text={'No events found.'}/>
            ) : null }
            {events.map((event, index) => (
                <SwiperSlide key={index}>
                    <EventCard event={event} className={'mb-10'}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default EventsCarousel;