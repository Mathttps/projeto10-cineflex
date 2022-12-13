import Posters from "./pages/Posters";
import Assentos from "./pages/Assentos";
import Sucesso from "./pages/Sucesso";
import GlobalStyle from "./assets/GlobalStyle";
import Cineflex from "./components/Cineflex";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sessoes from "./pages/Sessoes";

export default function App(){

  const infoFilme = {
 
}

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Cineflex />
      <Routes>
      <Route path="/" element={<Posters />} />
      <Route path="/sessoes/:idFilme" element={<Sessoes/ >} />
      <Route path="/assentos/:idSessao" element={<Assentos infoFilme={infoFilme} />} />
      <Route path="/sucesso" element={<Sucesso infoFilme={infoFilme} />} />
      </Routes> 
    </BrowserRouter>
  )
}
