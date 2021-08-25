<template>
  <NLayout class="container" has-sider>
    <NLayoutSider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <img width="40" height="40" src="/src/assets/img/logo.svg" />
      </div>
      <NMenu
        v-model:collapsed="collapsed"
        v-model:value="selectedKeys"
        :options="routeList"
      ></NMenu>
    </NLayoutSider>
    <div class="main">
      <NLayoutHeader class="layout-header">
        <MenuUnfoldOutlined v-if="collapsed" class="trigger" @click="collapsed = !collapsed" />
        <MenuFoldOutlined v-else class="trigger" @click="collapsed = !collapsed" />
        <ExitDropdown />
      </NLayoutHeader>
      <NLayoutContent class="layout-content">
        <RouterView />
      </NLayoutContent>
    </div>
  </NLayout>
</template>
<script lang="ts" setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { ExitDropdown } from '@/components';
import { ref } from 'vue';
import { routeList } from '@/router';
import {
  NLayout,
  NLayoutSider,
  NMenu,
  NLayoutHeader,
  NLayoutContent,
  useMessage,
  useThemeVars,
} from 'naive-ui';

const theme = useThemeVars();
console.log(theme.value);
const selectedKeys = ref('page');
const collapsed = ref(false);
const message = useMessage();

(window as any).$message = message;
</script>

<style lang="less" scoped>
.container {
  display: flex;
  height: 100%;
}

.main {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: v-bind('theme.cardColor');
}

.logo {
  color: v-bind('theme.textColor2');
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
}

.layout-header {
  background: v-bind('theme.cardColor');
  padding: 10px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: v-bind('theme.textColor2');
}

.layout-content {
  flex: 1;
  background: v-bind('theme.cardColor');
  margin: 24px 16px;
  padding: 24px;
  min-height: 280px;
}
</style>
