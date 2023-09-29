import React from 'react';
import { any, object } from 'prop-types';
import { AppContext } from './context';
import Banner from '@/components/banners/Banner';
import '@/styles/styles.scss';

/**
 * @function App
 * @description - top level React component
 * @param {Object} data
 * @returns {React.ReactElement}
 */
const App = ({ children, data }) => (
	<AppContext.Provider value={data}>
		<main>
			<Banner>
				Client Base
			</Banner>
			{children}
		</main>
	</AppContext.Provider>
);

App.propTypes = {
	children: any,
	data: object
};

App.displayName = 'App';

export default App;
