import React, {useContext} from 'react';
import CircularCheckbox from "@/core/frontend/components/checkboxes/CircularCheckbox";
import HallowButton from "@/core/frontend/components/buttons/HallowButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GreenDot from "@/core/frontend/components/dots/GreenDot";
import RedDot from "@/core/frontend/components/dots/RedDot";
import {EventDetailsPageContext} from "@/core/frontend/contexts/EventDetailsPageContext";

const VenueSelection = ({ venues = [] }) => {
    const { selectedVenue, handleVenueSelection } = useContext(EventDetailsPageContext);
    return (
        <div className="bg-transparent rounded w-full">
            {venues.map((venue) => {
                const {id, address, locationLink, venueName, ReadVenueCapacity} = venue;
                return (
                    <div key={id} className="flex justify-between items-start py-2 border-b last:border-b-0">
                        <div className="flex items-start space-x-4">
                            <div className="pt-2">
                                <CircularCheckbox
                                    checked={selectedVenue === id}
                                    onChange={() => handleVenueSelection(id)}
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{venueName}</h3>
                                <p className="text-gray-600">{address}</p>
                            </div>
                        </div>
                        <div className="flex flex-col px-8">
                            <HallowButton label={'View on Maps'}
                                          onClick={() => window.open(locationLink, '_blank')}
                                          icon={
                                              <LocationOnIcon
                                                  style={{fontSize: '1rem', marginRight: '2px', marginLeft: '1px'}}/>
                                          }
                            />
                            <div className="flex items-center text-sm mt-1">
                                {parseInt(ReadVenueCapacity?.[0]?.availableCapacity) !== 0 ? (
                                    <GreenDot/>
                                ) : <RedDot/>}
                                <span
                                    className="whitespace-nowrap min-w-[150px]">{ReadVenueCapacity?.[0]?.availableCapacity} ticket(s) Available
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default VenueSelection;