import AppText from '@/components/AppText';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <View>
                <Ionicons name="chevron-back-outline" size={24} color="white" style={styles.backButton} />
            </View>

            <AppText style={ styles.signIn }>Masuk</AppText>
        </View>

        <View style={styles.middleContainer}>
            <AppText style={styles.welcomeText}>Selamat Datang Kembali!</AppText>
            <AppText style={styles.subWelcomeText}>Halo, Lanjut login?</AppText>

            <AppText style={styles.label}>Email</AppText>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <AppText style={styles.label}>Kata Sandi</AppText>
            <View style={styles.passwordContainer}>
                <TextInput
                    style={[styles.input, { flex: 1, marginTop: 0 }]}
                    placeholder="Kata Sandi"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                    <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={22} color="#888" />
                </TouchableOpacity>
            </View>

            {/* Button Login */}
            <TouchableOpacity style={styles.loginButton} onPress={() => router.replace('/(tabs)')}>
                <AppText style={styles.loginButtonText}>Login</AppText>
            </TouchableOpacity>

            {/* Teks Daftar */}
            <View style={styles.registerContainer}>
                <AppText style={styles.registerText}>
                    Belum punya akun? <AppText style={styles.registerLink}>Daftar!</AppText>
                </AppText>
            </View>
        </View>

        <TouchableOpacity>
            <Ionicons name="add" size={28} color="white" />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
    },
    topContainer: {
        height: '27.5%',
        paddingTop: '15%',
        backgroundColor: '#4190FF',
        borderBottomLeftRadius: 30,   
        borderBottomRightRadius: 30,
    },
    backButton: {
        marginLeft: '5%',
    },  
    signIn: {
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFF',
        paddingTop: '10%'
    },
    topRightIcons: {
        position: 'absolute',
        top: 60,
        right: 20,
        flexDirection: 'row',
    },

    middleContainer: {
        height: '100%',
        marginLeft: '8%',
        marginRight: '8%',
        marginTop: '7.5%',
    },
    welcomeText: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    subWelcomeText: {
        fontSize: 16,
        color: '#434548',
        marginBottom: 30
    },
    label: {
        marginTop: 16,
        marginBottom: -10,
        fontSize: 16,
        color: '#434548',
        fontWeight: '500',
    },
    input: {
        height: 48,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 16,
        marginTop: 16,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 0,
        height: 48,
    },
    eyeIcon: {
        padding: 8,
    },
    loginButton: {
        backgroundColor: '#4190FF',
        borderRadius: 15,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    registerText: {
        fontSize: 14,
        color: '#434548',
    },
    registerLink: {
        color: '#4190FF',
        fontWeight: 'bold',
    },
});
