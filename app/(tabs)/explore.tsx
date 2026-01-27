import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function AddProductScreen() {
  // Voici nos "boîtes" pour stocker ce que l'utilisateur tape
  const [nom, setNom] = useState('');
  const [magasin, setMagasin] = useState('');

  const enregistrerProduit = () => {
    if (nom === '' || magasin === '') {
      Alert.alert("Erreur", "Remplis tous les champs pour sauver la paix dans le couple !");
      return;
    }
    // Pour l'instant on affiche juste le résultat
    Alert.alert("Succès", `Produit ${nom} ajouté pour ${magasin}`);
    setNom(''); // On vide le champ
    setMagasin('');
  };

  console.log("JE SUIS ICI !");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nouvelle Référence</Text>

      <Text style={styles.label}>Nom du produit (ex: Pâtes Torti)</Text>
      <TextInput 
        style={styles.input} 
        value={nom} 
        onChangeText={setNom} 
        placeholder="Ce qu'il ne faut pas rater..." 
      />

      <Text style={styles.label}>Magasin</Text>
      <TextInput 
        style={styles.input} 
        value={magasin} 
        onChangeText={setMagasin} 
        placeholder="Ex: Leclerc, Lidl..." 
      />

      <TouchableOpacity style={styles.button} onPress={enregistrerProduit}>
        <Text style={styles.buttonText}>Enregistrer la préférence</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  label: { fontSize: 16, marginBottom: 5, fontWeight: '500' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8, marginBottom: 20 },
  button: { backgroundColor: '#2ecc71', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});