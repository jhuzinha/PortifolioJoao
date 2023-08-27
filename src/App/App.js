import { Route, Routes, BrowserRouter } from "react-router-dom"
import News from "../Components/News"
import About from "../Components/About"
import Main from "../Components/Main"
import Header from "../Components/Head"
import Footer from "../Components/Footer"
import Videos from "../Components/Videos"

export default function App() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/noticias" element={<News />} />
                <Route path="/videos" element={<Videos />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )

}