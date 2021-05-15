<template>
  <color-picker v-if="field.type === FormEnum.COLOR_PICKER" v-model="model[field.model]" />
  <template v-else-if="field.type === FormEnum.BTN_GROUP">
    <a-tooltip v-for="item in field.data" :key="item.icon" :title="item.tip" placement="bottom">
      <a-button
        class="form-generator__btn"
        size="small"
        :type="model[field.model] === item.value ? 'primary' : 'default'"
        @click="model[field.model] = item.value"
      >
        <component :is="item.icon" />
      </a-button>
    </a-tooltip>
  </template>
  <component
    :is="`a-${field.type}`"
    v-else
    v-model:value="model[field.model]"
    v-bind="field.props"
    allow-clear
    :placeholder="field.type === FormEnum.SELECT ? '请选择' : '请输入'"
    size="small"
  >
    <template v-if="field.type === 'select'">
      <a-select-option v-for="option in field.data" :key="option.id" :value="option.id">
        {{ option.label }}
      </a-select-option>
    </template>
  </component>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { defineProps } from 'vue';
import { ColorPicker } from '../color-picker';
import { FormEnum } from '@/enum';

defineProps({
  field: {
    type: Object as PropType<FieldItem>,
    default: () => ({}),
  },
  model: {
    type: Object as PropType<Data<string | number>>,
    default: () => ({}),
  },
});
</script>

<style lang="less">
.form-generator {
  &__btn {
    margin-left: 10px;

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>