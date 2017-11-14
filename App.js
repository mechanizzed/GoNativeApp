import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import './src/config/ReactotronConfig';
import styles from './src/styles/appStyle';
import Post from './src/components/Post';


export default class GoNativeApp extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'Aprendendo React Native',
        author: 'Luciano Guerra',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Luciano Guerra',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Luciano Guerra',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Luciano Guerra',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 4,
        title: 'Aprendendo React Native',
        author: 'Luciano Guerra',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
  };


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}>GoNative App</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          { this.state.posts.map(post => <Post key={post.id} post={post} />)}
        </ScrollView>

      </View>
    );
  }
}
