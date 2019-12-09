import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import ImageCardList from './ImageCardList/ImageCardList';
import {fetchGalleryImageListAction} from './gallery.actions';

import WithLoadingIndicator from '../../components/withLoadingIndicator/withLoadingIndicator';
import type TGalleryState from './TGalleryState';

const styles = StyleSheet.create({
  screenBody: {
    position: 'relative',
    alignItems: 'center',
    flex: 1,
  },
});

const ImageCardListWithLoadingIndicator = WithLoadingIndicator(ImageCardList);

type Props = {
  ...TGalleryState,
};

class GalleryScreen extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchGalleryImageList();
  }

  render() {
    const {isLoading, galleryImageList} = this.props;

    return (
      <View style={styles.screenBody}>
        <ImageCardListWithLoadingIndicator
          isLoading={isLoading}
          images={galleryImageList}
        />
      </View>
    );
  }
}

const mapStateToProps = inState => ({
  ...inState.gallery,
});

const mapDispatchToProps = dispatch => ({
  fetchGalleryImageList: () => dispatch(fetchGalleryImageListAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GalleryScreen);
