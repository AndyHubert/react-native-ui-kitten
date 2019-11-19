/**
 * IMPORTANT: To use Icon component make sure to follow this guide:
 * https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 */

import React from 'react';
import {
  Button,
  Icon,
} from 'react-native-ui-kitten';

export const IconAnimationShowcase = () => {

  const iconRef = React.createRef();

  const onPress = () => {
    iconRef.current.startAnimation();
  };

  const renderIcon = (style) => (
    <Icon
      {...style}
      ref={iconRef}
      name='star'
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
