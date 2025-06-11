import { Appbar } from "react-native-paper";
import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Card } from "react-native-paper";

const edades = [
  { label: "18-29", image: require("../../assets/18-19.jpeg") },
  { label: "30-39", image: require("../../assets/30-39.jpeg") },
  { label: "40-49", image: require("../../assets/40-49.jpeg") },
  { label: "50+", image: require("../../assets/50.jpeg") },
];

const Step1_AgeScreen = () => {
  const [selected, setSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      setIsLoading(false);
      setSelected(null);
    }, [])
  );

  const handleSelect = (edad) => {
    setSelected(edad);
    setIsLoading(true);
    setTimeout(() => navigation.navigate("Step2", { edad }), 600);
  };

  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#f9f9f9" }}>
        <Appbar.Content title="Plan Personal" />
      </Appbar.Header>
      <View style={styles.container}>
        <View style={styles.grid}>
          {edades.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.cardContainer}
              onPress={() => handleSelect(item.label)}
            >
              <Card
                style={[
                  styles.card,
                  selected === item.label && styles.selectedCard,
                ]}
              >
                {selected === item.label && isLoading && (
                  <ActivityIndicator
                    style={styles.loadingIndicator}
                    color="#00FFAA"
                  />
                )}
                <Card.Cover source={item.image} style={styles.image} />
                <View style={styles.footer}>
                  <Text style={styles.footerText}>Edad: {item.label}</Text>
                  <Text style={styles.arrow}>→</Text>
                </View>
              </Card>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
};

export default Step1_AgeScreen;

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
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
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
    height: 110,
    width: "100%",
    resizeMode: "cover",
  },
  footer: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
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
});
