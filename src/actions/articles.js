import {
	RETRIEVE_ARTICLES
} from "./types";

import ArticleDataService from "../services/ArticleService";


export const retrieveArticles = () => async (dispatch) => {
	try {
		const res = await ArticleDataService.getAll();

		dispatch({
			type: RETRIEVE_ARTICLES,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
	}
};
