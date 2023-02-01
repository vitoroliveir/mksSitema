import styled from 'styled-components';

interface Props {
    width: number;
    height: number;
    borderRadius?: number;
}

export const Container = styled.div<Props>`
    width:${p => `${p.width}px`};
    height:${p => `${p.height}px`};
    border-radius:${p => `${p.borderRadius}px`};
    margin:12px;

    position:relative;

    position:relative;
    width:70vw;
    height:49vh;
    background-color:white;
    
    
    border-radius:8px;
    margin:12px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    animation: shimmer 1.2s ease-in-out infinite;



    
    div{
        width:127.8px;
        height:158.82px;
        position:relative;
        left:22vw;
        top:12px;
        
        background-image:linear-gradient(
            -90deg,
            #ffff 0%,
            #dcdcdc 50%,
            #ffff 100%
         );

        background-size: 400% 400%;
        animation: shimmer 1.2s ease-in-out infinite;
        
    }

    h1{
        width:124px;
        height:38px;

        position:relative;
        left:18px;
        top:17px;
        background-image:linear-gradient(
            -90deg,
            #ffff 0%,
            #dcdcdc 50%,
            #ffff 100%
        );

        background-size: 400% 400%;
        animation: shimmer 1.2s ease-in-out infinite;

        

    }

    p{
        width:230px;
        height:38px;
        overflow:hidden;

        position:relative;
        left:18px;
        top:28px;
        background-image:linear-gradient(
                -90deg,
                #ffff 0%,
                #dcdcdc 50%,
                #ffff 100%
        );

        background-size: 400% 400%;
        animation: shimmer 1.2s ease-in-out infinite;

       

    }

    > span{
        height: 26px;
        width: 60px;

        position:absolute;
        top:-172px;
        left:180px;

        background-image:linear-gradient(
                -90deg,
                #ffff 0%,
                #dcdcdc 50%,
                #ffff 100%
        );

        background-size: 400% 400%;
        animation: shimmer 1.2s ease-in-out infinite;
    }


    button{
        height: 50.72px;
        width:70vw;

        position:absolute;
        top:280px;
        

        border-radius:0 0 8px 8px;
        border:none;

        background-image:linear-gradient(
                -90deg,
                #ffff 0%,
                #dcdcdc 50%,
                #ffff 100%
        );

        background-size: 400% 400%;
        animation: shimmer 1.2s ease-in-out infinite;

    }

    @keyframes shimmer {
            0%{
                background-position:0% 0%;
            }

            100%{
                background-position:-135% 0%;
            }
    }


    

    @media(min-width:500px){
        width:217px;
        height:285px;

        div{
            width:111px;
            height:138px;
            left:53px;
        }

        p{
            left:14px;
            width:192px;
            top:25px;
        }

        h1{
            left:15px;
            top:20px;
        }

        button{
            width: 217px;
            height: 40.90px;
            top:244px;
        }

         span{
            top:163px;
            left:147px;
        }
    }

    
`;