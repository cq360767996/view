declare enum FormEnum {
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  INPUT = 'input',
  INPUT_NUMBER = 'input-number',
  SELECT = 'select',
  SWITCH = 'switch',
  SLIDER = 'slider',
  COLOR_PICKER = 'color-picker',
}

type ResponseData<T = any> = {
  code: number;
  data: T;
  msg: string;
};

type Data<T = unknown> = Record<string, T>;

type Pos = {
  top: number;
  left: number;
  width: number;
  height: number;
  right?: number;
  bottom?: number;
};

type CSSStyleFilter =
  | number
  | 'parentRule'
  | 'length'
  | 'getPropertyPriority'
  | 'getPropertyValue'
  | 'item'
  | 'removeProperty'
  | 'setProperty';

type CSSStyleKey = Exclude<keyof CSSStyleDeclaration, CSSStyleFilter>;

type CSSStyleData<T = string> = { [key in CSSStyleKey]?: T };

type ComponentAttr = {
  key: CSSStyleKey;
  type: FormEnum;
  label: string;
  config?: Data;
  data?: Array<{ id: number | string; label: string }>;
};

type Component = {
  id: string;
  component: string;
  label?: string;
  propValue?: string;
  icon?: string;
  attr: Array<ComponentAttr>;
  animations?: Array<any>;
  events?: Array<Event>;
  position: Pos;
  style: Partial<CSSStyleDeclaration>;
};

type Board = {
  index: number;
  data: Array<Component>;
};

type Snapshot = {
  index: number;
  data: Array<Board>;
};

type RootStateType = {
  board: Board;
  snapshot: Snapshot;
};
