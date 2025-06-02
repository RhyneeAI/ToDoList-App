import AppText from '@/components/AppText';
import { useAuth } from '@/contexts/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';

const ProfileScreen = () => {
    const API_URL = 'http://192.168.18.225:3000/logout';
    const { unsetUser } = useAuth();
    
    const logout = async () => {
        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await res.json();

            if (res.ok) {
                unsetUser(); 
                ToastAndroid.show(data.message, ToastAndroid.SHORT);
                router.replace('../auth/login');
            } else {
                ToastAndroid.show(data.message, ToastAndroid.LONG);
            }
        } catch (err) {
            console.error('Logout error : ', err);
            ToastAndroid.show('Logout Gagal!', ToastAndroid.SHORT);
        }
    };

    const { user } = useAuth();
    
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => router.replace('../home')} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="chevron-back-outline" size={32} color="black" />
                    <AppText style={styles.homeLabel}>Beranda</AppText>
                </TouchableOpacity>
            </View>

            <View style={styles.profileContainer}>
                <Image
                    source={require('../../assets/images/react-logo.png')} 
                    style={styles.profileImage} 
                    resizeMode="contain"
                />
                <Text style={styles.username}>{user?.name}</Text>
                <Text style={styles.description}>{user?.email}</Text>
            </View>
            <View style={styles.menuContainer}>
                <MenuItem title="Pribadi" />
                <MenuItem title="Umum" />
                <MenuItem title="Pemberitahuan" />
                <MenuItem title="Help" />
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                <Text style={styles.logoutText}>Keluar</Text>
            </TouchableOpacity>
        </View>
    );
};

type MenuItemProps = {
    title: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ title }) => (
    <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>{title}</Text>
        <Text style={styles.arrow}></Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4', 
        paddingHorizontal: '5%',
        paddingTop: 10
    },
    topContainer: {
        height: '15%',
        paddingTop: '15%',
    },
    homeLabel: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 3
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        color: '#888',
        marginBottom: 25
    },
    menuContainer: {
        marginBottom: 20,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    menuText: {
        fontSize: 18,
    },
    arrow: {
        fontSize: 18,
        color: '#888',
    },
    logoutButton: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
    logoutText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ProfileScreen;
