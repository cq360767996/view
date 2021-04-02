import { defineAsyncComponent } from 'vue';
import { DataSource } from '@/enum';

const gallery: Gallery = {
  name: '柱状图',
  version: '0.1.0',
  defaultStyle: {
    width: 400,
    height: 300,
  },
  defaultDataset: {
    type: DataSource.STATIC,
    static: [
      { x: 'Mon', y: 120 },
      { x: 'Tue', y: 200 },
      { x: 'Wed', y: 150 },
      { x: 'Thu', y: 80 },
      { x: 'Fri', y: 70 },
      { x: 'Sat', y: 110 },
      { x: 'Sun', y: 130 },
    ],
  },
  component: defineAsyncComponent(() => import('./bar.vue')),
};

export default gallery;
