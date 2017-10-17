'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class News extends Component {
	render() {
		let article = this.props.article;
		let source = this.props.source;
		let time = article ? article.publishedAt : '';

		return (
			<View>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={{uri: article.urlToImage}} />
				</View>
				<Text style={styles.title}>{article.title}</Text>
				<Text style={styles.author}>In {source} by {article.author}</Text>
				<Text style={styles.time}>{time}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	imageContainer: {
		flex: 1,
		alignItems: 'stretch'
	},
	image: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	},
	title: {}
});