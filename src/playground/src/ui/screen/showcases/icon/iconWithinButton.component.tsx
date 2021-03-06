/**
 * IMPORTANT: To use Icon component make sure to follow this guide:
 * https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 */

import React from 'react';
import {
  Button,
  Icon,
} from 'react-native-ui-kitten';

export class IconWithinButtonShowcase extends React.Component {

  state = {
    liked: false,
  };

  onPress = () => {
    const liked = !this.state.liked;
    this.setState({ liked });
  };

  renderIcon = (style) => (
    <Icon
      name={this.state.liked ? 'heart' : 'heart-outline'}
      {...style}
    />
  );

  render() {
    return (
      <Button
        icon={this.renderIcon}
        onPress={this.onPress}>
        LIKE
      </Button>
    );
  }
}
