
import React from 'react';
import styled from 'styled-components';


interface IProps {
  children: React.ReactElement;
}


const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  background: ${props => props.theme.color.light};
  overflow: auto;
`;

function EmptyWrapper(props: IProps) {
  return (
    <_Wrapper>
      { React.Children.only(props.children) }
    </_Wrapper>
  );
}

export default React.memo(EmptyWrapper);
