import * as React from "react";
import * as ReactDOM from "react-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { SideBar, MainSection } from "./components/";

const App = () => {
  return (
    <AppWrapper>
      <SideBar />
      <MainSection />
      <GlobalStyles />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  height: 100%;
  display: flex;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

ReactDOM.render(<App />, document.getElementById("root"));
