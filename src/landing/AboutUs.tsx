import { styled } from "styled-components";
import { Subtitle, Title } from "../components/MISC";
import ChildCareIcon from '@mui/icons-material/ChildCare';
import TerrainIcon from '@mui/icons-material/Terrain';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GradeIcon from '@mui/icons-material/Grade';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const AboutUsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Sofia Sans", sans-serif;
    letter-spacing: 0px;
    padding: 20px;

    @media (max-width: 768px) {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
`;

const IntroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 50px 0;
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    width: 60%;
    align-self: center;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const ContentCard = styled.div<{ alignSelf?: string }>`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    align-self: ${({ alignSelf }) => alignSelf || 'auto'};
`;

const ContentTitle = styled.h2`
    font-size: 25px;
    font-weight: 800;
    margin: 0 0 8px;
    text-transform: uppercase;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

// const Paragraph = styled.p`
//     text-align: start;
//     font-size: 20px;
//     font-weight: 300;
//     margin: 0px;

//     @media (max-width: 768px) {
//         font-size: 16px;
//     }
// `;

// const ImageCard = styled.div`
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     flex-direction: row;
//     gap: 30px;

//     @media (max-width: 768px) {
//         flex-direction: column;
//         gap: 20px;
//     }
// `;

// const Image = styled.img`
//     width: 50%;
//     height: auto;

//     @media (max-width: 768px) {
//         width: 100%;
//     }
// `;

function AboutUs() {
    return (
        <AboutUsContainer>
            <IntroContainer>
                <Title>Despre ce este vorba?</Title>
                <Subtitle>Cu rable in Aventura!</Subtitle>
            </IntroContainer>
            <ContentContainer>
                <ContentCard>
                    <ContentTitle>
                        <ChildCareIcon /> 7 zile de aventură.
                    </ContentTitle>
                </ContentCard>
                <ContentCard>
                    <ContentTitle>
                        <TerrainIcon /> Aventuri on și off-road prin Munții Carpați și Balcani.
                    </ContentTitle>
                </ContentCard>
                <ContentCard>
                    <ContentTitle>
                        <Diversity3Icon /> Cea mai tare comunitate
                    </ContentTitle>
                </ContentCard>
                <ContentCard>
                    <ContentTitle>
                        <DirectionsCarIcon /> Mașina sub 1500EUR*
                    </ContentTitle>
                </ContentCard>
                <ContentCard>
                    <ContentTitle>
                        <GradeIcon /> Premii pentru cele mai tari echipaje
                    </ContentTitle>
                </ContentCard>
                <ContentCard>
                    <ContentTitle>
                        <CalendarMonthIcon /> 9-15 August 2025
                    </ContentTitle>
                </ContentCard>
            </ContentContainer>
        </AboutUsContainer>
    );
}

export default AboutUs;