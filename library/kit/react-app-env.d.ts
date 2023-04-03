/// <reference types="react" />
/// <reference types="react-scripts" />

import 'styled-components';
import LightTheme from './src/themes/Light';

const CustomTheme = typeof LightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}

