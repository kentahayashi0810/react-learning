import { useState } from "react";

import styled from "styled-components";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  const StyledButton = styled.button`
    margin: auto;
    border-radius: 9999px;
    border: none;
    display: block;
    width: 120px;
    height: 60px;
    font-weight: bold;
    cursor: pointer;
    background-color: ${({ isSelected }) => (isSelected ? "pink" : "")};
  `;

  const OrangeButton = styled(StyledButton)`
    background-color: orange;
    transition: all ease 0.3s;
    &:hover {
      background-color: green;
      opacity: 0.7;
      color: white;
    }
  `;

  return (
    <>
      <StyledButton isSelected={isSelected} onClick={clickHandler}>
        ボタン
      </StyledButton>
      {/* <button
        className={`btn ${isSelected ? "selected" : ""}`}
        onClick={clickHandler}
      >
        ボタン
      </button> */}
      <OrangeButton>ボタン</OrangeButton>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
