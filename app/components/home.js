'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar } from 'react-native';
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
			<View>
				<View style={styles.master}>
					<StatusBar barStyle="light-content" />
					<ScrollView contentContainerStyle={styles.scrollView}>
						{sources}
					</ScrollView>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	master: {
		marginTop: 24
	},
	scrollView: {
		paddingLeft: 5,
		paddingRight: 5,
	}
});
