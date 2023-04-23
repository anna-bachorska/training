import React, { useState } from "react";
import ShoppingForm from "./ShoppingForm";

import styled from "styled-components";

const ShoppingStyle = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ShoppingTextStyle = styled.div`
  margin-right: auto;
`;

const ButtonDeleteStyle = styled.button`
  border-radius: 6px;
  padding: 0 10px;
  cursor: pointer;
`;

const CheckboxStyle = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

function Shopping({ items, removeShopping, completeShopping }) {
  return items.map((item, index) => (
    <ShoppingStyle key={index}>
      <ShoppingTextStyle
        key={item.id}
        className={item.isCompleted ? "checkbox-on" : "checkbox-off"}
      >
        {item.name}
      </ShoppingTextStyle>
      <CheckboxStyle
        type="checkbox"
        className="edit-checkbox"
        onChange={() => completeShopping(item.id)}
      ></CheckboxStyle>
      <ButtonDeleteStyle
        className="delete-button"
        onClick={() => removeShopping(item.id)}
      >
        delete
      </ButtonDeleteStyle>
    </ShoppingStyle>
  ));
}

export default Shopping;
