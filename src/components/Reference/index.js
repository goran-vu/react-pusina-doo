import React from 'react'
import { useState } from "react"
import items from './items.json'
import {App,Title,Container,Card,Number,Body,Button,Id} from './ReferenceElements.js'
const Reference = () => {
    const [itemsData, setItems]=React.useState(items);
    const [visible, setVisible]= useState(3);

    const showMoreItems=()=>{
        setVisible((preValue)=>preValue+3)
    }
  return (
    <App>
        <Title>Reference</Title> 
        <Container>
           {setItems && 
           itemsData.slice(0,visible).map(({id,body})=>(
                <Card>
                    <Id>
                        <Number>{id}</Number>
                    </Id>
                    <Body>{body}</Body>
                </Card>
            ))} 
            <Button onClick={showMoreItems}>Load more</Button>
        </Container>
    </App>
  )
}

export default Reference
