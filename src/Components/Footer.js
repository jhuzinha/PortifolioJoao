import styled from "styled-components"
import { BsLinkedin } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'

export default function Footer() {
    return (
        <>
        <Container>
        <Borda></Borda>
        <ul>
            <li> <BsLinkedin color="black" /> </li>
            <li> BLOG </li>
            <li> <BsWhatsapp color="black" /> </li>
        </ul>
        <Borda></Borda>
        </Container>
        </>

    )

}


const Borda = styled.div`
    border: 1.02835px solid #C0B3B3;
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
    ul {
        width: 50%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 15px;
        
    }
`