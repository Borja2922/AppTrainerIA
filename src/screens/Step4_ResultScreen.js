import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";

const Step4_ResultScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { edad, gender, frustraciones } = route.params;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigation.navigate("Step5", { edad, gender, frustraciones });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Appbar.Header style={{ backgroundColor: "#f9f9f9" }}>
        <Appbar.Content title="Tu Perfil Personalizado" />
      </Appbar.Header>

      <Text style={styles.title}>¡Gracias por completar el cuestionario!</Text>
      <Text style={styles.subtitle}>
        Edad: {edad} | Género: {gender}
      </Text>

      <Text style={styles.sectionTitle}>Puntos a trabajar:</Text>
      <View style={styles.list}>
        {frustraciones.length > 0 ? (
          frustraciones.map((item, index) => (
            <Text key={index} style={styles.listItem}>
              • {item}
            </Text>
          ))
        ) : (
          <Text style={styles.noData}>No se seleccionó ninguna opción.</Text>
        )}
      </View>

      <Text style={styles.footerNote}>
        A partir de esta información generaremos una rutina adaptado a ti.
      </Text>
      {loading && (
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <ActivityIndicator size="large" color="#555" />
          <Text style={{ marginTop: 10, color: "#555" }}>Generando rutina personalizada...</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Step4_ResultScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#aaa",
    textAlign: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
    fontWeight: "600",
  },
  list: {
    backgroundColor: "#eaeaea",
    borderRadius: 10,
    padding: 16,
    marginBottom: 30,
  },
  listItem: {
    fontSize: 15,
    color: "#000",
    marginBottom: 8,
  },
  noData: {
    color: "#888",
    fontStyle: "italic",
    textAlign: "center",
  },
  footerNote: {
    color: "#777",
    fontSize: 14,
    textAlign: "center",
    marginTop: 20,
  },
});