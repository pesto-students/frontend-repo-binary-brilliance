import prisma from "../../../../prisma/prisma";
const ReadVenueCapacity = {
    getAvailableCapacity: async (venueId) => {
        try {
            const venueCapacity = await prisma.readVenueCapacity.findFirst({
                where: {
                    venueId: venueId
                },
                select: {
                    availableCapacity: true
                }
            });
            if (!venueCapacity || venueCapacity.availableCapacity <= 0) {
                return 0;
            } else {
                return venueCapacity.availableCapacity;
            }
        } catch (error) {
            console.error("Failed to fetch booked capacity: " + error.message);
            return 0;
        }
    },
    updateTicketCapacityOnReservation: async (venueId, noOfTicketsTaken) => {
        try {
            const result = await prisma.$transaction(async (tx) => {
                const venueCapacity = await ReadVenueCapacity.getVenueCapacityRecord(venueId, tx);

                if (!venueCapacity) {
                    return {
                        success: false,
                        message: "This venue ID does not exist."
                    };
                }

                if (venueCapacity.availableCapacity < noOfTicketsTaken) {
                    return {
                        success: false,
                        message: `We're running short on tickets. Only ${venueCapacity.availableCapacity} tickets are available.`,
                    };
                }

                await tx.readVenueCapacity.update({
                    where: { id: venueCapacity.id },
                    data: {
                        availableCapacity: {
                            decrement: noOfTicketsTaken,
                        },
                        inProgress: {
                            increment: noOfTicketsTaken,
                        },
                    },
                });

                return { success: true, message: "Reservation updated successfully." };
            });

            return result;
        } catch (error) {
            console.error("Failed to update capacity:", error);
            throw new Error("Failed to update capacity");
        }
    },

    updateTicketCapacityOnRleasingReservation: async (venueId, numberOfTicketsToBeReserved) => {
        try {
            await prisma.$transaction(async (tx) => {
                const venueCapacity = await this.getVenueCapacityRecord(venueId, tx);
                if (!venueCapacity) {
                    return { success: false, message: "This venue ID does not exist." };
                }

                await tx.readVenueCapacity.update({
                    where: { id: venueCapacity.id },
                    data: {
                        availableCapacity: {
                            increment: numberOfTicketsToBeReserved,
                        },
                        inProgress: {
                            decrement: numberOfTicketsToBeReserved,
                        },
                    },
                });
                return { success: true, message: "Reservation released successfully." };

            });
        } catch (error) {
            console.error("Failed to update capacity:", error);
            throw new Error("Failed to update capacity");
        }
    },
    updateTicketCapacityOnBookingConfrimation: async (tx, venueId, numberOfBookedSeat) => {
        try {
            const venueCapacity = await this.getVenueCapacityRecord(venueId, tx);

            if (!venueCapacity) {
                throw new Error("Venue capacity record not found");

            }

            await tx.readVenueCapacity.update({
                where: { id: venueId },
                data: {
                    bookedCapacity: {
                        increment: numberOfBookedSeat,
                    },
                    inProgress: {
                        decrement: numberOfBookedSeat,
                    },
                },
            });
            return { success: true, message: "Booking confirmed successfully." };

        } catch (error) {
            console.error("Failed to update capacity:", error);
            throw new Error("Failed to update capacity");
        }
    },
    getVenueCapacityRecord: async (venueId, tx = prisma) => {
        return await tx.readVenueCapacity.findFirst({
            where: {
                venueId: venueId,
            },
        });
    },
}
export default ReadVenueCapacity