import styled from "styled-components";

export const Title = styled.h1.attrs(props => ({
    style: props.style,
}))`
    font-size: 50px;
    font-weight: 700;
    margin: 0px;
    letter-spacing: 0px;

    @media (max-width: 768px) {
        font-size: 30px;
    }
`;

export const Subtitle = styled.h2.attrs(props => ({
    style: props.style,
}))`
    font-size: 30px;
    font-weight: 400;
    margin: 0px;
    letter-spacing: 0px;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;