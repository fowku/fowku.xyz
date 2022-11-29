import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { defineConfig, loadEnv } from 'vite';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  return {
    build: {
      outDir: env.TARGET === 'pages' ? './docs' : './dist',
      assetsDir: './',
    },
    base: '/fowku.xyz/',
    plugins: [react(), eslint()],
    resolve: {
      alias: {
        '@atoms': path.resolve(__dirname, 'src/components/atoms'),
        '@molecules': path.resolve(__dirname, 'src/components/molecules'),
        '@organisms': path.resolve(__dirname, 'src/components/organisms'),
        '@templates': path.resolve(__dirname, 'src/components/templates'),
        '@pages': path.resolve(__dirname, 'src/components/pages'),
        '@hooks': path.resolve(__dirname, 'src/core/hooks'),
        '@types': path.resolve(__dirname, 'src/types'),
        '@helpers': path.resolve(__dirname, 'src/helpers'),
        '@stores': path.resolve(__dirname, 'src/core/stores'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@assets': path.resolve(__dirname, 'src/assets'),
      },
    },
  };
});
