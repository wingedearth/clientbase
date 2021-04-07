import React from 'react';
import { any, object } from 'prop-types';
import { AppContext } from './context';

/**
 * @function App
 * @description - top level React component
 * @param {Object} data
 * @returns {React.ReactElement}
 */
const App = ({ children, data }) => (
  <AppContext.Provider value={data}>
    <main>{children}</main>
  </AppContext.Provider>
);

App.propTypes = {
  children: any,
  data: object
};

App.displayName = 'App';

export default App;
