import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRoute } from "@react-navigation/native";
import NavBar from '../components/NavBar';
import ProfileTab from '../components/ProfileTab';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('train');
  const route = useRoute();
  const rutinaGenerada = route.params?.rutinaGenerada || [];

  const [sets, setSets] = useState({});
  const [notes, setNotes] = useState({});
  const [showNotes, setShowNotes] = useState({});

  const addSet = (exercise) => {
    setSets((prev) => ({
      ...prev,
      [exercise]: [...(prev[exercise] || []), { kg: "", reps: "", done: false }],
    }));
  };

  const updateSet = (exercise, index, field, value) => {
    const updated = [...(sets[exercise] || [])];
    updated[index][field] = value;
    setSets((prev) => ({ ...prev, [exercise]: updated }));
  };

  const toggleComplete = (exercise, index) => {
    const updated = [...(sets[exercise] || [])];
    updated[index].done = !updated[index].done;
    setSets((prev) => ({ ...prev, [exercise]: updated }));
  };

  const removeSet = (exercise, index) => {
    const updated = [...(sets[exercise] || [])];
    updated.splice(index, 1);
    setSets((prev) => ({ ...prev, [exercise]: updated }));
  };

  const renderTrainTab = () => (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>¡Hola, atleta!</Text>
      {rutinaGenerada.length > 0 ? (
        <View style={styles.widget}>
          <Text style={styles.widgetTitle}>🏋️ Tus ejercicios de hoy:</Text>
          {rutinaGenerada.map((exercise, idx) => (
            <View key={idx} style={styles.exerciseCard}>
              <Text style={styles.exerciseTitle}>{exercise}</Text>
              <View style={styles.inputLabels}>
                <Text style={styles.inputLabel}>Kg</Text>
                <Text style={styles.inputLabel}>Reps</Text>
              </View>
              {sets[exercise]?.map((set, setIdx) => (
                <View key={setIdx} style={[styles.setRow, set.done && styles.setRowCompleted]}>
                  <Text style={styles.setIndex}>{setIdx + 1}</Text>
                  <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Kg"
                    value={set.kg.toString()}
                    onChangeText={(text) => updateSet(exercise, setIdx, "kg", text)}
                  />
                  <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Reps"
                    value={set.reps.toString()}
                    onChangeText={(text) => updateSet(exercise, setIdx, "reps", text)}
                  />
                  <TouchableOpacity onPress={() => toggleComplete(exercise, setIdx)}>
                    <MaterialCommunityIcons
                      name={set.done ? "check-circle" : "checkbox-blank-circle-outline"}
                      size={24}
                      color={set.done ? "#00aa88" : "#999"}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => removeSet(exercise, setIdx)}>
                    <MaterialCommunityIcons name="close-circle" size={24} color="#ff5c5c" />
                  </TouchableOpacity>
                </View>
              ))}
              <TouchableOpacity onPress={() => addSet(exercise)} style={styles.addSetBtn}>
                <Text style={styles.addSetText}>＋ Añadir set</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  setShowNotes((prev) => ({ ...prev, [exercise]: !prev[exercise] }))
                }
                style={styles.noteButton}
              >
                <Text style={styles.noteButtonText}>
                  {showNotes[exercise] ? "Ocultar nota" : "Añadir nota"}
                </Text>
              </TouchableOpacity>

              {showNotes[exercise] && (
                <TextInput
                  style={styles.notesInput}
                  placeholder="Notas del ejercicio..."
                  multiline
                  value={notes[exercise] || ''}
                  onChangeText={(text) =>
                    setNotes((prev) => ({ ...prev, [exercise]: text }))
                  }
                />
              )}
            </View>
          ))}
        </View>
      ) : (
        <TouchableOpacity style={styles.createRoutineButton}>
          <Text style={styles.createRoutineText}>＋ Crear nueva rutina</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );

  const renderProfileTab = () => <ProfileTab />;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {selectedTab === 'train' ? renderTrainTab() : renderProfileTab()}
        <NavBar selectedTab={selectedTab} onTabChange={setSelectedTab} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: { flex: 1 },
  scrollContent: {
    padding: 20,
    paddingBottom: 80,
  },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  widget: { marginBottom: 20 },
  widgetTitle: { fontSize: 18, fontWeight: '600' },
  placeholder: { color: '#666', marginTop: 5 },
  notesInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    minHeight: 80,
    textAlignVertical: "top",
    backgroundColor: "#fff",
  },
  noteButton: {
    marginTop: 8,
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#dde6ff',
  },
  noteButtonText: {
    color: '#2949FF',
    fontWeight: '600',
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
  exerciseCard: {
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  setRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    gap: 20,
  },
  setIndex: {
    width: 20,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#f9f9f9",
    borderRadius: 6,
    padding: 8,
    width: 60,
    textAlign: "center",
    borderWidth: 0,
  },
  addSetBtn: {
    marginTop: 10,
    paddingVertical: 8,
  },
  addSetText: {
    color: "#007aff",
    fontWeight: "600",
  },
  inputLabels: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 40,
    marginBottom: 4,
  },
  inputLabel: {
    fontSize: 12,
    color: '#888',
    fontWeight: '500',
    width: 60,
    textAlign: 'center',
  },
  setRowCompleted: {
    backgroundColor: "#d2f8d2",
  },
});

export default Dashboard;
