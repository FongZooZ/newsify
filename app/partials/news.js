'use strict';

import React, { Component } from 'react';
import { Text } from 'react-native';

export default class News extends Component {
	render() {
		let article = this.props.article;

		return (
			<Text>{article.title}</Text>
		);
	}
}