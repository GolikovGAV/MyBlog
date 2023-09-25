import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import arrow from '../../images/arrow.svg';
import { useAppSelector } from '../../services/hooks';
import s from './PostPage.module.css';
import { Rating } from '../../components/Rating/Rating';

export default function PostPage() {
	const params = useParams();
	const post = useAppSelector(
		(state) => state.posts.posts[Number(params?.postID)]
	);

	return (
		<section className={s.section}>
			<div className={s.head}>
				<div className={s.back}>
					<img className={s.icon} src={arrow} alt='Вернуться' />
					<Link className={s.link} to='/'>
						Вернуться к статьям
					</Link>
				</div>
				<Rating post={post} />
			</div>
			<h3 className={s.title}>{post?.title}</h3>
			<div className={s.wrapper}>
				<img
					className={s.image}
					src='https://placehold.co/1200x600?text=Post+Image'
					alt='Post Image'
				/>
				<p className={s.text}>{post?.body}</p>
			</div>
		</section>
	);
}
