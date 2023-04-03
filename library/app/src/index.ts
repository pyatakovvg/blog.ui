/**
 * Компоненты приложения
 */
export type { IContext } from './App/context';

export { default as Plugin } from './App/Plugin';
export { default as useApp } from './App/hooks/useApp';
export { App as default, Module, Controller, loader } from './App';
