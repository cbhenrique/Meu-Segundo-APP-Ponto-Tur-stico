// App.js
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  StatusBar
} from 'react-native';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';

// Importar componentes
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import EmptyState from './components/EmptyState';
import TouristSpotCard from './components/TouristSpotCard';

// Importar API
import mockAPI from './services/api';

export default function App() {
  const [location, setLocation] = useState(null);
  const [touristSpots, setTouristSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState({});
  const [selectedSpot, setSelectedSpot] = useState(null);

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      // Solicitar permissão de localização
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Erro', 'Permissão de localização negada');
        setLoading(false);
        return;
      }

      // Obter localização atual
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);

      // Buscar pontos turísticos próximos
      const response = await mockAPI.getNearbySpots(
        currentLocation.coords.latitude,
        currentLocation.coords.longitude
      );

      if (response.success) {
        setTouristSpots(response.data);
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível obter sua localização');
    } finally {
      setLoading(false);
    }
  };

  const takePicture = async (spotId) => {
    try {
      // Solicitar permissão da câmera
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Erro', 'Permissão da câmera negada');
        return;
      }

      // Abrir câmera
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      });

      if (!result.canceled) {
        // Simular upload para API
        const uploadResponse = await mockAPI.addPhotoToSpot(spotId, result.assets[0].uri);
        
        if (uploadResponse.success) {
          setPhotos(prev => ({
            ...prev,
            [spotId]: result.assets[0].uri
          }));
          Alert.alert('Sucesso', 'Foto salva com sucesso!');
        }
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível tirar a foto');
    }
  };

  const handleSpotPress = (spot) => {
    setSelectedSpot(selectedSpot?.id === spot.id ? null : spot);
  };

  const renderTouristSpot = ({ item }) => (
    <TouristSpotCard
      item={item}
      isSelected={selectedSpot?.id === item.id}
      onPress={() => handleSpotPress(item)}
      onTakePicture={() => takePicture(item.id)}
      userPhoto={photos[item.id]}
    />
  );

  if (loading) {
    return (
      <LoadingScreen message="Encontrando pontos turísticos próximos..." />
    );
  }

  const headerSubtitle = location 
    ? `${touristSpots.length} locais encontrados` 
    : 'Localização indisponível';

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4A90E2" />
      
      <Header 
        title="Pontos Turísticos"
        subtitle={headerSubtitle}
      />

      {touristSpots.length > 0 ? (
        <FlatList
          data={touristSpots}
          renderItem={renderTouristSpot}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <EmptyState onRefresh={initializeApp} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 16,
  },
});