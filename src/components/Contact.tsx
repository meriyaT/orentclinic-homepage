import * as React from "react";
import styled from "styled-components";
import { Header, SectionWrapper } from "./BasicUIElements";

export const Contact = () => {
  return (
    <SectionWrapper>
      <Header>Contact us</Header>
      <ContactWrapper>
        <ContactSection>
          <ContactItemHeader>
            <strong>Phone</strong>
          </ContactItemHeader>
          <ContactItem>+91-479-2455538</ContactItem>
          <ContactItem>+91-934-934-5538</ContactItem>
          <ContactItem>+91-938-895-8498</ContactItem>
          <ContactItem>+91-892-104-2340</ContactItem>
        </ContactSection>
        <ContactSection>
          <ContactItemHeader>
            <strong>Email</strong>
          </ContactItemHeader>
          <ContactItem>orentconsult@gmail.com</ContactItem>
        </ContactSection>
        <ContactSection>
          <ContactItemHeader>
            <strong>Hours</strong>
          </ContactItemHeader>
          <ContactItem>
            <strong>Monday to Friday</strong>
          </ContactItem>
          <ContactItem>10:00 AM to 2:00 PM</ContactItem>
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

const ContactItemHeader = styled.p`
  font-family: "PT Mono", monospace;
  font-size: 1rem;
  padding: 2px;
  margin: 2px;
  color: #006ba6;
`;
