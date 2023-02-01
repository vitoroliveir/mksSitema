import styled from 'styled-components';

export const Container = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    align-items:center;
    justify-content:center;

`;

export const Cards =  styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;

    position:relative;
    
    height:601px;
    width:77vw;
    
    @media(min-width:500px){
        width:500px;
        top:-50px;
    }

    @media(min-width:780px){
        width:723px;
        top:-10px;
    }

    @media(min-width:992px){
        width:965px;
    }

`