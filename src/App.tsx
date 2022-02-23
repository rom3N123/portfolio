import React, { FC, ReactElement, useRef, useState } from 'react';
import Home from './pages/Home';
import 'normalize.css';
import './index.css';
import anime from 'animejs';

const App: FC = (): ReactElement => {
	const [switched, setSwitched] = useState<boolean>(false);
	const svgRef = useRef<SVGSVGElement>(null);

	const onSvgClick = () => {
		// setSwitched((prevState) => !prevState);

		const timeline = anime({
			targets: '.background',
			d: [
				{
					value: 'M 2046.5 0.5 L 1535.125 0.5 L 1023.75 0.5 C 853.292 0.5 682.833 0.5 512.375 0.5 L 256.688 0.5 L 1 0.5 L 1 699 C 89.5 599.75 166.063 538.75 233.938 505.922 C 301.813 473.094 361 468.438 414.75 481.875 C 522.25 508.75 608 608 698 699 C 861 863.811 1150 952 1302 699 C 1577.01 241.253 1977.5 507.5 2046.5 699 L 2046.5 0.5 L 2046.5 0.5',
				},
				{
					value: 'M 2046.5 1 L 1535.12 1 L 1023.75 1 C 853.292 1 682.833 1 512.375 1 L 256.688 1 L 1 1 L 1 1439 C 113.5 1439 166 1439 233.938 1439 C 313.5 1439 -327.16 1439 414.75 1439 C 634.5 1439 592 1439 698 1439 C 957 1439 1100.5 1439 1302 1439 C 1875 1439 1873.5 1439 2046.5 1439 L 2046.5 1 L 2046.5 1',
				},
			],
			duration: 1300,
			easing: 'easeInOutExpo',
		});
	};

	return (
		<div>
			{/* <Home /> */}

			<div className={'div'}>
				<svg
					onClick={onSvgClick}
					width='100%'
					height='100%'
					viewBox='0 0 2047 1438'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					preserveAspectRatio='none'>
					<path
						className='background'
						d='M 1680.483 1.482 L 1314.466 1.482 L 582.431 1.482 C 451.938 1.481 383 1.481 288.381 1.482 L 1 1.482 L 1 1.482 L 1 1.483 C 134.371 1.482 218.4 1.482 288.381 1.482 C 386.398 1.482 484.414 1.482 582.431 1.482 C 616.3 1.482 654.314 1.482 698 1.482 C 929.801 1.483 954.851 1.487 1250 1.484 C 1705.5 1.48 1847.5 1.486 2046.5 1.486 L 2046.5 1.482 L 1680.483 1.482'
						fill='#FBAE3C'
					/>
				</svg>
			</div>
		</div>
	);
};

export default App;
