import * as React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import ImageCard from './ImageCard/ImageCard';
import type TImageInfo from '../TImageInfo';

const styles = StyleSheet.create({
  listBox: {
    width: '100%',
  },
});

type Props = {
  images: Array<TImageInfo>,
};

class ImageCardList extends React.Component<Props> {
  render() {
    const {images} = this.props;

    return (
      <View style={[styles.listBox]}>
        <FlatList
          data={images}
          extraData={this.props}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ImageCard imageInfo={item} />}
        />
      </View>
    );
  }
}

export default ImageCardList;
