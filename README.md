```markdown
# Casa Bella - Strona Wakacyjnego Domu w Hiszpanii 🌴🏠

Nowoczesna strona typu one-pager prezentująca luksusowy dom wakacyjny w Torre de la Horadada, Costa Calida, Hiszpania. Strona zawiera animowaną prezentację, galerię zdjęć, informacje o pogodzie i lokalizacji.

## 🌟 Funkcjonalności

- Animowana sekcja powitalna
- Interaktywna galeria zdjęć z automatycznym przewijaniem
- Wyświetlanie aktualnej pogody w lokalizacji
- Mapa z lokalizacją i pobliskimi atrakcjami
- Parallax scrolling z hiszpańskimi elementami
- Pełna responsywność (RWD)
- Animowane przejścia między sekcjami
- Lightbox dla zdjęć

## 🛠️ Technologie

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- react-icons
- react-leaflet (mapy)
- Open-Meteo API (pogoda)

## 📋 Wymagania

- Node.js (wersja 14 lub wyższa)
- npm (zazwyczaj instalowany wraz z Node.js)
- Nowoczesna przeglądarka (Chrome, Firefox, Safari, Edge)

## 🚀 Instalacja i uruchomienie

1. Sklonuj repozytorium:
```bash
git clone https://github.com/twojuser/spainsite.git
cd spainsite
```

2. Zainstaluj zależności:
```bash
npm install
```

3. Przygotuj zdjęcia:
- Utwórz folder `public/images`
- Umieść 14 zdjęć nazwanych kolejno od image1.jpg do image14.jpg

4. Uruchom aplikację w trybie developerskim:
```bash
npm run dev
```

Strona będzie dostępna pod adresem: http://localhost:5173

## 📁 Struktura projektu

```
spainsite/
├── public/
│   └── images/              # Zdjęcia domu
│       ├── image1.jpg
│       ├── image2.jpg
│       └── ... 
├── src/
│   ├── components/
│   │   ├── layout/         # Komponenty układu strony
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ParallaxElements.jsx
│   │   └── sections/       # Główne sekcje strony
│   │       ├── HeroSection.jsx
│   │       ├── FeaturesSection.jsx
│   │       ├── GallerySection.jsx
│   │       ├── LocationSection.jsx
│   │       └── WeatherSection.jsx
│   ├── data/               # Pliki z danymi
│   │   └── galleryImages.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## 🖼️ Przygotowanie zdjęć

Zdjęcia powinny być:
- W formacie JPG
- Nazwane kolejno: image1.jpg, image2.jpg, ..., image14.jpg
- Umieszczone w folderze public/images
- Zoptymalizowane pod kątem web (zalecana szerokość: 1920px)

## 🔧 Konfiguracja

### Galeria
Edytuj plik `src/data/galleryImages.js` aby zmienić opisy zdjęć:

```javascript
export const galleryImages = [
  {
    id: 1,
    url: '/images/image1.jpg',
    title: 'Twój tytuł',
    description: 'Twój opis'
  },
  // ...
];
```

### Mapa
W komponencie LocationSection.jsx ustaw właściwe współrzędne:

```javascript
const center = {
  lat: 37.8721,  // Szerokość geograficzna
  lng: -0.7452   // Długość geograficzna
};
```

## 📦 Build produkcyjny

Aby zbudować wersję produkcyjną:
```bash
npm run build
```

Aby przetestować wersję produkcyjną lokalnie:
```bash
npm run preview
```

## 🔍 Rozwiązywanie problemów

Jeśli napotkasz problemy z modułami:
```bash
rm -rf node_modules package-lock.json
npm install
```

Sprawdź czy:
- Wszystkie zdjęcia są prawidłowo nazwane i umieszczone w folderze public/images
- Masz zainstalowaną odpowiednią wersję Node.js
- Wszystkie zależności zostały poprawnie zainstalowane

