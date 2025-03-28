import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const screens = [
  { id: '1', name: 'BT01', screen: 'BT01_Home' },
  { id: '2', name: 'BT02', screen: 'BT02_Home' },
  { id: '3', name: 'BT03', screen: 'BT03_Home' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.containerFlat}
        data={screens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Login', { targetScreen: item.screen })}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  containerFlat: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#0063EC',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
});
