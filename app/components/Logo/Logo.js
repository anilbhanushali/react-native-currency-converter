import React, { Component } from 'react';
import { View, Animated, Text, Keyboard, Platform } from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 100;
class Logo extends Component {
  constructor(props) {
    super(props);
    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }
  componentDidMount() {
    const name = Platform.OS === 'ios' ? 'Will' : 'Did';
    this.keyboardDidShowListener = Keyboard.addListener(
      `keyboard${name}Show`,
      this.keyboardWillShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      `keyboard${name}Hide`,
      this.keyboardWillHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardWillShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  keyboardWillHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  render() {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth },
    ];

    const imageStyle = [styles.image, { width: this.imageWidth }];
    return (
      <View style={styles.container}>
        <Animated.Image
          resizeMode="contain"
          style={containerImageStyle}
          source={require('./images/background.png')}
        >
          <Animated.Image
            resizeMode="contain"
            style={imageStyle}
            source={require('./images/logo.png')}
          />
        </Animated.Image>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
