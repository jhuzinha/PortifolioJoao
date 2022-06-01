import styled from "styled-components";
import perfil from "../Assets/images/perfil.jpeg"

export default function About() {


    return (
        <>
        
            <Container>
                <figure>
                    <img src={perfil} alt="" />
                
                </figure>
                <div><p>Cursando jornalismo aos 21 anos, eu sou João Vítor e busco oportunidade no mercado de trabalho. O jornalismo esportivo é a área que mais me atrai. No entanto, treino para ser um "profissional 360". Me comunico bem e acredito ter facilidade para me adaptar em diferentes áreas da profissão. </p>
                    
                <p> Com inglês fluente e outros cursos extra curriculares, estagiei na Linear Clipping e na Fundação Astrojildo Pereira.</p></div>

                <p> Clique nos icones para entrar em contato comigo </p>

                
            </Container>
        </>
    )
}


const Container = styled.div`
    margin-top: 80px;
    margin-bottom: 100px;
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