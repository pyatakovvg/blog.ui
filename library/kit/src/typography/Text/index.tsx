
import React from 'react';

import Default from './Default';
import Description from './Description';


export interface IProps extends React.HTMLAttributes<HTMLParagraphElement> {
  type?: 'description' | undefined;
  children: React.ReactElement | React.ReactNode;
}


function TextFactory({ type, ...rest }: IProps) {
  switch(type) {
    case 'description': return <Description {...rest}>{ rest.children }</Description>;
    default: return <Default {...rest}>{ rest.children }</Default>;
  }
}

export default TextFactory;
