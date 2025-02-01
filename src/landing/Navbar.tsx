import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FF0000;
  padding: 10px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 20px;
  }
`;

const Navitem = styled.span`
  color: #FFF;
  font-size: 20px;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const Smol = styled.span`
  color: #000;
  font-size: 12px;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

const Date = styled.span`
  color: #FFF;
  font-size: 20px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Navitem>LOWGEAR <Smol>20→30 August 2025</Smol></Navitem>
      <Date>IF IN DOUBT, FLAT OUT!</Date>
    </NavbarContainer>
  );
}

export default Navbar;
