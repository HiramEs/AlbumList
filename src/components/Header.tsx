import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('screen');

type HeaderProps = {
  title: string;
  onBackButton?: () => void;
  onPressStar?: () => void;
  starSelected?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  title,
  onBackButton,
  onPressStar,
  starSelected,
}) => {
  return (
    <View style={styles.container}>
      {onBackButton && (
        <TouchableOpacity onPress={onBackButton} style={styles.backContainer}>
          <Icon name="chevron-back" size={25} />
        </TouchableOpacity>
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.title} adjustsFontSizeToFit>
          {title}
        </Text>
      </View>
      {onPressStar && (
        <View style={styles.backContainer}>
          <Icon
            name={starSelected ? 'star' : 'star-outline'}
            size={25}
            onPress={onPressStar}
          />
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width,
    minHeight: 60,
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    paddingHorizontal: 40,
    fontSize: 20,
  },
  backContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
