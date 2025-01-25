import styled from "styled-components";

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #FF0000;
    padding-top: 20px;
`;

const Navitem = styled.span`
    color: #FFF;
    font-size: 30px;
    font-weight: 700;
`;

const Smol = styled.span`
    color: #000;
    font-size: 15px;
    font-weight: 400;
`;

const Date = styled.span`
    color: #FFF;
    font-size: 30px;
    text-transform: uppercase
`;

function Navbar() {

    return (
        <NavbarContainer>
            <Navitem>LOWGEAR <Smol>20→30 August 2025</Smol></Navitem>
            <Date>IF IN DOUBT, FLAT OUT!</Date>
        </NavbarContainer>
    )
}

export default Navbar;