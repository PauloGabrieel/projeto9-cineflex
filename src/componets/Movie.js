import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components"
import SessionTime from "./SessionTime";
import Footer from "./Footer";

export default function Movie({setMovie, movie}){
    const {movieId} = useParams();
    ;

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`);
        promise.then(response => {setMovie(response.data)})
    },[])
    
    return(
        <MovieContainer>   
            <h2>Selecione o horário</h2>
            <Horario>   
                <ul>
                   {movie.days === undefined ?  <h1>Carregando</h1>: movie.days.map((item, index) => <SessionTime key={index} weekday={item.weekday} date={item.date} showtimes={item.showtimes}/>)} 
                
                </ul>
            </Horario>
            <Footer>
                <img src={movie.posterURL} alt=""/>
                <span>{movie.title}</span>
            </Footer>
                
        </MovieContainer>
    );
};

const MovieContainer = styled.div`
    margin-top: 80px;
    display:  flex;
    flex-direction: column;
    margin-bottom: 140px;

    h2{
        text-align: center;
        margin: 40px 0;
        font: 400 24px 'Roboto', sans-serif;
        color: #293845;
    }
`;

const Horario = styled.div`
    padding: 0 24px;
    
`;