import styled from "styled-components";
import { Title } from "../components/MISC";
import Map from "../components/Map";

const RouteContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    gap: 20px;
    padding: 0 20px;
    margin: 50px 0;
`;

function Route() {
    return (
        <RouteContainer>
            <Title>Ruta</Title>
            <Map />
        </RouteContainer>
    )
}

export default Route;