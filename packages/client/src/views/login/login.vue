<template>
  <div class="login">
    <div class="login-box">
      <span>用户登录</span>
      <NForm
        show-require-mark="left"
        label-placement="left"
        :rules="rules"
        :label-width="60"
        label-align="right"
        :model="form"
      >
        <NFormItem name="name" label="用户名">
          <NInput v-model:value="form.name" placeholder="用户名" />
        </NFormItem>
        <NFormItem name="password" label="密码">
          <NInput v-model:value="form.password" placeholder="密码" />
        </NFormItem>
        <NFormItem>
          <NButton type="primary" @click="submitLogin">登录</NButton>
        </NFormItem>
      </NForm>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { UserInfo } from '@/typings';
import { reactive } from 'vue';
import { login } from '@/api';
import { useMessage, NForm, NFormItem, NButton, NInput, useThemeVars } from 'naive-ui';
import { encrypt } from '@/utils';
import { useRouter } from 'vue-router';
import { local } from '@/utils';
import { LocalKeys } from '@/enum';

const theme = useThemeVars();
console.log(theme.value);

const props = defineProps({ redirect: { type: String, default: () => '' } });
const message = useMessage();

const form = reactive({ name: 'ccq', password: 'a123456' });
const rules = reactive({
  name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});
const router = useRouter();
// const { validate } = NForm.;

const submitLogin = async () => {
  // const [err] = await to(validate());
  // if (err) return;

  const { name, password } = form;
  const res = await login<UserInfo>({ name, password: encrypt(password) });
  if (res.code === 0) {
    const { token, name } = res.data;
    local.set(LocalKeys.AUTHORIZATION, token);
    local.set(LocalKeys.USER_INFO, { name });
    message.success('登录成功！');
    router.push(props.redirect || '/');
  } else {
    message.error('登录失败！');
  }
};
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background-color: v-bind('theme.railColor');
  display: flex;
  align-items: center;
  justify-content: center;

  &-box {
    box-sizing: border-box;
    padding: 20px;
    background-color: v-bind('theme.cardColor');
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 3px;

    span {
      margin-bottom: 20px;
    }
  }
}
</style>
