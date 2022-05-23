import styled from "styled-components"
import Button from "./Button";
export default function SessionTime({weekday,date, showtimes}){
    
    

    return(
        <Session>
            <p>{weekday} - {date}</p>
            {showtimes.map((hour, index) => 
            (<Button key={index} id={hour.id} >
             <span>{hour.name}</span>
             </Button>))}  
        </Session>
    );
};

const Session = styled.li`
    
    margin-top: 25px;
    
    p{
        font: 400 20px 'Roboto', sans-serif;
        color: #293845;
    };
    
       

`;

