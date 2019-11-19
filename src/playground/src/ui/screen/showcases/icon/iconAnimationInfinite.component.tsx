/**
 * IMPORTANT: To use Icon component make sure to follow this guide:
 * https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 */

import React from 'react';
import {
  Button,
  Icon,
} from 'react-native-ui-kitten';

export const IconAnimationInfiniteShowcase = () => {

  const iconRef = React.createRef();

  const onPress = () => {
    this.iconRef.current.startAnimation();
  };

  const renderIcon = (style) => (
    <Icon
      {...style}
      ref={iconRef}
      name='star'
      animationConfig={{ cycles: Infinity }}
    />
  );

  return (
    <Button
      icon={renderIcon}
      onPress={onPress}>
      START ANIMATION
    </Button>
  );
};
