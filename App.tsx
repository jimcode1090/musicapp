import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import data from './src/Data';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* BANNER */}
        <Image style={styles.banner} source={data.banner.img} />
        {/* MOOD WEEKEND */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.moodWeekend.title}</Text>
          <Image style={styles.icon} source={data.moodWeekend.rightIcon} />
        </View>
        <ScrollView horizontal>
          {data.moodWeekend.images.map((image, index) => (
            <Image
              key={index}
              style={styles.moodWeekendImage}
              source={image.img}
            />
          ))}
        </ScrollView>
        {/* TOP ALBUMS */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.topAlbums.title}</Text>
        </View>
        {data.topAlbums.images.map((image, index) => (
          <Image key={index} style={styles.topAlbumImage} source={image.img} />
        ))}
        {/* BROWSE ALL */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.browseAll.title}</Text>
        </View>
        <View style={styles.browseAllContainer}>
          {data.browseAll.images.map((image, index) => (
            <Image
              key={index}
              style={styles.browseAllImage}
              source={image.img}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  titleContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2caeca',
  },
  icon: {
    opacity: 0.5,
    marginHorizontal: 5,
    borderRadius: 20,
    width: 30,
    height: 30,
  },
  moodWeekendImage: {
    marginHorizontal: 5,
    borderRadius: 20,
    width: 150,
    height: 150,
  },
  topAlbumImage: {
    borderRadius: 50,
    margin: 5,
    width: '98%',
    height: 300,
  },
  browseAllContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  browseAllImage: {
    margin: 5,
    borderRadius: 20,
  },
});
export default App;
