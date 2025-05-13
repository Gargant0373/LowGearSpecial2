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
    font-size: 30px;
    margin-left: 5%;
  }
  @media (max-width: 480px) {
    font-size: 24px;
    margin-left: 0;
  }
`;

const QuestionArrow = styled.span`
  margin-right: 10px;
  font-size: 20px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 18px;
    margin-right: 8px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
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

const QuestionContent = styled.div`
  width: 40%;
  padding: 20px;
  font-size: 25px;
  text-align: justify;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    width: 100%;
    font-size: 20px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
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
      LowGear e aventura care te duce la mama dracului, dar, surpriză, descoperi că e al naibii de frumos pe-acolo! Provocarea? Să ajungi în toate colțurile ăstea cu o mașină de până în 1500€. Da, ai citit bine – o rablă simpatică și curajoasă.<br /><br />
      La final, garantăm o singură întrebare pe buzele tale: „Cum ne-a dus bucata asta de fier și n-a cedat pe drum?!”. Ziua o petrecem explorând locuri atipice, făcând ture nebune, iar seara? Ne strângem la povești, râdem, mâncăm și dormim la cort sub un cer plin de stele.<br /><br />
      Iar la finish, ce crezi? Petrecem pe malul mării, votăm cele mai șmechere 3 echipaje și le premiem cu trofee, premii și o tonă de aplauze!
      `,
    pictures: [
      "./images/sliders/start.jpg"
    ]
  },
  {
    question: "Despre traseu",
    answer:
      `
      Traseul nostru are de toate pentru toți: un pic de offroad ca să-ți pui adrenalina la treabă, drumuri panoramice de vis, monumente care îți fac ochii mari și locuri abandonate care-ți stârnesc curiozitatea. Nu te grăbim, fiecare merge în ritmul lui, iar dacă ai chef să descoperi și mai multe, te așteaptă locații bonus – doar bune de explorat!<br /><br />
      Când vine noaptea, ai două opțiuni: camping organizat, cu vibe de tabără, sau campat în spațiu public, pentru cei care vor să fie mai aventuroși. Alegerea e a ta, dar un lucru e sigur: distracția e garantată până în seara!
      `,
    pictures: [
      "./images/sliders/route/1.jpg",
      "./images/sliders/route/2.jpg",
      "./images/sliders/route/3.jpg",
      "./images/sliders/route/4.jpg",
      "./images/sliders/route/5.jpg",
      "./images/sliders/route/6.jpg",
      "./images/sliders/route/7.jpeg",
      "./images/sliders/route/8.jpg",
      "./images/sliders/route/9.jpg",
    ]
  },
  {
    question: "Despre Mașină",
    answer:
      `
      Mașina ta nu trebuie să fie ceva WOW – trebuie să coste până în 1500€. Cu cât te stresezi mai puțin ca o lovesti, cu atât distracția e mai mare! Pregătește-o pentru orice nebunie: adaugă-i chestii pentru offroad, personalizeaz-o și, cel mai important este să fie a ta.<br /><br />
      Pune-i stickere trăznite, vopsește-o ca pe un curcubeu sau fă-i orice îți trece prin cap (cât timp e legal). Iar dacă te ține curajul, hai direct cu mașina personală – să vedem cât de departe ajunge! 🚗🎨
      `,
    pictures: [
      "./images/sliders/cars/1.jpg",
      "./images/sliders/cars/2.jpg",
      "./images/sliders/cars/3.jpg",
      "./images/sliders/cars/4.jpg",
      "./images/sliders/cars/5.jpg",
      "./images/sliders/cars/6.jpg",
      "./images/sliders/cars/7.jpg"
    ]
  },
  {
    question: "Despre costuri",
    answer:
      `
      Cine zice că lucrurile frumoase trebuie să fie scumpe? Aventura asta se poate încadra în orice buget, dacă ești un pic creativ! Pe lângă costul de înscriere și combustibilul pentru 2000 de kilometri, poți face magie: mănânci smart de la supermarket și campezi pe gratis în spațiul public.<br /><br />
      Fun fact: anul trecut, o echipă a reușit să cumpere mașina, să termine expediția și să nu depășească 1000€. Deci, dacă ei au putut, tu ce scuză mai ai? 🚗💸
      *Prețul "Early Bird" este până pe data de 25 mai.
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
                <QuestionContent dangerouslySetInnerHTML={{ __html: q.answer }} style={{ width: !q.pictures ? '100%' : '40%' }} />
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
