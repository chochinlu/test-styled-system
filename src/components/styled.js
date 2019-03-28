import React from "react";

import styled from "styled-components";

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  color: palevioletred;
`;
exports.Title = Title;

const Wrapper = styled.section`
  padding: 4rem;
  background: papayawhip;
`;
exports.Wrapper = Wrapper;

const ButtonGroup = styled.div`
  /* border: 1px solid grey; */
  button {
    margin: 1rem 1.5rem;
  }
  &:last-child {
    margin-right: 0;
  }
`;
exports.ButtonGroup = ButtonGroup;

const Button = styled.button`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  text-decoration: none;
  font-size: 1.5rem;

  padding: 1rem 2rem;
  border: 1px solid palevioletred;
  border-radius: 100px;
`;
exports.Button = Button;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
exports.TomatoButton = TomatoButton;

const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);
exports.Link = Link;

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;
exports.StyledLink = StyledLink;

const Input = styled.input`
  padding: 1rem;
  margin: 1rem;
  color: ${props => props.inputColor || "palevioletred"};
  border: none;
  border-radius: 3px;
  background: papayawhip;
  font-size: 1.5rem;
`;
exports.Input = Input;
