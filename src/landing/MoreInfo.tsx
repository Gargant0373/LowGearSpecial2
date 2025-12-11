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

const YoutubeVideoWrapper = styled.div`
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
`;

const YoutubeVideo = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
`;

function MoreInfo() {
    return (
        <MoreInfoContainer id="contact">
            <MoreInfoContent>
                <Title>Încă nu te-am convins?</Title>
                <Subtitle>Descoperă ediția din 2024</Subtitle>
                <YoutubeVideoWrapper>
                    <YoutubeVideo src="https://www.youtube.com/embed/1pLVhYq20Hg?si=z4YzV3LDR1Qj7ouT" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></YoutubeVideo>
                </YoutubeVideoWrapper>
            </MoreInfoContent>
            <Socials />
        </MoreInfoContainer>
    )
}

export default MoreInfo;