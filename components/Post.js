import React, { useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import AutoHeightImage from 'react-native-auto-height-image';


let iconSize = Dimensions.get('window').width * 0.064;
const Post = props => {

  const [liked, setLiked] = useState(props.data.liked);

  const renderComment = itemData => {
    return (
      <View style={{ width: '100%' }}>
        <Text style={{ fontSize: iconSize * 16 / 28 }}><Text style={{ fontWeight: 'bold' }}>{itemData.item.username}</Text> {itemData.item.content}</Text>
        <FlatList
          data={itemData.item.subcomments}
          keyExtractor={(item, index) => { return '' + item.id; }}
          renderItem={itemData2 => {
            return (<Text style={{ fontSize: iconSize * 16 / 28 }}><Text style={{ fontWeight: 'bold' }}>   |   {itemData2.item.username}</Text> {itemData2.item.content}</Text>);
          }}
        />
      </View>
    )
  }

  function informParentOfLike() {
    props.handleLike(props.data.id);
  }


  return (
    <View style={styles.container}>
      <View style={styles.ownerBar}>
        <Image source={props.data.profileImage} style={{ height: iconSize * 1.5, width: iconSize * 1.5, borderRadius: 100 }}></Image>
        <Text style={{ paddingLeft: 12, flex: 1, fontWeight: 'bold', fontSize: iconSize*16/28 }}>{props.data.username}</Text>
        <Image source={require('../assets/icons/options.png')} style={{ width: iconSize, height: iconSize }} />

      </View>
      <FullWidthImage source={props.data.content} />
      <View style={styles.actionsBar}>
        <TouchableOpacity onPress={() => { setLiked(!liked); informParentOfLike(); }}>
          <Image
            source={liked ? require('../assets/icons/like-filled.png') : require('../assets/icons/like-empty.png')}
            style={{ width: iconSize, height: iconSize, marginRight: 8 }}
          />
        </TouchableOpacity>
        <Image source={require('../assets/icons/comment.png')} style={{ width: iconSize, height: iconSize, marginRight: 8 }} />
        <Image source={require('../assets/icons/send.png')} style={{ width: iconSize, height: iconSize }} />
        <Image source={require('../assets/icons/bookmark.png')} style={{ width: iconSize, height: iconSize, position: 'absolute', right: 8 }} />
      </View>
      <Text style={styles.likedInfo}>Liked by 736 people</Text>
      <View style={styles.commentsContainer}>
        <FlatList
          style={{ width: '100%' }}
          data={props.data.comments}
          keyExtractor={(item, index) => { return '' + item.id; }}
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
    fontSize: iconSize * 18 / 28
  },
  date: {
    width: '100%',
    padding: 4,
    paddingLeft: 12,
    fontSize: iconSize * 12 / 28
  },
  likedInfo: {
    width: '100%',
    padding: 4,
    paddingLeft: 12,
    fontSize: iconSize * 16/28
  }
});

export default Post;