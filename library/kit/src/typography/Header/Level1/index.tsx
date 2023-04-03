
import React from 'react';
import styled from 'styled-components';

import { IProps } from '../index';


function HeaderLevel1(props: Omit<IProps, 'level'>) {
  return (
    <h1 {...props}>{ props.children }</h1>
  );
}

export default styled(HeaderLevel1)`
  display: block;
  color: ${props => props.theme.header.level_1.color};
  font-size: ${props => props.theme.header.level_1.font_size};
  font-weight: ${props => props.theme.header.level_1.font_weight};
  font-family: ${props => props.theme.header.level_1.font_family};
`;
