import styled from "styled-components";
import news from "../DB/newsDB";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export default function News() {
    const [isClickedMetropoles, setIsClickedMetropoles] = useState(true);
    const [isClickedFundacao, setIsClickedFuncacao] = useState(false);
    return (
        <Container style={{ marginBottom: !isClickedFundacao && !isClickedMetropoles ? 350 : 100 }}>
            <MetropolesArea>
                <h3 onClick={() => setIsClickedMetropoles(!isClickedMetropoles)} style={{
                    display: "flex",
                    alignItems: 'center',
                    fontWeight: 'bold',
                    marginBottom: 10
                }}>
                    Metropoles
                    {
                        isClickedMetropoles ? <IoIosArrowDown /> : <IoIosArrowUp />
                    }
                </h3>
                {
                    isClickedMetropoles && (
                        <>
                            <MetropolesContaines>
                                { news.metropoles?.map((notice) => { return (
                                    <Notice key={notice.name}>
                                        <a href={notice.url} target="__blank"> 
                                            <img src={notice.image} alt="" />
                                            <h3>{notice.name}</h3>
                                        </a> 
                                    </Notice>
                                )})}
                            </MetropolesContaines>
                            <div style={{ paddingLeft: '5%', marginBottom: 15, }}>
                                <a 
                                    href="https://www.metropoles.com/author/joao-vitor-reis"
                                    target="__blank"
                                    style={{ textDecoration: 'underline' }}
                                >
                                    Leia mais...
                                </a>
                            </div>
                        </>
                    )
                }
            </MetropolesArea>

            <h3 onClick={() => setIsClickedFuncacao(!isClickedFundacao)} style={{
                display: "flex",
                alignItems: 'center',
                fontWeight: 'bold',
                marginBottom: 10
            }}>
                Fundação Astrojildo Pereira
                {
                    isClickedFundacao ? <IoIosArrowDown /> : <IoIosArrowUp />
                }
            </h3>
            {
                isClickedFundacao && (
                    <FundaçãoContaines>
                        {news.fundacao?.map((notice,index) => { return (
                            <Notice key={notice.name}>
                                <a href={notice.url} target="__blank"> 
                                    <img src={notice.image} alt="" />
                                    <h3>{notice.name}</h3>
                                </a> 
                            </Notice>
                        )})}
                    </FundaçãoContaines>
                )
            }
        </Container>
    )
}

const MetropolesArea = styled.div`
    display: flex;
    flex-direction: column;

`;

const MetropolesContaines = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* background-color: red; */
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

const FundaçãoContaines = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* background-color: red; */
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

const Container = styled.section`
    margin-top: 100px;
    flex-wrap: wrap;
    padding: 20px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    h3 {
        padding-left: 5%;
    }
`


const Notice = styled.figure ` 
    margin: 10px;
    width: 300px;
    min-height: 170px;
    padding: 10px;
    height: auto;
    background-color: var(--button);
    /* box-shadow: 1px 1px 1px 1px grey; */
    border-radius: 10px;
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