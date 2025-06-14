import { Picker } from "@react-native-picker/picker";
import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";
import { Card, Title, Appbar, IconButton } from "react-native-paper";

const genders = [
  { label: "Hombre", image: require("../../assets/icon.png") },
  { label: "Mujer", image: require("../../assets/icon.png") },
];

const Step2_GenderScreen = () => {
  const [gender, setGender] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [peso, setPeso] = useState(70); // Peso por defecto
  const navigation = useNavigation();
  const { edad } = useRoute().params;

  useFocusEffect(
    useCallback(() => {
      setIsLoading(false);
      setSelected(null);
    }, [])
  );

  const handleSelect = (g) => {
    setSelected(g);
    setIsLoading(true);
    setTimeout(() => {
      navigation.navigate("Step3", { edad, gender: g, peso });
    }, 600);
  };

  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#f9f9f9" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Género" />
      </Appbar.Header>
      <View style={styles.container}>
        <Title style={styles.title}>Selecciona tu género</Title>
        <View style={styles.grid}>
          {genders.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.cardContainer}
              onPress={() => handleSelect(item.label)}
            >
              <Card style={[styles.card, selected === item.label && styles.selectedCard]}>
                {selected === item.label && isLoading && (
                  <ActivityIndicator style={styles.loadingIndicator} color="#00FFAA" />
                )}
                <Card.Cover source={item.image} style={styles.image} />
                <View style={styles.footer}>
                  <Text style={styles.footerText}>{item.label}</Text>
                  <Text style={styles.arrow}>→</Text>
                </View>
              </Card>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Selecciona tu peso (kg):</Text>
          <Picker
            selectedValue={peso}
            onValueChange={(itemValue) => setPeso(itemValue)}
            style={styles.picker}
          >
            {Array.from({ length: 121 }, (_, i) => i + 30).map((value) => (
              <Picker.Item key={value} label={`${value} kg`} value={value} />
            ))}
          </Picker>
        </View>
      </View>
    </>
  );
};

export default Step2_GenderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cardContainer: {
    width: Dimensions.get("window").width * 0.42,
    margin: 8,
  },
  card: {
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: "#1976d2",
  },
  image: {
    height: 150,
    resizeMode: "cover",
  },
  footer: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  footerText: {
    color: "#000",
    fontWeight: "bold",
  },
  arrow: {
    color: "#000",
    fontSize: 18,
  },
  loadingIndicator: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 10,
  },
  pickerContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  picker: {
    width: 200,
    height: 150,
  },
});
