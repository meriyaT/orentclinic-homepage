import * as React from "react";
import styled from "styled-components";

export const SideBar = () => {
  return (
    <SideBarWrapper>
      <MainAside>
        <MainHeader>Orent Clinic</MainHeader>
        <MainContent>
          <h4>Welcome! At Orent Clinic, we redefine healthcare by 
            offering a holistic approach and prevention that transcends conventional treatment. 
            Our mission is to provide expert care in Orthopaedics and ENT while 
            focusing on enhancing your overall quality of life and longevity. 
            We view each patient as a unique individual deserving personalized attention. 
            Our commitment goes beyond addressing immediate health concerns; 
            we strive to improve your health span and lifespan, 
            ensuring a comprehensive approach to your well-being. 
            With a foundation built on medical excellence and unwavering ethical standards, 
            we take pride in delivering top-quality healthcare.</h4>
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
  background-color: #006ba6;
  overflow-y: auto;
  @media (max-width: 800px) {
    width: 100%;
    position: static;
  }
`;

const SemiCircle = styled.div`
  width: 15vw;
  border-top-right-radius: 100%;
  border-bottom-right-radius: 10%;
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
