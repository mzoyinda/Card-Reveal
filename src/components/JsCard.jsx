import React, { useState } from 'react';
import { Header,Ingredients } from '../style';

import {
  PiArrowFatLinesLeftFill,
  PiArrowFatLinesRightFill,
} from "react-icons/pi";



const JsCards = ({content}) => {
const [index, setIndex] = useState(0);


const handleIncrease = () =>{
  if(index !== 2){
    setIndex(index+1)
  }else{
    console.log("end of the stack")
  }
}

const handleDecrease = () =>{
  if(index !== 0){
    setIndex(index-1)
  }else{
    console.log("end of the stack")
  }
}

  return (
    <div>
        <Header>
          <img src={content[index].image} alt="food" />
          <div className="btn__container">
            <button onClick={handleDecrease} disabled={index === 0 ? true : false}>
              <PiArrowFatLinesLeftFill />
            </button>
            <button onClick={handleIncrease} disabled={index === 2 ? true : false}>
              <PiArrowFatLinesRightFill />
            </button>
          </div>
        </Header>
        <Ingredients>
          <h3>{content[index].title}</h3>
          <p>{content[index].description}</p>
        </Ingredients>
    </div>
  )
}

export default JsCards