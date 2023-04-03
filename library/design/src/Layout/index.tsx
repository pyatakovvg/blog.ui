
import React from 'react';

import LayoutMain from './Main';
import LayoutSub from './Sub';


export interface IProps {
  type?: 'main' | 'secondary' | undefined;
  title: string;
  backTo?: string;
  children: React.ReactElement | React.ReactNode;
}


function LayoutFactory(props: IProps) {
  switch (props.type) {
    case 'secondary': return <LayoutSub {...props}>{ props.children }</LayoutSub>;
    default: return <LayoutMain {...props}>{ props.children }</LayoutMain>;
  }
}

export default LayoutFactory;
