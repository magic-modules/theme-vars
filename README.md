## @magic-modules/theme-vars
this is the [@magic-modules][magic-module-url]
ThemeVars component.

shows a list with the THEME_VARS,
will usually only be used in a @magic-theme documentation page.

more documentation and example:
[html docs][doc-url]

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

### <a name="installation"></a>installation:
```bash
npm install @magic-modules/theme-vars
```

### <a name="usage"></a>usage
in a page or module View
```javascript
export const View = state => ThemeVars(state.vars)
```

### changelog

##### 0.0.1
first release

##### 0.0.2
* change text to remove fixed reference to @magic-themes/docs.
* rename Color to ThemeVarColor to avoid nameclashes in the future

##### 0.0.3 - unreleased
...

[magic-module-url]: https://github.com/magic-modules/
[doc-url]: https://magic-modules.github.io/theme-vars/

[npm-image]: https://img.shields.io/npm/v/@magic-modules/theme-vars.svg
[npm-url]: https://www.npmjs.com/package/@magic-modules/theme-vars
[travis-image]: https://img.shields.io/travis/com/magic-modules/theme-vars/master
[travis-url]: https://travis-ci.com/magic-modules/theme-vars
[appveyor-image]: https://img.shields.io/appveyor/ci/magicmodules/theme-vars/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicmodules/theme-vars/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-modules/theme-vars/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-modules/theme-vars
[greenkeeper-image]: https://badges.greenkeeper.io/magic-modules/theme-vars.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-modules/theme-vars.svg
[snyk-image]: https://snyk.io/test/github/magic-modules/theme-vars/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-modules/theme-vars

