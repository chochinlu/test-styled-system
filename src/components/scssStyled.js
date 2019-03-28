import styled from "styled-components";

const Thing = styled.button`
  font-size: 1.5rem;
  font-weight: 100;
  color: blue;
  cursor: pointer;
  display: block;
  width: 100%;
  margin: 1rem 0;
  padding: 1rem;

  ::before {
    content: "🚀";
  }

  :hover {
    color: red;
    font-family: cursive;
    font-size: 3rem;
  }

  &.something {
    background: orange;
  }

  .something {
    background: blue;
  }

  .something-else & {
    border: 1px solid red;
  }
`;
exports.Thing = Thing;
