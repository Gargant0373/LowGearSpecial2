import { useState } from "react";
import styled from "styled-components";
import { useModal } from "../hooks/useModal";
import { Modal } from "../components/Modal";
import Slider from "react-slick";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Socials from "../components/Socials";

const QuestionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 50px 0;
  gap: 20px;
  @media (max-width: 768px) {
    margin: 30px 0;
    gap: 15px;
  }
  @media (max-width: 480px) {
    margin: 20px 0;
    gap: 10px;
  }
`;

const Question = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    background-color: #ff0000;
    color: white;
  }
`;

const QuestionBar = styled.div`
  font-size: 40px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  margin-left: 10%;
  @media (max-width: 768px) {
    font-size: 36px;
    margin-left: 5%;
  }
  @media (max-width: 480px) {
    font-size: 28px;
    margin-left: 0;
  }
`;

const QuestionArrow = styled.span`
  margin-right: 10px;
  font-size: 20px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 24px;
    margin-right: 8px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
    margin-right: 5px;
  }
`;

const QuestionContainer = styled.div<{ flexDirection?: string }>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  align-items: center;
  margin: 0 auto;
  width: 90%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 95%;
  }
`

const QuestionContent = styled.div<{ hasPictures?: boolean }>`
  width: ${({ hasPictures }) => (hasPictures ? '40%' : '100%')};
  padding: 20px;
  font-size: 25px;
  text-align: justify;
  
  @media (max-width: 768px) {
    width: 100%;
    font-size: 24px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    padding: 10px;
  }
`;

const StyledSlider = styled(Slider)`
  display: block;
  position: relative;
`;

const StyledSliderImage = styled.img`
  width: 100%;
  display: inherit;
  margin: 0 auto;
`

const StyledSliderDiv = styled.div`
  width: 40%;
  height: auto;

  margin: 0 auto;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const StyledSingleImage = styled.img`
  width: 100%;
`

const questions = [
  {
    question: "Despre eveniment",
    answer:
      `
      LowGear e aventura care te duce la mama dracului, dar, surpriză, descoperi că e al naibii de frumos pe-acolo! Provocarea? Să ajungi în toate colțurile ăstea cu o mașină de până în 1500€. La final, garantăm o singură întrebare pe buzele tale: „Cum ne-a adus rabla asta până aici?!”. 
      <br /><br />Dacă ești fan 2 roti, provocarea se schimbă , tu, motociclistul trebuie să reziști traseului. Dar nu îți fie teamă fiindcă ai prieteni în masini care sunt gata să îți care bagajele. 
      <br /><br />Ziua o petrecem explorând locuri atipice, făcând ture nebune, iar seara? Ne strângem la povești, râdem, mâncăm și dormim la cort .
      `,
    pictures: [
      "./images/event/EVENT1.jpg",
      "./images/event/EVENT2.jpeg",
    ]
  },
  {
    question: "Despre traseu",
    answer:
      `
      Traseul nostru are de toate pentru toți: un pic de offroad ca să-ți pui adrenalina la treabă, drumuri panoramice de vis, monumente care îți fac ochii mari și locuri abandonate care-ți stârnesc curiozitatea. Nu te grăbim, fiecare merge în ritmul lui, iar dacă ai chef să descoperi și mai multe, te așteaptă locații bonus – doar bune de explorat!

      <br /><br />Toate obiectivele sunt la un click distanta pe roadbook-ul nostru digital. Cu el îți alegi în fiecare zi traseul. Dacă vrei off-road mai greu, alege traseele roșii iar dacă nu ești pregătit să împingi mașina, alege trasee galbene sau verzi. 
      `,
    pictures: [
      "./images/traseu/TRASEU1.jpeg",
      "./images/traseu/TRASEU2.jpeg",
      "./images/traseu/TRASEU3.jpeg",
      "./images/traseu/TRASEU4.jpeg",
      "./images/traseu/TRASEU5.jpeg",
      "./images/traseu/TRASEU6.jpeg",
      "./images/traseu/TRASEU7.jpeg",
      "./images/traseu/TRASEU8.jpeg",
    ]
  },
  {
    question: "Despre Mașină",
    answer:
      `
      Nu trebuie să ai un 4x4 ca să urci în varf de munte, doar o masină de până în 1500€ și un pic de “nesimțire”. Cu cât te stresezi mai puțin că o lovesti, cu atât distracția e mai mare și urci mai sus! Pregătește-o cum crezi tu mai bine: adaugă-i chestii pentru off-road, personalizeaz-o și, cel mai important este să fie a ta. Orice atâta timp cât este legal.
      <br /><br />Ai deja un 4x4 și vrei o aventură? Hai direct cu el și dă curaj rablelor să urce pe urmele tale! Ai fi surprins cât de capabil poate să fie un 2x4.
      `,
    pictures: [
      "./images/masina/MASINA1.jpeg",
      "./images/masina/MASINA2.jpeg",
      "./images/masina/MASINA3.jpeg",
      "./images/masina/MASINA4.jpeg",
      "./images/masina/MASINA5.jpeg",
      "./images/masina/MASINA6.jpg",
      "./images/masina/MASINA7.jpg",
      "./images/masina/MASINA8.jpg",
      "./images/masina/MASINA9.jpg",
      "./images/masina/MASINA10.jpg",
      "./images/masina/MASINA11.jpg",
      "./images/masina/MASINA12.jpg",
    ]
  },
  {
    question: "Despre moto",
    answer: `
    Experiența LowGear pe motocicletă e ca un mini „Dakar” pentru riderii începători și intermediari în off-road, unde fiecare zi devine o provocare autentică de anduranță. Motocicliștii și echipajele auto se sprijină constant, fie la treceri dificile, fie la căratul bagajelor sau ajutorul din camping. În multe situații, mașinile devin sprijinul logistic perfect, permițându-ți să te bucuri de traseu fără greutăți inutile.
    <br /><br />Legi prietenii noi, împărtășești momente intense și descoperi cât de mult poate conta o echipă bine sudată în mijlocul munților. Iar la finish, satisfacția e imensă: ai dus la capăt un mini Dakar de aproape <b>2000 km</b>, o realizare care rămâne cu tine mult timp după ce aventura s-a încheiat.
    `,
    pictures: [
      "./images/moto/MOTO1.jpeg",
      "./images/moto/MOTO2.jpeg",
      "./images/moto/MOTO3.jpeg",
      "./images/moto/MOTO4.jpeg",
      "./images/moto/MOTO5.jpeg",
    ]
  },
  {
    question: "Despre campat",
    answer:
      `
      Campingul face parte din aventură, cu nopți în locații spectaculoase, fie în campinguri organizate, fie în zone publice de campare gratuite, toate marcate în roadbook. Ești în mijlocul naturii, printre prieteni noi și vechi, iar fiecare seară are farmecul ei după o zi lungă pe traseu. Ți-ai dori ca serile să țină până dimineața, să stai la povești și la grătar, dar realitatea te lovește repede: ziua de mâine vine cu o nouă provocare. Totuși, tocmai acest ritm — aventură, odihnă, comunitate — face experiența atât de specială. Spiritul de echipă și atmosfera de tabără transformă fiecare oprire într-un moment memorabil.
      <br /><br />La start poți campa încă din noaptea de dinainte, ca să intri în atmosferă și să întâlnești echipajele. Iar la finish, ne strângem cu toții la o petrecere ca lumea, unde apuci să stai la povești cu toată lumea pe care ai întâlnit-o de-a lungul celor 7 zile de aventură.
      `
  },
  {
    question: "Despre costuri",
    answer:
      `
      Pentru a vă ajuta să vă organizați bugetul pentru aventură, mai jos găsiți câteva estimări orientative. Acesta trebuie gândit pentru aproximativ 7 zile și circa 2000 km parcurși.
      <br /><br />Desigur, fiecare își ajustează cheltuielile în funcție de stil, nevoi și preferințe personale.
      <br /><br />🍽 Mâncare:
      <br />30–100 lei/zi/persoană
      <br />(depinde dacă gătiți, mâncați la supermarket sau la restaurant)
      <br /><br />⛽ Carburant:
      <br />6–10 L / 100 km
      <br />(consum estimat pentru traseu mixt – asfalt + offroad)
      <br /><br />🏕 Cazări:
      <br />0–100 lei/noapte/persoană
      <br />(majoritatea nopților se vor dormi în camping sau în spatiul public, iar unele pot necesita cazare opțională). 

      <br /><br />Fun fact: în 2024, o echipă a reușit să cumpere mașina, să termine expediția și să nu depășească 1000€. Deci, dacă ei au putut, tu ce scuză mai ai? 

      `
  },
  {
    question: "Contactează-ne!",
    answer:
      `
      <p style="text-align: left; margin: 0;">
      Ai întrebări sau nelămuriri și vrei răspunsuri rapide?<br /><br />
      Sună-ne și te vom ajuta cu plăcere!<br />
      📞 <b>Paul Lambrino</b>: +40756198711<br />
      📞 <b>Ștef Raita</b>: +40752422685 <br />
      📧 <b>Email:</b> lowgearspecial@gmail.com <br /><br />
      Dacă nu te grăbești, ne poți scrie și pe social media:<br />
      </p>
      `,
    flex: 'column',
    hasSocials: true
  },
  {
    question: "Mai multe Informații",
    answer: ""
  }
];

