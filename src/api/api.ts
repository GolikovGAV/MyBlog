export type TRequest = {
	method?: string;
	headers?: {
		'Content-Type'?: string;
		authorization?: string;
	};
	body?: string;
};

export function checkResponse(res: Response) {
	return res.ok
		? res.json()
		: res
				.json()
				.then((res) => Promise.reject({ ...res, statusCode: res.error }));
}

export const customFetch = async (url: string, options?: TRequest) => {
	return await fetch(url, options).then(checkResponse);
};

export const getAllPosts = () => {
	return customFetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'GET'
	});
};
