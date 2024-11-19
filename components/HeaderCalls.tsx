import { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';

const HeaderCalls: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'missed'>('all');

  const backgroundColor = useThemeColor({}, 'headerCalls');
  const buttonBackgroundColor = useThemeColor({}, 'buttonBackground');
  const buttonActiveColor = useThemeColor({}, 'buttonActive');
  const textColor = useThemeColor({}, 'text');

  const handleAllPress = () => {
    setFilter('all')
    console.log('All pressed');
  };

  const handleMissedPress = () => {
    setFilter('missed')
    console.log('Missed pressed');
  };
  return (
    <SafeAreaView>
      <View style={[styles.principalContainer, { backgroundColor }]}>
        <View style={styles.firstContainer}>
          <TouchableOpacity style={[styles.iconContainer,{backgroundColor: buttonBackgroundColor}]}>
            <Ionicons name="ellipsis-horizontal" size={24} color={textColor}/>
          </TouchableOpacity>
        </View>
        <View style={styles.secondContainer}>
          <View style = {[styles.buttonBox, { backgroundColor: buttonBackgroundColor }]}>
            <TouchableOpacity onPress={handleAllPress}
                style={[styles.filterButton, filter === 'all' && { backgroundColor: buttonActiveColor }]}
            >
              <Text style={[styles.filterText,{ color: textColor }, filter === 'all' && styles.activeFilterText]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleMissedPress}
              style={[styles.filterButton, filter === 'missed' && { backgroundColor: buttonActiveColor }]}
            >
              <Text style={[styles.filterText, { color: textColor }, filter === 'missed' && styles.activeFilterText]}>Missed</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.thirdContainer}>
        <TouchableOpacity style={[styles.iconContainer, { backgroundColor: buttonBackgroundColor }]}>
            <AntDesign name="plus" size={24} color={textColor} />
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
    paddingVertical: 10,
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
    paddingRight: 16
  },
  thirdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    paddingRight: 16
  },
  iconContainer: {
    padding: 4,
    borderRadius: 50,
  },
  buttonBox: {
    flexDirection: 'row',
    padding: 3,
    borderRadius: 8,
  },
  filterButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  filterText: {
    fontSize: 14,
    width: 50,
    textAlign: 'center',
  },
  activeFilterText: {
    fontWeight: '600',
  },
});

export default HeaderCalls;
