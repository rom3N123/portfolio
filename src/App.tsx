import React, { FC, ReactElement, useRef, useState } from 'react';

import WaveTransition, {
	WaveTransitionRefMethods,
} from './components/Transitions/WaveTransition';

const App: FC = (): ReactElement => {
	const transitionRef = useRef<WaveTransitionRefMethods>(null);

	return (
		<div>
			<button onClick={() => transitionRef.current?.animate()}>OPEN</button>

			<WaveTransition ref={transitionRef} />
		</div>
	);
};

export default App;
