// @ts-check
import { coverageConfigDefaults, defineConfig } from 'vitest/config'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { loadEnv } from 'vite'
import paths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const isProduction = mode === 'production'

  return {
    define: {
      __APP_VERSION__: JSON.stringify(env.VITE_APP_VERSION || 'development'),
      __IS_STAGING__: mode === 'staging',
    },
    plugins: [
      react(),
      tailwindcss(),
      paths(),
      babel({ presets: [reactCompilerPreset()] }),
    ],
    resolve: { tsconfigPaths: true },
    server: { open: true },
    build: {
      sourcemap: isProduction ? 'hidden' : 'inline',
      minify: isProduction ? 'oxc' : false,
      chunkSizeWarningLimit: 750,
    },
    test: {
      environment: 'jsdom',
      setupFiles: ['test/setupTests.js'],
      include: ['src/**/*.spec.{js,jsx}'],
      reporters: ['dot'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json-summary', 'lcov'],
        exclude: [
          'src/**/*.d.ts',
          'src/App.jsx',
          'src/main.jsx',
          'src/variants/**',
          '**/*.config.*',
          'html/**',
          'coverage/**',
          'dist/**',
          ...coverageConfigDefaults.exclude,
        ],
      },
    },
  }
})
