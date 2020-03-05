export const View = ({ state }) => {
  const { vars } = state

  CHECK_PROPS(vars, propTypes, 'ThemeVars')

  const { widths, maxWidth, fadeDuration, ...colors } = vars

  const sortByName = ([n], [n2]) => (n > n2 ? 1 : -1)
  const sortByValue = ([_, v]) => (typeof v === 'string' ? -1 : 1)

  const Color = ([name, value], parent = '') => {
    const par = parent ? `${parent}.` : ''

    if (typeof value === 'string') {
      return li([
        `vars.${par}${name}`,
        ': ',
        span({ class: 'Bg', style: { backgroundColor: value } }, value),
      ])
    }

    if (typeof value === 'object') {
      return li([
        h5(`${par}${name}`),
        ul(
          Object.entries(value)
            .sort(sortByName)
            .sort(sortByValue)
            .map(e => Color(e, `${par}${name}`)),
        ),
      ])
    }
  }

  return div({ class: 'ThemeVars' }, [
    h2({ id: 'theme-vars' }, 'theme vars'),

    h3('colors'),
    p('this theme exports and uses the following colors.'),

    ul(
      Object.entries(colors)
        .sort(sortByName)
        .sort(sortByValue)
        .map(e => Color(e)),
    ),

    maxWidth && [h4('max page width'), p(['vars.maxWidth: ', maxWidth])],

    fadeDuration && [
      h3('fade duration:'),
      p('vars.fadeDuration should be used for all css animations'),
      p(['vars.fadeDuration: ', fadeDuration]),
    ],

    widths && [
      h3('breakpoints'),
      p('the following width breakpoints exist'),
      ul(
        Object.entries(widths)
          // get smallest widhts first
          .sort(([_, v], [_1, v1]) => (v > v1 ? 1 : 0))
          .map(([name, value]) => li([`vars.widths.${name}`, ': ', value])),
      ),
    ],

    h3('headers'),
    p('the five header sizes look like the following:'),

    h1('This is a h1'),
    h2('This is a h2'),
    h3('This is a h3'),
    h4('This is a h4'),
    h5('This is a h5'),

    h3('links'),
    p('links will look like the following:'),

    Link({ to: '' }, 'This is a link'),
  ])
}

export const style = {
  ul: {
    display: 'inline-block',
    width: '400px',
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
    width: '130px',
  },
}

export const propTypes = {
  ThemeVars: [
    { type: 'object' },

    { key: 'widths', type: 'object', items: { type: 'object' } },
    { key: 'fadeDuration', type: ['string', 'number'] },
    { key: 'maxWidth', type: ['string', 'number'] },
  ],
}
