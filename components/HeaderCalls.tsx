import { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const HeaderCalls: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'missed'>('all');

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
      <View style={styles.principalContainer}>
        <View style={styles.firstContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="ellipsis-horizontal" size={24} color="black" backgroundColor="#eeecea"/>
          </TouchableOpacity>
        </View>
        <View style={styles.secondContainer}>
          <View style = {styles.buttonBox}>
            <TouchableOpacity onPress={handleAllPress}
                style={[styles.filterButton, filter === 'all' && styles.activeButton]}
            >
              <Text style={[styles.filterText, filter === 'all' && styles.activeFilterText]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleMissedPress}
              style={[styles.filterButton, filter === 'missed' && styles.activeButton]}
            >
              <Text style={[styles.filterText, filter === 'missed' && styles.activeFilterText]}>Missed</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.thirdContainer}>
        <TouchableOpacity style={styles.iconContainer}>
            <AntDesign name="plus" size={24} color="black" backgroundColor="#eeecea"/>
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
    backgroundColor: '#f5f5f5',
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
    paddingHorizontal: 8,
  },
  buttonBox: {
    flexDirection: 'row',
    backgroundColor: '#eeecea',
    padding: 3,
    borderRadius: 8,
  },
  filterButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  activeButton: {
    backgroundColor: 'white',
  },
  filterText: {
    fontSize: 14,
    color: 'black',
    width: 50,
    textAlign: 'center',
  },
  activeFilterText: {
    fontWeight: '600',
    color: 'black',
  },
});

export default HeaderCalls;
