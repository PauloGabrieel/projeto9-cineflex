import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Footer from "./Footer";
export default function Sessao({session, setSession, idSeats, setIdSeats, name, setName, cpf, setCpf}){
      

    const {sessaoId} = useParams()
    
    const [newSeats, setNewSeats] = useState([]);
    
    let navigate = useNavigate();
    
    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`);
        promise.then(response => {
            setSession({...response.data})
           
        });

    },[]);
   
    if(session.length != 0 && newSeats.length === 0){
        setNewSeats([...session.seats])
    };
        
    function selection(seat, position){
        console.log(seat)
        if(seat.isAvailable === true){
           if(seat.selected === true){
                newSeats.filter((item, index) => position === index).map(item => item.selected = false) 
                setNewSeats([...newSeats])
            }else{
                newSeats.filter((item, index) => position === index).map(item => item.selected = true)
                setNewSeats([...newSeats])
                setIdSeats([...idSeats,seat.id])
            };
            

        }else{
            alert("Esse assento não esta disponível.")
        };
        console.log(idSeats)
    };

    function confirmado(event){
        event.preventDefault();
        const date ={
            id : idSeats,
            name: name,
            cpf: cpf,
        } 
        // const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",date);
        // promise.then(response => console.log(response.data));
        // promise.catch(err => console.log(err))
        navigate("/sucesso");
        
    }

    return (
    <>   
        <SessionContainer>
            <h2>Selecione o(s) assento(s)</h2>
            <Seats>
                {newSeats.length === 0 ?"carregando" : newSeats.map((seat, index) => 
                <Seat onClick={()=> selection(seat, index)}  selected={seat.selected}
                backgroundColor={seat.isAvailable ? "#C3CFD9" :"#FBE192" }  
                key={index} >{seat.name}</Seat> )}
            </Seats>
            <SeatingLegend>
                <div>
                    <Selected></Selected>
                    Selecionado
                </div>
                <div>
                    <Available></Available>
                    Disponível
                </div>  
                <div>
                    <Unavailable></Unavailable>
                    Indisponível
                </div>
            </SeatingLegend>
            <form onSubmit={confirmado}>
                <label htmlFor="name">Nome do comprador:</label>
                <input onChange={(e) => setName(e.target.value)} type="text" id="name" placeholder="Digite seu nome" value={name}></input>
                <label htmlFor="cpf">CPF do comprador</label>
                <input onChange={(e)=> {setCpf((e.target.value).replace(/[^0-9]/g, ""))}} type="text" id="cpf" placeholder="Digite seu CPF"></input>
            </form>
           
                <BookButton onClick={confirmado}> 
                    <span>Reservar assento(os)</span>
                </BookButton> 
            
            
        </SessionContainer>
        <Footer>
            {session.movie === undefined ? "carregando" : 
            (  <>
                    <img src={session.movie.posterURL} alt={session.movie.title} />
                    <div>
                        <p>{session.movie.title}</p>
                        <p>{session.day.weekday} - {session.name}</p>       
                    </div>

                </> 
            )}            
        </Footer>
    </>
    );
};

const SessionContainer = styled.div`
     display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 24px;

    h2{
        text-align: center;
        margin: 40px 0;
        font: 400 24px 'Roboto', sans-serif;
        color: #293845;
    };
    form{
        margin-top: 48px;
        width: 100%;
        padding: 0 24px;
        display: flex;
        flex-direction: column;
        align-items: flex-start
    };
    input{
        padding: 10px;
        width: 100%;
    }
    input::placeholder{
        font: 400 18px 'Roboto', sans-serif;
        color : #AFAFAF;
    }
    label{
        font: 400 18px 'Roboto', sans-serif;
        color: #293845;
        margin-top: 10px;
    }
    
`;
const BookButton = styled.div`
    display:inline-flex;
    justify-content: center;
    align-items: center;
    margin: 20px 10px 0 0 ;
    padding: 0 30px;
    height: 44px;
    border-radius: 4px;
    background-color: #E8833A;
    color: #fff;
    margin-top: 60px;
    cursor: pointer;
    
`;
const Seats = styled.div`
    max-width: 340px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    row-gap: 18px;
    
`;

const Seat = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: ${props => props.selected ? "#8DD7CF" : props.backgroundColor };
    border: 1px solid #808F9D;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
const SeatingLegend = styled.div`
    margin-top: 18px;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`;

const Selected = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: #8DD7CF;
    border: 1px solid #1AAE9E;
`;
const Available = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: #C3CFD9;
    border: 1px solid #808F9D;
`;
const Unavailable = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: #FBE192;
    border: 1px solid #F7C52B;
`;
