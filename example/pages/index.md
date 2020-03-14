# ${state.title}

this is the
[@magic-modules](https://github.com/magic-modules)
ThemeVars component.

${state.description}

<GitBadges>@magic-modules/theme-vars</GitBadges>

## installation

`npm install @magic-modules/theme-vars`

## usage

first, copy the THEME_VARS from the theme/index.mjs file to the /src/app.mjs file

```
/src/app.mjs
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
```

then, in a page:

`<ThemeVars state></ThemeVars>`

## demo

<ThemeVars state></ThemeVars>

## source

the source for this page is in the
[example directory](https://github.com/magic-modules/theme-vars/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
