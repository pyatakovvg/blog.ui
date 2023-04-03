
export type TWrapperKey = 'default' | 'level-1' | 'level-2';

export type TWrapper = {
  'default'?: (props: any) => JSX.Element;
  'level-1'?: (props: any) => JSX.Element;
  'level-2'?: (props: any) => JSX.Element;
};
