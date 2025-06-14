import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRoute } from "@react-navigation/native";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('train');
  const route = useRoute();
  const rutinaGenerada = route.params?.rutinaGenerada || [];

  const renderTrainTab = () => (
    <View style={styles.content}>
      <Text style={styles.header}>¡Hola, atleta!</Text>
      {rutinaGenerada.length > 0 ? (
        <View style={styles.widget}>
          <Text style={styles.widgetTitle}>🏋️ Tus ejercicios de hoy:</Text>
          {rutinaGenerada.map((item, index) => (
            <Text key={index} style={styles.exerciseItem}>• {item}</Text>
          ))}
        </View>
      ) : (
        <TouchableOpacity style={styles.createRoutineButton}>
          <Text style={styles.createRoutineText}>＋ Crear nueva rutina</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const renderProfileTab = () => (
    <View style={styles.content}>
      <Text style={styles.header}>👤 Perfil (próximamente)</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {selectedTab === 'train' ? renderTrainTab() : renderProfileTab()}

      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => setSelectedTab('train')}>
          <MaterialCommunityIcons name="dumbbell" size={30} color={selectedTab === 'train' ? '#00aa88' : '#999'} />
          <Text style={styles.navLabel}>Entrenar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('profile')}>
          <MaterialCommunityIcons name="account" size={30} color={selectedTab === 'profile' ? '#00aa88' : '#999'} />
          <Text style={styles.navLabel}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  widget: { marginBottom: 20 },
  widgetTitle: { fontSize: 18, fontWeight: '600' },
  placeholder: { color: '#666', marginTop: 5 },
  notesInput: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    height: 100,
    textAlignVertical: 'top'
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff'
  },
  exerciseItem: {
    fontSize: 15,
    color: "#000",
    marginVertical: 4,
  },
  createRoutineButton: {
    backgroundColor: "#d0d7f0",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },
  createRoutineText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  navLabel: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 4,
  },
});

export default Dashboard;