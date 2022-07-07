import React, { Component } from 'react';
import { View, Text } from 'react-native';
export default class CreatePosts extends Component {
  render() {
    return (
      <View
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {' '}
        <Text> Create a Post! </Text>
      </View>
    );
  }
}
