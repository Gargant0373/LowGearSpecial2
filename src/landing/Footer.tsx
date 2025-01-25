import styled from "styled-components";
import { useModal } from "../hooks/useModal";
import { Modal } from "../components/Modal";

const FooterContainer = styled.footer`
    background-color: hsl(0, 0.00%, 89.00%);
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

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    gap: 20px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;

    @media (min-width: 769px) {
        width: auto;
    }
`;

const Divider = styled.hr`
    width: 90%;
    border: 0;
    border-top: 1px solid #333;
`;

const Image = styled.img<{ width?: string }>`
    width: ${({ width }) => width || "100px"};
    height: auto;
`;

function Footer() {
    const { isOpen, modalTitle, modalContent, openModal, closeModal } = useModal();

    return (
        <FooterContainer>
            <Image src="./images/G.png" />
            <Divider />
            <Row>
                <Column>
                    <h2>Companie</h2>
                    <a href="#">Despre Noi</a>
                    <a href="#">Contact</a>
                </Column>
                <Column>
                    <h2>Servicii</h2>
                    <a href="#">Bilete</a>
                    <a href="#">Program</a>
                </Column>
                <Column>
                    <h2>Legal</h2>
                    <a onClick={() => openModal("Termeni și Conditii", "Continutul TOS aici.")}>
                        Termeni și Condiții
                    </a>
                    <a onClick={() => openModal("Politica de Confidențialitate", "Conținutul Politicii de Confidențialitate aici.")}>
                        Politica de Confidențialitate
                    </a>
                    <a onClick={() => openModal("Politica privind Cookies", "Conținutul Politicii privind Cookies aici.")}>
                        Politica privind Cookies
                    </a>
                </Column>
            </Row>
            <Row>
                <a href="https://anpc.ro/ce-este-sal/">
                    <Image width="auto" src="./images/SAL.png" />
                </a>
                <a href="https://ec.europa.eu/consumers/odr">
                    <Image width="auto" src="./images/SOL.png" />
                </a>
            </Row>
            <Modal
                isOpen={isOpen}
                title={modalTitle}
                content={modalContent}
                onClose={closeModal}
            />
        </FooterContainer>
    );
}

export default Footer;
