import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    coverage: {
      reporter: ['text', 'html'],
      provider: 'v8',
      reportsDirectory: './coverage',
    },
    include: ['tests/**/*.test.ts'],
  },
})