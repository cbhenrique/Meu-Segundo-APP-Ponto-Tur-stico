// services/api.js
// Simulação de API - Pontos Turísticos

const mockAPI = {
  // Base de dados simulada
  touristSpots: [
    {
      id: 1,
      name: "Marco Zero",
      description: "Ponto central de Recife",
      latitude: -8.0631,
      longitude: -34.8712,
      category: "História",
      rating: 4.5,
      image: "https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=Marco+Zero"
    },
    {
      id: 2,
      name: "Praia de Boa Viagem",
      description: "Famosa praia urbana",
      latitude: -8.1137,
      longitude: -34.8895,
      category: "Praia",
      rating: 4.2,
      image: "https://via.placeholder.com/300x200/7ED321/FFFFFF?text=Boa+Viagem"
    },
    {
      id: 3,
      name: "Instituto Ricardo Brennand",
      description: "Museu e galeria de arte",
      latitude: -8.0389,
      longitude: -34.9544,
      category: "Cultura",
      rating: 4.8,
      image: "https://via.placeholder.com/300x200/F5A623/FFFFFF?text=Brennand"
    },
    {
      id: 4,
      name: "Mercado de São José",
      description: "Mercado histórico tradicional",
      latitude: -8.0778,
      longitude: -34.8719,
      category: "Compras",
      rating: 4.0,
      image: "https://via.placeholder.com/300x200/D0021B/FFFFFF?text=São+José"
    },
    {
      id: 5,
      name: "Casa da Cultura",
      description: "Centro cultural em antiga penitenciária",
      latitude: -8.0603,
      longitude: -34.8788,
      category: "Cultura",
      rating: 4.3,
      image: "https://via.placeholder.com/300x200/9013FE/FFFFFF?text=Casa+Cultura"
    }
  ],

  // Método para buscar pontos próximos
  getNearbySpots: async (userLat, userLon, radius = 50) => {
    // Simula delay de rede
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const spots = mockAPI.touristSpots.filter(spot => {
      const distance = mockAPI.calculateDistance(userLat, userLon, spot.latitude, spot.longitude);
      return distance <= radius;
    });

    return {
      success: true,
      data: spots.map(spot => ({
        ...spot,
        distance: mockAPI.calculateDistance(userLat, userLon, spot.latitude, spot.longitude)
      })).sort((a, b) => a.distance - b.distance)
    };
  },

  // Método para calcular distância entre coordenadas
  calculateDistance: (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Raio da Terra em km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  },

  // Método para adicionar foto a um ponto
  addPhotoToSpot: async (spotId, photoUri) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      success: true,
      message: "Foto adicionada com sucesso!"
    };
  }
};

export default mockAPI;