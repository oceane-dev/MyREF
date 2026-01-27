import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ title: 'Mes Magasins' }} 
      />
      <Stack.Screen 
        name="ajouter" 
        options={{ title: 'Ajouter un produit' }} 
      />
    </Stack>
  );
}