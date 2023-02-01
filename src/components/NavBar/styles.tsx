import styled from 'styled-components';
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

export const IconAiOutlineClose = styled(AiOutlineClose)`
    height: 40px;
    width: 40px;
    cursor:pointer;
    background-color:black;
    color:white;
    border-radius:20px;
    padding:10px;

    position:relative;
    left:70vw;
    top:0px;

    @media(min-width:500px){
        height: 40px;
        width: 40px;
        left:350px;
        top:-20px;
    }
`;




export const Container = styled.div`
    height: 55px;
    width:100vw;
    background-color:var(--Blue-300);
    display:flex;
    align-items:center;
    justify-content:space-between;

    position:absolute;
    top:0;
    z-index:100;

    @media(min-width:500px){
        height:85px;
       
    }
`;

export const Title = styled.h1`
    width:200px;
    font-family: "Montserrat";
    font-size: 40px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
    color: var(--white-100);

    position:relative;
    left:20px; 

    > span{
        font-family: "Montserrat";
        font-size: 20px;
        font-weight: 300;
    }

    @media(min-width:500px){
        left:65px;
    }

`;

export const IconTiShoppingCart = styled(TiShoppingCart)`
    height: 10.4px;
    width: 10.98px;

    @media(min-width:500px){
        height: 20px;
        width: 21px;
    }
`;


export const ShoppingCart = styled.div`
    height: 26px;
    width: 52px;
    background-color:var(--white-100);
    border-radius:8px;
    cursor:pointer;

    padding:8px;

    font-family: "Montserrat";
    font-size: 12px;
    font-weight: 700;
    color:black;

    display:flex;
    align-items:center;
    justify-content:space-around;

    position:relative;
    right:23px;

    @media(min-width:500px){
        height: 45px;
        width: 90px;

        right:88px;
        padding:15px;
    
        font-size: 18px;
    }    
`;

interface ShoppingCartActivePorps{
    active?:boolean;
}

export const ShoppingCartActive = styled.div<ShoppingCartActivePorps>`
    display:${props => props.active ? "flex" : "none"};
    align-items:center;
    position:absolute;
    z-index:100;
    height: 194.3vh;
    width:84vw;
    right:0px;
    background-color:var(--Blue-300);
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

    h2{
        font-family: "Montserrat";
        font-size: 27px;
        font-weight: 700;
        line-height: 33px;
        color:var(--white-100);
        width:170px;
        position:relative;
        left:35px;
        top:36px;
    }

    @media(min-width:500px){
        height: 192vh;
        width:432px;

        h2{
            left:47px;
        }
        
    }
`;

export const SectionTop = styled.div`
    h2{
        font-family: "Montserrat";
        font-size: 27px;
        font-weight: 700;
        line-height: 33px;
        color:var(--white-100);
        width:170px;
        position:relative;
        left:35px;
        top:60px;
    }

    @media(min-width:500px){
        width:100vw;
        h2{
            top:36px;
            left:47px;
        }
        
    }


`


export const ButtonFinishBuy = styled.button`
        font-family: "Montserrat";
        font-size: 20px;
        font-weight: 700;
        color:var(--white-100);
        background-color:black;
        cursor:pointer;

        position:absolute;
        bottom:0;
        z-index:1000;

        width:84vw;
        height: 75px;
        

    @media(min-width:500px){
        width:432px;
        font-size: 28px;
    }
`;

export const List = styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
    top:190vw;
    left:8vw;
    height:65vh;
    overflow-y:scroll;
    width:80vw;
    
    @media(min-width:500px){
        height:69.5vh;
        top:103vh;
        left:15px;  
        width:150%;  
        
    }
`

export const Value = styled.div`
    position:absolute;
    left:20px;
    top:178vh;
    z-index:10000;
    display:flex;
    justify-content:space-between;

    font-family: "Montserrat";
    font-size: 28px;
    font-weight: 700;
    line-height: 15px;
    color:var(--white-100);

    width:73vw;
    
    @media(min-width:500px){
        width:340px;
        left:50px;
    }
`

