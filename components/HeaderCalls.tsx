import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const HeaderCalls: React.FC = () => {
  const handleAllPress = () => {
    console.log('All pressed');
  };

  const handleMissedPress = () => {
    console.log('Missed pressed');
  };
  return (
    <SafeAreaView>
      <View style={styles.principalContainer}>
        <View style={styles.firstContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="ellipsis-horizontal" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.secondContainer}>
          <TouchableOpacity onPress={handleAllPress}>
            <Text >All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMissedPress}>
            <Text >Missed</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.thirdContainer}>
        <TouchableOpacity style={styles.iconContainer}>
            <AntDesign name="plus" size={24} color="black"/>
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
    backgroundColor: '#fff',
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
  metaIcon: {
    width: 24,
    height: 24,
  },
});

export default HeaderCalls;
