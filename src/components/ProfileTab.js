import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, SafeAreaView } from 'react-native';

const ProfileTab = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Encabezado */}
        <Text style={styles.header}>👤 Mi Perfil</Text>

        {/* Información del usuario */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Información personal</Text>
          <Text style={styles.item}>Nombre: Borja</Text>
          <Text style={styles.item}>Edad: 27 años</Text>
          <Text style={styles.item}>Género: Masculino</Text>
          <Text style={styles.item}>Altura: 178 cm</Text>
          <Text style={styles.item}>Peso: 82 kg</Text>
        </View>

        {/* Objetivos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objetivos</Text>
          <Text style={styles.item}>🎯 Fase actual: Definición</Text>
          <Text style={styles.item}>🎯 Objetivo semanal: 3 entrenamientos</Text>
        </View>

        {/* Ajustes de la cuenta */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ajustes</Text>
          <View style={styles.row}>
            <Text style={styles.item}>Notificaciones</Text>
            <Switch />
          </View>
          <View style={styles.row}>
            <Text style={styles.item}>Tema oscuro</Text>
            <Switch />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cambiar contraseña</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>

        {/* Historial */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Historial de entrenamientos</Text>
          <Text style={styles.item}>🏋️ 14/06/2025 - Full Body (45 min)</Text>
          <Text style={styles.item}>🏋️ 12/06/2025 - Piernas (35 min)</Text>
          <Text style={styles.item}>🏋️ 10/06/2025 - Espalda y Bíceps (40 min)</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#2949FF',
  },
  item: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#e0e7ff',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#2949FF',
    fontWeight: '600',
  },
});

export default ProfileTab;