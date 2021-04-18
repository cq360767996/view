<template>
  <a-table bordered size="small" :data-source="pages" :columns="columns" row-key="_id">
    <template #width="{ text }"> {{ text }}px </template>
    <template #height="{ text }"> {{ text }}px </template>
    <template #action="{ record }">
      <a @click="toEdit(record._id)">查看</a>
      <a-divider type="vertical" />
      <a @click="handleDelete(record._id)">删除</a>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useManage } from '@/hooks';
import { generateColumns } from '@/utils';
import { deletePage } from '@/api';
import { message } from 'ant-design-vue';

const { pages, getAllPage } = useManage();
const router = useRouter();

const columns = generateColumns([
  {
    title: '作者',
    key: 'author',
  },
  {
    title: '描述',
    key: 'description',
  },
  {
    title: '标题',
    key: 'title',
  },
  {
    title: '模式',
    key: 'pageMode',
  },
  {
    title: '宽',
    key: 'width',
  },
  {
    title: '高',
    key: 'height',
  },
  {
    title: '操作',
    key: 'action',
  },
]);

const toEdit = (id: string) => {
  router.push({ path: `/editor/${id}`, params: { id } });
};

const handleDelete = async (id: string) => {
  const res = await deletePage(id);
  if (res.code === 0) {
    message.success('删除成功。');
    getAllPage();
  } else {
    message.error('删除失败，请稍后重试～');
  }
};
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