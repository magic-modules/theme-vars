export const View = state => [
  h1(state.title),
  p([
    'this is the ',
    Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
    ' ThemeVars component. ',
    state.description,
  ]),

  GitBadges('magic-modules/theme-vars'),

  h2({ id: 'installation' }, 'installation:'),
  Pre('npm install @magic-modules/theme-vars'),

  h2({ id: 'usage' }, 'usage:'),
  p([
    'in a page or module View, after copying the vars from the theme/index.mjs',
    ' file to the /app.mjs file',
  ]),

  Pre('export const View = (state) => ThemeVars(state)'),

  h2('demo'),
  ThemeVars(state.vars),

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link({ to: 'https://github.com/magic-modules/hero/tree/master/example' }, 'example directory'),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),
]

export const style = {
  '.Hero': {
    color: '#000000',
  },
}
