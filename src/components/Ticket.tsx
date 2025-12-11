import styled, { keyframes } from 'styled-components';

interface TicketProps {
    color1: string;
    color2: string;
    price: number;
    fullPrice?: number;
    title: string;
    description: string;
    tierName?: string;
}

const gradientAnimation = keyframes`
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
`;

const TicketContainer = styled.div<{ color1: string; color2: string }>`
    display: flex;
    justify-content: space-evenly;
    border-radius: 8px;
    overflow: hidden;
    width: 220px;
    height: 320px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-family: 'Sofia Sans';
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }
    
    @media (max-width: 768px) {
        width: 90%;
        min-height: 120px;
        height: auto;
        flex-direction: row;
    }
`;

const GradientStrip = styled.div<{ color1: string; color2: string }>`
    width: 40px;
    background: linear-gradient(to bottom, ${props => props.color1}, ${props => props.color2});
    background-size: 200% 200%;
    animation: ${gradientAnimation} 5s linear infinite;
    
    @media (max-width: 768px) {
        width: 20px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    background-color: #fff;
    width: 100%;
    
    @media (max-width: 768px) {
        flex-direction: row;
        align-items: center;
        padding: 10px;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    
    @media (max-width: 768px) {
        justify-content: center;
        width: 60%;
    }
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: 800;
    margin: 0 0 8px;
    text-transform: uppercase;
    
    @media (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 4px;
    }
`;

const Description = styled.p`
    font-size: 0.9rem;
    color: #555;
    margin: 0 0 16px;
    line-height: 1.2;
    
    @media (max-width: 768px) {
        font-size: 0.8rem;
        margin: 0 0 8px 0;
        display: block;
    }
`;

const PriceContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    
    @media (max-width: 768px) {
        align-items: flex-end;
        justify-content: center;
        width: 40%;
    }
`;

const PriceRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

const Price = styled.p`
    font-size: 32px;
    margin: 0;
    color: var(--strong-blue);
    
    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

const FullPrice = styled.p`
    font-size: 18px;
    color: var(--strong-red);
    text-decoration: line-through;
    margin: 0;
    
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const TierName = styled.span`
    font-size: 14px;
    color: var(--strong-green);
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 4px;
    
    @media (max-width: 768px) {
        font-size: 12px;
        text-align: right;
    }
`;

function Ticket({ color1, color2, price, fullPrice, title, description, tierName }: TicketProps) {
    return (
        <TicketContainer color1={color1} color2={color2}>
            <GradientStrip color1={color1} color2={color2} />
            <Content>
                <InfoContainer>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </InfoContainer>
                <PriceContainer>
                    {tierName && <TierName>{tierName}</TierName>}
                    <PriceRow>
                        {fullPrice && fullPrice > price && (
                            <FullPrice>€{fullPrice}</FullPrice>
                        )}
                        <Price>€{price}</Price>
                    </PriceRow>
                </PriceContainer>
            </Content>
        </TicketContainer>
    );
}

export default Ticket;