const moreInfoModal = `
  Descarca <a href="./docs/roadbook.pdf" target="_blank">aici</a> documentul cu mai multe informatii despre eveniment.
`

function Questions() {
  const [openIndex, setOpenIndex] = useState(null);
  const { isOpen, modalTitle, modalContent, openModal, closeModal } = useModal();

  const toggleContent = (index: any) => {
    if (index === questions.length - 1) {
      openModal("Mai multe informatii", moreInfoModal);
    } else {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <>
      <QuestionsContainer>
        {questions.map((q, i) => (
          <Question key={i}>
            <QuestionBar onClick={() => toggleContent(i)}>
              <QuestionArrow>{openIndex === i && i !== questions.length - 1 ? <ChevronRightIcon /> : <ExpandMoreIcon />}</QuestionArrow>
              {q.question}
            </QuestionBar>
            {openIndex === i && i !== questions.length - 1 && (
              // @ts-ignore
              <QuestionContainer flexDirection={q.flex}>
                <QuestionContent dangerouslySetInnerHTML={{ __html: q.answer }} hasPictures={!!q.pictures} />
                {/* @ts-ignore */}
                {q.hasSocials && <Socials color="inherit" hoverColor="white" justifyContent="inherit" />}
                {q.pictures && q.pictures.length > 1 && (
                  <StyledSliderDiv>
                    <StyledSlider {...sliderSettings}>
                      {q.pictures && q.pictures.map((pic, index) => (
                        <div>
                          <StyledSliderImage src={pic} alt={`Slide ${index + 1}`} />
                        </div>
                      ))}
                    </StyledSlider>
                  </StyledSliderDiv>
                )}
                {q.pictures && q.pictures.length === 1 && (
                  <StyledSliderDiv>
                    <StyledSingleImage src={q.pictures[0]}></StyledSingleImage>
                  </StyledSliderDiv>
                )}
              </QuestionContainer>
            )}
          </Question>
        ))}
      </QuestionsContainer>
      <Modal isOpen={isOpen} title={modalTitle} content={modalContent} onClose={closeModal} />
    </>
  );
}

export default Questions;
