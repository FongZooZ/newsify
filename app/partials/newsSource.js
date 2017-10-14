'use strict';

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getNewsFromSource } from '../../core/lib/network';
import News from './news';

export default class NewsSource extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			data: null
		};
	}

	async componentDidMount() {
		let data = await getNewsFromSource(this.props.source);
		this.setState({data: data});
	}

	render() {
		let data = this.state.data;
		let newsList = [];
		let sourceTitle = '';

		if (data) {
			if (data.status == 'ok') {
				if (data.articles && data.articles.length) {
					sourceTitle = data.source;
					for (let article of data.articles) {
						newsList.push(<News article={article} key={article.url} />);
					}
				}
			} else {
				console.log(data);
			}
		}
		return (
			<View>
				<Text>{sourceTitle}</Text>
				{newsList}
			</View>
		);
	}
}