import React, { FC } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import TextApp from '@/components/TextApp';

import { useThemeColor } from '@/hooks/useThemeColor';
import { widthSizes } from '@/constants/Sizes';

const UpdatesScreen: FC = () => {
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.content}>
        <TextApp text={'estaditos'} style={{ color: textColor }} />
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
    padding: widthSizes[30],
    borderBottomWidth: 2,
    justifyContent: 'center',
  },
});

export default UpdatesScreen;
