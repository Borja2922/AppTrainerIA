import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';

const edades = [
  { label: '18-29', image: require('../../assets/favicon.png') },
  { label: '30-39', image: require('../../assets/favicon.png') },
  { label: '40-49', image: require('../../assets/favicon.png') },
  { label: '50+', image: require('../../assets/favicon.png') },
];

const Step1_AgeScreen = () => {
  const [selected, setSelected] = useState(null);
  const navigation = useNavigation();

  const handleSelect = (edad) => {
    setSelected(edad);
    setTimeout(() => {
      navigation.navigate('Step2', { edad });
    }, 300);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan Personal</Text>
      <Text style={styles.subtitle}>SEGÚN TU EDAD</Text>

      <View style={styles.grid}>
        {edades.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cardContainer}
            onPress={() => handleSelect(item.label)}
          >
            <Card style={styles.card}>
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
  );
};

export default Step1_AgeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  cardContainer: {
    width: Dimensions.get('window').width * 0.42,
    margin: 8
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden'
  },
  image: {
    height: 130,
    resizeMode: 'cover'
  },
  footer: {
    backgroundColor: '#2949FF',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  footerText: {
    color: 'white',
    fontWeight: 'bold'
  },
  arrow: {
    color: 'white',
    fontSize: 18
  }
});