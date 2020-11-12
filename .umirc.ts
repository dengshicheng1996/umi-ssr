/*
 * @Author: 邓世城
 * @Date: 2020-09-23 15:32:24
 * @LastEditors: 邓世城
 * @LastEditTime: 2020-09-28 14:52:27
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  hash: true,
  antd: {},
  // layout: false,
  routes: [
    {
      path: '/app',
      component: '@/pages/App',
    },
    {
      path: '/mail',
      component: '@/pages/Maill',
    },
    {
      path:'/',
      redirect:'/app'
    },
  ],
  ssr: {
    devServerRender: false,
    mode: 'stream',
  },
});
