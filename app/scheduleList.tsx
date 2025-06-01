import AppText from '@/components/AppText';
import { Ionicons } from '@expo/vector-icons';
import { addDays, format, startOfWeek } from 'date-fns';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const ScheduleScreen: React.FC = () => {
    const tasks = [
        { time: '10:00 AM', title: 'Tugas IMK', description: 'UI/UX + Implementasi berbentuk laporan' },
        { time: '11:30 AM', title: 'Tugas Arduino', description: 'Arduino Uno, sensor suhu' },
        { time: '20:00 PM', title: 'Zoom Meeting', description: 'Praktikummmmm.....' },
        { time: '23:59 PM', title: 'Dicoding', description: 'Course Javascript dasar, tenggat malam ini ges, walawe mantappu jiwa meleda' },
        { time: '23:59 PM', title: 'Dicoding', description: 'Course Javascript dasar, tenggat malam ini ges, walawe mantappu jiwa meleda' },
        { time: '23:59 PM', title: 'Dicoding', description: 'Course Javascript dasar, tenggat malam ini ges, walawe mantappu jiwa meleda' },
        { time: '23:59 PM', title: 'Dicoding', description: 'Course Javascript dasar, tenggat malam ini ges, walawe mantappu jiwa meleda' },

    ];
    const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

    function getThisWeekDates() {
        const now = new Date();
        // 1 = Senin, 0 = Minggu (ISO week)
        const weekStart = startOfWeek(now, { weekStartsOn: 1 });
        return Array.from({ length: 7 }, (_, i) =>
            format(addDays(weekStart, i), 'dd')
        );
    }

    const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 });
    const dates = getThisWeekDates();

    const [selectedIndex, setSelectedIndex] = useState(3);

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                {/* Bagian Header dengan Tombol Kembali */}
                <View style={styles.topContainer}>
                    <TouchableOpacity onPress={() => router.replace('../home')} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="chevron-back-outline" size={32} color="black" />
                        <AppText style={styles.homeLabel}>Beranda</AppText>
                    </TouchableOpacity>
                </View>

                {/* Kalender Horizontal */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.calendarContainer}>
                    {days.map((day, index) => (
                        <TouchableOpacity key={index} onPress={() => setSelectedIndex(index)}>
                            <View style={[styles.dateItem,
                                selectedIndex === index ? styles.selectedDateItem : {}
                            ]}>
                                <AppText style={[styles.day,
                                    selectedIndex === index ? styles.selectedDay : {}
                                ]}>
                                    {day}
                                </AppText>
                                <AppText style={[styles.date,
                                    selectedIndex === index ? styles.selectedDate : {}
                                ]}>
                                    {dates[index]}
                                </AppText>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Daftar Tugas */}
                <ScrollView>
                    <View style={styles.middleContainer}>
                        <AppText style={styles.header}>
                            {days[selectedIndex]}, {format(addDays(weekStart, selectedIndex), 'dd MMM')}
                        </AppText>
                        {tasks.map((task, index) => (
                            <View key={index} style={styles.taskWrapper}>
                            {/* Timeline bullet and line */}
                            <View style={styles.timeline}>
                                <View style={[ styles.bullet, (index % 2 === 0) ? { backgroundColor: '#4190FF' } : { backgroundColor: '#69A8FF' } ]} />
                                {index !== tasks.length - 1 && <View style={styles.line} />}
                            </View>

                            {/* Task Content */}
                            <View style={[styles.taskContainer, (index % 2 === 0) ? { backgroundColor: '#69A8FF' } : { backgroundColor: '#90BEFF' } ]}>
                                <View style={styles.titleRow}>
                                    <AppText style={styles.title}>{task.title}</AppText>
                                    <AppText style={styles.time}>{task.time}</AppText>
                                </View>
                                    <AppText style={styles.description}>{task.description}</AppText>
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
                {/* Tombol Tambah Fixed */}
            <TouchableOpacity style={styles.fab}>
                <Ionicons name="add" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4', 
        paddingHorizontal: '5%',
        paddingTop: 10
    },
    topContainer: {
        height: '27.5%',
        paddingTop: '15%',
    },
    homeLabel: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 3
    },
    backButton: {
        marginLeft: '1%',
    }, 
    calendarContainer: {
        marginTop: '-32.5%',
        paddingBottom: '15%',
        backgroundColor: '#F4F4F4',
    },
    dateItem: {
        alignItems: 'center',
        width: 62.5,  
        height: 60,
        paddingVertical: 10,
        marginHorizontal: 5,
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    selectedDateItem: {
        backgroundColor: '#4190FF',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    day: {
        fontSize: 13,
        color: '#333', 
    },
    selectedDay: {
        color: '#FFF',
        fontSize: 13,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    selectedDate: {
        fontSize: 18,
        color: '#FFF',
    },

    middleContainer: {
        height: '100%',
        marginLeft: '2%',
        marginRight: '2%',
    }, 
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4190FF',
        marginBottom: 28,
    },
    taskWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    timeline: {
        alignItems: 'center',
        marginRight: 10,
        width: 20,
    },
    bullet: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#4190FF', // Ganti sesuai tema
        zIndex: 1,
    },
    line: {
        width: 2,
        flex: 1,
        backgroundColor: '#d0d0d0',
        marginTop: 2,
    },

    taskContainer: {
        flex: 1,
        backgroundColor: '#69A8FF',
        padding: 13,
        borderRadius: 15,
        marginTop: -1,
        marginVertical: 10,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
        flexShrink: 1, 
    },
    time: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFF',
        marginLeft: 8,
    },
    description: {
        fontSize: 13,
        color: '#FFF',
        marginTop: 4,
        paddingLeft: 2
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

export default ScheduleScreen;
