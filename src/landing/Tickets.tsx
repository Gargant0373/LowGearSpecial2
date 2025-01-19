import styled from "styled-components";
import Ticket from "../components/Ticket";

const TicketsContainer = styled.div`
    position: relative;
    height: 500px;
    background-color: var(--background);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) {
        height: auto;
        padding: 20px;
    }
`;

const TicketTitle = styled.h1`
    font-family: "Bungee", sans-serif;
    font-weight: 400;
    font-size: 70px;
    color: #FFF;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        font-size: 50px; /* Adjust font size for smaller screens */
    }

    @media (max-width: 480px) {
        font-size: 40px; /* Further adjust font size for very small screens */
    }
`;

const TicketItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap; /* Allow items to wrap on smaller screens */

    @media (max-width: 768px) {
        gap: 20px; /* Adjust gap for smaller screens */
    }

    @media (max-width: 480px) {
        gap: 10px; /* Further adjust gap for very small screens */
    }
`;

const ticketTypes = [
    {
        color1: "#FE0400",
        color2: "#F66700",
        price: 25,
        priceDiscounted: 30,
        title: "MOTO",
        description: "Join with your motorcycle."
    },
    {
        color1: "#F29FA2",
        color2: "#FD67BA",
        price: 50,
        priceDiscounted: 60,
        title: "GANG",
        description: "Join with one car."
    },
    {
        color1: "#0093FF",
        color2: "#00C6F6",
        price: 100,
        priceDiscounted: 120,
        title: "FAMILY",
        description: "Join with two cars."
    }
]

function Tickets() {
    return (
        <TicketsContainer>
            <TicketTitle>TICKETS</TicketTitle>
            <TicketItemContainer>
                {ticketTypes.map((ticket) => (
                    <Ticket key={ticket.title} {...ticket} />
                ))}
            </TicketItemContainer>
        </TicketsContainer>
    )
}

export default Tickets;