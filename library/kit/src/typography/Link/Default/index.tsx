
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { IProps } from '../index';


function LinkDefault({ href, ...rest }: Omit<IProps, 'type'>) {
  return (
    <Link {...rest} to={href}>
      { rest.children }
    </Link>
  );
}

export default styled(LinkDefault)`
  display: inline-block;
  outline: none;
  color: ${props => props.theme.link.default.color};
  font-size: ${props => props.theme.link.font_size};
  font-weight: ${props => props.theme.link.font_weight};
  font-family: ${props => props.theme.link.font_family};
  line-height: 1.6;
  
  &:hover {
    color: ${props => props.theme.link.hover.color};
  }
  
  &:active {
    color: ${props => props.theme.link.active.color};
  }
`;
