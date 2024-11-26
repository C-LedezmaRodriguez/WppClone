import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import TextApp from '@/components/TextApp';

interface FooterProps {
  title: string;
}

const Footer: React.FC<FooterProps> = ({ title }) => {
  const router = useRouter();

  return (
    <View style={styles.footer}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => router.push('calls' as any)}>
          <TextApp style={styles.buttonText} text={'Calls'} fontWeight={'bold'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('status' as any)}>
          <TextApp style={styles.buttonText} text={'Status'} fontWeight={'bold'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('chats' as any)}>
          <TextApp style={styles.buttonText} text={'Chats'} fontWeight={'bold'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#075E54',
    height: 80,
    bottom: 0,
    width: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
    width: '100%',
    backgroundColor: '#075E54',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 10,
  },
});

export default Footer;
