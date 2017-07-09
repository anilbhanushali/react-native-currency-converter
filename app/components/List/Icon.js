import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const Icon = ({ checkmark, visible, backgroundColor }) => {
  const iconStyles = [styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible);
  }
  if (backgroundColor) {
    iconStyles.push({ backgroundColor });
  }
  return (
    <View style={iconStyles}>
      {checkmark
        ? <Image
          resizeMode="contain"
          style={styles.checkIcon}
          source={require('./images/check.png')}
        />
        : null}
    </View>
  );
};

Icon.propTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

export default Icon;
