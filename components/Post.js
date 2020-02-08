import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  Dimensions
} from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import AutoHeightImage from 'react-native-auto-height-image';

const Post = props => {
  const renderComment = itemData => {
    return (
      <View style={{ width: '100%' }}>
        <Text><Text style={{ fontWeight: 'bold' }}>{itemData.item.username}</Text> {itemData.item.content}</Text>
        <FlatList
          data={itemData.item.subcomments}
          keyExtractor={(item, index) => {return ''+item.id;}}
          renderItem={itemData2 => {
            return (<Text><Text style={{ fontWeight: 'bold' }}>   |   {itemData2.item.username}</Text> {itemData2.item.content}</Text>);
          }}
        />
      </View>
    )
  }

  let iconSize = 28;
  return (
    <View style={styles.container}>
      <View style={styles.ownerBar}>
        <Image source={props.data.profileImage} style={{ height: iconSize + 12, width: iconSize + 12, borderRadius: 100 }}></Image>
        <Text style={{ paddingLeft: 12 }}>{props.data.username}</Text>
        <Image source={require('../assets/icons/options.png')} style={{ width: iconSize, height: iconSize, position: 'absolute', right: 8 }} />

      </View>
      <FullWidthImage source={props.data.content} />
      <View style={styles.actionsBar}>
        <Image source={require('../assets/icons/like-empty.png')} style={{ width: iconSize, height: iconSize, marginRight: 8 }} />
        <Image source={require('../assets/icons/comment.png')} style={{ width: iconSize, height: iconSize, marginRight: 8 }} />
        <Image source={require('../assets/icons/send.png')} style={{ width: iconSize, height: iconSize }} />
        <Image source={require('../assets/icons/bookmark.png')} style={{ width: iconSize, height: iconSize, position: 'absolute', right: 8 }} />
      </View>
      <Text style={styles.likedInfo}>Liked by 736 people</Text>
      <View style={styles.commentsContainer}>
        <FlatList
          style={{ width: '100%' }}
          data={props.data.comments}
          keyExtractor={(item, index) => {return ''+item.id;}}
          renderItem={renderComment}
        >
        </FlatList>
      </View>
      <Text style={styles.date}>{props.data.postDate}</Text>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 8
  },
  ownerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 8
  },
  actionsBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 8
  },
  commentsContainer: {
    width: '100%',
    padding: 4,
    paddingLeft: 12,
    fontSize: 18
  },
  date: {
    width: '100%',
    padding: 4,
    paddingLeft: 12,
    fontSize: 12
  },
  likedInfo: {
    width: '100%',
    padding: 4,
    paddingLeft: 12
  }
});

export default Post;