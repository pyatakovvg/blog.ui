
import Profile from '@widget/profile';

import React from 'react';
import styled from "styled-components";

import Menu from './Menu';
import Search from './Search';


const _Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0;
  overflow: auto;
`;

const _Menu = styled.div`
  display: block;
`;

const _Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
`;

const _Search = styled.div`
  display: block;
`;

const _Profile = styled.div`
  display: block;
`;


function Header() {
  return (
    <_Wrapper>
      <_Menu>
        <Menu />
      </_Menu>
      <_Content>

      </_Content>
      <_Search>
        <Search />
      </_Search>
      <_Profile>
        <Profile />
      </_Profile>
    </_Wrapper>
  );
}

export default Header;
