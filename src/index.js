import React from "react";
import ReactDOM from "react-dom";
import Box from "./components/Box";
import GlobalStyle from "./components/global";
import {
  Title,
  Wrapper,
  Button,
  TomatoButton,
  ButtonGroup,
  Link,
  StyledLink,
  Input
} from "./components/styled";
import { Thing } from "./components/scssStyled";
import "./styles.css";

const ReversedButton = props => (
  <button {...props} children={props.children.split("").reverse()} />
);

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Wrapper>
          <Title>ddddd</Title>
        </Wrapper>

        <Box color="#fff" bg="tomato">
          Box
        </Box>

        <ButtonGroup>
          <Button>Normal Button</Button>
          <Button primary as="a" href="/">
            Link with Button styles
          </Button>
          <TomatoButton>水喔Normal</TomatoButton>
          <Button as={ReversedButton}>Custum Button</Button>
        </ButtonGroup>

        <div>
          <Link>unstyled</Link>
          <br />
          <StyledLink>Styled</StyledLink>
        </div>

        <div>
          <Input type="text" defaultValue="hahahaha" />
          <Input
            type="text"
            defaultValue="hahahaha"
            inputColor="rebeccapurple"
          />
        </div>

        <div>
          <Thing>iiiiiii</Thing>
          <Thing className="something">iiiiiii</Thing>
          <Thing>
            <p>hhhhh</p>
            <p className="something">ddddd</p>
          </Thing>
          <div className="something-else">
            <Thing>cool!!</Thing>
          </div>
        </div>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
