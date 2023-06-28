import styled from "styled-components";

export const App=styled.div`
  background-color: #f5c71a;
  padding-top: 7%;
  padding-bottom: 5%;
`
export const Container=styled.div`
  background-color: #f5c71a;
  margin: auto;
  padding: 20px;
  width: 80%;
  @media screen and (max-width:830px){
        width:90%;
    }
`
export const Naslov=styled.div`
  text-align: center;
  margin-top: 7%;
  margin-bottom: 10%;
  font-size:200%;
  font-weight:700;
`
export const ProductImg=styled.img`
  height: 230px;
  width: 230px;
  border-radius: 50%;
  padding: 4px;
  margin-bottom: 24px;
`

export const Card=styled.div`
  width: 280px;
  background: #fff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 17px;
  transition: all 0.4s ease;
  /* &:hover{
  transform: translateY(-15px);}
   */
`
export const Name=styled.div`
  text-align: center;
`

export const Price=styled.div` 
  text-align: center;
  color: grey;
  font-weight: 700;
  font-size: 22px;
`