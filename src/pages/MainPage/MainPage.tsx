import React, { useState, useRef } from 'react';
import s from './MainPage.module.css';
import { TPost } from '../../types/types';
import Post from '../../components/Post/Post';
import { useAppSelector } from '../../services/hooks';

export default function MainPage() {
	const posts = useAppSelector((state) => state.posts.posts);

	const [inputValue, setInputValue] = useState<string>();

	function findPost(text: string) {
		if (posts?.find((p) => p.title === text)?.id === undefined) {
			return <p className={s.nothing}>Упс, тут ничего нет</p>;
		} else {
			return (
				<Post postNum={posts.find((p) => p.title === text)!.id - 1} size='l' />
			);
		}
	}

	return (
		<section>
			<h1 className={s.h1}>Блог</h1>
			<h2 className={s.h2}>
				Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а
				также переводим зарубежные статьи
			</h2>
			<form
				className={s.wrapper}
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					e.preventDefault();
				}}
			>
				<i className={s.icon} />
				<input
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setInputValue(e.target.value);
					}}
					className={s.input}
					type='text'
					placeholder='Поиск по названию статьи'
				/>
			</form>
			{!inputValue && (
				<ul className={s.ul}>
					<li>
						<Post postNum={0} size='l' />
					</li>
					{posts.slice(0, 4).map((item: TPost) => {
						return (
							<li key={`listEl${item.id}`} className={s.li}>
								<Post postNum={item.id} size='s' />
							</li>
						);
					})}
				</ul>
			)}
			{inputValue && findPost(inputValue)}
		</section>
	);
}
