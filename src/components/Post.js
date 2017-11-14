import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/postStyle';

const Post = ({ post }) => (
  <View style={styles.containerPost}>
    <Text style={styles.titlePost}>{post.title}</Text>
    <Text style={styles.textAuthor}>{post.author}</Text>
    <View style={styles.contentDescription}>
      <Text style={styles.textDescription}>{post.description}</Text>
    </View>
  </View>

);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};


export default Post;
