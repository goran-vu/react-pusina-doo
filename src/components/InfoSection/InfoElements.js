import styled from "styled-components";

export const InfoWrapper=styled.div`
    display: grid;
    grid-template-areas: 
        'img oNama oNama' 
        'img text1 text1'  
        'img Wrapper2 Wrapper3'
    ;
    @media screen and (max-width:960px){
        display: grid;
        grid-template-areas: 
        'oNama' 
        'text1'
        'Wrapper2'  
        'Wrapper3'
        'img';
        
    ;
    }
`
export const Wrapper2=styled.div`
    grid-area:Wrapper2
`
export const Wrapper3=styled.div`
    grid-area:Wrapper3;
`

export const InfoImg=styled.img`

    grid-area:img;
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width:960px){
        object-fit: cover;
        width: 100%;
        height:300px;
        object-fit: cover; 
        object-position: 0% 100%;
    }
    @media screen and (min-width:560px) and (max-width:1060px){
        display: none;
    }
`
export const ONama=styled.div`
    grid-area: oNama;
    font-size: 250%;
    padding: 25px;
    border-left: 10px solid #ffde4d;
    margin-left: 2%;
    margin-top: 2%;
`
export const InfoText=styled.div`
    grid-area: text1;
    padding: 55px;
    line-height: 150%;
   
`
export const Counter1=styled.div`

    background-color: #f5c71a;
    padding: 25px;
    font-size: 250%;
    font-weight: 900;
    text-align: center;
    color:#2a2a2a;
`
export const Counter2=styled.div`
    background-color: #2a2a2a;
    padding: 25px;
    font-size: 250%;
    font-weight: 900;
    text-align:center;
    color:white;
`
export const Opis1=styled.div`
    background-color: #f5c71a;
    padding: 25px;
    font-weight: 900;
    font-size:130% ;
    text-align:center;
    color:#2a2a2a;
    margin-top: -5%;
    
`
export const Opis2=styled.p`
    background-color: #2a2a2a;
    padding: 25px;
    font-weight: 900;
    font-size:130% ;
    text-align:center;
    color:white;
    margin-top: -5%;
    
`