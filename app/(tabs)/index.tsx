import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { supabase } from '../../lib/supabase';


interface Magasin {
  id: string;
  nom: string;
}

export default function HomeScreen() {
  const [lesMagasins, setLesMagasins] = useState<Magasin[]>([]);

  const router = useRouter();

  useEffect(() => {
    chargerMagasins();
  }, []);

  const chargerMagasins = async () => {
    const { data, error } = await supabase.from('magasins').select('*');

    console.log("Données reçues :", data); // Ajoute cette ligne !

    if (error) {
      console.error("Erreur :", error);
    } else {
      setLesMagasins(data);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mes Magasins Favoris</Text>

      <FlatList
        data={lesMagasins}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push({
              pathname: "/magasin/[id]",
              params: { id: item.id }
            })}
            style={styles.card}
          >
            <Text style={styles.storeName}>{item.nom}</Text>
          </TouchableOpacity>
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