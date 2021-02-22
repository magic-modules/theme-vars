import { is } from '@magic/test'
import * as ThemeVars from '../src/index.mjs'

export default [
  { fn: () => ThemeVars.View, expect: is.function, info: 'expect ThemeVars.View to be a function' },
  { fn: () => ThemeVars, expect: is.object, info: 'expect ThemeVars to be an object' },
  {
    fn: () => ThemeVars.style,
    expect: is.objectNative,
    info: 'expect ThemeVars.style to be an object',
  },
]
