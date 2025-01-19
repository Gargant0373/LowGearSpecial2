import styled from 'styled-components';

interface TicketProps {
    color1: string;
    color2: string;
    price: number;
    priceDiscounted: number;
    title: string;
    description: string;
}

const TicketContainer = styled.div<{ color1: string; color2: string }>`
    display: flex;
    justify-content: space-evenly;

    border-radius: 8px;
    overflow: hidden;
    width: 200px;
    height: 250px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    font-family: 'Sofia Sans';
    font-weight: bold;

    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }
`;

const GradientStrip = styled.div<{ color1: string; color2: string }>`
    width: 40px;
    background: linear-gradient(to bottom, ${props => props.color1}, ${props => props.color2});
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    padding: 16px;
    background-color: #fff;
    width: 150px;
`;

const Title = styled.h2`
    font-size: 25px;
    font-weight: 800;
    margin: 0 0 8px;
    text-transform: uppercase;
`;

const Description = styled.p`
    font-size: 1rem;
    color: #555;
    margin: 0 0 16px;
`;

const PriceContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
`;

const Price = styled.p`
    font-size: 30px;
    margin: 0;
`;

const PriceDiscounted = styled.p`
    font-size: 20px;
    color: var(--strong-red);
    text-decoration: line-through;
    margin: 0 0;
`;

function Ticket({ color1, color2, price, priceDiscounted, title, description }: TicketProps) {
    return (
        <TicketContainer color1={color1} color2={color2}>
            <GradientStrip color1={color1} color2={color2} />
            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <PriceContainer>
                    {priceDiscounted && <PriceDiscounted>${priceDiscounted}</PriceDiscounted>}
                    <Price>${price}</Price>
                </PriceContainer>
            </Content>
        </TicketContainer>
    );
}

export default Ticket;
