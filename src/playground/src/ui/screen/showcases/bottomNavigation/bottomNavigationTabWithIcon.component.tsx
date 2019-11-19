/**
 * IMPORTANT: To use Icon component make sure to follow this guide:
 * https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 */

import React from 'react';
import {
  BottomNavigationTab,
  Icon,
  Layout,
} from 'react-native-ui-kitten';

const PersonIcon = (style) => (
  <Icon {...style} name='person'/>
);

const RemotePersonIcon = (style) => (
  <Image
    style={style}
    source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/person.png' }}
  />
);

export const BottomNavigationTabWithIconShowcase = () => (
  <Layout>

    <BottomNavigationTab title='EVA ICON' icon={PersonIcon}/>

    <BottomNavigationTab title='REMOTE EVA ICON' icon={RemotePersonIcon}/>

  </Layout>
);
