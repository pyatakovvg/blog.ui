
import { Events } from '@helper/utils';
import { TThemeName } from '@typing/theme';

import React from 'react';
import { createGlobalStyle, ThemeProvider as ComponentThemeProvider, DefaultTheme } from 'styled-components';

// import DarkTheme from './Dark';
import LightTheme from './Light';

import Globals from './global';

// @ts-ignore
import fontawesome from '../font/css/index.css';


const InitStyles = createGlobalStyle`
  ${fontawesome}
`;


interface IProps {
  defaultTheme?: TThemeName;
  children: React.ReactElement | React.ReactNode;
}


const events = new Events();


function getTheme(name: TThemeName): DefaultTheme {
  switch(name) {
    // case 'dark': return DarkTheme;
    default: return LightTheme;
  }
}

export function changeTheme(name: TThemeName) {
  events.emit('theme:change', name);
}

export function ThemeProvider({ defaultTheme = 'light', children }: IProps) {
  const [theme, setTheme] = React.useState(defaultTheme);
  const customTheme: typeof LightTheme = React.useMemo(() => getTheme(theme), [theme]);

  React.useEffect(() => {
    function handleChange(name: TThemeName) {
      if (name !== theme) {
        setTheme(name);
      }
    }
    events.on('theme:change', handleChange);
    return () => {
      events.off('theme:change', handleChange);
    }
  }, [theme]);

  return (
    <ComponentThemeProvider theme={customTheme}>
      <Globals />
      <InitStyles />
      {React.Children.map(children, (Child) => {
        return React.Children.only(Child);
      })}
    </ComponentThemeProvider>
  );
}

export { ThemeContext } from 'styled-components';
