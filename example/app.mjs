export const state = {
  title: '@magic-modules/theme-vars',
  description: 'embed a list of the theme vars on a @magic-theme demo page.',
  logotext: 'ThemeVars',
  menu: [
    { to: '/#installation', text: 'installation' },
    { to: '/#usage', text: 'usage' },
    { to: '/#source', text: 'source' },
  ],

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
