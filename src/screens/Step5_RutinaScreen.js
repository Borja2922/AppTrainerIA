

import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";

const Step5_RutinaScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { edad, gender, frustraciones } = route.params;

  // Simulación de rutina generada
  const rutinaGenerada = [
    "Press de banca - 4x8",
    "Peso muerto - 4x6",
    "Sentadilla - 4x10",
    "Dominadas - 3x10",
    "Curl bíceps - 3x12",
  ];

  return (
    <ScrollView style={styles.container}>
      <Appbar.Header style={{ backgroundColor: "#f9f9f9" }}>
        <Appbar.Content title="Rutina Generada" />
      </Appbar.Header>

      <Text style={styles.title}>¡Ya tienes tu rutina personalizada!</Text>
      <Text style={styles.subtitle}>Edad: {edad} | Género: {gender}</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tu entrenamiento IA:</Text>
        {rutinaGenerada.map((item, index) => (
          <Text key={index} style={styles.exerciseItem}>• {item}</Text>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Step1")}>
        <Text style={styles.buttonText}>Volver al inicio</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Step5_RutinaScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 15,
    color: "#777",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#eaeaea",
    borderRadius: 10,
    padding: 16,
    marginVertical: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
  exerciseItem: {
    fontSize: 15,
    color: "#000",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#2949FF",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});