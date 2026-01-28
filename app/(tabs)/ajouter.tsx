import { Picker } from '@react-native-picker/picker';
import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';

export default function AddProductScreen() {
  // Voici nos "boîtes" pour stocker ce que l'utilisateur tape
  const [nomProduit, setNomProduit] = useState('');
  const [magasin, setMagasin] = useState('');
  const { magasinParDefaut } = useLocalSearchParams();

  const [magasinSelectionne, setMagasinSelectionne] = useState(magasinParDefaut || "");

  const AjouterProduit = () => {
    if (nomProduit === '' || magasin === '') {
      Alert.alert("Erreur", "Remplis tous les champs pour ajouter un produit !");
      return;
    }
    Alert.alert("Succès", `Produit ${nomProduit} ajouté pour ${magasin}`);
    setNomProduit(''); // On vide le champ
    setMagasin('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nouvelle Référence</Text>

      <Text style={styles.label}>Nom du produit (ex: Pâtes Torti)</Text>
      <TextInput
        style={styles.input}
        value={nomProduit}
        onChangeText={text => setNomProduit(text)}
        placeholder="Nom du produit (ex: Lait)."
      />

      <Picker
        selectedValue={magasinSelectionne}
        onValueChange={(itemValue) => setMagasinSelectionne(itemValue)}
      >
        <Picker.Item label="Match" value="Match" />
        <Picker.Item label="Carrefour" value="Carrefour" />
        <Picker.Item label="Lidl" value="Lidl" />
      </Picker>


      <TouchableOpacity style={styles.button} onPress={AjouterProduit}>
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