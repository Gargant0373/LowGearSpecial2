import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    font-family: Arial, sans-serif;
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`;

const Section = styled.div`
    margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
    margin-bottom: 10px;
`;

const Paragraph = styled.p`
    margin-bottom: 10px;
`;

function TOS() {
        return (
                <Container>
                        <Title>Terms of Service</Title>
                        <Section>
                                <SectionTitle>1. Introduction</SectionTitle>
                                <Paragraph>
                                        Welcome to LowGearSpecial. By accessing our website, you agree to be bound by these terms of service.
                                </Paragraph>
                        </Section>
                        <Section>
                                <SectionTitle>2. Intellectual Property Rights</SectionTitle>
                                <Paragraph>
                                        Other than the content you own, under these terms, LowGearSpecial and/or its licensors own all the intellectual property rights and materials contained in this website.
                                </Paragraph>
                        </Section>
                        <Section>
                                <SectionTitle>3. Restrictions</SectionTitle>
                                <Paragraph>
                                        You are specifically restricted from all of the following:
                                </Paragraph>
                                <ul>
                                        <li>Publishing any website material in any other media;</li>
                                        <li>Selling, sublicensing and/or otherwise commercializing any website material;</li>
                                        <li>Publicly performing and/or showing any website material;</li>
                                        <li>Using this website in any way that is or may be damaging to this website;</li>
                                        <li>Using this website in any way that impacts user access to this website;</li>
                                        <li>Using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity;</li>
                                        <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this website;</li>
                                        <li>Using this website to engage in any advertising or marketing.</li>
                                </ul>
                        </Section>
                        <Section>
                                <SectionTitle>4. Your Content</SectionTitle>
                                <Paragraph>
                                        In these terms of service, "Your Content" shall mean any audio, video text, images or other material you choose to display on this website. By displaying Your Content, you grant LowGearSpecial a non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
                                </Paragraph>
                        </Section>
                        <Section>
                                <SectionTitle>5. No warranties</SectionTitle>
                                <Paragraph>
                                        This website is provided "as is," with all faults, and LowGearSpecial express no representations or warranties, of any kind related to this website or the materials contained on this website.
                                </Paragraph>
                        </Section>
                        <Section>
                                <SectionTitle>6. Limitation of liability</SectionTitle>
                                <Paragraph>
                                        In no event shall LowGearSpecial, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. LowGearSpecial, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this website.
                                </Paragraph>
                        </Section>
                        <Section>
                                <SectionTitle>7. Indemnification</SectionTitle>
                                <Paragraph>
                                        You hereby indemnify to the fullest extent LowGearSpecial from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these terms.
                                </Paragraph>
                        </Section>
                        <Section>
                                <SectionTitle>8. Severability</SectionTitle>
                                <Paragraph>
                                        If any provision of these terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
                                </Paragraph>
                        </Section>
                        <Section>
                                <SectionTitle>9. Variation of Terms</SectionTitle>
                                <Paragraph>
                                        LowGearSpecial is permitted to revise these terms at any time as it sees fit, and by using this website you are expected to review these terms on a regular basis.
                                </Paragraph>
                        </Section>
                        <Section>
                                <SectionTitle>10. Assignment</SectionTitle>
                                <Paragraph>
                                        The LowGearSpecial is allowed to assign, transfer, and subcontract its rights and/or obligations under these terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these terms.
                                </Paragraph>
                        </Section>
                        <Section>
                                <SectionTitle>11. Entire Agreement</SectionTitle>
                                <Paragraph>
                                        These terms constitute the entire agreement between LowGearSpecial and you in relation to your use of this website, and supersede all prior agreements and understandings.
                                </Paragraph>
                        </Section>
                        <Section>
                                <SectionTitle>12. Governing Law & Jurisdiction</SectionTitle>
                                <Paragraph>
                                        These terms will be governed by and interpreted in accordance with the laws of the State of [Your State], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your State] for the resolution of any disputes.
                                </Paragraph>
                        </Section>
                </Container>
        );
}

export default TOS;