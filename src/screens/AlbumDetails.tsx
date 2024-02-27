import {
  StyleSheet,
  SafeAreaView,
  Alert,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../navigation/MainStackNavigation';
import {Album} from '../utils/types/album';
import Header from '../components/Header';

type AlbumDetailsProps = NativeStackScreenProps<
  MainStackParamList,
  'AlbumDetails'
>;

const {width} = Dimensions.get('screen');

const AlbumDetails: React.FC<AlbumDetailsProps> = ({navigation, route}) => {
  const {albumId, albumName} = route.params;
  const [album, setAlbum] = useState<Album[]>([]);

  const initialRequest = useCallback(async () => {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
      {
        method: 'GET',
      },
    )
      .then(res => res.json())
      .catch(err => {
        Alert.alert(err);
      });
    setAlbum(result);
  }, [albumId]);

  useEffect(() => {
    initialRequest();
  }, [initialRequest]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        onBackButton={() => navigation.goBack()}
        title={albumName}
        onPressStar={() => null}
      />
      {album.length > 0 && (
        <FlatList
          data={album}
          numColumns={3}
          key={3}
          renderItem={({item}) => (
            <Image
              key={item.id}
              source={{uri: item.thumbnailUrl}}
              resizeMode="contain"
              style={styles.image}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default AlbumDetails;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'gray',
  },
  grid: {
    flex: 3,
    flexDirection: 'row',
  },
  image: {
    width: width / 3,
    height: width / 3,
  },
});
