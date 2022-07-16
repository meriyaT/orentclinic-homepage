import * as React from "react";
import styled from "styled-components";
import { Header, SectionWrapper } from "./BasicUIElements";

export const Alert = () => {
  return (
    <SectionWrapper>
      <AlertWrapper>
        <AlertTitle>HOLIDAY ANNOUNCEMENT</AlertTitle>
        <AlertMessage>
          Please note that clinic will be closed from July 11, 2022 to October
          16, 2022. Clinic will resume consultation from October 17, 2022.
          During our holiday time, we are available for Telemedicine services
          between 8:30 pm to 10:30pm IST. You can contact +91 9349345538 between
          9:00am and 2:00 pm to schedulde online consultation.
        </AlertMessage>
      </AlertWrapper>
    </SectionWrapper>
  );
};

const AlertWrapper = styled.div`
  background-color: #e84855;
  display: flex;
  border-radius: 8px;
  padding-left: 5px;
  flex-direction: column;
`;

const AlertTitle = styled.h4`
  font-family: "PT Serif", serif;
  font-size: 1.663rem;
  padding: 5px;
  color: white;
`;

const AlertMessage = styled.p`
  font-family: "PT Mono", monospace;
  font-size: 1rem;
  padding: 5px;
  color: white;
`;
