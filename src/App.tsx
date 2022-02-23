import React, { FC, ReactElement } from 'react';
import Home from './pages/Home';
import 'normalize.css';

const App: FC = (): ReactElement => {
	return (
		<div>
			<Home />
		</div>
	);
};

export default App;
