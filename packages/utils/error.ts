import { isString } from './types'

class FluentUIError extends Error {
  constructor(m: string) {
    super(m)
    this.name = 'FluentUIError'
  }
}

export function throwError(scope: string, m: string): never {
  throw new FluentUIError(`[${scope}] ${m}`)
}

export function debugWarn(err: Error): void
export function debugWarn(scope: string, message: string): void
export function debugWarn(scope: string | Error, message?: string): void {
  if (process.env.NODE_ENV !== 'production') {
    const error: any = isString(scope)
      ? new FluentUIError(`[${scope}] ${message}`)
      : scope
    console.warn(error)
  }
}
