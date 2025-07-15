/**
 *  React Tidy Table
 *  Create a HTML table that can be sorted, selected and
 *  post-processed.
 *
 *  Copyright 2023-2025, Marc S. Brooks (https://mbrooks.info)
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 */

'use strict';

import React     from 'react';
import PropTypes from 'prop-types';
import tidyTable from 'tidy-table';
import 'tidy-table/dist/tidy-table.min.css';

/**
 * Provides React Component wrapper.
 */
class TidyTable extends React.Component {
  componentDidMount() {
    this.table = new tidyTable(
      this.refs.wrapper,
      this.props.settings,
      this.props.options
    );
  }

  render() {
    return (
      <div id={this.props.id} ref="wrapper"></div>
    );
  }
}

TidyTable.defaultProps = {
  id: 'tidy-table'
};

TidyTable.propTypes = {
  id: PropTypes.string,
  settings: PropTypes.object,
  options: PropTypes.object
};

export default TidyTable;
