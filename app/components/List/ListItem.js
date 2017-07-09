import React, { PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';
import Icon from './Icon';

const ListItem = ({
  text,
  selected = false,
  onPress,
  checkmark = true,
  visible = true,
  customIcon = null,
  iconBackground,
}) =>
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text>{text}</Text>
      {selected
        ? <Icon checkmark={checkmark} visible={visible} backgroundColor={iconBackground} />
        : <Icon />}
      {customIcon}
    </View>
  </TouchableHighlight>;

ListItem.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool,
  onPress: PropTypes.func,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
};

export default ListItem;
