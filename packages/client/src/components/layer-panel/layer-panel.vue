<template>
  <LayoutPanel />
</template>

<script lang="ts" setup>
import LayoutPanel from './layer-panel';
import { useThemeVars } from 'naive-ui';
import { watchEffect } from 'vue';

const theme = useThemeVars();
console.log(theme.value);

watchEffect(() => {
  console.log(theme.value);
});
</script>

<style lang="less">
.layer-panel {
  position: relative;
  width: 200px;
  height: 100%;
  border-right: 1px solid v-bind('theme.borderColor');
  transition: width 0.3s ease-in-out;
  z-index: 4;
  overflow: hidden;
  white-space: nowrap;
  background-color: v-bind('theme.cardColor');
  color: v-bind('theme.textColor2');

  .ant-empty {
    margin-top: 20px;
  }

  .--disable {
    opacity: 0.3;
  }

  &.--hide {
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

    section {
      display: flex;
    }

    span {
      margin-left: 5px;
      cursor: pointer;
      font-size: 16px;

      &:hover {
        color: v-bind('theme.primaryColor');
      }

      &.--active {
        color: v-bind('theme.primaryColor');
      }
    }
  }

  &__wrapper {
    height: calc(100% - 60px);
  }

  &__toolbar {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 27px;
    border-bottom: 1px solid v-bind('theme.borderColor');
    background-color: v-bind('theme.cardColor');

    span {
      padding: 3px;
      cursor: pointer;

      &:hover {
        background-color: v-bind('theme.hoverColor');
        color: #fff;
      }
    }
  }

  &__box {
    height: calc(100% - 30px);
    overflow-x: hidden;
    overflow-y: auto;
    li {
      position: relative;
      width: 100%;
      padding-left: 8px;
      padding-right: 6px;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        background-color: v-bind('theme.hoverColor');
      }

      &.--active {
        background-color: v-bind('theme.hoverColor');
      }
    }

    .--item {
      line-height: 32px;
      height: 32px;
      display: flex;
      align-items: center;

      b {
        margin-left: 5px;
        font-weight: normal;
      }
    }

    .--thumbail {
      height: 48px;
      line-height: 48px;

      img {
        width: 51px;
        height: 34px;
        border: 1px solid v-bind('theme.borderColor');
        background-color: v-bind('theme.hoverColor');
      }

      b {
        margin-left: 5px;
        font-weight: normal;
      }
    }

    .--animated {
      transition: transform 0.3s ease-in-out;
    }

    .--icon {
      position: absolute;
      right: 5px;
      top: 5px;
    }
  }

  &__footer {
    height: 30px;
    border-top: 1px solid v-bind('theme.borderColor');
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 50px;

    span {
      padding: 3px;
      cursor: pointer;

      &:hover {
        background-color: v-bind('theme.primaryColor');
        color: #fff;
      }
    }

    .--icon {
      background-color: v-bind('theme.primaryColor');
      color: v-bind('theme.textColor2');
    }
  }
}
</style>
