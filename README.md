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

##### 0.0.3
fix: Color is inside ThemeVars module until @magic can import it

##### 0.0.4
expect the full state as props, not just state.vars

##### 0.0.5
* add header demos (h1 - h5)
* add link demo

##### 0.0.6
magic 0.0.55+ passes state differently

##### 0.0.7
bump required node version to 14.2.0

##### 0.0.8 
bump required node version to 14.15.4

##### 0.0.9 
* container width of 400px turns into max-width

##### 0.0.10 
fix link example, replace to: '' with to: '/'
 
##### 0.0.11
* add outlines to h1-h5 examples
* add demo section links to example

##### 0.0.12
* accept both state.state as well as state as argument.

##### 0.0.13 - unreleased
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

