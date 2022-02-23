import styled from 'styled-components';
import backgroundSvg from '../../assets/background.svg';

export const SPage = styled.div`
	/* @keyframes scale {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}

	#bottom1,
	#bottom2,
	#bottom3 {
		transform-origin: bottom right;
		animation-name: scale;
		animation-timing-function: cubic-bezier(0.56, 0.26, 0.06, 0.97);
		animation-duration: infinite;
		animation-fill-mode: forwards;
		animation-duration: 0.8s;
	}

	#bottom2 {
	}

	#bottom1 {
	}

	#background {
	} */
`;

export const SWrapper = styled.div`
	max-width: 1200px;
	width: 100%;
	padding: 0 15px;
	margin: 0 auto;
`;

export const SContainer = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SItem = styled.div`
	height: 100%;
	flex-grow: 1;
	background: linear-gradient(
		126.6deg,
		rgba(255, 255, 255, 0.12) 28.69%,
		rgba(255, 255, 255, 0) 100%
	);
	opacity: 0;
	transition: opacity 0.8s ease;
	backdrop-filter: blur(10px);

	cursor: pointer;

	&:hover {
		opacity: 1;
	}
`;

export const SLayer = styled.div`
	position: relative;
	& > * {
		position: absolute;
	}
`;
