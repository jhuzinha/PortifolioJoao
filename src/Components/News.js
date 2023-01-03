import styled from "styled-components"
import news from "../DB/newsDB"

export default function News() {

    return (
        <Container>
        {news.map((notice,index) => { return (
            <Notice key={index}>
                <a href={notice.url} target="__blank"> 
                    <img src={notice.image} alt="" />
                    <h3>{notice.name}</h3>
                    </a> 
            </Notice>
            ) } )}

        </Container>
    )
}

const Container = styled.section`
    margin-top: 100px;
    flex-wrap: wrap;
    padding: 20px;
    width: 100%;
    margin-bottom: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`


const Notice = styled.figure ` 
    margin: 10px;
    width: 300px;
    min-height: 170px;
    padding: 10px;
    height: auto;
    background-color: var(--button);
    box-shadow: 1px 1px 1px 1px grey;
    border-radius: 25px;
    display: flex;
    p {
        text-align: justify;
        width: 50%;
    }
    img {
        object-fit: cover;
        width: 50%;
        border-radius: 6px;
        

    }
    a {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }

    &&:hover {
        background-color: lightgray;
    }

`