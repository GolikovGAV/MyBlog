export type TPost = {
	userId: number;
	id: number;
	title: string;
	body: string;
	likes: number;
	dislikes: number;
	prevClick: 'like' | 'dislike' | undefined;
};
