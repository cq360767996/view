import type { Board, CSSStyleDataWithSize, Data } from '@/typings';
import { nextTick, reactive } from 'vue';

export type Menu = {
  show: boolean;
  style: Partial<CSSStyleDataWithSize>;
  ref?: HTMLElement;
  container?: HTMLElement;
};

export type MenuType = 'board' | 'layer';

const menu = reactive<Data<Menu>>({
  board: {
    show: false,
    style: {},
  },
  layer: {
    show: false,
    style: {},
  },
});

const showMenu = (e: MouseEvent, key: MenuType, board: Board) => {
  e.preventDefault();
  const { pageX, pageY } = e;
  if (board.selected.length === 0) return;
  menu[key].show = true;

  nextTick(() => {
    const { ref, container, style } = menu[key];
    if (!ref || !container) return;
    const menuGap = 10;
    const { width, height } = ref.getBoundingClientRect();
    const { width: boxW, height: boxH, left, top } = container.getBoundingClientRect();
    style.left = Math.min(pageX - left, boxW - width - menuGap);
    style.top = Math.min(pageY - top, boxH - height - menuGap);
  });
};

const hideMenu = (key: MenuType) => {
  menu[key].show = false;
};

export { menu, showMenu, hideMenu };
