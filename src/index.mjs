export const Color = ([name, value], parent = '') => {
  const par = parent ? `${parent}.` : ''

  if (typeof value === 'string') {
    return li([
      `vars.${par}${name}`,
      ': ',
      span({ class: 'Bg', style: `background-color: ${value}` }, value),
    ])
  }

  if (typeof value === 'object') {
    return li([h5(`${par}${name}`), ul(Object.entries(value).map(e => Color(e, `${par}${name}`)))])
  }
}

export const View = vars => {
  CHECK_PROPS(vars, propTypes, 'ThemeVars')

  const { widths, maxWidth, fadeDuration, ...colors } = vars

  return div({ class: 'ThemeVars' }, [
    h3({ id: 'theme-vars' }, 'theme vars'),

    h4('colors'),
    p('@magic-themes/docs exports and uses the following colors.'),

    ul(
      Object.entries(colors)
        .sort(([n], [n2]) => (n > n2 ? 1 : -1))
        .sort(([_, v]) => (typeof v === 'string' ? -1 : 1))
        .map(e => Color(e)),
    ),

    maxWidth && [
      h4('max page width'),
      p(['vars.maxWidth: ', maxWidth]),
    ],

    fadeDuration && [
      h4('fade duration:'),
      p('vars.fadeDuration should be used for all css animations'),
      p(['vars.fadeDuration: ', fadeDuration]),
    ],

    widths && [
      h4('breakpoints'),
      p('the following width breakpoints exist'),
      ul(
        Object.entries(widths)
          // get smallest widhts first
          .sort(([_, v], [_1, v1]) => (v > v1 ? 1 : 0))
          .map(([name, value]) => li([`vars.widths.${name}`, ': ', value])),
      ),
    ],
  ])
}

export const style = vars => ({
  ul: {
    display: 'inline-block',
    width: '270px',
  },

  li: {
    display: 'inline-block',
    width: '100%',
  },

  '.Bg': {
    border: '1px solid #ffffff',
    borderRadius: '0.3em',
    color: 'rebeccapurple',
    float: 'right',
    padding: '0.1em',
    textAlign: 'right',
    width: '75px',
  },
})

export const propTypes = {
  ThemeVars: [
    { type: 'object' },

    { key: 'widths', type: 'object', items: { type: 'object' } },
    { key: 'fadeDuration', type: ['string', 'number'] },
    { key: 'maxWidth', type: ['string', 'number'] },
  ],
}
