import styled from "styled-components"
import ReactPlayer from 'react-player';
import React, { useRef } from 'react';

export default function Videos() {
    const playerRef = useRef(null);
    return (
        <>
            <Container>
                <div>
                    <ReactPlayer ref={playerRef} url={'https://youtu.be/QC76-c3DCwI'} controls={true} />
                    <ReactPlayer ref={playerRef} url={'https://youtu.be/naFVgkfh2-4'} controls={true} />
                    <ReactPlayer ref={playerRef} url={'https://youtu.be/6ipf6zHx9-4'} controls={true} />
                </div>
            </Container>
        </>
    )
}


const Container = styled.div`
    margin-top: 120px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
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
        justify-content: center;
        align-items: center;
        padding: 10px;
        flex-wrap: wrap;
        width: 100%;
    }

`