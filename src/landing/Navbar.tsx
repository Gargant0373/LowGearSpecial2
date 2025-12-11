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
  font-size: 28px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    font-size: 40px;
    flex-direction: row;
    gap: 5px;
  }
`;

const Smol = styled.span`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 22px;
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
      <Navitem>LOWGEAR <Smol>8→14 August 2025</Smol></Navitem>
      <Date>IF IN DOUBT, FLAT OUT!</Date>
    </NavbarContainer>
  );
}

export default Navbar;
