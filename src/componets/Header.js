import styled from "styled-components"
export default function Header(){
    return (
        <HeaderComntainer>
            <h1>CINEFLEX</h1>
        </ HeaderComntainer>
    );
};

const HeaderComntainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #C3CFD9;
    height: 67px;

    h1{
        font: 400 34px 'Roboto', sans-serif;
        color:#E8833A;
    }
`;
