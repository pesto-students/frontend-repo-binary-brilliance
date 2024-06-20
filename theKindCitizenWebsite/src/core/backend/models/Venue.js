import prisma from "../../../../prisma/prisma";
const Venue = {
    updateCapacity: async (venueId, numberOfTicketsReserved, maxRetries = 3) => {
        let retries = 0;
        try {
            await prisma.$transaction(async (tx) => {
                await tx.Venue.update({
                    where: {id: venueId},
                    data: {
                        availableCapacity: {
                            decrement: numberOfTicketsReserved
                        }
                    }
                });

                const venueCapacity = await tx.readVenueCapacity.findFirst({
                    where: {
                        venueId: venueId,
                    },
                });

                if (!venueCapacity) {
                    throw new Error("Venue capacity record not found");

                }
                await tx.readVenueCapacity.update({
                    where: {id: venueCapacity.id},
                    data: {
                        bookedCapacity: {
                            increment: numberOfTicketsReserved,
                        },
                        inProgress: {
                            decrement: numberOfTicketsReserved,
                        },
                    },
                });
                //await ReadVenueCapacity.updateTicketCapacityOnBookingConfrimation(tx,venueId,10);

            });
            // If transaction succeeds, break out of the loop
            // break;
        } catch (error) {
            console.error("Transaction failed. Retrying...", error.message);
            retries++;
            if (retries === maxRetries) {
                throw new Error("Exceeded maximum retry attempts. Unable to update capacity.");
            }
        }
    },
    getVenueDetailsByID: async (venueId) => {
        try {
            const venue = await prisma.venue.findUnique({
                where: {
                    id: venueId,
                },
                select: {
                    venueName: true,
                    ReadVenueCapacity: {
                        select: {
                            availableCapacity: true,
                        },
                    },
                },
            })
            if (!venue) {
                console.log("Venue not found.");
                return null;
            }
            return venue;
        } catch (error) {
            console.error(`Error occurred while fetching venue details with ID ${venueId} from database:`, error);
            return null; // Handle error by returning null or throw the error
        }
    }
};

export default Venue;
