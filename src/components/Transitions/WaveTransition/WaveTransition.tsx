import React, {
	forwardRef,
	ReactElement,
	useEffect,
	useImperativeHandle,
	useState,
} from 'react';
import * as S from './WaveTransition.styled';
import anime from 'animejs';

interface WaveTransitionRefMethods {
	animate: () => void;
}

interface WaveTransitionProps {
	fill?: string;
}

const WaveTransition = forwardRef<
	WaveTransitionRefMethods,
	WaveTransitionProps
>(({ fill = '#FBAE3C' }, ref): ReactElement | null => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const animate = (): void => {
		setIsVisible(true);
	};

	useEffect(() => {
		if (isVisible) {
			const timeline = anime({
				targets: '.background',
				d: [
					{
						value:
							'M 2046.5 0.5 L 1535.125 0.5 L 1023.75 0.5 C 853.292 0.5 682.833 0.5 512.375 0.5 L 256.688 0.5 L 1 0.5 L 1 699 C 89.5 599.75 166.063 538.75 233.938 505.922 C 301.813 473.094 361 468.438 414.75 481.875 C 522.25 508.75 608 608 698 699 C 861 863.811 1150 952 1302 699 C 1577.01 241.253 1977.5 507.5 2046.5 699 L 2046.5 0.5 L 2046.5 0.5',
					},
					{
						value:
							'M2048.5 0H1535.25H1023.5C852.917 0 682.333 0 511.75 0H255.876H0V1440C112.583 1440 165.865 1440 232.5 1440C314.391 1440 -328.454 1440 414 1440C633.911 1440 591.422 1440 697.5 1440C956.69 1440 1100.85 1440 1302.5 1440C1875.92 1440 1875.37 1440 2048.5 1440V0Z',
					},
				],
				duration: 1300,
				easing: 'easeInOutExpo',
			});
		}
	}, [isVisible]);

	useImperativeHandle(
		ref,
		(): WaveTransitionRefMethods => ({
			animate,
		})
	);

	if (!isVisible) {
		return null;
	}

	return (
		<S.SWrapper>
			<svg
				width='100%'
				height='100%'
				viewBox='0 0 2047 1438'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				preserveAspectRatio='none'
			>
				<path
					className='background'
					d='M 1680.483 1.482 L 1314.466 1.482 L 582.431 1.482 C 451.938 1.481 383 1.481 288.381 1.482 L 1 1.482 L 1 1.482 L 1 1.483 C 134.371 1.482 218.4 1.482 288.381 1.482 C 386.398 1.482 484.414 1.482 582.431 1.482 C 616.3 1.482 654.314 1.482 698 1.482 C 929.801 1.483 954.851 1.487 1250 1.484 C 1705.5 1.48 1847.5 1.486 2046.5 1.486 L 2046.5 1.482 L 1680.483 1.482'
					fill={fill}
				/>
			</svg>
		</S.SWrapper>
	);
});

export type { WaveTransitionRefMethods, WaveTransitionProps };

export default WaveTransition;
