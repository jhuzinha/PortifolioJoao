import styled from "styled-components"
import { BsLinkedin } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
        <Container>
        <Borda></Borda>
        <ul>
           <li> <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-costa-reis/" target="__blank"><BsLinkedin color="black" /></a></li>
            <li> BLOG </li>
            <li><a href="https://wa.me/5506181170298?text="
    target="_blank"><BsWhatsapp color="black" /></a>  </li>
        </ul>
        <Borda></Borda>
        </Container>
        </>

    )

}


const Borda = styled.div`
    border: 0.1rem solid #090909;
    border-radius: 13.7114px;
    width: 50%;
    margin: 10px;
    

`

const Container = styled.div ` 
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction:  column;
    position: relative;
    bottom: 0;
    ul {
        width: 50%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 20px;
        li :hover {
            color: gray;
        }
    }
`