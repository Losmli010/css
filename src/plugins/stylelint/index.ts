import type { Plugin } from 'vite'
import * as StyleLint from 'stylelint'
import { createFilter } from '@rollup/pluginutils'

import { normalizePath, checkVueFile } from './utils'
import type { Options } from './utils'

export default function stylelintPlugin(options: Options = {}): Plugin {
  const defaultOptions: Options = {
    cache: true,
    include: ['src/**/*.css', 'src/**/*.scss', 'src/**/*.less', 'src/**/*.vue'],
  }
  const opts = { ...defaultOptions, ...options }
  const filter = createFilter(opts.include, opts.exclude || /node_modules/)
  const format = StyleLint.formatters.string

  return {
    name: 'vite:stylelint',
    async transform(_, id) {
      if (!filter(id) || checkVueFile(id)) {
        return null
      }

      const file = normalizePath(id)
      const result = await StyleLint.lint({ ...opts, files: [file] })
      const output = format(result.results)
      if (output) {
        this.warn(output)
      }

      return null
    },
  }
}
