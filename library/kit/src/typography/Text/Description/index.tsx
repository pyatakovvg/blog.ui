
import React from 'react';
import styled from 'styled-components';

import { IProps } from '../index';


function TextDefault(props: Omit<IProps, 'type'>) {
  return (
    <p {...props}>{ props.children }</p>
  );
}

export default styled(TextDefault)`
  display: block;
  color: ${props => props.theme.paragraph.description.color};
  font-size: ${props => props.theme.paragraph.description.font_size};
  font-weight: ${props => props.theme.paragraph.description.font_weight};
  font-family: ${props => props.theme.paragraph.description.font_family};
  line-height: 1.6;
`
