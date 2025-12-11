import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import styled from "styled-components";

const SocialsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    @media (max-width: 600px) {
        gap: 20px;
    }
`;

const Social = styled.a`
    font-size: 40px;
    color: #FFF;
    transition: all 0.2s;

    &:hover {
        color: var(--strong-yellow);
        transform: scale(1.1);
    }

    @media (max-width: 600px) {
        font-size: 30px;
    }
`;

const socials = [
    {
        icon: <FaFacebook />,
        link: "https://www.facebook.com/lowgearspecial/"
    },
    {
        icon: <FaInstagram />,
        link: "https://www.instagram.com/lowgearspecial/"
    },
    {
        icon: <FaTiktok />,
        link: "https://www.tiktok.com/@lowgearspecial"
    },
    {
        icon: <FaYoutube />,
        link: "https://www.youtube.com/@LowGearSpecial"
    }
];

function Socials() {
    return (
        <SocialsContainer>
            {socials.map((social, index) => (
                <Social href={social.link} key={index} target="_blank" rel="noreferrer">
                    {social.icon}
                </Social>
            ))}
        </SocialsContainer>
    );
}

export default Socials;