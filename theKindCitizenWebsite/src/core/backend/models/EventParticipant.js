import prisma from "../../../../prisma/prisma";
const EventParticiant={
    createEventParticipant : async (eventData) => {
        try {
          const newParticipant = await prisma.eventParticipant.create({
            data: eventData,
          });
          console.log("New EventParticipant created:", newParticipant);
        } catch (error) {
          console.error("Error creating EventParticipant:", error);
        }

}
}
export default createEventParticipant