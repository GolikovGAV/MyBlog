import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { handleDislike, handleLike } from '../../services/postsSlice';
import { TPost } from '../../types/types';
import s from './Rating.module.css';
import likeActive from '../../images/ThumbUpActive.svg';
import like from '../../images/ThumbUpAlt.svg';
import dislike from '../../images/ThumbDownAlt.svg';
import dislikeActive from '../../images/ThumbDownActive.svg';

export const Rating = ({ post }: { post: TPost }) => {
	const dispatch = useAppDispatch();

	return (
		<div className={s.rating}>
			<div
				className={s.thumbs}
				onClick={() => {
					dispatch(handleLike(post.id));
				}}
			>
				<img
					className={s.icon}
					src={post?.prevClick === 'like' ? likeActive : like}
					alt='Like button'
				/>
				<p>{post?.likes}</p>
			</div>
			<div
				className={s.thumbs}
				onClick={() => {
					dispatch(handleDislike(post.id));
				}}
			>
				<img
					className={s.icon}
					src={post?.prevClick === 'dislike' ? dislikeActive : dislike}
					alt='Dislike button'
				/>
				<p>{post?.dislikes}</p>
			</div>
		</div>
	);
};
