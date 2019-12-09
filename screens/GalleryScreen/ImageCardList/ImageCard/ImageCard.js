import * as React from 'react';
import {Image, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {withNavigation} from 'react-navigation';

import COLORS from '../../../../colors';
import ImageItemInfo from './ImageItemInfo';
import type TImageInfo from '../../TImageInfo';

const styles = StyleSheet.create({
  imageItemBox: {
    width: '100%',
    flexDirection: 'row',
    borderColor: COLORS.imageCardBorder,
    borderBottomWidth: 1,
    padding: 5,
  },
  imageItemPreview: {
    flex: 1,
  },
  imageItemInfo: {
    flex: 3,
  },
  imageItemThumb: {
    width: 60,
    height: 60,
    borderRadius: 3,
  },
});

type Props = {
  imageInfo: {
    ...TImageInfo,
  },
};

class ImageCard extends React.Component<Props> {
  showImage() {
    this.props.navigation.navigate('FullImageScreen', {
      fullImageUrl: this.props.imageInfo.fullImageUrl,
      imageTitle: this.props.imageInfo.title,
    });
  }

  render() {
    const {thumbUrl, title, author, likes} = this.props.imageInfo;

    return (
      <View style={styles.imageItemBox}>
        <TouchableWithoutFeedback onPress={() => this.showImage()}>
          <View style={styles.imageItemPreview}>
            <Image source={{uri: thumbUrl}} style={styles.imageItemThumb} />
          </View>
        </TouchableWithoutFeedback>

        <ImageItemInfo
          style={styles.imageItemInfo}
          title={title}
          author={author}
          likes={likes}
        />
      </View>
    );
  }
}

export default withNavigation(ImageCard);
