import * as React from "react";
import styled from "styled-components";
import { Header, SectionWrapper } from "./BasicUIElements";
import thomas from "../../src/images/thomas.jpeg";
import susan from "../../src/images/susan.jpg";

export const Doctors = () => {
  return (
    <SectionWrapper>
      <Header>Doctors</Header>
      <Doctor>
        <DocImageWrapper>
          <DocImage src={thomas} />
        </DocImageWrapper>
        <DocContentWrapper>
          <NameWrapper>
            <DocName>Dr. K.M. Thomas</DocName>
            <DocQualification>MBBS, D Ortho</DocQualification>
          </NameWrapper>

          <DocEducation>
            <Degree>MBBS</Degree>
            <College>Govt. Medical College, Thiruvananthapuram, 1981</College>
          </DocEducation>
          <DocEducation>
            <Degree>PG</Degree>
            <College>Govt. Medical College, Calicut, 1986</College>
          </DocEducation>
          <DocSpeciality>Accident and Trauma Care</DocSpeciality>
        </DocContentWrapper>
      </Doctor>
      <Doctor>
        <DocImageWrapper>
          <DocImage src={susan} />
        </DocImageWrapper>
        <DocContentWrapper>
          <NameWrapper>
            <DocName>Dr. Susan Thomas</DocName>
            <DocQualification>MBBS, DLO, MS</DocQualification>
          </NameWrapper>

          <DocEducation>
            <Degree>MBBS</Degree>
            <College>Govt. Medical College, Thiruvananthapuram, 1981</College>
          </DocEducation>
          <DocEducation>
            <Degree>MS</Degree>
            <College>Govt. Medical College, Calicut, 1987</College>
          </DocEducation>
          <DocSpeciality>ENT</DocSpeciality>
        </DocContentWrapper>
      </Doctor>
    </SectionWrapper>
  );
};

const Doctor = styled.article`
  margin: 5px;
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0;
  }
`;

const DocImage = styled.img`
  width: 100%;
`;

const DocImageWrapper = styled.div`
  max-width: 200px;
`;

const DocContentWrapper = styled.div`
  max-width: 500px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const DocName = styled.h4`
  font-family: "PT Mono", monospace;
  font-size: 1.563rem;
  padding: 5px;
`;

const DocQualification = styled.p`
  font-family: "PT Mono", monospace;
  font-size: 1rem;
  padding: 5px;
`;

const DocEducation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const Degree = styled.div`
  padding: 2px 5px;
  margin-right: 5px;
  color: white;
  background-color: #9a7aa0;
  border-radius: 5px;
  max-width: fit-content;
`;

const College = styled.div`
  font-family: "PT Mono", monospace;
  font-size: 1rem;
`;

const DocSpeciality = styled.div`
  font-family: "PT Mono", monospace;
  font-size: 1rem;
  font-weight: bolder;
  padding: 5px;
`;
