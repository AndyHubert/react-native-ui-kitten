import React from 'react';
import { Button } from 'react-native-ui-kitten';

export const ButtonSimpleUsageShowcase = () => {

  const [pressCounter, setPressCounter] = React.useState(0);

  const onPress = () => {
    setPressCounter(pressCounter + 1);
  };

  return (
    <Button onPress={onPress}>
      {`PRESSED ${pressCounter} TIMES`}
    </Button>
  );
};
