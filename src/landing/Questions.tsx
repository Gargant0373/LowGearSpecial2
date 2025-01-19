import { useState } from "react";
import styled from "styled-components";

const QuestionsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 50px 0;
    gap: 20px;
`;

const Question = styled.div`
    padding: 10px;
    cursor: pointer;

    display: flex;
    flex-direction: column;

    transition: background-color 0.2s, color 0.2s;
    
    &:hover {
        background-color: #FF0000;
        color: white;
    }
`;

const QuestionBar = styled.div`
    font-size: 40px;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    margin-left: 10%;
`;

const QuestionArrow = styled.span`
    margin-right: 10px;
    font-size: 20px;
    font-weight: 700;
`;

const QuestionContent = styled.div`
    width: 80%;
    margin: 5px auto;
    padding: 20px;

    font-size: 25px;
`;

const questions = [
    {
        question: "Despre eveniment",
        answer: "LowGear e un eveniment care te ghideaza sa ajungi la mama dracului unde e surprinzator de frumos. Te incurajam sa ajugi prin toate locurile astea cu o masian de pana in 1500. Scopul nostru este sa te intrebi la finish, “Cum ne-a dus rabala asta pe acolo si a rezistat?”. Ziua conducem si exploram locurile atipice iar seara stam la povesti si dormim la cort. "
    },
    {
        question: "Despre traseu",
        answer: "Traseul este pregatit cu de toate pentru fiecare zi: offroad, drumuri panoramice, monumente si locuri abandonate. Stim ca nu toti au acelasi ritm asa ca daca vrei sa vizitezi mai ai locatii bonus de vazut. Fiecare noapte ai de ales intre camping organizatpe sau spatiu public. Alegerea e a ta dar distractia e asigurata."
    },
    {
        question: "Despre masina",
        answer: "Masina trebuie sa coste pana in 1500e. Cu cat iti pasa mai putin de masina cu atat este mai distractiv. Pregateste-o de neprevazut, fa niste modificari pentru offroad dar cel mai important lucru este sa fie a ta. Pune-i stickere, vopseste-o, fa-i tot ce vrei in limita legii. Daca ai tupeu vii cu masina personala."
    },
    {
        question: "Despre costuri",
        answer: "Multe lucruri frumoase sunt scumpe. Poti face aceasta aventura sa se incadreze in orice buget. Pe langa costul de inscriere si combustibilul pentru 2000 de km, poti alege sa mananci doar la Lidl si sa campezi in spatiul public. Anul trecut o echipa a atins performanta de a cumpara masina si de a termina expeditia cu 1000e."
    }
]

function Questions() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleContent = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <QuestionsContainer>
            {questions.map((q, i) => (
                <Question key={i}>
                    <QuestionBar onClick={() => toggleContent(i)}>
                        <QuestionArrow>{openIndex === i ? '🢃' : '🢂'}</QuestionArrow>{q.question}
                    </QuestionBar>
                    {openIndex === i && <QuestionContent>{q.answer}</QuestionContent>}
                </Question>
            ))}
        </QuestionsContainer>
    );
}

export default Questions;