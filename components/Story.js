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
  Dimensions,
  TextInput,
  TouchableOpacity
} from 'react-native';

const Story = props => {
  let iconSize = 28;
  let data = props.data;
  return (
    <View style={{ flex: 1 }}>

      <View style={{ flex: 1 }}>
        <Image source={data.content} style={{ borderRadius: 16, width: '100%', height: '100%' }} />

        <View style={{ height: '100%', position: 'absolute', width: '20%', right: 0, top: 0, bottom: 0 }}>
          <TouchableOpacity onPress={props.nextStory} style={{ height: '100%', width: '100%' }}>
          </TouchableOpacity>
        </View>

        <View style={{ height: '100%', position: 'absolute', width: '20%', left: 0, top: 0, bottom: 0 }}>
          <TouchableOpacity onPress={props.previousStory} style={{ height: '100%', width: '100%' }}>
          </TouchableOpacity>
        </View>

        <View style={styles.ownerBar}>
          <Image source={data.profileImage} style={{ height: iconSize + 12, width: iconSize + 12, borderRadius: 100 }}></Image>
          <Text style={{ paddingLeft: 12, fontWeight: 'bold', color: 'white' }}>{data.username}</Text>
          <Text style={{ paddingLeft: 8, color: 'white' }}>{data.storyDate}</Text>
          <TouchableOpacity style={{ width: iconSize, height: iconSize, position: 'absolute', right: 8 }} onPress={props.closeModal}>
            <Image source={require('../assets/icons/close-white.png')} style={{ width: iconSize, height: iconSize }} />
          </TouchableOpacity>
        </View>



      </View>

      <View style={styles.messageBar}>
        <View style={{ padding: 8, alignItems: 'center' }}>
          <Image source={require('../assets/icons/camera-white.png')} style={{ width: iconSize, height: iconSize }} />

        </View>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 8, height: '100%', borderColor: 'white', borderWidth: 1, borderRadius: 48 }}>
          <TextInput placeholder='Send message' placeholderTextColor='lightgray' style={{ padding: 12, height: '100%', flex: 1, color: 'white' }}></TextInput>
          <Image source={require('../assets/icons/options-white.png')} style={{ marginHorizontal: 8, width: iconSize, height: iconSize }} />
        </View>
        <View style={{ padding: 8, alignItems: 'center' }}>
          <Image source={require('../assets/icons/send-white.png')} style={{ width: iconSize, height: iconSize }} />

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messageBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 8
  },
  ownerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 8,
    position: 'absolute',
    top: 0, right: 0, left: 0,
    backgroundColor: '#00000010'
  },
});

export default Story;