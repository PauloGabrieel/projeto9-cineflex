import styled from "styled-components"
export default function CompletedOrder({session, name, cpf, idSeats}){
    console.log(session)
    console.log(name)
    console.log(cpf)
    console.log(idSeats)
    const assentos =[]
    for(let i = 0; i < session.seats.length; i ++) {
        for(let j = 0; j < idSeats.length; j++){
                if(session.seats[i].id === idSeats[j]){
                    assentos.push(session.seats[i].name)
                }
        }
        
       console.log(assentos)
    }
    return(

        <CompletedContainer>
            <h2>Pedido feito com sucesso!</h2>
            
                <h3>Filme e sessão</h3>
                <p>{session.length === 0 ?"carregando" : session.movie.title}</p>
                <p>{session.length === 0 ?"carregando" : session.day.weekday} - {session.length === 0 ?"carregando" :session.name}</p>   

                <h3>Ingressos</h3>
                    {assentos.map(item => <p>Assento {item}</p>)}
                <h3>Comprador</h3>
                <p>Nome: {name}</p>
                <p>CPF: {cpf}</p>
                
        </CompletedContainer>
        
    );
};

const CompletedContainer = styled.div`
    display: flex;    
    flex-direction: column;
    padding: 0 24px;
    h2{
        align-self: center;
        margin: 40px 0;
        font: 700 24px 'Roboto', sans-serif;
        color: #247A6B;
        width: 150px;
    };
    h3{
        font:700 24px 'Roboto', sans-serif;
        color: #293845;
        margin-bottom: 10px;
        margin-top: 25px
    }
    p{
        font: 400 22px 'Roboto', sans-serif;
        color: #293845;
    }
`; 


