import React, { FC } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import TextApp from '@/components/TextApp';

import { useThemeColor } from '@/hooks/useThemeColor';

const UpdatesScreen: FC = () => {
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.content}>
        <TextApp text={'comunidades'} style={[styles.text, { color: textColor }]} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 30,
    borderBottomWidth: 2,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default UpdatesScreen;
