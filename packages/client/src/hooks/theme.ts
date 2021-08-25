import { ref } from 'vue';
import { darkTheme } from 'naive-ui';

export const theme = ref<typeof darkTheme | null>(null);
