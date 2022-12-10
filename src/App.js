import Posters from "./pages/Posters";
import Sessoes from "./pages/Sessoes"
import GlobalStyle from "./assets/GlobalStyle";
import Topo from "./components/Topo";
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App(){
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Topo />
      <Routes>
      <Route path="/" element={<Posters />} />
      <Route path="/sessoes/:idFilme" element={<Sessoes/ >} />
      </Routes> 
    </BrowserRouter>
  )
}
