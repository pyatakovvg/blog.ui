
import React from 'react';

import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';


export interface IProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | undefined;
  children: React.ReactElement | React.ReactNode;
}


function HeaderFactory({ level, ...rest }: IProps) {
  switch(level) {
    case 2: return <Level2 {...rest}>{ rest.children }</Level2>;
    case 3: return <Level3 {...rest}>{ rest.children }</Level3>;
    default: return <Level1 {...rest}>{ rest.children }</Level1>;
  }
}

export default HeaderFactory;
