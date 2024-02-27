import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {User} from '../utils/types/user';

type UserItemProps = {
  user: User;
  onPressAlbum: (albumId: number, albumName: string) => void;
};

const UserItem: React.FC<UserItemProps> = ({user, onPressAlbum}) => {
  const [albums, setAlbums] = useState<
    {
      userId: number;
      id: number;
      title: string;
    }[]
  >([]);

  const initialRequest = useCallback(async () => {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/albums?userId=${user.id}`,
      {
        method: 'GET',
      },
    )
      .then(res => res.json())
      .catch(err => {
        Alert.alert(err);
      });
    setAlbums(result);
  }, [user.id]);

  useEffect(() => {
    initialRequest();
  }, [initialRequest]);

  return (
    <View style={styles.container}>
      <View style={styles.userNameContainer}>
        <Text style={styles.userName}>{user.username}</Text>
      </View>
      {albums.map(({title, id}) => (
        <TouchableOpacity
          onPress={() => onPressAlbum(id, title)}
          style={styles.albumsContainer}
          key={id}>
          <View style={styles.albumItem}>
            <Text style={styles.albumName}>{title}</Text>
            <Text>X</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  userNameContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '98%',
    backgroundColor: 'black',
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom: 6,
  },
  userName: {
    textAlign: 'left',
    color: 'white',
    fontWeight: '600',
    fontSize: 25,
  },
  albumsContainer: {
    width: '98%',
    alignSelf: 'center',
    alignItems: 'flex-end',
  },
  albumItem: {
    flexDirection: 'row',
    width: '80%',
    minHeight: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  albumName: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },
});
