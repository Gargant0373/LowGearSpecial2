import styled from "styled-components";
import Ticket from "../components/Ticket";

const TicketsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-color: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    height: auto;
    padding-bottom: 20px;
  }
`;

const TicketTitle = styled.h1`
  font-family: "Bungee", sans-serif;
  font-weight: 400;
  font-size: 70px;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

const TicketItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const ticketTypes = [
    {
        color1: "#F29FA2",
        color2: "#FD67BA",
        price: 50,
        priceDiscounted: 60,
        title: "I Masina",
        description: "Pentru tine si camarazii tai.",
        href: "https://www.google.com"
    },
    {
        color1: "#0093FF",
        color2: "#00C6F6",
        price: 100,
        priceDiscounted: 120,
        title: "II Masini",
        description: "Pentru toata gasca ta.",
        href: "https://www.google.com"
    }
];

function Tickets() {
    return (
        <TicketsContainer>
            <TicketTitle>BILETE</TicketTitle>
            <TicketItemContainer>
                {ticketTypes.map((ticket) => (
                    <a
                        key={ticket.title}
                        href={ticket.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <Ticket {...ticket} />
                    </a>
                ))}
            </TicketItemContainer>
        </TicketsContainer>
    );
}

export default Tickets;
