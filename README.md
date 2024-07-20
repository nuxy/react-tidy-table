# React Tidy Table

[![npm version](https://badge.fury.io/js/react-tidy-table.svg)](https://badge.fury.io/js/react-tidy-table) [![](https://img.shields.io/npm/dm/react-tidy-table)](https://www.npmjs.com/package/react-tidy-table) [![Install size](https://packagephobia.com/badge?p=react-tidy-table)](https://packagephobia.com/result?p=react-tidy-table) [![](https://img.shields.io/github/v/release/nuxy/react-tidy-table)](https://github.com/nuxy/react-tidy-table/releases)

Create a HTML table that can be sorted, selected, and post-processed.

![Preview](https://raw.githubusercontent.com/nuxy/tidy-table/master/package.gif)

## Features

- Extensible HTML/CSS interface.
- Compatible with all modern desktop and mobile web browsers.
- Fully responsive layout with touch event support.
- Easy to set-up and customize.
- Customizable callback functions for post-processing selected results.
- Post-process options for manipulating table/column/menu elements.
- Fast and lightweight (JavaScript plug-in *only 4 kB)

Checkout the [demo](https://nuxy.github.io/tidy-table) for examples of use.

## Dependencies

- [Node.js](https://nodejs.org)

## Installation

Add to an existing [React](https://reactjs.org) project using [YARN](https://yarnpkg.com).

    $ yarn add react-tidy-table

## Usage

```javascript
import React     from 'react';
import TidyTable from 'react-tidy-table'; // or '../dist/react-tidy-table';

const options = {
  enableCheckbox: true,
  enableMenu:     true,
  reverseSortDir: true,
  responsive:     true
};

const settings = {
  columnTitles: ['Rank', 'Programming Language', 'Ratings Jan 2012', 'Delta Jan 2012', 'Status'],
  columnValues: [
    ['1', 'Java', '17.479%', '-0.29%', 'A'],
    ['2', 'C', '16.976%', '+1.15%', 'A'],
    ['3', 'C#', '8.781%', '+2.55%', 'A'],
    ['4', 'C++', '8.063%', '-0.72%', 'A'],
    ['5', 'Objective-C', '6.919%', '+3.91%','A']
  ],

  // Add menu options to bind result events.
  menuOptions: [
    ['- Action -', null],
    ['Callback 1', {callback: (rows) => {}}],
    ['Callback 2', {callback: (rows) => {}}]
  ],

  // Post-process rendered HTML output.
  postProcess: {
    table:  (HTMLTableElement)     => {},
    column: (HTMLTableCellElement) => {},
    menu:   (HTMLTableElement)     => {}
  },

  // Pre-process column values before sort.
  sortByPattern: function(colNum, val) {
    if (colNum !== 1) return val;

    return val?.replace(/\$|%|#/g, '');
  }
};

export default class Demo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <TidyTable settings={settings} options={options} />
      </React.Fragment>
    );
  }
};
```

## Component Props

| Name     | Type   | Description         |
|----------|--------|---------------------|
| settings | Object | Main configuration. |
| options  | Object | Override table [defaults](https://github.com/nuxy/tidy-table#table-options). |

## Documentation

- [Post-processing examples](https://github.com/nuxy/tidy-table#post-processing-examples)
- [Table options](https://github.com/nuxy/tidy-table#table-options)

## Developers

### CLI options

Run [ESLint](https://eslint.org) on project sources:

    $ npm run lint

Transpile ES6 sources (using [Babel](https://babeljs.io)) and minify to a distribution:

    $ npm run build

Bundle [demo](https://github.com/nuxy/react-tidy-table/tree/master/demo) sources (using [Webpack](https://webpack.js.org)):

    $ npm run webpack

## Contributions

If you fix a bug, or have a code you want to contribute, please send a pull-request with your changes. (Note: Before committing your code please ensure that you are following the [Node.js style guide](https://github.com/felixge/node-style-guide))

## Versioning

This package is maintained under the [Semantic Versioning](https://semver.org) guidelines.

## License and Warranty

This package is distributed in the hope that it will be useful, but without any warranty; without even the implied warranty of merchantability or fitness for a particular purpose.

_react-tidy-table_ is provided under the terms of the [MIT license](http://www.opensource.org/licenses/mit-license.php)

## Author

[Marc S. Brooks](https://github.com/nuxy)
