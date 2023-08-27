import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Head() {
    const [clicked, setClicked] = useState('home');

    function onClickItem(typeItem) {
        setClicked(typeItem);
    }

    return (
        <>
            <Header>
                <h1> JV </h1>
                <Navigation >
                    <Link to={"/"}  style={{ textDecoration: clicked === 'home' ? 'underline' : 'none' }}> <h3 onClick={() => onClickItem('home')}> Início </h3> </Link>
                    <Link to={"/noticias"}  style={{ textDecoration: clicked === 'notice' ? 'underline' : 'none' }}> <h3 onClick={() => onClickItem('notice')}> Notícias </h3> </Link>
                    <Link to={"/sobre"}  style={{ textDecoration: clicked === 'about' ? 'underline' : 'none' }}> <h3 onClick={() => onClickItem('about')}> Sobre </h3> </Link>
                    <Link to={"/videos"}  style={{ textDecoration: clicked === 'videos' ? 'underline' : 'none' }}> <h3 onClick={() => onClickItem('videos')}> Vídeos </h3> </Link>
                </Navigation>
            </Header>
        </>
    )

}


const Header = styled.header`
    width: 100%;
    height: 59px;
    background-color: var(--header_color);
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
        color: var(--header_color_text);
        /* border: #090909; */
    }
`

const Navigation = styled.div`
    display: flex;
    h3 {
        margin: 10px;
        font-weight: 700;
        color: var(--header_color_text);
        cursor: pointer; 
        position: relative;
        padding: 2px;
    }
    h3:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: var(--header_color_text);
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
    }
    h3:hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
`

