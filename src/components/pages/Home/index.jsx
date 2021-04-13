import React, { useEffect, useState } from 'react';
import { useAppContext } from '@/components/App/context';

const Home = () => {
	const [greeting, updateGreeting] = useState('');
	const { appTitle, pageTitle } = useAppContext();
	const welcomeText = `Welcome to ${pageTitle} page on`;
	const appText = `the ${appTitle} server.`;

	useEffect(() => {
		updateGreeting('Hello from the client side.');
	}, []);

	return (
		<div className="home" data-hook="home">
			<p>{welcomeText}</p>
			<p>{appText}</p>
			{greeting && <p>{greeting}</p>}
		</div>
	);
};

export default Home;
