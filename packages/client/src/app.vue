<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN" :theme="theme">
    <NMessageProvider>
      <NSpace vertical>
        <NDialogProvider>
          <RouterView />
          <NGlobalStyle />
        </NDialogProvider>
      </NSpace>
    </NMessageProvider>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { local } from '@/utils';
import { LocalKeys } from '@/enum';
import { theme } from '@/hooks';
import { NConfigProvider, zhCN, dateZhCN } from 'naive-ui';
import { NMessageProvider, NSpace, NDialogProvider, NGlobalStyle, darkTheme } from 'naive-ui';

onMounted(() => {
  const isDark = local.get(LocalKeys.IS_DARK);
  theme.value = isDark ? darkTheme : null;
});
</script>

<style lang="less">
@import 'normalize.css';
@import 'animate.css';

html,
body {
  height: 100%;
  overflow: hidden;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
    '微软雅黑', Arial, sans-serif;
}

#app {
  height: 100%;
  user-select: none;
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  box-shadow: inset var(--box-shadow-base);
  border-radius: var(--border-radius-base);
  background: var(--white);
}

::-webkit-scrollbar-thumb {
  border-radius: var(--border-radius-base);
  box-shadow: inset var(--box-shadow-base);
  background-color: var(--normal-color);
}

::-webkit-scrollbar-thumb:hover {
  background: #000;
}

::-webkit-scrollbar-corner {
  background: #fff;
}

.n-config-provider {
  height: 100%;

  & > div {
    height: 100%;
    & > div {
      height: 100%;
    }
  }
}
</style>
