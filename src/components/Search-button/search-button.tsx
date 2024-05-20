import {TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './search-button-style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';

type Props = {
  handlePress: () => void;
};

export const SearchButton = ({handlePress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.icon} size={24} />
    </TouchableOpacity>
  );
};
