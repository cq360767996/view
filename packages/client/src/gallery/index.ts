import type { Gallery, Data, GalleryGroup, Group } from '@/typings';
import type { App } from 'vue';
import ComponentGroup from './group.vue';

const modules = import.meta.glob('./*/index.ts');

const groups: Data<any> = {};

for (const [key, module] of Object.entries(modules)) {
  const matcher = key.match(/\.\/(.*)\/index\.ts/);
  if (matcher?.[1]) groups[matcher[1]] = module;
}

export default async (app: App<Element>) => {
  const galleryList: Array<Gallery> = [];
  const galleryGroup: Array<GalleryGroup> = [];

  async function resolveGroup(getGroup: () => Promise<{ [key: string]: any }>) {
    const module = await getGroup();
    const group = module.default as Group;
    const { name: groupName, icon, components, order, dataConfig } = group;
    const list: Array<Gallery> = [];

    for (const [key, getModule] of Object.entries(components)) {
      const module = await getModule();
      const gallery = module.default;
      gallery.type = key;
      gallery.dataConfig = dataConfig || gallery.dataConfig;
      app.component(`cq-${key}`, gallery.component);

      list.push(gallery);
      galleryList.push(gallery);
    }
    galleryGroup[order] = { groupName, icon, list };
  }

  app.component('CqGroup', ComponentGroup);
  for (const key in groups) await resolveGroup(groups[key]);

  return { list: galleryList, group: galleryGroup };
};

export function getImgSrc(type?: string) {
  const modules = import.meta.glob<{ default: string }>('/src/assets/img/gallery/*.png', {
    eager: true,
  });
  let Icon;

  for (const key of Object.keys(modules)) {
    const matcher = key.match(/gallery\/(.*)\.png/);
    if (matcher?.[1] && type === matcher[1]) {
      Icon = modules[key].default;
      break;
    }
  }

  const defaultKey = '/src/assets/img/gallery/default.png';
  return Icon || modules[defaultKey].default;
}
