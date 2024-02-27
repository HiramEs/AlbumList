import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import UserItem from '../components/UserItem';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../navigation/MainStackNavigation';
import Header from '../components/Header';
import {fetchUsers} from '../services/users';
import {useAppDispatch, useAppSelector} from '../../store';
import Loading from '../components/Loading';

type MainScreenProps = NativeStackScreenProps<MainStackParamList, 'MainScreen'>;

const MainScreen: React.FC<MainScreenProps> = ({navigation}) => {
  const {users, loading} = useAppSelector(state => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title="Music!" />
      {users.length > 0 && (
        <FlatList
          data={users}
          initialNumToRender={5}
          renderItem={({item}) => (
            <UserItem
              user={item}
              onPressAlbum={(albumId: number, albumName: string) =>
                navigation.navigate('AlbumDetails', {albumId, albumName})
              }
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
