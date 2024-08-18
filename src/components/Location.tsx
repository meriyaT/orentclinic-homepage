import * as React from "react";
import styled from "styled-components";
import { SectionWrapper, Header } from "./BasicUIElements";

const address =
  "<p>I.T.I Junction, M C Road</p><p>Chengannur, Kerala, India, 689121</p><p>https://maps.app.goo.gl/BpveSutoKhSscRSf6</p>";

export const Location = () => {
  return (
    <SectionWrapper>
      <Header>Location</Header>
      <AddressLine>I.T.I Junction, M C Road</AddressLine>
      <AddressLine>Chengannur, Kerala, India, 689121</AddressLine>
      <a href='https://maps.app.goo.gl/BpveSutoKhSscRSf6'>Google maps location</a>
      <br/>
    </SectionWrapper>
  );
};


const AddressLine = styled.p`
  font-family: "PT Mono", monospace;
  font-size: 1rem;
`;
