import {SafeAreaView, StyleSheet, Alert, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import UserItem from '../components/UserItem';
import {User} from '../utils/types/user';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../navigation/MainStackNavigation';

type MainScreenProps = NativeStackScreenProps<MainStackParamList, 'MainScreen'>;

const MainScreen: React.FC<MainScreenProps> = ({navigation}) => {
  const [users, setUsers] = useState<User[]>([]);

  const initialRequest = useCallback(async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    })
      .then(res => res.json())
      .catch(err => {
        Alert.alert(err);
      });
    setUsers(result);
  }, []);

  useEffect(() => {
    initialRequest();
  }, [initialRequest]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {users.length > 0 && (
        <FlatList
          data={users}
          initialNumToRender={5}
          renderItem={({item}) => (
            <UserItem
              user={item}
              onPressAlbum={(albumId: number) =>
                navigation.navigate('AlbumDetails', {albumId})
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
    backgroundColor: 'gray',
  },
});
