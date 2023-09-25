import React from 'react';
import s from './CustomButton.module.css';
import { useNavigate } from 'react-router-dom';

type Props = {
	text: string;
	className: string;
	navigateTo: string;
};

export default function CustomButton({ text, navigateTo, className }: Props) {
	const navigate = useNavigate();
	return (
		<button
			className={`${s.button} ${className && className}`}
			onClick={() => {
				navigate(navigateTo);
			}}
		>
			{text}
		</button>
	);
}
