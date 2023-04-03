
import React from 'react';

import styled from 'styled-components';


interface IProps {
  children: React.ReactElement | React.ReactNode;
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  overflow: auto;
`;

const Scrollable: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<IProps> & React.RefAttributes<HTMLDivElement>
> = React.forwardRef((props: IProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <Container ref={ref}>
      { props.children }
    </Container>
  );
});

export default Scrollable;
