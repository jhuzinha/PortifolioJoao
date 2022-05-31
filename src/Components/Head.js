import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Head() {
    return (
        <>
            <Header>
                <h1> JV </h1>
                <Navigation >
                    <Link to={"/"}  style={{ textDecoration: 'none' }}> <h3> Início </h3> </Link>
                    <Link to={"/noticias"}  style={{ textDecoration: 'none' }}> <h3> Notícias </h3> </Link>
                    <Link to={"/sobre"}  style={{ textDecoration: 'none' }}> <h3> Sobre </h3> </Link>
                </Navigation>

            </Header>
        </>
    )

}


const Header = styled.header`
    width: 100%;
    height: 59px;
    background-color: #FCE04D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content:  space-between;
    align-items: center;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    h1{
        font-family: 'Josefin Slab', serif;
        font-size:  20px;
    }
`

const Navigation = styled.div`
    display: flex;
    h3 {
        margin: 10px;
        font-weight: 700;
        color: black;
        cursor: pointer; 
    }
    h3:hover {
        color: #CDC3C3;
    }
`