import type { Page } from '@/typings';
import { getPages } from '@/api';
import { onMounted, ref } from 'vue';

export const useManage = () => {
  const pages = ref<Array<Page>>([]);

  const getAllPage = async () => {
    const res = await getPages<Array<Page>>();
    if (res.code === 0) {
      pages.value = res.data;
    } else {
      (window as any).$message.error('服务器异常，请稍后重试～');
    }
  };

  onMounted(getAllPage);

  return { pages, getAllPage };
};
