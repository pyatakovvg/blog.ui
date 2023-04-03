
import React from 'react';

import Default from './Default';


export interface IProps {
  type?: 'default' | undefined;
  href: string;
  children: React.ReactElement | React.ReactNode;
}


function LinkFactory({ type, ...rest }: IProps) {
  switch(type) {
    default: return <Default {...rest}>{ rest.children }</Default>;
  }
}

export default LinkFactory;
