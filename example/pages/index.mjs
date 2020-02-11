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

  Pre(`
/app.mjs
export const state = {
  // ...other state,
  vars: {
    background: {
      dark: '#232323',
      light: '#eeeeee',
    },
    text: {
      dark: '#cccccc',
      light: '#232323',
    },
    link: {
      dark: '#eeeeee',
      light: '#010101',
      hover: {
        dark: '#fefefe',
        light: '#010101',
      },
    },
    fadeDuration: '300ms',
    widths: {
      laptop: '1000px',
    },
  },
}
`),

  Pre(`
/pages/index.mjs
export const View = (state) => ThemeVars(state.vars)
`),

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
