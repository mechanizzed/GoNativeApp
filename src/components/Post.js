import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Post extends Component{
render(){
	const {post} = this.props;
	return(
		<View style={styles.containerPost}>
			<Text style={styles.titlePost}>{post.title}</Text>
			<Text style={styles.textAuthor}>{post.author}</Text>
			<View style={styles.contentDescription}>
				<Text style={styles.textDescription}>{post.description}</Text>
			</View>
		</View>
	);
}
}


const styles = StyleSheet.create({
	containerPost:{
		marginBottom: 20,
		padding: 20,
		backgroundColor: '#FFFFFF',
		borderRadius: 5,
		borderColor: '#DA6C6C',
		shadowColor: '#DA6C6C',
		shadowRadius: 5,
		shadowOffset:{
			width: 0,
			height: 2,
		},
		shadowOpacity: 1.0,
	},
	titlePost:{
		fontSize: 16,
		color: '#333333',
		fontWeight: 'bold',
	},
	textAuthor:{
		marginTop: 5,
		color: '#999999',
	},
	contentDescription:{
		marginTop: 10,
		borderTopWidth: 1,
		borderTopColor: '#EEEEEE',
	},
	textDescription:{
		marginTop: 10,
		color: '#666666'
	},
	});

export default Post;