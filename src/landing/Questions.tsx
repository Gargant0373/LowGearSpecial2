import { useState } from "react";
import styled from "styled-components";
import { useModal } from "../hooks/useModal";
import { Modal } from "../components/Modal";
import Slider from "react-slick";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  display: flex;
  justify-content: center;
  align-items: center;
  
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
      <br />Dacă ești fan 2 roti, provocarea se schimba , tu, motociclistul trebuie sa rezisti traseului. Dar nu iti fie teama fiindcă ai prieteni in masini care sunt gata sa iti care bagajele. 
      <br />Ziua o petrecem explorând locuri atipice, făcând ture nebune, iar seara? Ne strângem la povești, râdem, mâncăm și dormim la cort .
      `,
    pictures: [
      "./images/start.jpg"
    ]
  },
  {
    question: "Despre traseu",
    answer:
      `
      Toate obiectivele sunt la un click distanta pe roadbook-ul nostru digital. Cu el iti alegi in fiecare zi traseul. Daca vrei offroad mai greu, alege traseele rosii iar daca nu esti pregatit sa împingi masina, alege trasee galbene sau verzi.
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
      Ai deja un 4x4 si vrei o aventura? Hai direct cu el si da curaj rablelor sa urce pe urmele tale! Ai fi surprins cat de capabil poate sa fie un 2x4. 
      `,
    pictures: [
      "./images/masina/MASINA1.jpeg",
      "./images/masina/MASINA2.jpeg",
      "./images/masina/MASINA3.jpeg",
      "./images/masina/MASINA4.jpeg",
      "./images/masina/MASINA5.jpeg",
    ]
  },
  {
    question: "Despre moto",
    answer: `
    Experiența LowGear pe motocicletă e ca un mini „Dakar” pentru riderii începători și intermediari, unde traseul devine o provocare reală de anduranță. Motocicliștii și echipajele auto se ajută reciproc, de la porțiuni dificile până la căratul bagajelor și sprijin în camping. Iar la finish vei simți adevărata satisfacție: ai dus la capăt un mini Dakar de aproape 2000 km. 
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
      Campingul face parte din aventură, cu nopți în locații spectaculoase, fie în campinguri organizate, fie în zone publice de campare gratuite, toate marcate în roadbook. Ți-ai dori ca serile să țină până dimineața, să stai la povești și la grătar, dar realitatea te lovește: ziua de mâine te așteaptă cu o nouă aventură. Spiritul de echipă și comunitatea fac experiența cu adevărat memorabilă.	
      `
  },
  {
    question: "Despre costuri",
    answer:
      `
      Pentru a vă ajuta să vă organizați bugetul pentru aventură, mai jos găsiți câteva estimări orientative. Acesta trebuie gândit pentru aproximativ 7 zile și circa 2000 km parcurși.
      <br />Desigur, fiecare își ajustează cheltuielile în funcție de stil, nevoi și preferințe personale.
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
      📞 <b>Ștef Raita</b>: +40752422685 <br /><br />

      Dacă nu te grăbești, ne poți scrie și pe email:<br />
      ✉️ lowgearspecial@gmail.com
      </p>
      `,
    flex: 'column'
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
              <QuestionContainer>
                <QuestionContent dangerouslySetInnerHTML={{ __html: q.answer }} hasPictures={!!q.pictures} />
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
