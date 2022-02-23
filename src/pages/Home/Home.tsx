import React, { FC, ReactElement } from 'react';
import * as S from './Home.styled';
import { fromTo } from 'kute.js';

const items = [
	{
		label: '1',
	},
	{
		label: '2',
	},
	{
		label: '3',
	},
	{
		label: '4',
	},
];

const Home: FC = (): ReactElement => {
	const an = fromTo(
		document.getElementById('blob1') as Element,
		{
			path: '#blob1',
		},
		{ path: '#blob2' },
		{}
	);
	return (
		<S.SPage>
			<S.SLayer>
				{/* 1 */}
				<svg
					id='visual'
					viewBox='0 0 900 600'
					width='900'
					height='600'
					xmlns='http://www.w3.org/2000/svg'
					version='1.1'
				>
					<rect x='0' y='0' width='900' height='600' fill='#001220'></rect>
					<defs>
						<linearGradient id='grad1_0' x1='33.3%' y1='0%' x2='100%' y2='100%'>
							<stop offset='20%' stop-color='#001220' stop-opacity='1'></stop>
							<stop offset='80%' stop-color='#001220' stop-opacity='1'></stop>
						</linearGradient>
					</defs>
					<defs>
						<linearGradient id='grad2_0' x1='0%' y1='0%' x2='66.7%' y2='100%'>
							<stop offset='20%' stop-color='#001220' stop-opacity='1'></stop>
							<stop offset='80%' stop-color='#001220' stop-opacity='1'></stop>
						</linearGradient>
					</defs>
					<g transform='translate(900, 0)'>
						<path
							id='blob1'
							d='M0 432.7C-32.8 408.5 -65.5 384.4 -99.4 370.9C-133.2 357.5 -168.2 354.7 -196.5 340.3C-224.8 326 -246.6 300 -280 280C-313.4 260 -358.4 246 -374.7 216.3C-391 186.7 -378.6 141.4 -383.5 102.8C-388.4 64.1 -410.5 32 -432.7 0L0 0Z'
							fill='#FBAE3C'
						></path>
					</g>
					<g transform='translate(0, 600)'>
						<path
							d='M0 -432.7C37.4 -429.9 74.8 -427.2 112 -417.9C149.2 -408.6 186.2 -392.7 210 -363.7C233.8 -334.7 244.3 -292.6 262.3 -262.3C280.4 -232 305.9 -213.5 328.2 -189.5C350.5 -165.5 369.5 -136 386.4 -103.5C403.2 -71 417.9 -35.5 432.7 0L0 0Z'
							fill='#FBAE3C'
						></path>
					</g>
				</svg>

				{/* 2 */}
				<svg
					id='visual'
					viewBox='0 0 900 600'
					width='900'
					height='600'
					xmlns='http://www.w3.org/2000/svg'
					version='1.1'
				>
					<rect x='0' y='0' width='900' height='600' fill='#001220'></rect>
					<defs>
						<linearGradient id='grad1_0' x1='33.3%' y1='0%' x2='100%' y2='100%'>
							<stop offset='20%' stop-color='#001220' stop-opacity='1'></stop>
							<stop offset='80%' stop-color='#001220' stop-opacity='1'></stop>
						</linearGradient>
					</defs>
					<defs>
						<linearGradient id='grad2_0' x1='0%' y1='0%' x2='66.7%' y2='100%'>
							<stop offset='20%' stop-color='#001220' stop-opacity='1'></stop>
							<stop offset='80%' stop-color='#001220' stop-opacity='1'></stop>
						</linearGradient>
					</defs>
					<g transform='translate(900, 0)'>
						<path
							id='blob2'
							d='M0 108.2C-8.2 100.5 -16.4 92.8 -23.6 87.9C-30.7 83 -36.8 80.9 -46.5 80.5C-56.2 80.2 -69.5 81.7 -76.5 76.5C-83.4 71.3 -84.1 59.3 -86.6 50C-89.2 40.7 -93.6 34 -97.6 26.1C-101.5 18.2 -104.8 9.1 -108.2 0L0 0Z'
							fill='#FBAE3C'
						></path>
					</g>
					<g transform='translate(0, 600)'>
						<path
							d='M0 -108.2C7.8 -100 15.5 -91.8 23.8 -88.9C32.1 -86 41 -88.3 50.5 -87.5C60 -86.6 70.2 -82.5 75 -75C79.7 -67.4 79.1 -56.5 84 -48.5C89 -40.5 99.5 -35.6 104.5 -28C109.4 -20.4 108.8 -10.2 108.2 0L0 0Z'
							fill='#FBAE3C'
						></path>
					</g>
				</svg>
			</S.SLayer>

			{/* <S.SContainer>
				{items.map(({ label }) => (
					<S.SItem>{label}</S.SItem>
				))}
			</S.SContainer> */}
		</S.SPage>
	);
};

export default Home;
