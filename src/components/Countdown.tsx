import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

const CountdownContainer = styled.div`
    position: relative;
    width: auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
        width: 95%;
        padding: 15px 10px;
    }
`;

const GradientStrip = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: linear-gradient(270deg, #ff0000, #eeff00, #00ff00, #00aaff, #0000ff, #aa00ff, #ff0000);
    background-size: 400% 400%;
    animation: ${gradientAnimation} 20s ease infinite;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 100%;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 15px;
    }
`;

const Label = styled.h3`
    font-family: "Bungee", sans-serif;
    font-size: 24px;
    margin: 0;
    color: #333;
    text-transform: uppercase;
    
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const SubLabel = styled.p`
    font-family: "Sofia Sans", sans-serif;
    font-size: 14px;
    color: #fff;
    margin: 10px 0 0 0;
    font-weight: bold;
    text-align: center;
`;

const OuterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media (max-width: 768px) {
        padding: 0 10px;
        width: 80%;
    }
`;

const TimerDisplay = styled.div`
    display: flex;
    gap: 30px;
    font-family: "Bungee", sans-serif;
    color: #333;
    
    @media (max-width: 768px) {
        gap: 20px;
    }
`;

const TimeSegment = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Number = styled.span`
    font-size: 36px;
    line-height: 1;
    
    @media (max-width: 768px) {
        font-size: 30px;
    }
`;

const Unit = styled.span`
    font-family: "Sofia Sans", sans-serif;
    font-size: 12px;
    color: #666;
    text-transform: uppercase;
    margin-top: 5px;
`;

interface CountdownProps {
  deadline: string;
  tierName: string;
}

export default function Countdown({ deadline, tierName }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number} | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(deadline) - +new Date();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60)
        };
      }
      return null;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000);

    return () => clearInterval(timer);
  }, [deadline]);

  if (!timeLeft) return null;

  return (
    <OuterContainer>
      <CountdownContainer>
        <GradientStrip />
        <ContentWrapper>
          <Label>{tierName}*</Label>
          <TimerDisplay>
            <TimeSegment>
              <Number>{timeLeft.days}</Number>
              <Unit>Zile</Unit>
            </TimeSegment>
            <TimeSegment>
              <Number>{timeLeft.hours}</Number>
              <Unit>Ore</Unit>
            </TimeSegment>
            <TimeSegment>
              <Number>{timeLeft.minutes}</Number>
              <Unit>Minute</Unit>
            </TimeSegment>
          </TimerDisplay>
        </ContentWrapper>
      </CountdownContainer>
      <SubLabel>* 25 bilete la prețul acesta</SubLabel>
    </OuterContainer>
  );
}
