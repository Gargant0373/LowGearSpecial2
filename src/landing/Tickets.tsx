import styled from "styled-components";
import Ticket from "../components/Ticket";
import { useModal } from "../hooks/useModal";
import { Modal } from "../components/Modal";
import Countdown from "../components/Countdown";
import { ticketTypes } from "./ticketTypes";

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

const modalHtml =
`
Înregistrarea la eveniment e simplă. Dai click pe linkul de mai jos ce te duce către un formular.<br /><br />
<b>Formularul de inscriere</b> <a href="https://docs.google.com/forms/d/e/1FAIpQLSf4I1X4MafkXhNnO2zyEjd2iyxbdPTUmWe1CPuWoveeJ8FTnQ/viewform" target="_blank">aici</a>.<br /><br />
`

const TicketWrapper = styled.div<{ $disabled: boolean }>`
  text-decoration: none;
  color: inherit;
  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.8 : 1)};
  
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
            $disabled={ticket.soldOut}
            onClick={() => {
              if (!ticket.soldOut) {
                openModal(ticket.title, modalHtml);
              }
            }}
          >
            <Ticket
              color1={ticket.color1}
              color2={ticket.color2}
              price={ticket.price}
              fullPrice={ticket.fullPrice}
              soldOut={ticket.soldOut}
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
