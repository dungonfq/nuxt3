import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    // accepts globs and file paths relative to project root
    include: [
        '~/components/**/*.{vue,ts}',
        '~/layouts/**/*.vue',
        '~/pages/**/*.vue',
        '~/plugins/**/*.{js,ts}',
        '~~/nuxt.config.{js,ts}'
    ],
    exclude: [
      'node_modules/**/*',
      '.git/**/*',
    ],
  },
})
