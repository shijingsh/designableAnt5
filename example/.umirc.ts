import { defineConfig } from 'umi'

export default defineConfig({
  routes: [{ path: '/', component: '@/pages/formily' }],
  npmClient: 'yarn',
})
