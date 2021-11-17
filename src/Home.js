import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	retrieveArticles
} from "./actions/articles";
import TableView from './components/table-view';

function Home() {

	const articles = useSelector(state => state.articles);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(retrieveArticles());
	}, []);

	const renderCardHeader = () => {
		return <div className='f1-card-header'>
			Articles
		</div>
	}

	const renderTableView = () => {
		let headData = ['', { value: 'Title', class: 'text-left' }, { value: 'Description', class: 'text-left' }, 'Published At'];
		let bodyData = [];
		if (articles?.articles) {
			articles.articles.forEach(article => {
				let image = (article.urlToImage) ? <img src={article.urlToImage} width='100' /> : '';
				bodyData.push([image, article.title, article.description, article.publishedAt]);
			});
		}

		return <div style={{ marginTop: '50px' }}>
			<TableView
				headData={headData}
				bodyData={bodyData}
			/>
		</div>
	}


	return (
		<div className='f1-card'>
			{renderCardHeader()}
			{renderTableView()}
		</div>
	);
}

export default Home;