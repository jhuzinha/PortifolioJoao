import { Link } from "react-router-dom";
import styled from "styled-components";
import image1 from "../Assets/images/image1.png"
import image2 from "../Assets/images/image2.png"
import image3 from "../Assets/images/image3.png"
import {BsNewspaper} from 'react-icons/bs';


export default function Main() {
    return (
        <>
            <Container>
                <h1> Joao Vitor Costa Reis </h1>
                <p> Estudande de jornalismo </p>
                <div>
                    <Materias />
                </div>
            </Container>


        </>
    )
}


function Materias() {
    const materiasData = [
        {
            image: image2,
            title: "Primeiro filme dirigido por negra, Amor Maldito aborda homossexualidade",
            url: "https://www.fundacaoastrojildo.org.br/primeiro-filme-dirigido-por-negra-no-brasil-amor-maldito-aborda-homossexualidade/"
        },
        {
            image: image1,
            title: '“Sofri agressões físicas em batalhas de rap por parte de MCs transfóbicos”',
            url: "https://www.fundacaoastrojildo.org.br/sofri-agressoes-fisicas-em-batalhas-de-rap-por-parte-de-mcs-transfobicos/"
        },
        {
            image: image3,
            title: "Filme Homem do Pau Brasil aborda “sexo com leveza”, diz cineasta",
            url: "https://www.fundacaoastrojildo.org.br/filme-homem-do-pau-brasil-aborda-sexo-com-leveza-diz-cineasta/"
        }

    ];


    function NovaAba(url) {
        window.open(url)
    }

    return (
        <>

            {materiasData.map((materias, index) => {
                return (
                    <a onClick={() => NovaAba(materias.url)} key={index}>
                        <SubMaterias>
                            <img src={materias.image} alt="" />
                            <h6> {materias.title} </h6>
                        </SubMaterias>
                    </a>
                )
            })}

        </>


    )
}

const Container = styled.div`
    margin-top: 120px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height: auto;
    padding: 10px;
    h1 {
        margin: 100px 0 20px 0;
        text-align: center;
        font-weight: 700;
        font-size: 66px;
        color: var(--header_color_text);
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    p {
        color: var(--subtitle);  
        margin-bottom: 100px;
    }

    div {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 90%;
        max-width: 1100px;

    }

`

const SubMaterias = styled.figure`
    padding: 20px;
    width: 254px;
    height: auto;
    background: var(--button);
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    box-shadow: 3px 3px 3px 3px grey;
    
    &&:hover {
    transform: scale(1.1);
    transition: all 0.5s;
    } 

    h6 {
        color: var(--header_color_text);
        text-align: center;
    }
    
    img {
        margin-bottom: 10px;
    }
`
const Borda = styled.div`
    border: 1.02835px solid #090909;
    border-radius: 13.7114px;
    width: 50%;
    margin: 10px;
`