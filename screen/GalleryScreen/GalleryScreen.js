import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import ImageCardList from './ImageCardList/ImageCardList';
import { fetchGalleryImageListAction } from './gallery.actions';

import WithLoadingIndicator from '../../components/withLoadingIndicator/withLoadingIndicator';

const styles = StyleSheet.create({
	screenBody: {
		position: 'relative',
		alignItems: 'center',
		flex: 1
	}
});

const prepareImageList = rawImageList => {
	return rawImageList.map(imageInfo => ({
		id: imageInfo.id,
		title: imageInfo['description'] || imageInfo['alt_description'] || 'No any title',
		likes: imageInfo.likes,
		author: `${imageInfo.user['first_name']} ${imageInfo.user['last_name']}`,
		thumbUrl: imageInfo.urls.thumb,
		fullImageUrl: imageInfo.urls.full
	}))
};

const ImageCardListWithLoadingIndicator = WithLoadingIndicator(ImageCardList);

class GalleryScreen extends React.Component {
	componentDidMount() {
		this.props.fetchGalleryImageList();
	}

	render() {
		const { isLoading, galleryImageList } = this.props;
		const preparedImageList = prepareImageList(galleryImageList);

		return (
			<View style={styles.screenBody}>
				<ImageCardListWithLoadingIndicator isLoading={isLoading} images={preparedImageList} />
			</View>
		);
	}
}

const mapStateToProps = inState => ({
	...inState.gallery
});

const mapDispatchToProps = dispatch => ({
	fetchGalleryImageList: () => dispatch(fetchGalleryImageListAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen);
