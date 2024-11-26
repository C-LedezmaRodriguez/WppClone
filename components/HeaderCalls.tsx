import React, { FC, useState } from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import TextApp from '@/components/TextApp';

import { useThemeColor } from '@/hooks/useThemeColor';
import {fontSizes, widthSizes} from "@/constants/Sizes";

const HeaderCalls: FC = () => {
  const [filter, setFilter] = useState<'all' | 'missed'>('all');

  const backgroundColor = useThemeColor({}, 'backgroundCalls');
  const buttonBackgroundColor = useThemeColor({}, 'buttonBackgroundTabs');
  const buttonActiveColor = useThemeColor({}, 'buttonOnCalls');
  const textColor = useThemeColor({}, 'text');

  const handleAllPress = () => {
    setFilter('all');
    console.log('All pressed');
  };

  const handleMissedPress = () => {
    setFilter('missed');
    console.log('Missed pressed');
  };
  return (
    <SafeAreaView>
      <View style={[styles.principalContainer, { backgroundColor }]}>
        <View style={styles.firstContainer}>
          <TouchableOpacity style={[styles.iconContainer, { backgroundColor: buttonBackgroundColor }]}>
            <Ionicons name="ellipsis-horizontal" size={20} color={textColor} />
          </TouchableOpacity>
        </View>
        <View style={styles.secondContainer}>
          <View style={[styles.buttonBox, { backgroundColor: buttonBackgroundColor }]}>
            <TouchableOpacity
              onPress={handleAllPress}
              style={[styles.filterButton, filter === 'all' && { backgroundColor: buttonActiveColor }]}
            >
              <TextApp
                style={[styles.filterText, { color: textColor }]}
                text={'All'}
                fontWeight={filter === 'all' ? 'normal' : '600'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleMissedPress}
              style={[styles.filterButton, filter === 'missed' && { backgroundColor: buttonActiveColor }]}
            >
              <TextApp
                style={[styles.filterText, { color: textColor }]}
                text={'Missed'}
                fontWeight={filter === 'missed' ? 'normal' : '600'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.thirdContainer}>
          <TouchableOpacity style={[styles.iconContainer, { backgroundColor: buttonBackgroundColor }]}>
            <AntDesign name="plus" size={20} color={textColor} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  principalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: widthSizes[10],
  },
  firstContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1,
  },
  secondContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingRight: widthSizes[16],
  },
  thirdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    paddingRight: widthSizes[16],
  },
  iconContainer: {
    padding: widthSizes[4],
    borderRadius: 50,
    marginHorizontal: widthSizes[10],
  },
  buttonBox: {
    flexDirection: 'row',
    padding: widthSizes[3],
    borderRadius: 8,
  },
  filterButton: {
    paddingHorizontal: widthSizes[10],
    paddingVertical: widthSizes[5],
    borderRadius: 8,
  },
  filterText: {
    fontSize: fontSizes[14],
    width: widthSizes[50],
    textAlign: 'center',
  },
});

export default HeaderCalls;
