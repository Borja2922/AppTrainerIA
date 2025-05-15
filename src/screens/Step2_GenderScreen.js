import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Card, Title, IconButton } from "react-native-paper";

const genders = [
  { label: "Hombre", image: require("../../assets/icon.png") },
  { label: "Mujer", image: require("../../assets/icon.png") },
];

const Step2_GenderScreen = () => {
  const [gender, setGender] = useState(null);
  const navigation = useNavigation();
  const { edad } = useRoute().params;

  const handleSelect = (g) => {
    setGender(g);
    setTimeout(() => {
      navigation.navigate("Step3", { edad, gender: g });
    }, 300);
  };

  return (
    <View style={styles.container}>
      <IconButton
        icon="arrow-left"
        size={24}
        onPress={() => navigation.goBack()}
      />
      <Title style={styles.title}>Selecciona tu género</Title>

      <View style={styles.grid}>
        {genders.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cardContainer}
            onPress={() => handleSelect(item.label)}
          >
            <Card style={styles.card}>
              <Card.Cover source={item.image} style={styles.image} />
              <View style={styles.footer}>
                <Text style={styles.footerText}>{item.label}</Text>
                <Text style={styles.arrow}>→</Text>
              </View>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Step2_GenderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
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
  },
  image: {
    height: 150,
    resizeMode: "cover",
  },
  footer: {
    backgroundColor: "#2949FF",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  footerText: {
    color: "white",
    fontWeight: "bold",
  },
  arrow: {
    color: "white",
    fontSize: 18,
  },
});
