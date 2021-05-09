import * as React from "react";
import styled from "styled-components";
import { Header, SectionWrapper } from "./BasicUIElements";

export const Contact = () => {
  return (
    <SectionWrapper>
      <Header>Contact us</Header>
      <ContactWrapper>
        <ContactSection>
          <ContactItem>
            <strong>Phone</strong>
          </ContactItem>
          <ContactItem>+91-479-2455538</ContactItem>
          <ContactItem>+91-934-934-5538</ContactItem>
          <ContactItem>+91-938-895-8498</ContactItem>
          <ContactItem>+91-944-740-0188 (whatsapp only)</ContactItem>
        </ContactSection>
        <ContactSection>
          <ContactItem>
            <strong>Email</strong>
          </ContactItem>
          <ContactItem>orentclinic@gmail.com</ContactItem>
        </ContactSection>
        <ContactSection>
          <ContactItem>
            <strong>Hours</strong>
          </ContactItem>
          <ContactItem>
            <strong>Monday to Friday</strong>
          </ContactItem>
          <ContactItem>10:00 am to 1:00 pm</ContactItem>
          <ContactItem>4:00 pm to 6:00 pm</ContactItem>
          <ContactItem>
            <strong>Weekend - Holiday</strong>
          </ContactItem>
        </ContactSection>
      </ContactWrapper>
    </SectionWrapper>
  );
};

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactItem = styled.p`
  font-family: "PT Mono", monospace;
  font-size: 1rem;
  padding: 2px;
  margin: 2px;
`;
