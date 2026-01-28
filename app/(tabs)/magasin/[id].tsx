import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { supabase } from '../../../lib/supabase';



interface Produit {
    id: string;
    nom: string;
}

export default function DetailMagasin() {
    const [produits, setProduits] = useState<Produit[]>([]);
    const { id } = useLocalSearchParams();

    useEffect(() => {
        if (id) {
            chargerProduits();
        }
    }, [id]);

    const chargerProduits = async () => {
        const { data, error } = await supabase
            .from('produits')
            .select(`
        id,
        nom,
        disponibilite!inner(id_magasin)
      `)
            .eq('disponibilite.id_magasin', id);

        if (error) {
            console.error("Erreur produits :", error);
        } else {
            setProduits(data || []);
            console.log("Produits du magasin :", data);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Produits disponibles</Text>
            <FlatList
                data={produits} // On utilise les produits chargés depuis Supabase 📦
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.storeName}>{item.nom}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text>Aucun produit trouvé pour ce magasin.</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#f5f5f5', 
    paddingTop: 60 
  },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 20,
    color: '#333'
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3, // Ombre Android
    shadowColor: '#000', // Ombre iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  storeName: { 
    fontSize: 18, 
    fontWeight: '600',
    color: '#222'
  }
});