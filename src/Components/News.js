import styled from "styled-components"
import image3 from "../Assets/images/image3.png"


export default function News() {
    const news = [
        {
        image: image3,
        name: "Filme Homem do Pau Brasil aborda “sexo com leveza”, diz cineasta",
        url: "https://www.fundacaoastrojildo.org.br/filme-homem-do-pau-brasil-aborda-sexo-com-leveza-diz-cineasta/"
        },
        {
        name: "Biblioteca Salomão Malina oferece empréstimo gratuito de 68 livros sobre PCB",
        url: "https://www.fundacaoastrojildo.org.br/biblioteca-salomao-malina-oferece-emprestimo-gratuito-de-68-livros-sobre-pcb/",
        image: 'https://www.fundacaoastrojildo.org.br/wp-content/uploads/2019/01/IMG_0037.jpg'
        }, {
        name: "Com jovialidade e escrita clara, romance de Rachel Queiroz é discutido em webinar",
        url: "https://www.fundacaoastrojildo.org.br/com-jovialidade-e-escrita-clara-romance-de-rachel-queiroz-e-discutido-em-webinar/",
        image: 'https://www.fundacaoastrojildo.org.br/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-23-at-15.04.24-1.jpeg.webp'
        }, 
        {
        name: "Arsenal mítico é destaque na Semana de Arte Moderna de 1922, segundo professor",
        url: "https://www.fundacaoastrojildo.org.br/arsenal-mitico-e-destaque-na-semana-de-arte-moderna-de-1922-segundo-professor/",
        image: 'https://www.fundacaoastrojildo.org.br/wp-content/uploads/2022/05/WhatsApp-Image-2022-04-29-at-17.57.10-1.jpeg.webp'
        }, 
        {
        name: "Curso de japonês da Biblioteca Salomão Malina faz alunos alcançar sonhos",
        url: "https://www.fundacaoastrojildo.org.br/curso-de-japones-gratuito-da-biblioteca-salomao-malina-faz-alunos-alcancar-sonhos/",
        image: 'https://www.fundacaoastrojildo.org.br/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-07-at-10.14.26.jpeg.webp'
        },  
        {
        name: "Biblioteca Salomão Malina completa 14 anos e conquista público de Brasília",
        url: "https://www.fundacaoastrojildo.org.br/biblioteca-salomao-malina-completa-14-anos-e-conquista-publico-de-brasilia/",
        image: 'https://www.fundacaoastrojildo.org.br/wp-content/uploads/2018/12/biblioteca_1.jpg'
        }, 
        {
        name: "“Ilustração sempre foi o patinho feio”, diz Chiarelli sobre Semana de 22",
        url: "https://www.fundacaoastrojildo.org.br/ilustracao-sempre-foi-o-patinho-feio-diz-professor-da-usp-sobre-semana-de-arte-moderna/",
        image: 'https://www.fundacaoastrojildo.org.br/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-21-at-09.38.51.jpeg.webp'
        }, 
        {
        name: "‘Eles não usam black-tie’ fala da disputa de classes com força histórica",
        url: "https://www.fundacaoastrojildo.org.br/eles-nao-usam-black-tie-fala-da-disputa-de-classes-com-forca-historica/",
        image: 'https://www.fundacaoastrojildo.org.br/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-01-at-19.07.43.jpeg.webp'
        }, 
        {
        name: "Crítica diz que Não olhe para cima, da Netflix, é um grito de alerta",
        url: "https://www.fundacaoastrojildo.org.br/critica-diz-que-nao-olhe-para-cima-da-netflix-e-um-grito-de-alerta/",
        image: 'https://www.fundacaoastrojildo.org.br/wp-content/uploads/2022/01/DLU_20210115_10621_R2a-1024x683-1.jpg.webp'
        }, {
        name: "Série da Netflix choca, agride e revolta, diz crítica de cinema",
        url: "https://www.fundacaoastrojildo.org.br/serie-da-netflix-choca-agride-e-revolta-diz-critica-de-cinema/",
        image: 'https://www.fundacaoastrojildo.org.br/wp-content/uploads/2021/12/Artigo_Lilia_Lustosa_Sete-prisioneiros_foto1_credito_reproducao_netflix.jpg.webp'
        }, 
        {
        name: "Governo desmantelado de Bolsonaro é ‘pedra no caminho do Brasil’",
        url: "https://www.fundacaoastrojildo.org.br/governo-desmantelado-de-bolsonaro-e-pedra-no-caminho-do-brasil-diz-economista/",
        image: 'https://www.fundacaoastrojildo.org.br/wp-content/uploads/2021/12/51753712709_e52bf34990_o.jpg.webp'
        }, 
        {
        name: "“Bolsonaro é o pior presidente da história do Brasil”, afirma Alberto Aggio",
        url: "https://www.fundacaoastrojildo.org.br/bolsonaro-e-o-pior-presidente-da-historia-do-brasil-afirma-alberto-aggio/",
        image: 'https://www.fundacaoastrojildo.org.br/wp-content/uploads/2021/11/51687496692_45e33ef639_o.jpg.webp'
        }, 
        {
        name: "Professor da USP defende discussão de religião nas escolas",
        url: "https://www.fundacaoastrojildo.org.br/professor-da-usp-defende-discussao-de-religiao-nas-escolas/",
        image: 'https://www.fundacaoastrojildo.org.br/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-09-at-17.22.43.jpeg.webp'
        }, 
        {
        name: "Partido ficou órfão sem Angela Merkel, analisa Gianluca Fiocco",
        url: "https://www.fundacaoastrojildo.org.br/partido-ficou-orfao-sem-angela-merkel-analisa-gianluca-fiocco/",
        image: 'https://www.fundacaoastrojildo.org.br/wp-content/uploads/2021/11/Artigo_Gianluca_Fiocco_Pandemia_foto1_credito_Reuters.jpg.webp'
        }, 
        {
        name: "‘Meio ambiente e sustentabilidade são fatores de transformação’, diz Besserman",
        url: "https://www.fundacaoastrojildo.org.br/meio-ambiente-e-sustentabilidade-sao-importantissimos-diz-sergio-besserman/",
        image: 'https://www.fundacaoastrojildo.org.br/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-06-at-13.48.39.jpeg.webp'
        } 
        , {
        name: "“Sofri agressões físicas em batalhas de rap por parte de MC’s transfóbicos”",
        url: "https://www.fundacaoastrojildo.org.br/sofri-agressoes-fisicas-em-batalhas-de-rap-por-parte-de-mcs-transfobicos/",
        image:'https://www.fundacaoastrojildo.org.br/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-01-at-15.37.32.jpeg.webp'
        },
        {
        name: "Slam-DéF: “Poetas são cientistas da nossa atualidade”, diz coordenador cultural",
        url: "https://www.fundacaoastrojildo.org.br/poetas-sao-cientistas-da-nossa-atualidade-diz-coordenador-cultural-do-slam-def/",
        image:'https://www.fundacaoastrojildo.org.br/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-21-at-19.14.05-1.jpeg.webp'
        },
        
        {
        name: "Brasil de Bolsonaro optou por isolamento, critica Hussein Kalout",
        url: "https://www.fundacaoastrojildo.org.br/brasil-de-bolsonaro-optou-por-isolamento-critica-hussein-kalout/",
        image:'https://www.fundacaoastrojildo.org.br/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-16-at-15.41.05.jpeg.webp'
        }]

    return (
        <Container>
        {news.map((notice,index) => { return (
            <Notice key={index}>
                <a href={notice.url} target="__blank"> 
                    <img src={notice.image} alt="image" />
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