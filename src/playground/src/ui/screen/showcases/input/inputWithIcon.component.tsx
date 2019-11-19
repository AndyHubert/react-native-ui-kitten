/**
 * IMPORTANT: To use Icon component make sure to follow this guide:
 * https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 */

import React from 'react';
import {
  Icon,
  Input,
} from 'react-native-ui-kitten';

export const InputWithIconShowcase = () => {

  const [value, setValue] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const onIconPress = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (style) => (
    <Icon {...style} name={secureTextEntry ? 'eye-off' : 'eye'}/>
  );

  return (
    <Input
      value={value}
      placeholder='********'
      icon={renderIcon}
      secureTextEntry={secureTextEntry}
      onIconPress={onIconPress}
      onChangeText={setValue}
    />
  );
};
