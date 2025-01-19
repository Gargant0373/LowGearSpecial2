import { styled } from "styled-components";

const Input = styled.input`
    padding: 10px;
    border: 1px solid var(--strong-yellow);
    border-radius: 5px 0 0 5px;
    margin-right: 0;
    background-color: transparent;
    outline: none;
    width: 250px;
    font-size: 16px; 
    &:focus {
        border-color: var(--strong-yellow);
    }

    @media (max-width: 600px) {
        width: 150px;
        font-size: 14px;
    }
`;

const Button = styled.button`
    padding: 10px;
    background-color: var(--strong-yellow);
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;

    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;

    &:hover {
        background-color: var(--strong-yellow-hover);
        transition: background-color 0.3s ease;
    }

    @media (max-width: 600px) {
        font-size: 14px;
        padding: 8px;
    }
`;

const Container = styled.div`
    display: flex;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`;

function Newsletter() {
    return (
        <Container>
            <Input type="email" placeholder="your e-mail" />
            <Button>keep me updated</Button>
        </Container>
    );
}

export default Newsletter;