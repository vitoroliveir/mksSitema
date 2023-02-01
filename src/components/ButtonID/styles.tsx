import styled from 'styled-components';

export const Container = styled.div`
    height: 20px;
    min-width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 0px 3px rgba(191, 191, 191, 1);
    z-index:10000;

    position:absolute;
    left:215px;
    margin-top:9px;


    > span{
        width: 100%;
        text-align: center;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        user-select: none;
    }

`;

export const Num = styled.span`
    font-family: "Montserrat";
    font-size: 8px;
    font-weight: 400;

    border-right: 1px solid rgba(0,0,0,0.2);
    border-left: 1px solid rgba(0,0,0,0.2);
    pointer-events: none;
`;

