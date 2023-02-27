import React from 'react'
import CountUp from 'react-countup'
import {
  InfoContainer,
  InfoWrapper,
  InfoText,
  Counter1,
  Counter2,
  InfoImg,

} from './InfoElements'
const InfoSection = ({infoText,img}) => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
            <InfoImg src={img}/>
            <InfoText>{infoText}</InfoText>
            <Counter1>
              <CountUp start={0} end={200} duration={2}/>
            </Counter1>
            <Counter2>
              <CountUp start={0} end={200} duration={2} enableScrollSpy/>
            </Counter2>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
