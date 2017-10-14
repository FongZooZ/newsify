'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getNewsFromSource } from './core/lib/network';
import { newsSources } from './core/config';

export default class App extends Component {
  async componentDidMount() {
    let news = [];
    for (let source in newsSources) {
      let articles = await getNewsFromSource(source);
      news.push(articles);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your aha app!</Text>
        <Text>Changes you make will automatically reload or not.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
