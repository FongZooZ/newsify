'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { getNewsFromSource } from '../../core/lib/network';
import News from './news';

export default class NewsSource extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			data: null,
			forceUpdate: false
		};
	}

	async componentDidMount() {
		let data = await getNewsFromSource(this.props.source);
		this.setState({data: data});
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextState.forceUpdate) return true;
		return false;
	}

	async componentWillUpdate(nextProps, nextState) {
		if (nextState.forceUpdate) {
			let data = await getNewsFromSource(this.props.source);
			let set2 = await this.setState({forceUpdate: false});
			let set1 = await this.setState({data: data});
		}
	}

	render() {
		let data = this.state.data;
		let newsList = [];
		let sourceTitle = '';

		if (data) {
			console.log(data.status);
			if (data.status != 'ok') console.log(data);
			if (data.articles && data.articles.length) {
				sourceTitle = data.source;
				for (let article of data.articles) {
					newsList.push(<News article={article} source={sourceTitle} key={article.url} />);
				}
			}
		}
		return (
			<TouchableOpacity onPress={this._handlePress.bind(this)}>
				<View>
					{newsList}
				</View>
			</TouchableOpacity>
		);
	}

	_handlePress() {
		this.setState({forceUpdate: true});
	}
}