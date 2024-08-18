
import * as React from "react";
import styled from "styled-components";
import { Header, SectionWrapper } from "./BasicUIElements";
import thomas from "../../src/images/thomas.jpeg";
import susan from "../../src/images/susan.jpg";

export const Mission = () => {
  return (
    <SectionWrapper>
      <Header>Mission</Header>
      <SmallSection>
        We believe that a strong, trusting doctor-patient relationship is essential for effective treatment and long-term health. 
        Here at Orent Clinic, you're more than just a patient - you're an active partner in your health journey. 
        Together, we'll work towards achieving your best possible health outcomes.
      </SmallSection>
    </SectionWrapper>
  );
};

const SmallSection = styled.div`
  font-family: "PT Mono", monospace;
  font-size: 1rem;
`;

