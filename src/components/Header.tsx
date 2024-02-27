import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('screen');

type HeaderProps = {
  title: string;
  onBackButton?: () => void;
  onPressStar?: () => void;
};

const Header: React.FC<HeaderProps> = ({title, onBackButton, onPressStar}) => {
  return (
    <View style={styles.container}>
      {onBackButton && (
        <TouchableOpacity onPress={onBackButton} style={styles.backContainer}>
          <Text>{'<'}</Text>
        </TouchableOpacity>
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.title} adjustsFontSizeToFit>
          {title}
        </Text>
      </View>
      {onPressStar && (
        <View style={styles.backContainer}>
          <Text>Star</Text>
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width,
    height: 60,
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  backContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
