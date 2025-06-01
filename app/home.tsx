import AppText from '@/components/AppText';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
    const tasks = [
        { title: 'Tugas IMK', time: '10:00 AM' },
        { title: 'Tugas Arduino', time: '11:30 AM' },
        { title: 'Zoom Meeting', time: '20:00 PM' },
        { title: 'Dicoding', time: '20:00 PM' },
        { title: 'Dicoding', time: '20:00 PM' },
        { title: 'Dicoding', time: '20:00 PM' },
        { title: 'Dicoding', time: '20:00 PM' },
        { title: 'Dicoding', time: '20:00 PM' },
        { title: 'Dicoding', time: '20:00 PM' },
        { title: 'Dicoding', time: '20:00 PM' },
    ];

    return (
        <View style={styles.container}>
            <AppText style={styles.greeting}>Hello, OzieTzy</AppText>
            <AppText style={styles.subText}>Kamu punya 5 tugas hari ini!</AppText>

            <View style={styles.topRightIcons}>
                <Ionicons name="notifications-outline" size={24} color="black" />
                <TouchableOpacity onPress={() => router.replace('../auth/profile')}>
                <Ionicons name="person-circle-outline" size={26} color="black" style={{ marginLeft: 10 }} />
                </TouchableOpacity>
            </View>

            <View style={styles.statusContainer}>
                <View style={styles.statusRow}>
                <View style={[styles.statusBox, { backgroundColor: '#B0D8F3' }]}>
                    <Ionicons name="time-outline" size={24} color="black" />
                    <AppText>Hari ini</AppText>
                    <AppText style={styles.statusCount}>5</AppText>
                </View>
                <View style={[styles.statusBox, { backgroundColor: '#FAF59F' }]}>
                    <Ionicons name="calendar-outline" size={24} color="black" />
                    <AppText>Terjadwal</AppText>
                    <AppText style={styles.statusCount}>5</AppText>
                </View>
                </View>

                <View style={styles.statusRow}>
                <View style={[styles.statusBox, { backgroundColor: '#DDF8F0' }]}>
                    <Ionicons name="refresh-outline" size={24} color="black" />
                    <AppText>Semua</AppText>
                    <AppText style={styles.statusCount}>15</AppText>
                </View>
                <View style={[styles.statusBox, { backgroundColor: '#FCD8F2' }]}>
                    <Ionicons name="alert-circle-outline" size={24} color="black" />
                    <AppText>Terlambat</AppText>
                    <AppText style={styles.statusCount}>0</AppText>
                </View>
                </View>
            </View>

            <View style={styles.taskHeader}>
                <AppText style={styles.taskTitle}>Tugas Hari ini</AppText>
                <TouchableOpacity style={styles.seeAllButton} onPress={() => router.replace('../scheduleList')}>
                    <AppText style={styles.seeAll}>Lihat Semua</AppText>
                </TouchableOpacity>
            </View>

            <ScrollView>
                {tasks.map((task, index) => (
                    <View key={index} style={[styles.taskCard, (index % 2 === 0) ? { backgroundColor: '#69A8FF'} : { backgroundColor: '#90BEFF' }]}>
                    <View style={styles.taskLeft}>
                        <View style={styles.taskDot} />
                        <AppText style={styles.taskText}>{task.title}</AppText>
                    </View>
                    <AppText style={styles.taskTime}>{task.time}</AppText>
                    </View>
                ))}
            </ScrollView>

            <TouchableOpacity style={styles.fab} onPress={() => router.replace('../addToDoList')}>
                <Ionicons name="add" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        paddingTop: 60,
        paddingHorizontal: '6%',
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subText: {
        color: '#999',
        marginBottom: 20,
    },
    topRightIcons: {
        position: 'absolute',
        top: 60,
        right: 20,
        flexDirection: 'row',
    },
    statusContainer: {
        marginVertical: 20,
    },
    statusRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    statusBox: {
        width: '48%',
        height: 90,
        borderRadius: 12,
        padding: 10,
        justifyContent: 'space-between',
    },
    statusCount: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    taskHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    seeAll: {
        color: '#599EFF',
        fontWeight: '600',
        fontSize: 16,
    },
    seeAllButton: {
        boxSizing: 'border-box',
        width: '27%',
    },
    taskCard: {
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        backgroundColor: '#69A8FF'
    },
    taskLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    taskDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#fefefe',
        marginRight: 10,
    },
    taskText: {
        color: '#fff',
        fontWeight: '600',
    },
    taskTime: {
        color: '#fff',
        fontWeight: '600',
    },
    fab: {
        position: 'absolute',
        right: 20,
        bottom: 30,
        backgroundColor: '#599EFF',
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
    },
});
