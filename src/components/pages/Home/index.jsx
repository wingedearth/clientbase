import React, { useEffect, useState } from 'react';
import { useAppContext } from '@/components/App/context';
import Longfellow from '@/assets/images/longfellow.jpg';
import BlackHorse from '@/assets/images/blackhorse.svg';
import './home.scss';

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
			<h1 className="welcome">{welcomeText}</h1>
			<p>{appText}</p>
			{greeting && <p>{greeting}</p>}
			<img src={Longfellow} />
			<div className="home__blackhorse">
				<BlackHorse />
			</div>
		</div>
	);
};

export default Home;
