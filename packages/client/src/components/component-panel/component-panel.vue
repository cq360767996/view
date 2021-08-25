<template>
  <section
    class="component-panel"
    :class="{ 'component-panel--hide': !panel.component }"
    @dragstart="handleDragStart"
  >
    <header class="component-panel__header">
      <div>组件列表</div>
      <LeftOutlined @click="panel.component = !panel.component" />
    </header>
    <div class="component-panel__select-box">
      <NInput
        v-show="panel.component"
        enter-button
        placeholder="请输入组件名"
        @search="searchComponent"
      />
    </div>
    <div class="component-panel__tabs">
      <ul class="component-panel__tab">
        <li
          v-for="(item, i) in galleryGroup"
          :key="item.groupName"
          :class="{ '--active': i === activeTab }"
          @click="activeTab = i"
        >
          <div><component :is="item.icon" /></div>
          <div>{{ item.groupName }}</div>
        </li>
      </ul>
      <ul class="component-panel__list">
        <li
          v-for="item in galleryGroup[activeTab].list"
          :key="item.type"
          draggable="true"
          class="component-panel__item"
          :data-type="item.type"
        >
          <header>{{ item.name }}</header>
          <img :src="getImgSrc(item.type)" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { galleryGroup } from '@/gallery';
import { ref } from 'vue';
import { LeftOutlined } from '@ant-design/icons-vue';
import { panel } from '@/hooks';
import DefaultIcon from '@/assets/img/gallery/default.png';
import { NInput, useThemeVars } from 'naive-ui';

const activeTab = ref(0);

const theme = useThemeVars();
console.log(theme.value);

const handleDragStart = (e: DragEvent) => {
  const target = e.target as HTMLDataListElement;
  if (target.dataset.type) {
    e.dataTransfer?.setData('type', target.dataset.type);
  }
};

const searchComponent = () => {
  // TODO: 查询组件
};

const getImgSrc = (type?: string) => {
  const modules = import.meta.globEager('/src/assets/img/gallery/*.png');
  let Icon;

  for (const key of Object.keys(modules)) {
    const matcher = key.match(/gallery\/(.*)\.png/);
    if (matcher?.[1] && type === matcher[1]) {
      Icon = modules[key].default;
      break;
    }
  }
  return Icon || DefaultIcon;
};
</script>

<style lang="less">
.component-panel {
  width: 233px;
  flex-shrink: 0;
  box-sizing: border-box;
  z-index: 4;
  background-color: v-bind('theme.cardColor');
  transition: width 0.3s ease-in-out;
  white-space: nowrap;
  border-right: 1px solid v-bind('theme.borderColor');
  color: v-bind('theme.textColor2');

  &--hide {
    width: 0;
    border: 0;
  }

  &__header {
    height: 30px;
    background-color: v-bind('theme.railColor');
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 10px;

    span {
      cursor: pointer;
    }
  }

  &__select-box {
    padding: 5px;
  }

  &__list {
    flex: 1;
    box-sizing: border-box;
    padding: 5px;
    display: grid;
    justify-content: start;
    align-content: start;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px 6px;
    margin-bottom: 0;
    overflow: auto;
  }

  &__item {
    width: 80px;
    height: 80px;
    cursor: pointer;

    header {
      height: 22px;
      box-sizing: border-box;
      padding: 0 5px;
      background-color: v-bind('theme.tableHeaderColor');
      text-align: center;
      border-bottom: 1px solid v-bind('theme.borderColor');
    }

    img {
      width: 100%;
      background-color: v-bind('theme.bodyColor');
      pointer-events: none;
      height: calc(100% - 22px);
    }
  }

  &__label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      margin-top: 6px;
      font-size: 16px;
    }
  }

  &__tabs {
    display: flex;
    height: calc(100% - 30px);
  }

  &__tab {
    width: 50px;
    border-right: 1px solid v-bind('theme.borderColor');

    li {
      height: 60px;
      text-align: center;
      cursor: pointer;

      &:hover,
      &.--active {
        color: v-bind('theme.primaryColor');
      }
    }
  }
}
</style>
