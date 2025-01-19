import styled from "styled-components";
import { Subtitle, Title } from "../components/MISC";
import Newsletter from "../components/Newsletter";
import Socials from "../components/Socials";

const MoreInfoContainer = styled.div`
    background-color: var(--background2);

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 60px;

    height: 500px;

    text-align: start;

    font-family: "Sofia Sans", sans-serif;

    @media (max-width: 768px) {
        height: auto;
        padding: 20px;
        gap: 40px;
    }
`;

const MoreInfoContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    gap: 20px;

    width: 60%;

    @media (max-width: 768px) {
        width: 90%;
    }
`;

function MoreInfo() {
    return (
        <MoreInfoContainer>
            <MoreInfoContent>
                <Title>Inca nu te-am convins?</Title>
                <Subtitle>Inscrie-te la newsletter pentru mai multe informatii!</Subtitle>
                <Newsletter />
            </MoreInfoContent>
            <Socials />
        </MoreInfoContainer>
    )
}

export default MoreInfo;