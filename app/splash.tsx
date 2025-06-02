import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

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
        source={require('../assets/images/qik-list1.jpeg')} 
        style={styles.logo} 
        resizeMode="contain"
      />
      {/* <Text style={styles.title}>Welcome </Text> */}
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
    width: 400,
    height: 400,
    marginBottom: 0,
  },
  title: { 
    marginTop: -20,
    fontSize: 24, 
    fontWeight: 'bold' 
  },
});
