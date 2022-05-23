import styled from "styled-components";
export default function Footer({children}){
    return (
        <FooterContainer>
            {children}
        </FooterContainer>
    );;
};

const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 24px;
    height: 117px;
    width: 100%;
    background-color: #DFE6ED;

    img{
        width: 48px;
        height: 72px;
        margin-right: 20px;
    }

`;