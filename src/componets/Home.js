import styled from "styled-components"
import {useState, useEffect} from "react"
import axios from "axios"
import Movies from "./Movies"

export default function Home(){
    
    const [movies, setMovies] = useState([])
    
    useEffect(()=>{
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response => {setMovies([...response.data])})
    
    },[])
       

    return(
        <HomeContainer>
            <Title>Selecione o filme</Title>
            <MoviesContainer>
               
                    {movies.map((movie, index) => <Movies key={index} posterURL={movie.posterURL} id={movie.id}/>)}
                
            </MoviesContainer>

        </HomeContainer>
    )
};

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Title = styled.h2`
    text-align: center;
    margin: 40px 0;
    font: 400 24px 'Roboto', sans-serif;
    color: #293845;

`;
const MoviesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 30px;
    padding: 0 35px;

    img{
        width: 129px;
        height: 193px
    }
`;