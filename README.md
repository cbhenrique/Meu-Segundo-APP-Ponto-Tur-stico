# 📱 App Pontos Turísticos

Um aplicativo React Native que encontra pontos turísticos próximos usando geolocalização e permite tirar fotos dos locais visitados.

```
### 3. Estrutura de Pastas
Crie a seguinte estrutura no seu projeto:


TouristSpotsApp/
├── App.js
├── package.json
├── app.json
├── components/
│   ├── Header.js
│   ├── LoadingScreen.js
│   ├── EmptyState.js
│   └── TouristSpotCard.js
└── services/
    └── api.js


## 📁 Estrutura dos Arquivos

### **Arquivo Raiz**
- `App.js` - Componente principal do aplicativo
- `package.json` - Dependências e scripts do projeto  
- `app.json` - Configurações do Expo

### **Pasta `components/`**
- `Header.js` - Cabeçalho do aplicativo
- `LoadingScreen.js` - Tela de carregamento
- `EmptyState.js` - Tela quando não há dados
- `TouristSpotCard.js` - Card individual de cada ponto turístico

### **Pasta `services/`**
- `api.js` - API simulada com dados dos pontos turísticos

## 🔧 Funcionalidades

- **Geolocalização**: Encontra sua localização atual
- **API Simulada**: Busca pontos turísticos próximos
- **Câmera**: Tire fotos dos locais visitados
- **Interface Moderna**: Design responsivo e intuitivo
- **Categorização**: Pontos organizados por tipo
- **Distâncias**: Calcula distância até cada ponto

## 📱 Como Testar

1. **No Simulador**: Use o Expo Go no seu celular
2. **Escaneie o QR Code** que aparece no terminal
3. **Permita as Permissões** de localização e câmera
4. **Explore os Pontos** turísticos próximos

## 🛠️ Personalização

Para adicionar novos pontos turísticos, edite o array `touristSpots` em `services/api.js`:

```javascript
{
  id: 6,
  name: "Novo Ponto",
  description: "Descrição do local",
  latitude: -8.0000,
  longitude: -34.0000,
  category: "Categoria",
  rating: 4.0,
  image: "URL_DA_IMAGEM"
}
```

## 📝 Próximos Passos

- Conectar a uma API real
- Adicionar sistema de favoritos
- Implementar navegação entre telas
- Adicionar mapa interativo

---
Estrutura Final do Projeto
TouristSpotsApp/
├── 📄 App.js                    # Componente principal
├── 📄 package.json              # Dependências
├── 📄 app.json                  # Configurações Expo
├── 📄 README.md                 # Instruções
├── 📁 components/
│   ├── 📄 Header.js             # Cabeçalho
│   ├── 📄 LoadingScreen.js      # Tela de loading
│   ├── 📄 EmptyState.js         # Tela vazia
│   └── 📄 TouristSpotCard.js    # Card dos pontos
└── 📁 services/
    └── 📄 api.js                # API simulada
