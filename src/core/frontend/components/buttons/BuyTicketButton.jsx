import ContrastButton from "@/core/frontend/components/buttons/ContrastButton";

const BuyTicketButton = ({onClick}) => {
    return (
        <ContrastButton label={'Buy Ticket(s)'} onClick={onClick}/>
    );
};

export default BuyTicketButton;