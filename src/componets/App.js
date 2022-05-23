import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Movie from "./Movie";
import Sessao from "./Sessao";
import CompletedOrder from "./CompletedOrder";
import { useState } from "react";
export default function App(){
    const [ movie, setMovie] = useState({})
    const [session, setSession] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [idSeats, setIdSeats] = useState([]);   
    return(
        <div className="container">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/filme/:movieId" element={<Movie setMovie={setMovie} movie={movie} />}></Route>
                    <Route path="/sessao/:sessaoId" element={<Sessao idSeats={idSeats} setIdSeats={setIdSeats} name={name} setName={setName} cpf={cpf} setCpf={setCpf} session={session} setSession={setSession}/>}></Route>
                <Route path="/sucesso" element={session.length === 0 ?"carregando": <CompletedOrder session={session} setSession={setSession} name={name} cpf={cpf} idSeats={idSeats} />}></Route>
                </Routes>
                

            
            </BrowserRouter>
                          
        </div>
    );
}