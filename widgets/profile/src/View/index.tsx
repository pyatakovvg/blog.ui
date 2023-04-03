
import React from 'react';
import Hammer from 'hammerjs';
import styled from "styled-components";

import Content from "./Content";


const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
`;

const _Icon = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  font-size: 26px;
  color: ${props => props.theme.color.white};
`;

const _Content = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  flex: 1 0;
  align-items: flex-end;
  background: rgba(0,0,0, .2);
  backdrop-filter: blur(2px);
`;

const _Bar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  width: 320px;
  background: ${props => props.theme.color.white};
  padding: 16px;
  box-sizing: border-box;
`;


function Profile() {
  const refContent = React.useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (refContent.current) {
      const hm = new Hammer.Manager(refContent.current);
      const swipeRight = new Hammer.Swipe({ event: 'swipe:right', direction: Hammer.DIRECTION_RIGHT });

      hm.add(swipeRight);

      hm.on('swipe:right', () => {
        setOpen(false);
      });
      return () => {
        hm.destroy();
      };
    }
  }, [isOpen]);

  React.useEffect(() => {
    function handleOutClick(event: any) {
      event.preventDefault();

      if (refContent.current === event.target) {
        setOpen(false);
      }
    }

    refContent.current?.addEventListener('click', handleOutClick);
    return () => {
      refContent.current?.removeEventListener('click', handleOutClick);
    };
  }, [isOpen]);

  return (
    <_Wrapper>
      <_Icon onClick={() => setOpen( ! isOpen)}>
        <i className="fa-solid fa-user" />
      </_Icon>
      {isOpen && (
        <_Content ref={refContent}>
          <_Bar>
            <Content onClose={() => setOpen(false)} />
          </_Bar>
        </_Content>
      )}
    </_Wrapper>
  );
}

export default Profile;
