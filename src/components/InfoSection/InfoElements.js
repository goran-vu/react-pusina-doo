import styled from "styled-components";

export const InfoWrapper=styled.div`
    display: grid;
    z-index: 1;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    grid-template-areas: 
        'img text1 text1' 
        'img text1 text1'
        'img counter1  counter2'
    ;
`
export const InfoContainer=styled.div`

`
export const InfoImg=styled.img`
    grid-area: img;
    background-color:black;
`
export const InfoText=styled.div`
    grid-area: text1;
    padding: 15px;
    background-image: linear-gradient(to bottom right, rgb(114, 114, 114), rgb(255, 255, 255));
   
  
`
export const Counter1=styled.div`
    grid-area: counter1;
    background-color: #f5c71a;
    padding: 15px;
    font-size: 250%;
    
`
export const Counter2=styled.div`
    grid-area: counter2;
    padding: 15px;
    font-size: 250%;
`

