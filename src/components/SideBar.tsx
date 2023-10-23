import * as React from "react";
import styled from "styled-components";

export const SideBar = () => {
  return (
    <SideBarWrapper>
      <MainAside>
        <MainHeader>Orent Clinic</MainHeader>
        <MainContent>
          <h4>We are proud to provide quality health care to our patients.</h4>
          <br />
          <h4>
            In addition to all routine Orthopaedic and ENT care, ORENT takes
            personal interest to build a rapport and confidence between doctor
            and the patient.
          </h4>
        </MainContent>
      </MainAside>
      {/* <SemiCircle /> */}
    </SideBarWrapper>
  );
};

const SideBarWrapper = styled.section`
  display: flex;
  height: 100%;
  width: 30vw;
  top: 0;
  position: fixed;
  @media (max-width: 800px) {
    width: 100%;
    position: static;
  }
`;

const SemiCircle = styled.div`
  width: 15vw;
  border-top-right-radius: 100%;
  border-bottom-right-radius: 10%;
  background-color: #006ba6;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const MainAside = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #006ba6;
`;

const MainHeader = styled.h1`
  color: white;
  padding: 20px;
  /* position: absolute; */

  font-family: "PT Serif", serif;
  font-size: 3.815rem;
`;

const MainContent = styled.div`
  padding: 20px;
  /* position: absolute;
  top: 25%; */
  color: white;
  font-family: "PT Mono", monospace;
  font-size: 1.0rem;
`;

const SaffronDiv = styled.div`
  background-color: #ff8f1c;
  width: 23vw;
  min-height: 37px;
  margin-left: 20px;
`;

const WhiteDiv = styled.div`
  background-color: #ffffff;
  width: 23vw;
  min-height: 37px;
  margin-left: 20px;
`;

const GreenDiv = styled.div`
  background-color: #509e2f;
  width: 23vw;
  min-height: 37px;
  margin-left: 20px;
`;
