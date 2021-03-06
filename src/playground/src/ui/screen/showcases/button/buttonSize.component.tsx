import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  Layout,
} from 'react-native-ui-kitten';

export const ButtonSizeShowcase = () => (
  <Layout style={styles.container}>
    <Button style={styles.button} size='tiny'>TINY</Button>
    <Button style={styles.button} size='small'>SMALL</Button>
    <Button style={styles.button} size='medium'>MEDIUM</Button>
    <Button style={styles.button} size='large'>LARGE</Button>
    <Button style={styles.button} size='giant'>GIANT</Button>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  button: {
    marginVertical: 4,
    marginHorizontal: 4,
  },
});
