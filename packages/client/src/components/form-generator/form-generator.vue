<template>
  <ColorPicker v-if="field.type === FormEnum.COLOR_PICKER" v-model="model[field.model]" />
  <template v-else-if="field.type === FormEnum.BTN_GROUP">
    <NTooltip v-for="item in field.data" :key="item.icon" :title="item.tip" placement="bottom">
      <NButton
        class="form-generator__btn"
        size="small"
        :type="model[field.model] === item.value ? 'primary' : 'default'"
        @click="model[field.model] = item.value"
      >
        <component :is="item.icon" />
      </NButton>
    </NTooltip>
  </template>
  <NSwitch
    v-else-if="field.type === FormEnum.SWITCH"
    v-model:checked="model[field.model]"
    v-bind="field.propsData"
    size="small"
  />
  <component
    :is="map[field.type]"
    v-else
    v-model:value="model[field.model]"
    v-bind="field.propsData"
    allow-clear
    :options="field.data"
    :placeholder="field.type === FormEnum.SELECT ? '请选择' : '请输入'"
    size="small"
  >
    <!-- <template v-if="field.type === FormEnum.SELECT">
      <SelectOption v-for="option in field.data" :key="option.id" :value="option.id">
        {{ option.label }}
      </SelectOption>
    </template> -->
  </component>
</template>

<script lang="ts" setup>
import type { FieldItem, Data } from '@/typings';
import type { PropType } from 'vue';
import { ColorPicker } from '../color-picker';
import { FormEnum } from '@/enum';
import {
  NTooltip,
  NButton,
  NSwitch,
  NSelect,
  NInput,
  NInputNumber,
  NCheckbox,
  NSlider,
  NRadio,
} from 'naive-ui';

const map: Data = {
  radio: NRadio,
  checkbox: NCheckbox,
  input: NInput,
  select: NSelect,
  switch: NSwitch,
  slider: NSlider,
  'input-number': NInputNumber,
  'color-picker': ColorPicker,
  textarea: NInput,
};

defineProps({
  field: {
    type: Object as PropType<FieldItem>,
    default: () => ({}),
  },
  model: {
    type: Object,
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
