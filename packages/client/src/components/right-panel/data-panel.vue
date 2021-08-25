<template>
  <div class="data-panel">
    <div class="timeline-wrapper">
      <NTimeline>
        <NTimelineItem
          v-for="item in timeline"
          :key="item.text"
          :color="item.actived ? 'blue' : 'gray'"
        >
          <div class="timeline-wrapper__item">
            <span>{{ item.text }}</span>
            <NButton v-if="item.btnText" type="primary" size="small" @click="item.event">
              {{ item.btnText }}
            </NButton>
            <ReloadOutlined v-else @click="item.event" />
          </div>
        </NTimelineItem>
      </NTimeline>
    </div>
    <CodeMirror v-model:viewer="viewer" v-model:doc="dataStringify" class="code-box" readonly />
    <NTable :data-source="table.data" :columns="table.columns" :pagination="false" />
    <NDrawer
      v-if="curComponent.data"
      v-model:show="drawer.show"
      placement="right"
      title="设置数据源"
      :width="400"
      @close="refreshData"
    >
      <NForm label-placement="left" :label-width="80">
        <NFormItem label="数据源类型">
          <NRow justify="space-between">
            <NCol>
              <NSelect
                v-model:value="curComponent.data.type"
                :options="drawer.options"
                size="small"
              >
                <!-- <SelectOption v-for="item in drawer.options" :key="item.value" :value="item.value">
                  {{ item.label }}
                </SelectOption> -->
              </NSelect>
            </NCol>
            <NCol offset="2">
              <NButton type="primary" size="small" @click="fetchData"> 更新数据 </NButton>
            </NCol>
          </NRow>
        </NFormItem>
        <NFormItem label="开启过滤器">
          <NRow justify="space-between">
            <NCol>
              <NSwitch v-model:checked="drawer.openFilter" @change="handleFilterChange" />
            </NCol>
            <NCol offset="2">
              <NButton type="primary" size="small" @click="modal.show = true">设置过滤器</NButton>
            </NCol>
          </NRow>
        </NFormItem>
        <NFormItem v-if="curComponent.data.type === 'url'" label="接口地址">
          <NInput v-model:value="curComponent.data.url" size="small" />
        </NFormItem>
        <CodeMirror
          v-if="curComponent.data.type === 'static'"
          v-model:viewer="drawer.viewer"
          v-model:doc="dataStringify"
        />
      </NForm>
      <NDivider />
      <NTable :data-source="table.data" :columns="table.columns" :pagination="false" />
      <NDivider orientation="right"> 响应结果 <ReloadOutlined @click="fetchData" /> </NDivider>
      <CodeMirror v-model:viewer="viewer" v-model:doc="dataStringify" readonly />
    </NDrawer>
    <NModal
      v-model:visible="modal.show"
      title="过滤器"
      :z-index="1001"
      @ok="handleFilterChange(true)"
    >
      <CodeMirror v-model:viewer="modal.viewer" v-model:doc="modal.doc" type="javascript" />
    </NModal>
  </div>
</template>

<script lang="ts" setup>
import type { Data } from '@/typings';
import type { DataSourceKey } from '@/config';
import { useStore } from '@/store';
import { computed, onMounted, reactive, ref, shallowReactive, shallowRef, watchEffect } from 'vue';
import { ReloadOutlined } from '@ant-design/icons-vue';
import { generateColumns } from '@/utils';
import { CodeMirror } from '@/components';
import type { EditorView } from '@codemirror/basic-setup';
import json from 'json5';
import { useDrawer } from '@/hooks';
import { DataSource } from '@/config';
import {
  NTimeline,
  NTimelineItem,
  NDrawer,
  NModal,
  NForm,
  NFormItem,
  NRow,
  NCol,
  NSelect,
  NButton,
  NSwitch,
  NDivider,
  NTable,
  NInput,
  useThemeVars,
} from 'naive-ui';

const theme = useThemeVars();
console.log(theme.value);
const store = useStore();
const { board } = store.state;
const viewer = shallowRef<EditorView>();
const dataStringify = ref<string>();
const curComponent = computed(() => board.data[board.selected[0]]);

const { drawer, modal, refreshData, handleFilterChange, fetchData } = useDrawer(
  dataStringify,
  curComponent
);

const table = shallowReactive<{ data: Array<Data>; columns: Data<any> }>({
  data: [],
  columns: generateColumns([
    {
      title: '字段',
      key: 'key',
    },
    {
      title: '映射',
      key: 'mapping',
    },
    {
      title: '状态',
      key: 'status',
    },
  ]),
});

const timeline = reactive([
  {
    actived: true,
    text: DataSource[curComponent.value.data!.type],
    btnText: '设置数据源',
    event: () => {
      drawer.show = true;
      drawer.openFilter = !!curComponent.value.data!.filter;
    },
  },
  {
    actived: !!curComponent.value.data!.filter,
    text: '数据过滤器',
    btnText: '添加过滤器',
    event: () => {
      modal.show = true;
    },
  },
  {
    actived: true,
    text: '数据响应结果（只读）',
    event: () => {
      // TODO
    },
  },
]);

const resolveDataset = () => {
  if (!curComponent.value) return;
  const { data } = curComponent.value;
  if (!data) return;
  const { type, static: dataset } = data;

  const strategy: Record<DataSourceKey, () => void> = {
    url() {
      // TODO
    },
    static() {
      dataStringify.value = json.stringify(dataset);
    },
  };
  const handler = strategy[type] || strategy.static;
  handler();
};

watchEffect(() => {
  if (!curComponent.value) return;
  const { data } = curComponent.value;
  if (data) {
    timeline[0].text = DataSource[data!.type];
    timeline[1].actived = !!data.filter;
  }
});

watchEffect(() => {
  if (!curComponent.value) return;
  const { data } = curComponent.value;
  if (data?.static?.[0]) {
    table.data = Object.keys(data.static[0]).map(key => ({
      key,
      mapping: '-',
      status: '匹配成功',
    }));
  }
});

onMounted(() => {
  watchEffect(() => {
    resolveDataset();
  });
});
</script>

<style lang="less">
.data-panel {
  background-color: v-bind('theme.cardColor');

  &__drawer {
    &-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    &-input {
      flex: 1;
    }
  }

  &__label {
    margin-right: 5px;
  }

  .timeline-wrapper {
    box-sizing: border-box;
    padding: 0 10px;
    padding-top: 10px;

    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .code-box {
    margin: 0 10px;
  }
}

.ant-drawer-body .ant-divider-inner-text span:hover {
  color: v-bind('theme.primaryColor');
}
</style>
