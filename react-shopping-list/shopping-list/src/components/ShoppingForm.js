import React, { useState } from "react";
import styled from "styled-components";

const ShoppingFormStyle = styled.form`
  margin-bottom: 80px;
`;

const ShoppingButtonStyle = styled.button`
  padding: 0 40px;
  border-radius: 6px;
  cursor: pointer;
`;

const ShoppingInputStyle = styled.input`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
`;
function ShoppingForm({ onFormSubmit }) {
  const [countId, setCountId] = useState(1);

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCountId((prevValue) => prevValue + 1);

    onFormSubmit({
      id: countId,
      name: input,
      isCompleted: false,
    });

    setInput("");
  };

  return (
    <ShoppingFormStyle className="shopping-form" onSubmit={handleSubmit}>
      <ShoppingInputStyle
        type="text"
        placeholder="product"
        value={input}
        name="text"
        className="shopping-input"
        onChange={handleChange}
      />
      <ShoppingButtonStyle className="shopping-button">add</ShoppingButtonStyle>
    </ShoppingFormStyle>
  );
}

export default ShoppingForm;
