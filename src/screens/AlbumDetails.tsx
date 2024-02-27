import {
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../navigation/MainStackNavigation';
import Header from '../components/Header';
import {fetchPhotos} from '../services/photos';
import {useAppDispatch, useAppSelector} from '../../store';
import {fetchAlbum} from '../services/album';

type AlbumDetailsProps = NativeStackScreenProps<
  MainStackParamList,
  'AlbumDetails'
>;

const {width} = Dimensions.get('screen');

const AlbumDetails: React.FC<AlbumDetailsProps> = ({navigation, route}) => {
  const {albumId, albumName} = route.params;
  const {photos} = useAppSelector(state => state.photos);
  const {album} = useAppSelector(state => state.album);
  const dispatch = useAppDispatch();

  const [isPhotoMode, setPhotoMode] = useState<boolean>(false);

  const onPhotoMode = useCallback(() => {
    setPhotoMode(!isPhotoMode);
  }, [isPhotoMode]);

  useEffect(() => {
    dispatch(fetchAlbum(albumId));
    dispatch(fetchPhotos());
  }, [dispatch, albumId]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        onBackButton={() => navigation.goBack()}
        starSelected={isPhotoMode}
        title={albumName}
        onPressStar={onPhotoMode}
      />
      {!isPhotoMode && album && album.length > 0 && (
        <FlatList
          data={album}
          numColumns={3}
          initialNumToRender={30}
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
      {isPhotoMode && photos.length > 0 && (
        <FlatList
          data={photos}
          numColumns={3}
          key={3}
          initialNumToRender={30}
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
    backgroundColor: 'white',
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
