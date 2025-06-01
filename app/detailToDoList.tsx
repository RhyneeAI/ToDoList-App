import AppText from '@/components/AppText';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function DetailToDoListScreen() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setDate(new Date());
    setTime(new Date());
  }, []);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <TouchableOpacity onPress={() => router.replace('../scheduleList')} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="chevron-back-outline" size={32} color="black" />
                <AppText style={styles.homeLabel}>Daftar Tugas</AppText>
            </TouchableOpacity>
        </View>

        <AppText style={styles.header}>Detail Tugas</AppText>

        <View style={styles.rowInputText}>
            <AppText style={styles.notesLabel}>Tugas Baru</AppText>
            <TextInput
                style={styles.input}
                placeholder="Tugas"
                value="Tugas IMK"
                readOnly
                placeholderTextColor="#fff"
            />
        </View>

        {/* Tanggal */}
        <View style={[styles.rowInputDate, { marginTop: -10} ]}>
            <View style={styles.iconLabelGroup}>
                <MaterialCommunityIcons name="calendar-month" size={20} color="#d084f5" />
                <AppText style={styles.label}>Tanggal</AppText>
            </View>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <AppText style={styles.dateBox}>{formatDate(date)}</AppText>
            </TouchableOpacity>
        </View>

        {/* Time */}
        <View style={[styles.rowInputDate, { marginBottom: 20 } ]}>
            <View style={styles.iconLabelGroup}>
                <Ionicons name="time-outline" size={20} color="#000" />
                <AppText style={styles.label}>Waktu</AppText>
            </View>
                <TouchableOpacity onPress={() => setShowTimePicker(true)}>
                <AppText style={styles.dateBox}>{formatTime(time)}</AppText>
            </TouchableOpacity>
        </View>

        {/* Notes */}
        <View style={styles.rowInputText}>
            <AppText style={styles.notesLabel}>Catatan</AppText>
            <TextInput
                style={styles.notesInput}
                multiline
                readOnly
                numberOfLines={5}
                value="UI/UX + Implementasi berbentuk laporan dan juga aplikasi jadinya"
                placeholder="Tambahkan catatan..."
                placeholderTextColor="#fff"
            />
        </View>

        {/* Notes */}
        <View style={styles.rowInputText}>
            <AppText style={styles.notesLabel}>Laporan Selesai</AppText>
            <TextInput
                style={styles.notesInput}
                multiline
                numberOfLines={3}
                placeholder="Laporan..."
                placeholderTextColor="#fff"
            />
        </View>

        {/* DateTimePicker - Tanggal */}
        {showDatePicker && (
            <DateTimePicker
                value={date}
                mode="date"
                display={Platform.OS === 'ios' ? 'inline' : 'default'}
                onChange={(event, selectedDate) => {
                    setShowDatePicker(false);
                    if (selectedDate) setDate(selectedDate);
                }}
            />
        )}

        {/* DateTimePicker - Waktu */}
        {showTimePicker && (
            <DateTimePicker
                value={time}
                mode="time"
                is24Hour={false}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(event, selectedTime) => {
                    setShowTimePicker(false);
                    if (selectedTime) setTime(selectedTime);
                }}
            />
        )}

        {/* Submit Button */}
        <TouchableOpacity style={styles.fab} onPress={() => router.replace('../scheduleList')}>
            <Ionicons name="checkmark" size={28} color="#fff" />
        </TouchableOpacity>
    </View>
  );
}

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
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#83b7ff',
        borderRadius: 12,
        padding: 14,
        fontSize: 16,
        color: '#fff',
        marginBottom: 20,
    },
    rowInputDate: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
        paddingHorizontal: '5%',
    },
    rowInputText: {
        marginBottom: 15,
        paddingHorizontal: '4%',
    },
    iconLabelGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    label: {
        marginLeft: 6,
        fontSize: 16,
        color: '#333',
    },
    dateBox: {
        backgroundColor: '#e1e9f4',
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 8,
        fontSize: 14,
        color: '#333',
    },
    notesLabel: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#2d88ff',
        marginBottom: 10,
    },
    notesInput: {
        backgroundColor: '#83b7ff',
        borderRadius: 16,
        padding: 14,
        fontSize: 14,
        color: '#fff',
        textAlignVertical: 'top',
        height: 110,
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
