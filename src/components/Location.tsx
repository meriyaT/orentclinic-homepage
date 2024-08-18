import * as React from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { SectionWrapper, Header } from "./BasicUIElements";

export const Location = () => {
  return (
    <SectionWrapper>
      <Header>Location</Header>
      <a href='https://maps.app.goo.gl/BpveSutoKhSscRSf6'>Google maps location</a>
    </SectionWrapper>
  );
};
