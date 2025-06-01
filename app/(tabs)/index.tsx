import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello, Lorem Ipsum</Text>
      <Text style={styles.subText}>You have 5 task for today!</Text>

      <View style={styles.topRightIcons}>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <Ionicons name="person-circle-outline" size={26} color="black" style={{ marginLeft: 10 }} />
      </View>

      <View style={styles.statusContainer}>
        <View style={styles.statusRow}>
          <View style={[styles.statusBox, { backgroundColor: '#B0D8F3' }]}>
            <Ionicons name="time-outline" size={24} color="black" />
            <Text>Today</Text>
            <Text style={styles.statusCount}>5</Text>
          </View>
          <View style={[styles.statusBox, { backgroundColor: '#FAF59F' }]}>
            <Ionicons name="calendar-outline" size={24} color="black" />
            <Text>Scheduled</Text>
            <Text style={styles.statusCount}>5</Text>
          </View>
        </View>

        <View style={styles.statusRow}>
          <View style={[styles.statusBox, { backgroundColor: '#DDF8F0' }]}>
            <Ionicons name="refresh-outline" size={24} color="black" />
            <Text>All</Text>
            <Text style={styles.statusCount}>15</Text>
          </View>
          <View style={[styles.statusBox, { backgroundColor: '#FCD8F2' }]}>
            <Ionicons name="alert-circle-outline" size={24} color="black" />
            <Text>Overdue</Text>
            <Text style={styles.statusCount}>0</Text>
          </View>
        </View>
      </View>


      <View style={styles.taskHeader}>
        <Text style={styles.taskTitle}>Today's Task</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>

      <ScrollView>
        <View style={[styles.taskCard, { backgroundColor: '#599EFF' }]}>
          <View style={styles.taskLeft}>
            <View style={styles.taskDot} />
            <Text style={styles.taskText}>Tugas IMK</Text>
          </View>
          <Text style={styles.taskTime}>10:00 AM</Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
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
  },
  taskCard: {
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
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
