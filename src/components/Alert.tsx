import * as React from "react";
import styled from "styled-components";
import { Header, SectionWrapper } from "./BasicUIElements";

export const Alert = () => {
  return (
    <SectionWrapper>
      <AlertWrapper>
        <AlertTitle>ANNOUNCEMENT</AlertTitle>
        <AlertMessage>
          Dr. Susan Thomas is on leave and will be available for consultations from first week of April 2024. 
          Please contact 934 934 5538 for more details.
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
