import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('../auth/login');
    }, 2000); 

    return () => clearTimeout(timer);
  });

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/icon.png')} 
        style={styles.logo} 
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to ToDoListApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: "#fff" 
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold' 
  },
});
