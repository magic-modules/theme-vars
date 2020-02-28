# ${state.title}

this is the
[@magic-modules](https://github.com/magic-modules)
ThemeVars component.

${state.description}

<GitBadges>magic-modules/theme-vars</GitBadges>

<h2 id='installation'>installation:</h2>

<Pre>npm install @magic-modules/theme-vars</Pre>

<h2 id='usage'>usage:</h2>

in a page or module View, after copying the vars from the theme/index.mjs
file to the /app.mjs file

<Pre>
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
</Pre>

<Pre>
/pages/index.mjs
export const View = (state) => ThemeVars(state.vars)
</Pre>

## demo

<ThemeVars state></ThemeVars>

<h2 id='source'>source</h2>

the source for this page is in the
[example directory](https://github.com/magic-modules/hero/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)

