import styled from 'styled-components';

export const Container = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    align-items:center;
    justify-content:center;

/*     @media(min-width:500px){
        height:150vh;
    } */

/*     @media(min-width:780px){
        height:100vh;
    }

    @media(min-width:992px){
        height:100vh;
    } */
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
        top:300px;
        height:1351px;
        
    }

    @media(min-width:780px){
        top:180px;
        width:723px;
        height:1101px;
    }

    @media(min-width:992px){
        top:10px;
        width:965px;
        height:601px;
    }

`