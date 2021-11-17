import http from "../http-common";

const getAll = () => {
	return http.get("/everything?q=worldcup&from=2021-10-17&sortBy=publishedAt&apiKey=3f0bb174b40844b4a11b52ea66b45c95");
};

const ArticleService = {
	getAll
};

export default ArticleService;
