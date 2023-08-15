import React, { useState } from "react";
import JsCard from "./components/JsCard";
import TsCard from "./components/TsCard";
import { Container, Wrapper } from "./style";
import {content} from "./components/FoodData";

const Home = () => {

  const [status, setStatus] = useState(false)
  const [note, setNote] = useState(false)

  const handleClick = () => {
    setStatus(!status);
    setNote(true)
  }

  return (
    <Container>
            <button 
            className={ status ? "" : "switch" } 
            onClick={handleClick}
            >
              Switch to { status ? "Javacript" : "Typescript" }
            </button>
      <Wrapper>
        <p  className={note ? "displaynote" : "hidenote"}>There is <strong>No Visible Change</strong> between the UI of a Javascript component and that of a Typescript component!</p>
        {status ? <TsCard content={content} /> : <JsCard content={content}/>}
      </Wrapper>
    </Container>
  );
};



export default Home;
