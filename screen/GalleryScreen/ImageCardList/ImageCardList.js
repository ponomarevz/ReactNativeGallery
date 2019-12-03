import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import ImageCard from './ImageCard/ImageCard';

const styles = StyleSheet.create({
	listBox: {
		width: '100%'
	}
});

class ImageCardList extends React.Component {
	render() {
		const { images } = this.props;

		return (
			<View style={[styles.listBox]}>
				<FlatList
					data={images}
					extraData={this.props}
					keyExtractor={item => item.id}
					renderItem={({ item }) => (
						<ImageCard imageInfo={item}/>
					)}
				/>
			</View>
		);
	}
}

export default ImageCardList;
