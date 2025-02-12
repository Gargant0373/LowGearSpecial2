import styled from "styled-components";
import { Subtitle, Title } from "../components/MISC";
import Socials from "../components/Socials";

const MoreInfoContainer = styled.div`
    background-color: var(--background2);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;

    height: min-content;
    
    padding: 40px 0;

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

const YoutubeVideo = styled.iframe`
    width: auto;
    height: 450px;
    display: flex;

    @media (max-width: 768px) {
        height: 300px;
    }
`;

function MoreInfo() {
    return (
        <MoreInfoContainer>
            <MoreInfoContent>
                <Title>Inca nu te-am convins?</Title>
                <Subtitle>Descopera editia din 2024</Subtitle>
                <YoutubeVideo width="auto" height="400px" src="https://www.youtube.com/embed/7NTDJglS0YY?si=FlU9MPq95sAtlBpl" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></YoutubeVideo>
            </MoreInfoContent>
            <Socials />
        </MoreInfoContainer>
    )
}

export default MoreInfo;