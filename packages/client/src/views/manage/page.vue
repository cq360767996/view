<template>
  <NDataTable bordered size="small" :data="pages" :columns="columns"></NDataTable>
</template>
<script lang="tsx" setup>
import { useRouter } from 'vue-router';
import { useManage } from '@/hooks';
import { deletePage } from '@/api';
import { NDivider, NDataTable, useMessage, DataTableColumn, NButton } from 'naive-ui';

const { pages, getAllPage } = useManage();
const router = useRouter();
const message = useMessage();

const columns: DataTableColumn[] = [
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
    render: row => `${row.width}px`,
  },
  {
    title: '高',
    key: 'height',
    render: row => `${row.width}px`,
  },
  {
    title: '操作',
    key: 'action',
    render: row => (
      <>
        <NButton type="primary" size="tiny" onClick={() => toEdit(row._id as string)}>
          查看
        </NButton>
        <NDivider vertical />
        <NButton type="primary" size="tiny" onClick={() => handleDelete(row._id as string)}>
          删除
        </NButton>
      </>
    ),
  },
];

function toEdit(id: string) {
  router.push({ path: `/editor/${id}`, params: { id } });
}

async function handleDelete(id: string) {
  const res = await deletePage(id);
  if (res.code === 0) {
    message.success('删除成功。');
    getAllPage();
  } else {
    message.error('删除失败，请稍后重试～');
  }
}
</script>
