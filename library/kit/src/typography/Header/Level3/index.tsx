
import React from 'react';
import styled from 'styled-components';

import { IProps } from '../index';


function HeaderLevel3(props: Omit<IProps, 'level'>) {
  return (
    <h3 {...props}>{ props.children }</h3>
  );
}

export default styled(HeaderLevel3)`
  display: block;
  color: ${props => props.theme.header.level_3.color};
  font-size: ${props => props.theme.header.level_3.font_size};
  font-weight: ${props => props.theme.header.level_3.font_weight};
  font-family: ${props => props.theme.header.level_3.font_family};
`;
