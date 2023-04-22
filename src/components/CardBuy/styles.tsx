import styled from 'styled-components';
import { AiOutlineClose } from "react-icons/ai";

export const IconAiOutlineClose = styled(AiOutlineClose)`
    height: 30px;
    width: 30px;
    cursor:pointer;
    background-color:black;
    color:white;
    border-radius:20px;
    padding:6px;

    position:relative;
    right:-120px;
    top:-190px;

    @media(min-width:500px){
        height: 25px;
        width: 25px;

        right:-78px;
        top:-45px;
    }
`;

export const Container = styled.div`
    display:flex;
    flex-direction:column;
`;

  
export const Value = styled.div`
    height: 34.80px;
    width: 84px;
    display:flex;
    justify-content:center;
    align-items:center;

    border-radius: 5px;

    position:relative;
    
    left:70px;
    top:20px;
    background-color:rgba(55, 55, 55, 1);
    color:white;
    
    font-family: "Montserrat";
    font-size: 15px;
    font-weight: 700;

    @media(min-width:500px){
        left:70px;
        top:4px;
        width: 70px;
        background-color:white;
        color:black;
    }

`

export const Card = styled.div`
    width:250px;
    height:220px;
    background-color:white;
    border-radius:8px;
    margin:12px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

    display:flex;
    flex-direction:column;
    align-items:center;
    

    img{
        position:relative;
        width:80px;
        height:95.1px;
        top:15px;
        left:-10px;
    }

    h1{
        width:200px;
        margin-top:30px;

        font-family: "Montserrat";
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        color:black;
    }

    @media(min-width:500px){
        width:379px;
        height:95px;
        margin:8px;
    

        flex-direction:row;

        img{
            width:46px;
            height:57px;
            left:15px;
            top:0px;

        }

        h1{
            width:142.77px;
            height:43.73px;
            margin-left:30px;
            margin-top:10px;
            
        }
    }
`