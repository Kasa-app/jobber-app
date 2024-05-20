import {TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './menu-button-style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';

type Props = {
  handlePress: () => void;
};

export const MenuButton = ({handlePress}: Props) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <FontAwesomeIcon icon={faBars} style={styles.icon} size={32} />
    </TouchableOpacity>
  );
};
