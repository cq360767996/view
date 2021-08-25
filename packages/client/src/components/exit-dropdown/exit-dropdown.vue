<template>
  <div class="header-right">
    <NDropdown trigger="hover" :options="options" :on-select="handleDropdownSelect">
      <div class="exit-dropdown">
        <NAvatar size="small">
          <UserOutlined />
        </NAvatar>
        <span class="header-right_span">{{ userInfo.name }}</span>
      </div>
    </NDropdown>
    <SkinOutlined class="theme-change" @click="changeTheme()" />
  </div>
  <NModal
    v-model:show="visible"
    preset="dialog"
    title="修改密码"
    positive-text="确认"
    negative-text="取消"
    @positive-click="submitPasswordChange"
  >
    <NForm
      ref="formRef"
      show-require-mark="left"
      label-placement="left"
      :label-width="80"
      label-align="right"
      :rules="rules"
    >
      <NFormItem label="原密码">
        <NInput v-model:value="form.password" type="password" />
      </NFormItem>
      <NFormItem label="新密码">
        <NInput v-model:value="form.newPassword" type="password" />
      </NFormItem>
      <NFormItem label="确认密码">
        <NInput v-model:value="form.confirmPassword" type="password" />
      </NFormItem>
    </NForm>
  </NModal>
</template>

<script lang="ts" setup>
import { UserOutlined, SkinOutlined } from '@ant-design/icons-vue';
import { local, encrypt, changeTheme } from '@/utils';
import { LocalKeys } from '@/enum';
import { computed, reactive, ref } from 'vue';
import { changePassword } from '@/api';
import json from 'json5';
import {
  NDropdown,
  NAvatar,
  DropdownOption,
  NModal,
  NForm,
  NFormItem,
  NInput,
  useMessage,
  useThemeVars,
  FormRules,
} from 'naive-ui';
import { FormInst } from 'naive-ui/lib/form/src/interface';
import { useRoute, useRouter } from 'vue-router';

const userInfoStr = local.get(LocalKeys.USER_INFO);
const userInfo = userInfoStr ? json.parse(userInfoStr) : {};
const router = useRouter();
const route = useRoute();
const theme = useThemeVars();
console.log(theme.value);
const message = useMessage();
const formRef = ref<FormInst>();

const options = computed<DropdownOption[]>(() => {
  const options = [
    { key: '修改密码', label: '修改密码' },
    { key: '返回管理页', label: '返回管理页' },
    { key: '退出', label: '退出' },
  ];
  if (!route.path.includes('editor')) options.splice(1, 1);
  return options;
});

const visible = ref(false);

const form = reactive({
  password: '',
  newPassword: '',
  confirmPassword: '',
});

// const checkPassword: FormItemRuleAsyncValidator = async (rule, value) => {
//   if (/S+/.test(value)) {
//     return Promise.reject('密码不能为空。');
//   }

//   if (!/^[a-zA-Z]\w{5,17}$/.test(value)) {
//     return Promise.reject('密码需以字母开头，长度在6~18之间。');
//   }

//   return Promise.resolve();
// };

// const checkPasswordSync: FormItemRuleAsyncValidator = async (rule, value) => {
//   const [err] = await to(checkPassword(rule, value));
//   if (err) {
//     return Promise.reject(err);
//   }

//   if (value !== form.newPassword) {
//     return Promise.reject('两次输入不一致。');
//   }

//   return Promise.resolve();
// };

const rules: FormRules = {
  password: [{ required: true, trigger: 'blur' }],
  newPassword: [{ required: true, trigger: 'blur' }],
  confirmPassword: [{ required: true, trigger: 'blur' }],
};

function handleDropdownSelect(key: string) {
  if (key === '修改密码') {
    visible.value = true;
  } else if (key === '返回管理页') {
    router.push('/');
  } else {
    logout();
  }
}

const submitPasswordChange = async () => {
  formRef.value?.validate(async error => {
    if (error) return;
    const password = encrypt(form.password);
    const newPassword = encrypt(form.newPassword);
    const res = await changePassword({ password, newPassword });
    if (res.code === 0) {
      visible.value = false;
      message.success('修改成功！');
    } else {
      message.error(res.msg);
    }
  });
};

function logout() {
  local.remove(LocalKeys.AUTHORIZATION);
  router.push(`/login?redirect=${route.path}`);
  message.success('已退出登录！');
}
</script>

<style lang="less">
.exit-dropdown {
  padding: 0 8px;
  font-size: 16px;
  color: v-bind('theme.textColor2');
  cursor: pointer;
  margin-left: 20px;

  &:hover {
    background-color: v-bind('theme.hoverColor');
  }
}

.header-right {
  display: flex;
  justify-content: center;
  align-items: center;
  color: v-bind('theme.textColor2');

  &_span {
    margin-left: 5px;
  }
}

.theme-change {
  margin-left: 10px;
  &:hover {
    color: v-bind('theme.primaryColor');
  }
}
</style>
