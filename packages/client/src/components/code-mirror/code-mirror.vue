<template>
  <div ref="cm" class="code-mirror"></div>
</template>

<script lang="ts" setup>
import type { Data } from '@/typings';
import type { PropType } from 'vue';
import { basicSetup, EditorState, EditorView } from '@codemirror/basic-setup';
import { language, LezerLanguage } from '@codemirror/language';
import { jsonLanguage } from '@codemirror/lang-json';
import { javascriptLanguage } from '@codemirror/lang-javascript';
import { onMounted, watchEffect, shallowRef } from 'vue';
import { format } from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';
import { useThemeVars } from 'naive-ui';

const theme = useThemeVars();
console.log(theme.value);

const props = defineProps({
  viewer: {
    type: Object as PropType<EditorView>,
    default: () => new EditorView(),
  },
  type: {
    type: String,
    default: () => 'json',
  },
  doc: {
    type: String,
    default: () => '',
  },
  readonly: {
    type: Boolean,
    default: () => false,
  },
});

const emit = defineEmits(['update:viewer']);

const cm = shallowRef<HTMLElement>();

const strategy: Data<LezerLanguage> = {
  json: jsonLanguage,
  javascript: javascriptLanguage,
};

const parser = props.type === 'json' ? 'json' : 'babel';

watchEffect(() => {
  const doc = format(props.doc, { parser, plugins: [parserBabel] });
  const lang = strategy[props.type] || strategy.json;
  const state = EditorState.create({
    doc,
    extensions: [basicSetup, language.of(lang), EditorView.editable.of(!props.readonly)],
  });
  props.viewer.setState(state);
});

onMounted(() => {
  if (!cm.value) return;
  emit('update:viewer', new EditorView({ parent: cm.value }));
});
</script>

<style lang="less" scoped>
.code-mirror {
  overflow: auto;
  height: 200px;
  margin-bottom: 5px;
  border: 1px solid v-bind('theme.borderColor');

  :deep {
    .cm-editor {
      height: 100%;
    }

    .ͼ1.cm-focused {
      outline: none;
    }
  }
}
</style>
