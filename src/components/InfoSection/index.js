import React from 'react'
import CountUp from 'react-countup'
import {
  InfoWrapper,
  InfoText,
  Counter1,
  Counter2,
  InfoImg,
  ONama,
  Wrapper2,
  Wrapper3,
  Opis1,
  Opis2,

} from './InfoElements'

const InfoSection = ({infoText,img}) => {
  return (
    <>
      <>
        <InfoWrapper>
            <InfoImg src={img}/>
              <ONama >O nama</ONama>
              <InfoText>{infoText}</InfoText>
              <Wrapper2>
              <Counter1>
                <CountUp start={0} end={20} duration={1} enableScrollSpy={true} scrollSpyOnce={true} />
              </Counter1>
              <Opis1>Godina rada</Opis1>
              </Wrapper2>
              <Wrapper3>
              <Counter2>
                <CountUp start={0} end={50} duration={1} enableScrollSpy={true} scrollSpyOnce={true}/>
              </Counter2>
              <Opis2>Završenih projekata</Opis2>
              </Wrapper3>
            
       
        </InfoWrapper>
      </>
    </>
  )
}

export default InfoSection

