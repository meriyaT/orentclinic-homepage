import * as React from "react";
import { SectionWrapper, Header } from "./BasicUIElements";

const address =
  "<p>I.T.I Junction, M C Road</p><p>Chengannur, Kerala, India, 689121</p><p>https://maps.app.goo.gl/BpveSutoKhSscRSf6</p>";

export const Location = () => {
  return (
    <SectionWrapper>
      <Header>Location</Header>
      {address}
      <a href='https://maps.app.goo.gl/BpveSutoKhSscRSf6'>Google maps location</a>
    </SectionWrapper>
  );
};
