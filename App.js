/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Post from './components/Post';
import Story from './components/Story';




const App = () => {
  let marilynProfileImage = 'https://images.findagrave.com/photos/2012/149/725_133835273812.jpg';
  let mickjaggerProfileImage = 'https://www.inforum.com/incoming/3974800-2iwhmy-072419.F.FF.WAYBACK/alternates/BASE_LANDSCAPE/072419.F.FF.WAYBACK';
  let johnlennonProfileImage = 'https://pbs.twimg.com/profile_images/1181815686760472576/RQDqociu_400x400.jpg';
  let axlroseProfileImage = 'https://i.pinimg.com/474x/14/59/c2/1459c2206b6659abfeb6af69397fe621.jpg';
  let jimmypageProfileImage = 'https://img.discogs.com/us5W50io2NM2eJRl6B9BTOgcsM0=/600x463/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-180585-1450443818-9648.jpeg.jpg';
  let mjacksonProfileImage = 'https://www.onthisday.com/images/people/michael-jackson-medium.jpg';


  initialAllPosts = [
    { id: 1, liked: false, username: 'marilyn', profileImage: { uri: marilynProfileImage }, content: { uri: 'https://i.insider.com/5ad8c03a1b60b453008b48b1?width=1136&format=jpeg' }, postDate: '13 hours ago', comments: [{ id: 23423424, username: 'marilyn', content: 'New York City' }, { id: 23565324, username: 'johnlennon', content: 'Nice photo', subcomments: [{ id: 234234, username: 'mickjagger', content: 'I agree with you' }, { id: 23576564543, username: 'marilyn', content: 'Thank you both' }] }] },
    { id: 2, liked: false, username: 'mickjagger', profileImage: { uri: mickjaggerProfileImage }, content: { uri: 'https://cdn.getyourguide.com/img/location_img-173-2017400448-148.jpg' }, postDate: '3 days ago', comments: [{ id: 23423424, username: 'mickjagger', content: 'Dubai' }, { id: 23565324, username: 'johnlennon', content: 'Which country is this city in?', subcomments: [{ id: 234234, username: 'mickjagger', content: 'United Arab Emirates' }, { id: 23576564543, username: 'johnlennon', content: 'Yes, right' }] }, { id: 7489238, username: 'marilyn', content: 'How did you take this shot?', subcomments: [{ id: 2342948, username: 'mickjagger', content: 'From a helicopter' }] }] },
    { id: 3, liked: true, username: 'johnlennon', profileImage: { uri: johnlennonProfileImage }, content: { uri: 'https://www.jetsetter.com/uploads/sites/7/2019/04/GettyImages-924894324-1380x690.jpg' }, postDate: '5 days ago', comments: [{ id: 748734, username: 'johnlennon', content: 'Paris' }] },
    { id: 4, liked: false, username: 'axlrose', profileImage: { uri: axlroseProfileImage }, content: { uri: 'http://landmarkbranding.com/wp-content/uploads/2016/02/The-GE-Building-at-30-Rockefeller-Plaza-768x1365.jpg' }, postDate: '6 days ago' },
    { id: 5, liked: false, username: 'johnlennon', profileImage: { uri: johnlennonProfileImage }, content: { uri: 'https://www.history.com/.image/t_share/MTU3ODc5MDg2NDMxODcyNzM1/egyptian-pyramids-hero.jpg' }, postDate: '7 days ago', comments: [{ id: 83475, username: 'johnlennon', content: 'Pyramids' }] }
  ];

  const [allPosts, setAllPosts] = useState(initialAllPosts);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeStory, setActiveStory] = useState(0);

  const handleLike = (postId) => {
    //Bu fonksiyon network request'i taklit ediyor.
    index = [allPosts.findIndex(post => post.id == postId)];
    allPosts[index].liked = !allPosts[index].liked;
    setAllPosts(allPosts);
  }



  let iconSize = 28;

  const renderPost = itemData => {
    return (
      <Post handleLike={handleLike} data={itemData.item} />
    )
  }

  const renderStoryThumbnail = itemData => {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', width: iconSize + 48, marginRight: 8 }}>
        <TouchableOpacity
          onPress={() => {
            setActiveStory(itemData.item.id);
            setModalOpen(true);
          }}
        >
          <Image source={itemData.item.profileImage} style={{ height: iconSize + 48, width: iconSize + 48, borderRadius: 100 }}></Image>
        </TouchableOpacity>
        <Text numberOfLines={1} style={{ textAlign: 'center', padding: 4 }}>{itemData.item.username}</Text>
      </View>
    )
  }

  const renderListHeader_StoriesList = () => {
    return (
      <FlatList
        nestedScrollEnabled={true}
        horizontal={true}
        style={{ padding: 8, margin: 0 }}
        data={storiesData}
        keyExtractor={(item, index) => { return '' + item.id; }}
        renderItem={renderStoryThumbnail}
      />)
  }



  storiesData = [
    { id: 0, username: 'Your Story', profileImage: { uri: marilynProfileImage }, content: { uri: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60' } },
    { id: 1, username: 'johnlennon', storyDate: '3h', profileImage: { uri: johnlennonProfileImage }, content: { uri: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60' } },
    { id: 2, username: 'axlrose', profileImage: { uri: axlroseProfileImage }, content: { uri: 'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60' } },
    { id: 3, username: 'mickjagger', profileImage: { uri: mickjaggerProfileImage }, content: { uri: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60' } },
    { id: 4, username: 'mjackson', profileImage: { uri: mjacksonProfileImage }, content: { uri: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60' } },
    { id: 5, username: 'jimmypage', profileImage: { uri: jimmypageProfileImage }, content: { uri: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60' } },
  ]

  function closeModal() {
    setModalOpen(false);
  }

  const previousStory = () => {
    if (activeStory != 0) {
      setActiveStory(activeStory - 1);
    }
  }

  const nextStory = () => {
    if (activeStory < storiesData.length - 1) {
      setActiveStory(activeStory + 1);
    } else {
      setActiveStory(0);
      closeModal();
    }
  }



  return (
    <SafeAreaView style={styles.container}>
      <Modal animationType='slide' style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} visible={modalOpen}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
          <Story previousStory={previousStory} nextStory={nextStory} closeModal={() => { closeModal(); }} data={storiesData[activeStory]} />
        </SafeAreaView>
      </Modal>

      <View style={styles.topbar}>
        <View style={{ padding: 8, alignItems: 'center' }}>
          <Image source={require('./assets/icons/camera.png')} style={{ width: iconSize, height: iconSize }} />
        </View>
        <Text style={{ flex: 1 }}>Instagram</Text>
        <View style={{ padding: 8, alignItems: 'center' }}>
          <Image source={require('./assets/icons/send.png')} style={{ width: iconSize, height: iconSize }} />
        </View>
      </View>
      <View style={styles.movingContentContainer}>
        <FlatList
          style={{ padding: 0, margin: 0 }}
          nestedScrollEnabled={true}
          data={allPosts}
          keyExtractor={(item, index) => { return '' + item.id; }}
          renderItem={renderPost}
          ListHeaderComponent={renderListHeader_StoriesList}
        />
      </View>

      <View style={styles.navigationBar}>
        <Image source={require('./assets/icons/home.png')} style={{ width: iconSize, height: iconSize }} />
        <Image source={require('./assets/icons/search.png')} style={{ width: iconSize, height: iconSize }} />
        <Image source={require('./assets/icons/add.png')} style={{ width: iconSize, height: iconSize }} />
        <Image source={require('./assets/icons/like-empty.png')} style={{ width: iconSize, height: iconSize }} />
        <Image source={{ uri: marilynProfileImage }} style={{ height: iconSize, width: iconSize, borderRadius: 100 }}></Image>

      </View>
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 0
  },
  topbar: {
    flex: .06,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  movingContentContainer: {
    flex: .88,
    width: '100%',
    padding: 0,
    margin: 0,
    backgroundColor: 'white'
  },
  navigationBar: {
    flex: .06,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around'
  },
});

export default App;
