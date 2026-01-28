// src/utils/weatherApi.js
import axios from 'axios';

const TORRE_COORDS = {
  lat: 37.8689,
  lon: -0.7624
};

const WARSAW_COORDS = {
  lat: 52.2297,
  lon: 21.0122
};

export const getWeatherData = async ({ locale = 'pl-PL' } = {}) => {
  try {
    // Torre de la Horadada - pobieranie prognozy i aktualnej pogody
    const torreResponse = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${TORRE_COORDS.lat}&longitude=${TORRE_COORDS.lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weathercode,windspeed_10m&timezone=Europe/Madrid&current_weather=true`
    );

    // Warszawa - aktualna pogoda
    const warsawResponse = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${WARSAW_COORDS.lat}&longitude=${WARSAW_COORDS.lon}&current_weather=true&timezone=Europe/Warsaw`
    );

    const torreData = torreResponse.data;
    
    // Mapowanie kodów pogodowych na nasze ikony
    const getIconForCode = (code, isDay = true) => {
      if (code === 0) return isDay ? 'sun' : 'moon';  // Clear sky
      if (code <= 2) return 'cloud-sun';  // Partly cloudy
      if (code === 3) return 'cloud';     // Overcast
      if ([51, 53, 55, 61, 63, 65].includes(code)) return 'cloud-rain';  // Rain
      if ([71, 73, 75, 77].includes(code)) return 'cloud-snow';  // Snow
      if ([95, 96, 99].includes(code)) return 'cloud-lightning';  // Thunderstorm
      return 'cloud';  // Default
    };

    // Sprawdzanie czy jest dzień (między 6:00 a 22:00)
    const hour = new Date().getHours();
    const isDay = hour >= 6 && hour < 22;

    // Przygotowanie prognozy na 5 dni
    const forecast = torreData.daily.time.slice(0, 5).map((time, index) => ({
      day: new Date(time).toLocaleDateString(locale, { weekday: 'short' }),
      temp: Math.round(torreData.daily.temperature_2m_max[index]),
      temp_min: Math.round(torreData.daily.temperature_2m_min[index]),
      icon: getIconForCode(torreData.daily.weathercode[index], isDay)
    }));

    // Aktualna pogoda
    const current = {
      temp: Math.round(torreData.current_weather.temperature),
      windspeed: Math.round(torreData.current_weather.windspeed),
      icon: getIconForCode(torreData.current_weather.weathercode, isDay)
    };

    return {
      current,
      forecast,
      comparePoland: {
        temp: Math.round(warsawResponse.data.current_weather.temperature)
      }
    };

  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
