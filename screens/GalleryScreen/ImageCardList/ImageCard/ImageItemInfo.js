import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import COLORS from '../../../../colors';

const styles = StyleSheet.create({
  imageItemInfo: {
    flex: 3,
  },
  imageItemTitle: {
    color: COLORS.mainText,
    fontSize: 12,
  },
  imageItemSubInfo: {
    flexDirection: 'row',
    marginTop: 'auto',
    paddingTop: 5,
  },
  imageItemAuthor: {
    fontWeight: 'bold',
    color: COLORS.darkText,
  },
  imageItemLikes: {
    marginLeft: 'auto',
    fontSize: 12,
    color: COLORS.mainText,
  },
});

const ImageItemInfo = ({title, author, likes}) => {
  return (
    <View style={styles.imageItemInfo}>
      <Text style={styles.imageItemTitle}>{title}</Text>

      <View style={styles.imageItemSubInfo}>
        <Text style={styles.imageItemAuthor}>{author}</Text>
        <Text style={styles.imageItemLikes}>Likes: {likes}</Text>
      </View>
    </View>
  );
};

export default ImageItemInfo;
