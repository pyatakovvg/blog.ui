
import React from 'react';

import TMode from "@typing/mode";
import TSize from "@typing/size";

import Default from './Default';
import Context from './Context';


export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: TMode;
  size?: TSize;
}


function Factory({ form, children, ...props }: IProps) {
  switch (form) {
    case 'context': return <Context {...props}>{ children }</Context>
    default: return <Default {...props}>{ children }</Default>;
  }
}

export default Factory;
