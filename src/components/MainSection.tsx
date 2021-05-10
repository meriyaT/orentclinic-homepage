import * as React from "react";
import styled from "styled-components";
import { Doctors } from "./Doctors";
import { Contact } from "./Contact";
import { Location } from "./Location";
import { Alert } from "./Alert";

export const MainSection = () => {
  return (
    <MainSectionWrapper>
      <Alert />
      <Doctors />

      <Contact />
      <Location />
    </MainSectionWrapper>
  );
};

const MainSectionWrapper = styled.main`
  display: flex;
  height: 100%;
  top: 0;
  right: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-left: 40px;
  padding-top: 0;
  width: 70vw;
  @media (max-width: 650px) {
    width: 100%;
    position: static;
  }
`;
