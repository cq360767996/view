import type { Data, CSSStyleDataWithRotate } from '@/typings';
import { StyleValue } from 'vue';

export function hasClass(el: Element, cls: string) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}

export function addClass(el: Element, cls: string) {
  if (!el) return;
  let curClass = el.className;
  const classes = (cls || '').split(' ');

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

export function removeClass(el: Element, cls: string) {
  if (!el || !cls) return;
  const classes = cls.split(' ');
  let curClass = ' ' + el.className + ' ';

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.className = curClass.trim();
  }
}

export const patchUnit = (style: Data | CSSStyleDataWithRotate) => {
  const needAddPixelList = [
    'width',
    'height',
    'top',
    'left',
    'bottom',
    'right',
    'fontSize',
    'borderWidth',
    'borderRadius',
  ];
  const result: StyleValue = {};
  for (const [rawWey, value] of Object.entries(style)) {
    if (!value) continue;

    const key = rawWey as keyof StyleValue;

    // rotate特殊处理
    if (key === 'rotate') {
      result.transform = `rotate(${value}deg)`;
      continue;
    }

    if (key === 'scale') {
      result.transform = `scale(${(value as number) / 100})`;
      continue;
    }

    result[key] = needAddPixelList.includes(key) ? value + 'px' : value;
  }
  return result;
};

export const splitStyleAndPatch = (style: CSSStyleDataWithRotate, position = true) => {
  const { width, height, left, top, ...resStyle } = style;
  const data = position ? { width, height, left, top } : { ...resStyle };
  return patchUnit(data);
};
