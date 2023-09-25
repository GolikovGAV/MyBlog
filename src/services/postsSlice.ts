import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TPost } from '../types/types';

type TodosState = {
	posts: TPost[];
};

const initialState: TodosState = {
	posts: []
};

const postsReducer = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		addPosts(state, action: PayloadAction<TPost[]>) {
			state.posts = [...state.posts, ...action.payload];
		},
		handleLike(state, action: PayloadAction<number>) {
			return {
				...state,
				posts: state.posts.map((post) => {
					if (post.id === action.payload) {
						if (post.prevClick === 'like') {
							return { ...post, likes: post.likes - 1, prevClick: undefined };
						} else if (post.prevClick === 'dislike') {
							return {
								...post,
								likes: post.likes + 1,
								dislikes: post.dislikes - 1,
								prevClick: 'like'
							};
						} else {
							return { ...post, likes: post.likes + 1, prevClick: 'like' };
						}
					} else {
						return post;
					}
				})
			};
		},
		handleDislike(state, action: PayloadAction<number>) {
			return {
				...state,
				posts: state.posts.map((post) => {
					if (post.id === action.payload) {
						if (post.prevClick === 'dislike') {
							return {
								...post,
								dislikes: post.dislikes - 1,
								prevClick: undefined
							};
						} else if (post.prevClick === 'like') {
							return {
								...post,
								likes: post.likes - 1,
								dislikes: post.dislikes + 1,
								prevClick: 'dislike'
							};
						} else {
							return {
								...post,
								dislikes: post.dislikes + 1,
								prevClick: 'dislike'
							};
						}
					} else {
						return post;
					}
				})
			};
		}
	}
});

export const { addPosts, handleDislike, handleLike } = postsReducer.actions;

export default postsReducer.reducer;
