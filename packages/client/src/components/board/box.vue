<template>
  <component
    :is="`cq-${data.component}`"
    ref="box"
    :group="data.group"
    :data="data.data"
    :props-data="data.propsData"
    :style="patchAll ? patchUnit(data.style) : splitStyleAndPatch(data.style, false)"
  />
</template>

<script lang="ts">
import type { Component } from '@/typings';
import type { PropType, ComponentPublicInstance } from 'vue';
import { computed, onMounted, defineComponent, shallowRef } from 'vue';
import { splitStyleAndPatch, patchUnit } from '@/utils';
import { useAnimation } from '@/hooks';

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<Component>,
      default: () => ({}),
    },
    patchAll: {
      type: Boolean,
      default: false,
    },
    editorMode: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const box = shallowRef<ComponentPublicInstance>();

    const curComponent = computed(() => props.data);

    onMounted(() => {
      const { animations } = curComponent.value;
      if (props.editorMode || !animations || !box.value?.$el) return;

      const { playAll } = useAnimation(curComponent);
      playAll(box.value.$el);
    });
    return { splitStyleAndPatch, patchUnit, box };
  },
});
</script>
