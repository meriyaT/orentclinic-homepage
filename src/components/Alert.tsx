import * as React from "react";
import styled from "styled-components";
import { Header, SectionWrapper } from "./BasicUIElements";

export const Alert = () => {
  return (
    <SectionWrapper>
      <AlertWrapper>
        <AlertTitle>ANNOUNCEMENT</AlertTitle>
        <AlertMessage>
         We wish to inform our valued patients that our clinic will be temporary closed. 
         We will resume consultations starting from August 27, 2024.
         For any inquiries or further details, please contact us at 934 934 5538.
         We apologize for any inconvenience this may cause and appreciate your understanding.
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
