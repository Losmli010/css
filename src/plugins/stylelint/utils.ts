import * as path from 'path'
import * as querystring from 'querystring'

export interface Options {
  /** The cache is enabled by default to decrease execution time */
  cache?: boolean
  /** A single file, or array of files, to include when linting */
  include?: string | string[]
  /** A single file, or array of files, to exclude when linting */
  exclude?: string | string[]
}

export function normalizePath(id: string): string {
  return path.relative(process.cwd(), id).split(path.sep).join('/')
}

export function checkVueFile(id: string): boolean {
  if (!id.includes('?')) return false
  const rawQuery = id.split('?', 2)[1]
  return querystring.parse(rawQuery).vue !== null ? true : false
}
