import { Config } from '../schemas/config-schema';

export const defaultConfig = {
  framework: 'react',
  paths: {
    components: 'components/selia',
    utils: 'lib/utils.ts',
  },
  imports: {
    utils: '@/lib/utils',
    components: '@/components/selia',
  },
  registries: {
    default: 'selia',
    sources: {
      selia: {
        name: 'selia',
        url: 'http://localhost:5173/registry',
      },
    },
  },
} satisfies Config;
