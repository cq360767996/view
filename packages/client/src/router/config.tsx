import { MenuOption } from 'naive-ui';
import { RouterLink } from 'vue-router';
import { CarOutline, CogOutline } from '@vicons/ionicons5';

export const routeList: Array<MenuOption> = [
  {
    key: 'page',
    icon: () => <CarOutline />,
    label: () => <RouterLink to="/manage/page">页面管理</RouterLink>,
  },
  {
    key: 'masterplate',
    icon: () => <CogOutline />,
    label: () => <RouterLink to="/manage/masterplate">模板管理</RouterLink>,
  },
];
