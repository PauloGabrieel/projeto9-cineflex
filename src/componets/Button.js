import {Link} from "react-router-dom";
import styled from "styled-components";
export default function Button({children,id }){
    
    return(
        <Link to={`/sessao/${id}`}>
            <ButtonStyle>
                {children}
            </ButtonStyle>
        </Link>
    );
};

const ButtonStyle = styled.div`
    display:inline-flex;
    justify-content: center;
    align-items: center;
    margin: 20px 10px 0 0 ;
    
    padding: 0 20px;
    height: 44px;
    border-radius: 4px;
    background-color: #E8833A;
    color: #fff;

`;

