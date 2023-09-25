import React, { useEffect, useState } from 'react';
import s from './App.module.css';
import { getAllPosts } from '../../api/api';
import { TPost } from '../../types/types';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import { useAppDispatch } from '../../services/hooks';
import { addPosts } from '../../services/postsSlice';
import PostPage from '../../pages/PostPage/PostPage';

const generateNum = (): number => {
	return Math.floor(Math.random() * 50);
};

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		getAllPosts().then((res: TPost[]) => {
			const modifiedArr = res.splice(0, 5).map((data) => {
				return {
					...data,
					likes: generateNum(),
					dislikes: generateNum(),
					prevClick: undefined
				};
			});
			dispatch(addPosts(modifiedArr));
		});
	}, []);

	return (
		<div className='App'>
			<main className={s.main}>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='post/:postID' element={<PostPage />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
