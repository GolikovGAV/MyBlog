import React from 'react';
import s from './Post.module.css';
import CustomButton from '../CustomButton/CustomButton';
import { useAppSelector } from '../../services/hooks';
import { Rating } from '../Rating/Rating';

type Props = {
	postNum: number;
	size: 'l' | 's';
};

export default function Post({ postNum, size }: Props) {
	const post = useAppSelector((state) => state.posts.posts[postNum]);

	return (
		<div className={`${s.container} shadow`}>
			<img
				src={
					size === 'l'
						? 'https://placehold.co/1200x600?text=Big+Post'
						: 'https://placehold.co/600x300?text=Small+Post'
				}
				alt='Post image'
				className={
					size === 'l' ? `${s.image} ${s.imageL}` : `${s.image} ${s.imageS}`
				}
			/>
			<div className={s.body}>
				<div className={s.postSize}>
					<h3 className={s.heading}>{post?.title}</h3>
					{size === 'l' && <Rating post={post} />}
				</div>
				<p className={s.text}>{post?.body}</p>
				<div className={`${s.postSize}  ${size === 'l' && s.sizeL}`}>
					{size === 's' && <Rating post={post} />}
					<CustomButton
						className={s.button}
						text='Читать далее'
						navigateTo={`post/${post?.id - 1}`}
					/>
				</div>
			</div>
		</div>
	);
}
