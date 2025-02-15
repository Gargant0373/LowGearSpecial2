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
        font-size: 20px;
        font-weight: 700;
        margin: 0;
        color: #FF0000;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
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

    a {
        cursor: pointer;
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

const tosModal =
    `
    Descarca TOS <a href="./docs/tos.pdf" target="_blank">aici</a>.
    `

function Footer() {
    const { isOpen, modalTitle, modalContent, openModal, closeModal } = useModal();

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    }

    return <>
        <FooterContainer>
            <Image src="./images/G.png" />
            <Divider />
            <Row>
                <Column>
                    <a onClick={() => scrollTo("contact")}>Contact</a>
                </Column>
                <Column>
                    <a onClick={() => scrollTo("tickets")}>Bilete</a>
                </Column>
                <Column>
                    <a onClick={() => openModal("Termeni și Conditii", tosModal)}>
                        Termeni și Condiții
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
        </FooterContainer>
        <Modal
            isOpen={isOpen}
            title={modalTitle}
            content={modalContent}
            onClose={closeModal}
        />
    </>
}

export default Footer;
