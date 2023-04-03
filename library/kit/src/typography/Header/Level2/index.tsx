
import React from 'react';
import styled from 'styled-components';

import { IProps } from '../index';


function HeaderLevel2(props: Omit<IProps, 'level'>) {
  return (
    <h2 {...props}>{ props.children }</h2>
  );
}

export default styled(HeaderLevel2)`
  display: block;
  color: ${props => props.theme.header.level_2.color};
  font-size: ${props => props.theme.header.level_2.font_size};
  font-weight: ${props => props.theme.header.level_2.font_weight};
  font-family: ${props => props.theme.header.level_2.font_family};
`;
