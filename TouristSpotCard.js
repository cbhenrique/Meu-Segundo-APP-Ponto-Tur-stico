// components/TouristSpotCard.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TouristSpotCard = ({ 
  item, 
  isSelected, 
  onPress, 
  onTakePicture, 
  userPhoto 
}) => {
  const getCategoryIcon = (category) => {
    const icons = {
      'História': 'library-outline',
      'Praia': 'water-outline',
      'Cultura': 'color-palette-outline',
      'Compras': 'bag-outline'
    };
    return icons[category] || 'location-outline';
  };

  return (
    <TouchableOpacity 
      style={styles.spotCard}
      onPress={onPress}
    >
      <Image source={{ uri: item.image }} style={styles.spotImage} />
      <View style={styles.spotInfo}>
        <View style={styles.spotHeader}>
          <Text style={styles.spotName}>{item.name}</Text>
          <View style={styles.categoryBadge}>
            <Ionicons 
              name={getCategoryIcon(item.category)} 
              size={12} 
              color="#fff" 
            />
            <Text style={styles.categoryText}>{item.category}</Text>
          </View>
        </View>
        
        <Text style={styles.spotDescription}>{item.description}</Text>
        
        <View style={styles.spotStats}>
          <View style={styles.statItem}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.statText}>{item.rating}</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="location" size={16} color="#666" />
            <Text style={styles.statText}>{item.distance?.toFixed(1)}km</Text>
          </View>
        </View>

        {isSelected && (
          <View style={styles.expandedActions}>
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={onTakePicture}
            >
              <Ionicons name="camera" size={20} color="#fff" />
              <Text style={styles.actionButtonText}>Tirar Foto</Text>
            </TouchableOpacity>
            
            {userPhoto && (
              <View style={styles.photoPreview}>
                <Text style={styles.photoLabel}>Sua foto:</Text>
                <Image source={{ uri: userPhoto }} style={styles.userPhoto} />
              </View>
            )}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  spotCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  spotImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  spotInfo: {
    padding: 16,
  },
  spotHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  spotName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  categoryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  categoryText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 4,
  },
  spotDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  spotStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  expandedActions: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 12,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  photoPreview: {
    alignItems: 'center',
  },
  photoLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  userPhoto: {
    width: 120,
    height: 90,
    borderRadius: 8,
  },
});

export default TouristSpotCard;