import { defineConfig } from 'umi'

export default defineConfig({
  //antd: {},
  theme: {
    'root-entry-name': 'variable',
  },
  //initialState: {},
  routes: [{ path: '/', component: '@/pages/formily' }],
  npmClient: 'yarn',
})
