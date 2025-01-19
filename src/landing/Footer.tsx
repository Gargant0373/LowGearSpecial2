import { useState } from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color:hsl(0, 0.00%, 89.00%);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;

    a {
        color: #222;
        text-decoration: none;
        
        &:hover {
            text-decoration: underline;
        }
    }

    h2 {
        font-size: 20px;
        font-weight: 700;
        margin: 0;
        color: #FF0000;
    }
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow: hidden; /* Prevent scrolling */
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    text-align: center;

    button {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: #0056b3;
        }
    }
`;

interface FlexProps {
    justifyContent?: string;
    gap?: string;
    alignItems?: string;
}

const Row = styled.div<FlexProps>`
    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
    width: 90%;
    gap: ${({ gap }) => gap || '20px'};
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Column = styled.div<FlexProps>`
    display: flex;
    flex-direction: column;
    gap: ${({ gap }) => gap || '10px'};
    justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
    align-items: ${({ alignItems }) => alignItems || 'stretch'};
    width: 100%;

    @media (min-width: 769px) {
        width: auto;
    }
`;

const Image = styled.img<{ width?: string }>`
    width: ${({ width }) => width || '100px'};
    height: auto;
`;

const Divider = styled.hr`
    width: 90%;
    border: 0;
    border-top: 1px solid #333;
`;

function Modal({ title, content, onClose }: { title: string; content: string; onClose: () => void }) {
    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2>
                <p>{content}</p>
                <button onClick={onClose}>Close</button>
            </ModalContent>
        </ModalOverlay>
    );
}

function Footer() {
    const [modalContent, setModalContent] = useState<string | null>(null);
    const [modalTitle, setModalTitle] = useState<string | null>(null);

    const openModal = (title: string, content: string) => {
        setModalTitle(title);
        setModalContent(content);
    };

    const closeModal = () => {
        setModalContent(null);
        setModalTitle(null);
    };

    return (
        <FooterContainer>
            <Image src="./images/G.png" />
            <Divider />
            <Row>
                <Column>
                    <h2>Companie</h2>
                    <a href="#">Despre Noi</a>
                    <a href="#">Contact</a>
                    <a href="#">Contribuie</a>
                </Column>
                <Column>
                    <h2>Servicii</h2>
                    <a href="#">Bilete</a>
                    <a href="#">Program</a>
                </Column>
                <Column>
                    <h2>Legal</h2>
                    <a onClick={() => openModal("Termeni și Conditii", "Continutul TOS aici.")}>Termeni și Condiții</a>
                    <a onClick={() => openModal("Politica de Confidențialitate", "Conținutul Politicii de Confidențialitate aici.")}>Politica de Confidențialitate</a>
                    <a onClick={() => openModal("Politica privind Cookies", "Conținutul Politicii privind Cookies aici.")}>Politica privind Cookies</a>
                </Column>
            </Row>
            <Row justifyContent="space-evenly">
                <a href="https://anpc.ro/ce-este-sal/"><Image width="auto" src="./images/SAL.png" /></a>
                <a href="https://ec.europa.eu/consumers/odr"><Image width="auto" src="./images/SOL.png" /></a>
            </Row>
            {modalContent && modalTitle && (
                <Modal title={modalTitle} content={modalContent} onClose={closeModal} />
            )}
        </FooterContainer>

    );
}

export default Footer;
