import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import './src/config/ReactotronConfig';
import Post from './src/components/Post';


export default class GoNativeApp extends Component {
  
  state = {
    posts:[
     {
       id: 0,
       title: 'Aprendendo React Native',
       author: 'Luciano Guerra',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
     },
     {
       id: 1,
       title: 'Aprendendo React Native',
       author: 'Luciano Guerra',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
     },
     {
       id: 2,
       title: 'Aprendendo React Native',
       author: 'Luciano Guerra',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
     },
     {
      id: 3,
      title: 'Aprendendo React Native',
      author: 'Luciano Guerra',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 4,
      title: 'Aprendendo React Native',
      author: 'Luciano Guerra',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
   ],
 };


  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.headerText}>GoNative App</Text>
        </View>

        <ScrollView style={styles.scrowContainer}>
          { this.state.posts.map(post => <Post key={post.id} post={post} /> )}
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777',
  },
  header:{
    padding: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  headerText:{
    fontSize: 16,
		color: '#333333',
		fontWeight: 'bold',
  },
  scrowContainer:{
    padding: 20,
  }
});
