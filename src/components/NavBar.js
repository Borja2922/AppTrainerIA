import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NavBar = ({ selectedTab, onTabChange }) => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => onTabChange('train')}>
        <MaterialCommunityIcons name="dumbbell" size={30} color={selectedTab === 'train' ? '#00aa88' : '#999'} />
        <Text style={styles.navLabel}>Entrenar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onTabChange('profile')}>
        <MaterialCommunityIcons name="account" size={30} color={selectedTab === 'profile' ? '#00aa88' : '#999'} />
        <Text style={styles.navLabel}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  navLabel: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
  },
});

export default NavBar;