import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

const UpdatesScreen: React.FC = () => {
  const backgroundColor = useThemeColor({}, 'background')
  const textColor = useThemeColor({},'text')

  return (
    <SafeAreaView style={[styles.container, {backgroundColor}]}>
      <View style={styles.content}>
        <Text style={[styles.text,{color:textColor}]}>comunidades</Text>
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
  text:{
    fontSize: 16
  }
});

export default UpdatesScreen;
