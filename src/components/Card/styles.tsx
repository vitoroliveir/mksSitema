import styled from 'styled-components';
import { FiShoppingBag } from "react-icons/fi";

export const IconFiShoppingBags = styled(FiShoppingBag)`
    height: 10.4px;
    width: 10.98px;
    color:white;

    position:relative;
    right:5px;
    top:3px;

    @media(min-width:500px){
        height: 15px;
        width: 15px;
    }
`;

export const Containers = styled.div`
    position:relative;
    width:70vw;
    height:100vh;
    background-color:white;
    
    
    border-radius:8px;
    margin:12px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

    animation: opacity 0.8s ease-in;

    @keyframes opacity {
        0%{
            opacity:0;
        }
        100%{
            opacity:1;
        }
    }
    
    img{
        width:127.8px;
        height:158.82px;
        position:relative;
        left:19vw;
        top:12px;
    }

    h1{
        width:124px;
        height:38px;

        position:relative;
        left:18px;
        top:17px;

        font-family: "Montserrat";
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        color:black;

    }

    p{
        width:230px;
        height:38px;
        overflow:hidden;

        position:relative;
        left:18px;
        top:28px;

        font-family: "Montserrat";
        font-size: 10px;
        font-weight: 300;
        line-height: 12px;
        color:black;

    }

    @media(min-width:500px){
        width:217px;
        height:285px;

        img{
            width:111px;
            height:138px;
            left:40px;
        }

        p{
            left:14px;
            width:192px;
            top:25px;
        }

        h1{
            left:14px;
            top:14px;
        }
    }
`;

export const Buttons = styled.button`
    height: 36.72px;
    width:70vw;


    position:relative;
    bottom:-26px;

    border-radius:0 0 8px 8px;
    border:none;
    background-color:var(--Blue-300);
    color: var(--white-100);
    cursor:pointer;

    font-family: "Montserrat";
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;

    @media(min-width:500px){
        width: 217px;
        bottom:-9px;
        height: 31.90px;
    }
`

export const Values = styled.div`
    height: 26px;
    width: 78px;

    position:relative;
    top:-61px;
    left:180px;
    border-radius:5px;
    background-color:rgba(55, 55, 55, 1);
    color: var(--white-100);
    
    font-family: "Montserrat";
    font-size: 15px;
    font-weight: 700;

    display:flex;
    justify-content:center;
    align-items:center;

    @media(min-width:500px){
        top:-61px;
        left:137px;
    }

`