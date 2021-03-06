/**
 * IMPORTANT: To use Icon component make sure to follow this guide:
 * https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 */

import React from 'react';
import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from 'react-native-ui-kitten';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

const BackAction = () => (
  <TopNavigationAction icon={BackIcon}/>
);

export const TopNavigationAlignmentsShowcase = () => (
  <Layout>
    <TopNavigation
      title='Start'
      alignment='start'
      leftControl={BackAction()}
    />
    <TopNavigation
      title='Center'
      alignment='center'
      leftControl={BackAction()}
    />
  </Layout>
);
