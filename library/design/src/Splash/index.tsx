
import React from 'react';
import styled from 'styled-components';


const _Wrapper = styled.div((props) => `
  display: flex;
  flex-direction: column;
  flex: 1 0;
  justify-content: center;
  align-items: center;
  background: ${props.theme.color.primary};
`);

const _Icon = styled.div((props) => `
  display: block;
  width: 32px;
  height: 32px;
  background: ${props.theme.color.white};
  border-radius: 50%
`);


function Loader() {
  return (
    <_Wrapper>
      <_Icon />
    </_Wrapper>
  );
}

export default Loader;
