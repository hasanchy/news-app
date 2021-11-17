import {
	RETRIEVE_ARTICLES
} from "../actions/types";

const initialState = [];

const articleReducer = (articles = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case RETRIEVE_ARTICLES:
			return payload;

		default:
			return articles;
	}
};

export default articleReducer;