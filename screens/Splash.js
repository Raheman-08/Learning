import React, { useEffect } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 


export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000); // Change this value to set the time delay in milliseconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/heart.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
});

