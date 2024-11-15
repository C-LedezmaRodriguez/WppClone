import { View, Text, StyleSheet,SafeAreaView} from 'react-native';
import HeaderCalls from '@/components/HeaderCalls';

const CallsScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderCalls />
      <View style={styles.content}>
        <Text>llamaditas</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    padding: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    justifyContent: 'center',
  },
});

export default CallsScreen;
