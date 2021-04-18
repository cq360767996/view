<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <img width="40" height="40" src="/src/assets/img/logo.svg" />
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item
          v-for="item in menuConfig"
          :key="item.key"
          @click="$router.push({ name: item.key })"
        >
          <component :is="item.icon" />
          <span>{{ item.name }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-header">
        <MenuUnfoldOutlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <MenuFoldOutlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        <exit-dropdown />
      </a-layout-header>
      <a-layout-content class="layout-content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { ExitDropdown } from '@/components';
import { ref } from 'vue';
import { menuConfig } from '@/router';

const selectedKeys = ref(['page']);
const collapsed = ref(false);
</script>

<style lang="less" scoped>
.logo {
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
}

.layout-header {
  background: var(--body-bg);
  padding: 0 10px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.layout-content {
  background: var(--body-bg);
  margin: 24px 16px;
  padding: 24px;
  min-height: 280px;
}

:deep.ant-layout {
  height: 100%;
}
</style>