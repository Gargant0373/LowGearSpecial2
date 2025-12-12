import styled from "styled-components";
import Ticket from "../components/Ticket";
import { useModal } from "../hooks/useModal";
import { Modal } from "../components/Modal";
import Countdown from "../components/Countdown";

const TicketsContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 50px 0;

  @media (max-width: 768px) {
    height: auto;
    gap: 10px;
    padding: 30px 0;
  }
`;

const TicketTitle = styled.h1`
  font-family: "Bungee", sans-serif;
  font-weight: 400;
  font-size: 70px;
  color: #fff;
  text-align: center;
  margin: 0;
  
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
  margin-top: 30px;

  @media (max-width: 768px) {
    gap: 20px;
    margin-top: 20px;
  }
`;

const ticketTypes = () => {
  const now = new Date();
  const year = 2026;
  
  const superEarlyBirdEnd = new Date(`${year}-01-25T23:59:59`);
  const earlyBirdEnd = new Date(`${year}-04-25T23:59:59`);
  const fullPriceEnd = new Date(`${year}-08-01T23:59:59`);

  let currentTier = "";
  let deadline = "";
  let prices = {
    oneCar: 300,
    twoCars: 500,
    oneMoto: 240,
    twoMoto: 380,
    weekend: 150
  };
  let fullPrices = {
    oneCar: 300,
    twoCars: 500,
    oneMoto: 240,
    twoMoto: 380,
    weekend: 150
  };

  if (now < superEarlyBirdEnd) {
    currentTier = "Super Early Bird";
    deadline = superEarlyBirdEnd.toISOString();
    prices = {
      oneCar: 200,
      twoCars: 0, // Not available
      oneMoto: 140,
      twoMoto: 220,
      weekend: 0 // Not available
    };
  } else if (now < earlyBirdEnd) {
    currentTier = "Early Bird";
    deadline = earlyBirdEnd.toISOString();
    prices = {
      oneCar: 250,
      twoCars: 450,
      oneMoto: 190,
      twoMoto: 290,
      weekend: 150
    };
  } else {
    currentTier = "Full Price";
    deadline = fullPriceEnd.toISOString();
    prices = {
      oneCar: 300,
      twoCars: 500,
      oneMoto: 240,
      twoMoto: 380,
      weekend: 200
    };
  }

  const allTickets = [
    {
      color1: "#ADD8E6",
      color2: "#87CEEB",
      price: prices.oneCar,
      fullPrice: fullPrices.oneCar,
      title: "1 Mașină",
      description: "Pentru tine și camarazii tăi.",
      deadline,
      tierName: currentTier,
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSf4I1X4MafkXhNnO2zyEjd2iyxbdPTUmWe1CPuWoveeJ8FTnQ/viewform'
    },
    {
      color1: "#9370DB",
      color2: "#8A2BE2",
      price: prices.twoCars,
      fullPrice: fullPrices.twoCars,
      title: "2 Mașini",
      description: "Pentru tine și toată gașca ta.",
      deadline,
      tierName: currentTier === "Super Early Bird" ? "Early Bird" : currentTier,
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSf4I1X4MafkXhNnO2zyEjd2iyxbdPTUmWe1CPuWoveeJ8FTnQ/viewform'
    },
    {
      color1: "#ffff6bff",
      color2: "#FFD700",
      price: prices.oneMoto,
      fullPrice: fullPrices.oneMoto,
      title: "1 Moto",
      description: "Aventura pe două roți.",
      deadline,
      tierName: currentTier,
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSf4I1X4MafkXhNnO2zyEjd2iyxbdPTUmWe1CPuWoveeJ8FTnQ/viewform'
    },
    {
      color1: "#FFA500",
      color2: "#FF8C00",
      price: prices.twoMoto,
      fullPrice: fullPrices.twoMoto,
      title: "2 Moto",
      description: "Tu și prietenul tău cel mai bun.",
      deadline,
      tierName: currentTier,
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSf4I1X4MafkXhNnO2zyEjd2iyxbdPTUmWe1CPuWoveeJ8FTnQ/viewform'
    },
    {
      color1: "#32CD32",
      color2: "#008000",
      price: prices.weekend,
      fullPrice: fullPrices.weekend,
      title: "Weekend",
      description: "Pentru cei cu timp limitat (08-10.08).",
      deadline,
      tierName: currentTier,
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSf4I1X4MafkXhNnO2zyEjd2iyxbdPTUmWe1CPuWoveeJ8FTnQ/viewform'
    }
  ];

  return allTickets.filter(ticket => ticket.price > 0);
};

const modalHtml =
`
Înregistrarea la eveniment e simplă. Dai click pe linkul de mai jos ce te duce către un formular.<br /><br />
<b>Formularul de inscriere</b> <a href="https://docs.google.com/forms/d/e/1FAIpQLSf4I1X4MafkXhNnO2zyEjd2iyxbdPTUmWe1CPuWoveeJ8FTnQ/viewform" target="_blank">aici</a>.<br /><br />
`

const TicketWrapper = styled.div`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

function Tickets() {
  const { isOpen, modalTitle, modalContent, openModal, closeModal } = useModal();
  const tickets = ticketTypes();
  const deadline = tickets[0].deadline;
  const currentTier = tickets[0].tierName;

  return (<>
    <TicketsContainer id="tickets">
      <TicketTitle>BILETE</TicketTitle>
      {deadline && currentTier !== "Full Price" && <Countdown deadline={deadline} tierName={currentTier} />}
      <TicketItemContainer>
        {tickets.map((ticket) => (
          <TicketWrapper
            key={ticket.title}
            onClick={() => openModal(ticket.title, modalHtml)}
          >
            <Ticket
              color1={ticket.color1}
              color2={ticket.color2}
              price={ticket.price}
              fullPrice={ticket.fullPrice}
              title={ticket.title}
              description={ticket.description}
              tierName={ticket.tierName}
            />
          </TicketWrapper>
        ))}
      </TicketItemContainer>
    </TicketsContainer>
    <Modal
      isOpen={isOpen}
      title={modalTitle}
      content={modalContent}
      onClose={closeModal}
    />
  </>
  );
}

export default Tickets;
