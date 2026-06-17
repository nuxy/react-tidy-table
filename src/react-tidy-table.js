/**
 *  React Tidy Table
 *  Create a HTML table that can be sorted, selected and
 *  post-processed.
 *
 *  Copyright 2023-2026, Marc S. Brooks (https://mbrooks.info)
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 */

'use strict';

import {createElement, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import checkPropTypes from 'prop-types/checkPropTypes';
import tidyTable from 'tidy-table';
import 'tidy-table/dist/tidy-table.min.css';

/**
 * Provides React Component wrapper.
 */
export default function TidyTable(props) {
  const ref = useRef('wrapper');

  checkPropTypes(TidyTable.propTypes, props);

  const {id = 'tidy-table', settings, options} = props;

  useEffect(() => {
    new tidyTable(ref.current, settings, options);
  }, []);

  return createElement('div', {ref, id});
}

TidyTable.propTypes = {
  id: PropTypes.string,
  settings: PropTypes.object,
  options: PropTypes.object
};
