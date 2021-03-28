import { defineAsyncComponent, Component } from 'vue';
import type { Gallery } from '@/typings';

const gallery: Gallery = {
  name: '盒子',
  version: '0.1.0',
  component: defineAsyncComponent<Component>(() => import('./box.vue')),
};

export default gallery;
