import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  Select,
} from 'react-native-ui-kitten';

const data = [
  { text: 'Option 1' },
  { text: 'Option 2' },
  { text: 'Option 3' },
];

export const SelectMultiSelectShowcase = () => {

  const [selectedOption, setSelectedOption] = React.useState([]);

  return (
    <Layout style={styles.container}>
      <Select
        data={data}
        multiSelect={true}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 228,
  },
});

