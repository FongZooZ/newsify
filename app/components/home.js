'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { newsSources } from '../../core/config';
import NewsSource from '../partials/newsSource';

export default class Home extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		let sources = [];
		for (let source of newsSources) {
			sources.push(<NewsSource source={source} key={source} />);
		}

		return (
			<ScrollView>
				{sources}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({});