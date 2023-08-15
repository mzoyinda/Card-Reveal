import React, { useState } from "react";
import JsCard from "./components/JsCard";
import TsCard from "./components/ClassCard";
import { Container, Wrapper } from "./style";
import { content } from "./components/FoodData";

const Home = () => {
  const [status, setStatus] = useState(false);
  const [note, setNote] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setStatus(!status);
    setNote(true);
  };

  const handleIncrease = () => {
    if (index !== 2) {
      setIndex(index + 1);
    } else {
      console.log("end of the stack");
    }
  };

  const handleDecrease = () => {
    if (index !== 0) {
      setIndex(index - 1);
    } else {
      console.log("end of the stack");
    }
  };

  return (
    <Container>
      <button className={status ? "" : "switch"} onClick={handleClick}>
        Switch to {status ? "Javacript" : "Typescript"}
      </button>
      <Wrapper>
        <p className={note ? "displaynote" : "hidenote"}>
          There is <strong>No Visible Change</strong> between the UI of a
          Javascript component and that of a Typescript component!
        </p>
        {status ? (
          <TsCard
            content={content}
            index={index}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
          />
        ) : (
          <JsCard
            content={content}
            index={index}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default Home;
