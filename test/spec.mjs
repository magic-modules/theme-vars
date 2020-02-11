import { is } from '@magic/test'
import * as Hero from '../src/index.mjs'

export default [
  { fn: () => Hero.View, expect: is.function, info: 'expect Hero.View to be a function' },
  { fn: () => Hero, expect: is.object, info: 'expect Hero to be an object' },
]
