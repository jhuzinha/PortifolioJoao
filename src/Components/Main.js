import styled from "styled-components";
import myCV from '../Assets/images/Curriculo2023.pdf'


export default function Main() {
    return (
        <>
            <Container>
                <ContainerApresentation>
                    <div>
                        <h1> Joao Vitor Costa Reis </h1>
                        <p> JORNALISTA </p>
                    </div>
                    <DownloadCV />
                </ContainerApresentation>
                <ContainerMaterias>    
                    <Materias />
                </ContainerMaterias>
            </Container>
        </>
    )
}


function Materias() {
    const materiasData = [
        {
            url: 'https://www.metropoles.com/esportes/liga-europa-final-tem-disputa-entre-roma-de-mourinho-e-sevilla',
            title: "Liga Europa: final tem disputa entre Roma de Mourinho e Sevilla",
            image: "https://uploads.metropoles.com/wp-content/uploads/2023/05/31090347/GettyImages-1494803210-600x400.jpg"
        },
        {
            image: 'https://uploads.metropoles.com/wp-content/uploads/2021/12/13101321/Taca-da-Liga-Europa-600x400.jpg',
            title: 'Leverkusen x Roma pela Europa League: alemães não vencem há 4 jogos',
            url: "https://www.metropoles.com/esportes/leverkusen-x-roma-pela-europa-league-alemaes-nao-vencem-ha-4-jogos"
        },
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


function DownloadCV() {
    return (
        <>  
            <ButtonDownloadCV>
                <a href={myCV} download="CurriculoJoaoVitorCostaReis.pdf"> Download CV </a>
            </ButtonDownloadCV>
        </>
    )
}

const ContainerApresentation = styled.div`
    display: flex;
    flex-direction: column;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--subtitle);  
        margin-bottom: 20px;
    }
`;

const ButtonDownloadCV = styled.div`
    border-radius: 5px;
    background-color: #9e90bd;
    display: flex;
    justify-content: flex-end;
    max-width: 200px;
    width: 200px;
    padding: 5px;
    text-align: center;
`;

const Container = styled.div`
    margin-top: 80px;
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
        color: var(--color_black_text);
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    /* p {
        color: var(--subtitle);  
        margin-bottom: 100px;
    } */
/* 
    div {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 90%;
        max-width: 1100px;

    } */

`

const SubMaterias = styled.figure`
    padding: 20px;
    width: 300px;
    min-height: 170px;
    height: auto;
    padding: 20px;
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
        color: var(--color_black_text);
        text-align: center;
    }
    
    img {
        object-fit: cover;
        width: 50%;
        border-radius: 6px;
        

    }
`
const Borda = styled.div`
    border: 1.02835px solid #090909;
    border-radius: 13.7114px;
    width: 50%;
    margin: 10px;
`

const ContainerMaterias = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
`;