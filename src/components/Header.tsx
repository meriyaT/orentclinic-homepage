import * as React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderWrapper>
      <NavWrapper>
        <UnorderedList role="list">
          <MenuItem>Doctors</MenuItem>
          <MenuItem>Location</MenuItem>
          <MenuItem>Contacts</MenuItem>
        </UnorderedList>
      </NavWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  position: absolute;
  justify-content: space-between;
  padding: 20px 20px;
  width: 60vw;
  right: 0;
`;

const NavWrapper = styled.nav`
  font-weight: 300;
  width: 100%;
`;

const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const MenuItem = styled.li`
  padding: 5px 15px;
  font-family: "PT Serif", serif;
  font-size: 1.563rem;
  color: #502f4c;
`;
