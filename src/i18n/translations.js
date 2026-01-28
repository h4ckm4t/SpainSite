export const DEFAULT_LANGUAGE = 'pl';

export const SUPPORTED_LANGUAGES = ['pl', 'en', 'de', 'es'];

export const LOCALE_BY_LANGUAGE = {
  pl: 'pl-PL',
  en: 'en-US',
  de: 'de-DE',
  es: 'es-ES'
};

export const LANGUAGE_OPTIONS = [
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', label: 'Español', flag: '🇪🇸' }
];

export const translations = {
  pl: {
    loading: {
      welcome: 'Witamy!',
      brand: 'Casa Ancla'
    },
    navbar: {
      about: 'O nas',
      gallery: 'Galeria',
      location: 'Lokalizacja',
      prices: 'Ceny',
      book: 'Rezerwuj'
    },
    hero: {
      title: 'Wakacje przez cały rok! 🏝️',
      subtitle: 'Dom z basenem, zaledwie 500 metrów od piaszczystej plaży'
    },
    features: {
      title: 'Co oferujemy?',
      subtitle:
        'Nasz dom to idealne miejsce na relaks – w pełni wyposażony, przytulny i gotowy na Twój komfortowy wypoczynek!',
      items: {
        beach: {
          title: '500m do plaży',
          description: 'Krótki spacer dzieli Cię od pięknej, piaszczystej plaży'
        },
        pool: {
          title: 'Prywatny basen',
          description: 'Basen typu salina bez chloru, idealny do relaksu'
        },
        bedrooms: {
          title: '3 sypialnie',
          description: 'Komfortowe pokoje dla całej rodziny'
        },
        bathrooms: {
          title: '2 łazienki',
          description: 'W pełni wyposażone, nowoczesne łazienki'
        },
        kitchen: {
          title: 'Wyposażona kuchnia',
          description: 'Wszystko co potrzebne do przygotowania posiłków'
        },
        wifi: {
          title: 'Szybki internet',
          description: 'Światłowód 600/600 Mb/s'
        },
        ac: {
          title: 'Klimatyzacja',
          description: 'Komfortowa temperatura przez cały rok'
        },
        travel: {
          title: 'Dobry dojazd',
          description: '~50 km od lotniska w Alicante'
        }
      }
    },
    gallery: {
      title: 'Galeria',
      subtitle: 'Zobacz, gdzie spędzisz swoje wymarzone wakacje!',
      previousAlt: 'Poprzednie zdjęcie',
      nextAlt: 'Następne zdjęcie',
      expandAlt: 'Powiększ'
    },
    location: {
      title: 'Lokalizacja',
      subtitle: 'Torre de la Horadada - malownicza miejscowość na Costa Blanca',
      nearbyTitle: 'W pobliżu',
      nearby: {
        beach: '500m do plaży del Conde',
        shops: '3 min do sklepów i restauracji',
        bus: '1 min do przystanku autobusowego'
      },
      travelTitle: 'Dojazd',
      travel: {
        alicante: '~50 km od lotniska w Alicante',
        murcia: '~40 km od lotniska w Murcji'
      },
      areaTitle: 'Okolica',
      areaText:
        'Torre de la Horadada to urokliwa miejscowość w prowincji Alicante, znana z pięknych plaż i malowniczego portu jachtowego. Idealne miejsce na spokojny wypoczynek z dostępem do wszystkich potrzebnych udogodnień.',
      places: {
        house: { name: 'Nasz dom', description: '' },
        beach: { name: 'Plaża del Conde', description: 'Piękna piaszczysta plaża' },
        market: { name: 'Super Market', description: 'Dial Prix' },
        center: { name: 'Centrum Gastro/Handlowe', description: 'Plaza Nueva' }
      }
    },
    weather: {
      title: 'Pogoda w Torre de la Horadada',
      localTime: 'Lokalny czas: {time}',
      current: 'Aktualna pogoda',
      wind: 'Wiatr: {speed} km/h',
      compareTitle: 'Porównanie z Polską',
      polandCity: 'Warszawa',
      minLabel: 'min: {temp}°C',
      error: 'Nie udało się pobrać danych pogodowych'
    },
    stats: {
      title: 'Ceny zależą od sezonu',
      subtitle: '📌 Minimalny czas wynajmu: 5 dni',
      items: {
        spring1: 'Marzec / Kwiecień (za dobę)',
        spring2: 'Maj / Czerwiec (za dobę)',
        summer: 'Lipiec / Sierpień (za dobę)',
        autumn: 'Wrzesień / Październik (za dobę)'
      }
    },
    footer: {
      contact: 'Kontakt',
      about: 'O nas',
      gallery: 'Galeria',
      location: 'Lokalizacja',
      madeWith: 'Zrobione z {heart} w Polsce',
      address: {
        province: 'Prowincja Alicante',
        country: 'Hiszpania'
      }
    },
    contact: {
      title: 'Skontaktuj się z nami',
      callUs: 'Zadzwoń do nas',
      writeUs: 'Napisz do nas',
      close: 'Zamknij'
    },
    images: {
      1: { title: 'Widok na basen', description: '' },
      2: { title: 'Basen', description: '' },
      3: { title: 'Taras', description: '' },
      4: { title: 'Taras', description: '' },
      5: { title: 'Ogród', description: '' },
      6: { title: 'Prysznic', description: '' },
      7: { title: 'Salon', description: '' },
      8: { title: 'Sypialnia', description: '' },
      9: { title: 'Łazienka 1', description: '' },
      10: { title: 'Łazienka 2', description: '' },
      11: { title: 'Pokój B', description: 'Pojedyncze łóżko' },
      12: { title: 'Pokój A', description: 'Piętrowe łóżko' },
      13: { title: 'Zachód Słońca', description: '' },
      14: { title: 'Morze Śródziemne', description: '' }
    }
  },
  en: {
    loading: {
      welcome: 'Welcome!',
      brand: 'Casa Ancla'
    },
    navbar: {
      about: 'About',
      gallery: 'Gallery',
      location: 'Location',
      prices: 'Prices',
      book: 'Book'
    },
    hero: {
      title: 'Holidays all year round! 🏝️',
      subtitle: 'A house with a pool just 500 meters from a sandy beach'
    },
    features: {
      title: 'What we offer',
      subtitle:
        'Our house is the perfect place to relax — fully equipped, cozy, and ready for your comfortable stay!',
      items: {
        beach: {
          title: '500m to the beach',
          description: 'A short walk takes you to a beautiful sandy beach'
        },
        pool: {
          title: 'Private pool',
          description: 'A saline pool without chlorine — perfect for relaxing'
        },
        bedrooms: {
          title: '3 bedrooms',
          description: 'Comfortable rooms for the whole family'
        },
        bathrooms: {
          title: '2 bathrooms',
          description: 'Fully equipped, modern bathrooms'
        },
        kitchen: {
          title: 'Equipped kitchen',
          description: 'Everything you need to prepare meals'
        },
        wifi: {
          title: 'Fast internet',
          description: 'Fiber 600/600 Mb/s'
        },
        ac: {
          title: 'Air conditioning',
          description: 'Comfortable temperature all year round'
        },
        travel: {
          title: 'Easy access',
          description: '~50 km from Alicante airport'
        }
      }
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'See where you will spend your dream holiday!',
      previousAlt: 'Previous photo',
      nextAlt: 'Next photo',
      expandAlt: 'Expand'
    },
    location: {
      title: 'Location',
      subtitle: 'Torre de la Horadada — a charming town on the Costa Blanca',
      nearbyTitle: 'Nearby',
      nearby: {
        beach: '500m to Playa del Conde',
        shops: '3 min to shops and restaurants',
        bus: '1 min to the bus stop'
      },
      travelTitle: 'Getting here',
      travel: {
        alicante: '~50 km from Alicante airport',
        murcia: '~40 km from Murcia airport'
      },
      areaTitle: 'Area',
      areaText:
        'Torre de la Horadada is a charming town in the Province of Alicante, known for its beautiful beaches and picturesque marina. A perfect place for a peaceful stay with all essential amenities nearby.',
      places: {
        house: { name: 'Our house', description: '' },
        beach: { name: 'Playa del Conde', description: 'Beautiful sandy beach' },
        market: { name: 'Super Market', description: 'Dial Prix' },
        center: { name: 'Food & Shopping Center', description: 'Plaza Nueva' }
      }
    },
    weather: {
      title: 'Weather in Torre de la Horadada',
      localTime: 'Local time: {time}',
      current: 'Current weather',
      wind: 'Wind: {speed} km/h',
      compareTitle: 'Compared to Poland',
      polandCity: 'Warsaw',
      minLabel: 'min: {temp}°C',
      error: 'Unable to fetch weather data'
    },
    stats: {
      title: 'Prices depend on the season',
      subtitle: '📌 Minimum rental: 5 nights',
      items: {
        spring1: 'March / April (per night)',
        spring2: 'May / June (per night)',
        summer: 'July / August (per night)',
        autumn: 'September / October (per night)'
      }
    },
    footer: {
      contact: 'Contact',
      about: 'About',
      gallery: 'Gallery',
      location: 'Location',
      madeWith: 'Made with {heart} in Poland',
      address: {
        province: 'Province of Alicante',
        country: 'Spain'
      }
    },
    contact: {
      title: 'Get in touch',
      callUs: 'Call us',
      writeUs: 'Email us',
      close: 'Close'
    },
    images: {
      1: { title: 'Pool view', description: '' },
      2: { title: 'Pool', description: '' },
      3: { title: 'Terrace', description: '' },
      4: { title: 'Terrace', description: '' },
      5: { title: 'Garden', description: '' },
      6: { title: 'Shower', description: '' },
      7: { title: 'Living room', description: '' },
      8: { title: 'Bedroom', description: '' },
      9: { title: 'Bathroom 1', description: '' },
      10: { title: 'Bathroom 2', description: '' },
      11: { title: 'Room B', description: 'Single bed' },
      12: { title: 'Room A', description: 'Bunk bed' },
      13: { title: 'Sunset', description: '' },
      14: { title: 'Mediterranean Sea', description: '' }
    }
  },
  de: {
    loading: {
      welcome: 'Willkommen!',
      brand: 'Casa Ancla'
    },
    navbar: {
      about: 'Über uns',
      gallery: 'Galerie',
      location: 'Lage',
      prices: 'Preise',
      book: 'Buchen'
    },
    hero: {
      title: 'Urlaub das ganze Jahr! 🏝️',
      subtitle: 'Ein Haus mit Pool, nur 500 Meter vom Sandstrand entfernt'
    },
    features: {
      title: 'Was wir bieten',
      subtitle:
        'Unser Haus ist der perfekte Ort zum Entspannen — voll ausgestattet, gemütlich und bereit für euren Komfort!',
      items: {
        beach: {
          title: '500 m zum Strand',
          description: 'Ein kurzer Spaziergang führt euch zu einem schönen Sandstrand'
        },
        pool: {
          title: 'Privater Pool',
          description: 'Salzwasserpool ohne Chlor — ideal zum Entspannen'
        },
        bedrooms: {
          title: '3 Schlafzimmer',
          description: 'Komfortable Zimmer für die ganze Familie'
        },
        bathrooms: {
          title: '2 Badezimmer',
          description: 'Voll ausgestattete, moderne Badezimmer'
        },
        kitchen: {
          title: 'Ausgestattete Küche',
          description: 'Alles, was man zum Kochen braucht'
        },
        wifi: {
          title: 'Schnelles Internet',
          description: 'Glasfaser 600/600 Mb/s'
        },
        ac: {
          title: 'Klimaanlage',
          description: 'Angenehme Temperatur das ganze Jahr über'
        },
        travel: {
          title: 'Gute Anreise',
          description: '~50 km vom Flughafen Alicante'
        }
      }
    },
    gallery: {
      title: 'Galerie',
      subtitle: 'Seht, wo ihr euren Traumurlaub verbringen werdet!',
      previousAlt: 'Vorheriges Foto',
      nextAlt: 'Nächstes Foto',
      expandAlt: 'Vergrößern'
    },
    location: {
      title: 'Lage',
      subtitle: 'Torre de la Horadada — ein malerischer Ort an der Costa Blanca',
      nearbyTitle: 'In der Nähe',
      nearby: {
        beach: '500 m bis Playa del Conde',
        shops: '3 Min. zu Geschäften und Restaurants',
        bus: '1 Min. zur Bushaltestelle'
      },
      travelTitle: 'Anreise',
      travel: {
        alicante: '~50 km vom Flughafen Alicante',
        murcia: '~40 km vom Flughafen Murcia'
      },
      areaTitle: 'Umgebung',
      areaText:
        'Torre de la Horadada ist ein charmantes Städtchen in der Provinz Alicante, bekannt für schöne Strände und einen malerischen Yachthafen. Perfekt für einen ruhigen Urlaub mit allen wichtigen Annehmlichkeiten in der Nähe.',
      places: {
        house: { name: 'Unser Haus', description: '' },
        beach: { name: 'Playa del Conde', description: 'Schöner Sandstrand' },
        market: { name: 'Supermarkt', description: 'Dial Prix' },
        center: { name: 'Gastro-/Einkaufszentrum', description: 'Plaza Nueva' }
      }
    },
    weather: {
      title: 'Wetter in Torre de la Horadada',
      localTime: 'Ortszeit: {time}',
      current: 'Aktuelles Wetter',
      wind: 'Wind: {speed} km/h',
      compareTitle: 'Vergleich mit Polen',
      polandCity: 'Warschau',
      minLabel: 'min: {temp}°C',
      error: 'Wetterdaten konnten nicht geladen werden'
    },
    stats: {
      title: 'Preise je nach Saison',
      subtitle: '📌 Mindestmietdauer: 5 Nächte',
      items: {
        spring1: 'März / April (pro Nacht)',
        spring2: 'Mai / Juni (pro Nacht)',
        summer: 'Juli / August (pro Nacht)',
        autumn: 'September / Oktober (pro Nacht)'
      }
    },
    footer: {
      contact: 'Kontakt',
      about: 'Über uns',
      gallery: 'Galerie',
      location: 'Lage',
      madeWith: 'Gemacht mit {heart} in Polen',
      address: {
        province: 'Provinz Alicante',
        country: 'Spanien'
      }
    },
    contact: {
      title: 'Kontaktieren Sie uns',
      callUs: 'Rufen Sie uns an',
      writeUs: 'Schreiben Sie uns',
      close: 'Schließen'
    },
    images: {
      1: { title: 'Blick auf den Pool', description: '' },
      2: { title: 'Pool', description: '' },
      3: { title: 'Terrasse', description: '' },
      4: { title: 'Terrasse', description: '' },
      5: { title: 'Garten', description: '' },
      6: { title: 'Dusche', description: '' },
      7: { title: 'Wohnzimmer', description: '' },
      8: { title: 'Schlafzimmer', description: '' },
      9: { title: 'Bad 1', description: '' },
      10: { title: 'Bad 2', description: '' },
      11: { title: 'Zimmer B', description: 'Einzelbett' },
      12: { title: 'Zimmer A', description: 'Etagenbett' },
      13: { title: 'Sonnenuntergang', description: '' },
      14: { title: 'Mittelmeer', description: '' }
    }
  },
  es: {
    loading: {
      welcome: '¡Bienvenidos!',
      brand: 'Casa Ancla'
    },
    navbar: {
      about: 'Sobre nosotros',
      gallery: 'Galería',
      location: 'Ubicación',
      prices: 'Precios',
      book: 'Reservar'
    },
    hero: {
      title: '¡Vacaciones todo el año! 🏝️',
      subtitle: 'Casa con piscina a solo 500 metros de una playa de arena'
    },
    features: {
      title: 'Qué ofrecemos',
      subtitle:
        'Nuestra casa es el lugar perfecto para relajarse — totalmente equipada, acogedora y lista para una estancia cómoda.',
      items: {
        beach: {
          title: '500 m a la playa',
          description: 'Un corto paseo te lleva a una hermosa playa de arena'
        },
        pool: {
          title: 'Piscina privada',
          description: 'Piscina salina sin cloro, ideal para relajarse'
        },
        bedrooms: {
          title: '3 dormitorios',
          description: 'Habitaciones cómodas para toda la familia'
        },
        bathrooms: {
          title: '2 baños',
          description: 'Baños modernos y totalmente equipados'
        },
        kitchen: {
          title: 'Cocina equipada',
          description: 'Todo lo necesario para preparar comidas'
        },
        wifi: {
          title: 'Internet rápido',
          description: 'Fibra 600/600 Mb/s'
        },
        ac: {
          title: 'Aire acondicionado',
          description: 'Temperatura confortable durante todo el año'
        },
        travel: {
          title: 'Buen acceso',
          description: '~50 km del aeropuerto de Alicante'
        }
      }
    },
    gallery: {
      title: 'Galería',
      subtitle: '¡Mira dónde pasarás tus vacaciones soñadas!',
      previousAlt: 'Foto anterior',
      nextAlt: 'Foto siguiente',
      expandAlt: 'Ampliar'
    },
    location: {
      title: 'Ubicación',
      subtitle: 'Torre de la Horadada — un encantador pueblo en la Costa Blanca',
      nearbyTitle: 'Cerca',
      nearby: {
        beach: '500 m a Playa del Conde',
        shops: '3 min a tiendas y restaurantes',
        bus: '1 min a la parada de autobús'
      },
      travelTitle: 'Cómo llegar',
      travel: {
        alicante: '~50 km del aeropuerto de Alicante',
        murcia: '~40 km del aeropuerto de Murcia'
      },
      areaTitle: 'Alrededores',
      areaText:
        'Torre de la Horadada es un pueblo con encanto en la provincia de Alicante, conocido por sus hermosas playas y su pintoresco puerto deportivo. Un lugar ideal para descansar con todos los servicios esenciales cerca.',
      places: {
        house: { name: 'Nuestra casa', description: '' },
        beach: { name: 'Playa del Conde', description: 'Hermosa playa de arena' },
        market: { name: 'Supermercado', description: 'Dial Prix' },
        center: { name: 'Centro gastronómico/comercial', description: 'Plaza Nueva' }
      }
    },
    weather: {
      title: 'El tiempo en Torre de la Horadada',
      localTime: 'Hora local: {time}',
      current: 'Tiempo actual',
      wind: 'Viento: {speed} km/h',
      compareTitle: 'Comparación con Polonia',
      polandCity: 'Varsovia',
      minLabel: 'mín: {temp}°C',
      error: 'No se pudieron obtener los datos del tiempo'
    },
    stats: {
      title: 'Los precios dependen de la temporada',
      subtitle: '📌 Estancia mínima: 5 noches',
      items: {
        spring1: 'Marzo / Abril (por noche)',
        spring2: 'Mayo / Junio (por noche)',
        summer: 'Julio / Agosto (por noche)',
        autumn: 'Septiembre / Octubre (por noche)'
      }
    },
    footer: {
      contact: 'Contacto',
      about: 'Sobre nosotros',
      gallery: 'Galería',
      location: 'Ubicación',
      madeWith: 'Hecho con {heart} en Polonia',
      address: {
        province: 'Provincia de Alicante',
        country: 'España'
      }
    },
    contact: {
      title: 'Contáctanos',
      callUs: 'Llámanos',
      writeUs: 'Escríbenos',
      close: 'Cerrar'
    },
    images: {
      1: { title: 'Vistas a la piscina', description: '' },
      2: { title: 'Piscina', description: '' },
      3: { title: 'Terraza', description: '' },
      4: { title: 'Terraza', description: '' },
      5: { title: 'Jardín', description: '' },
      6: { title: 'Ducha', description: '' },
      7: { title: 'Salón', description: '' },
      8: { title: 'Dormitorio', description: '' },
      9: { title: 'Baño 1', description: '' },
      10: { title: 'Baño 2', description: '' },
      11: { title: 'Habitación B', description: 'Cama individual' },
      12: { title: 'Habitación A', description: 'Litera' },
      13: { title: 'Atardecer', description: '' },
      14: { title: 'Mar Mediterráneo', description: '' }
    }
  }
};
