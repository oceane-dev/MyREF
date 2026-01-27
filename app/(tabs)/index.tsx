import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function HomeScreen() {
  // On simule une petite liste de magasins pour tester l'affichage
  const magasins = [
    { id: '1', nom: 'Auchan', ville: 'Lille' },
    { id: '2', nom: 'Carrefour', ville: 'Paris' },
    { id: '3', nom: 'Lidl', ville: 'Lyon' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mes Magasins Favoris</Text>
      
      <FlatList 
        data={magasins}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.storeName}>{item.nom}</Text>
            <Text style={styles.city}>{item.ville}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5', paddingTop: 60 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { 
    backgroundColor: '#fff', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 10,
    elevation: 3, // Petit effet d'ombre sur Android
    shadowColor: '#000', // Petit effet d'ombre sur iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  storeName: { fontSize: 18, fontWeight: '600' },
  city: { color: '#666' }
});