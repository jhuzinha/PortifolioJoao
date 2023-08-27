import styled from "styled-components";
import perfil from "../Assets/images/perfil.webp"

export default function About() {


    return (
        <>
        
            <Container>
                <figure>
                    <img src={perfil} alt="" />
                
                </figure>
                <div><p>Meu nome é João Vítor, tenho 22 anos, sou jornalista recém-formado. Busco oportunidade no mercado de trabalho. O jornalismo esportivo é a área que mais me atrai. No entanto, treino para ser um "profissional 360". Me comunico bem e acredito ter facilidade para me adaptar em diferentes áreas da profissão. </p>
                    
                <p> Com inglês fluente e outros cursos extra curriculares, estagiei na Linear Clipping, na Fundação Astrojildo Pereira e no Metrópoles.</p></div>

                {/* <p> Clique nos icones para entrar em contato comigo </p> */}

                
            </Container>
        </>
    )
}


const Container = styled.div`
    margin-top: 80px;
    margin-bottom: 60px;
    width: 100%;
    padding: 40px;
    display: flex;
    gap: 2.5rem;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    div {
        width: 60%;
        min-width: 200px;
    }

    p {
        line-height: 20px;
        text-align: justify;
        
    }
    img {
        width: 200px;
        height: 200px;
        border-radius: 350px;
        box-shadow: 2px 2px 2px gray;
        object-fit: cover;
    }

    figure {
        width: 100%;
        border-radius: 350px;
        display: flex;
        align-items: center;
        gap: 2rem;
        justify-content: center;
    }

`