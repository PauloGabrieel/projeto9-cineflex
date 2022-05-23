import { Link } from "react-router-dom";
export default function Movies({posterURL, id}){
   
    
    return(
       <Link to={`/filme/${id}`}>
            <img src={posterURL} alt=""/> 
       </Link>
       
    );

    
};