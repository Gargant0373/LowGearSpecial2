import styled, { keyframes } from "styled-components";
import { scrollToElement } from "../utils";

const HeroContainer = styled.div`
  position: relative;
`;

const imageScroll = keyframes`
  100% {
    background-position-x: 5042px;
  }
`;

const HeroBackgroundWrapper = styled.div`
  height: 500px;
  background: url('./images/LOW.GEAR.png') center repeat;
  background-size: cover;
  animation: ${imageScroll} 7s linear infinite;
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const HeroAbsoluteWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 500px;
  overflow: hidden;
  font-family: "Bungee", sans-serif;
  font-weight: 400;
  font-size: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  line-height: 1;
  @media (max-width: 768px) {
    height: 300px;
    font-size: 60px;
  }
  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const HeroButton = styled.button`
  background-color: var(--strong-yellow);
  border: 0;
  padding: 10px 20px;
  font-family: "Bungee", sans-serif;
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
  &:hover {
    background-color: var(--strong-yellow-hover);
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const Image = styled.img`
  width: 250px;
  height: auto;
  @media (max-width: 768px) {
    width: 100px;
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroBackgroundWrapper>
        <HeroAbsoluteWrapper>
          <Column>
            <Row>
              <Image src="./images/G.png" />
              <Column>
                BALKAN<br />
                SPECIAL<br />
              </Column>
            </Row>
            <HeroButton onClick={() => scrollToElement("tickets")}>GET TICKETS</HeroButton>
          </Column>
        </HeroAbsoluteWrapper>
      </HeroBackgroundWrapper>
    </HeroContainer>
  );
}

export default Hero;
