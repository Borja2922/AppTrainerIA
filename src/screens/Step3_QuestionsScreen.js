import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Appbar } from "react-native-paper";
import { preguntas } from "../utils/QuestionsGroups";

const Step3_QuestionsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { edad, gender } = route.params;

  const [stepIndex, setStepIndex] = useState(0);
  const [selecciones, setSelecciones] = useState({});

  const currentGroup = preguntas[stepIndex];

  const toggle = (opcion) => {
    const key = `grupo${stepIndex}`;
    const actuales = selecciones[key] || [];

    const nuevas = actuales.includes(opcion)
      ? actuales.filter((o) => o !== opcion)
      : [...actuales, opcion];

    setSelecciones({ ...selecciones, [key]: nuevas });
  };

  const avanzar = () => {
    if (stepIndex < preguntas.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      const respuestas = Object.values(selecciones).flat();
      navigation.navigate("Step4", {
        edad,
        gender,
        frustraciones: respuestas,
      });
    }
  };

  const retroceder = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };

  const seleccionadas = selecciones[`grupo${stepIndex}`] || [];

  return (
    <ScrollView style={styles.container}>
      <Appbar.Header style={{ backgroundColor: "#f9f9f9" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Cuestionario" />
      </Appbar.Header>

      <Text style={styles.stepIndicator}>
        Pregunta {stepIndex + 1} de {preguntas.length}
      </Text>
      <Text style={styles.subtitle}>Edad: {edad} | Género: {gender}</Text>
      <Text style={styles.questionTitle}>{currentGroup.titulo}</Text>

      {currentGroup.opciones.map((op, i) => (
        <TouchableOpacity
          key={i}
          style={[
            styles.optionCard,
            seleccionadas.includes(op) && styles.optionCardSelected,
          ]}
          onPress={() => toggle(op)}
        >
          <Text style={styles.optionText}>{op}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.navButton, stepIndex === 0 && styles.navButtonDisabled]}
          onPress={retroceder}
          disabled={stepIndex === 0}
        >
          <Text style={styles.navButtonText}>Anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navButton,
            seleccionadas.length === 0 && styles.navButtonDisabled,
          ]}
          onPress={avanzar}
          disabled={seleccionadas.length === 0}
        >
          <Text style={styles.navButtonText}>
            {stepIndex < preguntas.length - 1 ? "Siguiente" : "Finalizar"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Step3_QuestionsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f9f9f9",
    flex: 1,
  },
  stepIndicator: {
    color: "#555",
    textAlign: "center",
    marginBottom: 4,
    fontSize: 16,
  },
  subtitle: {
    color: "#555",
    textAlign: "center",
    marginBottom: 12,
  },
  questionTitle: {
    color: "#333",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  optionCard: {
    backgroundColor: "#eaeaea",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  optionCardSelected: {
    borderColor: "#1976d2",
    backgroundColor: "#1976d222",
  },
  optionText: {
    color: "#000",
    textAlign: "center",
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    gap: 10,
  },
  navButton: {
    flex: 1,
    padding: 14,
    backgroundColor: "#1976d2",
    borderRadius: 8,
    alignItems: "center",
  },
  navButtonDisabled: {
    backgroundColor: "#ccc",
  },
  navButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});