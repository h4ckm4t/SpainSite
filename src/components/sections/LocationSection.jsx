import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'framer-motion';
import { FaPlane, FaUmbrellaBeach, FaStore, FaBus } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useMemo } from 'react';
import { useI18n } from '../../i18n/I18nProvider.jsx';

// Fix Leaflet default icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
});

// Map center
const center = {
  lat: 37.8703,
  lng: -0.7619
};

const LocationSection = () => {
  const { t } = useI18n();

  const places = useMemo(
    () => [
      {
        name: t('location.places.house.name'),
        position: [center.lat, center.lng],
        description: t('location.places.house.description')
      },
      {
        name: t('location.places.beach.name'),
        position: [37.8688, -0.7565],
        description: t('location.places.beach.description')
      },
      {
        name: t('location.places.market.name'),
        position: [37.8727, -0.7643],
        description: t('location.places.market.description')
      },
      {
        name: t('location.places.center.name'),
        position: [37.8691, -0.7621],
        description: t('location.places.center.description')
      }
    ],
    [t]
  );

  return (
    <section className="py-20 bg-gradient-to-b from-white to-yellow-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            {t('location.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('location.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          
          {/* Map Container - Lower z-index */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="rounded-xl overflow-hidden shadow-lg h-[500px] relative" style={{ zIndex: 0 }}>
              <MapContainer
                center={[center.lat, center.lng]}
                zoom={15}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
                className="leaflet-map"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {places.map((place, index) => (
                  <Marker key={index} position={place.position}>
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-semibold">{place.name}</h3>
                        <p>{place.description}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </motion.div>

          {/* Information Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg relative z-20">
              <h3 className="text-xl font-semibold mb-4">{t('location.nearbyTitle')}</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <FaUmbrellaBeach className="text-red-500 text-xl" />
                  <span>{t('location.nearby.beach')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaStore className="text-red-500 text-xl" />
                  <span>{t('location.nearby.shops')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaBus className="text-red-500 text-xl" />
                  <span>{t('location.nearby.bus')}</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg relative z-20">
              <h3 className="text-xl font-semibold mb-4">{t('location.travelTitle')}</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <FaPlane className="text-red-500 text-xl" />
                  <span>{t('location.travel.alicante')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaPlane className="text-red-500 text-xl" />
                  <span>{t('location.travel.murcia')}</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg relative z-20">
              <h3 className="text-xl font-semibold mb-4">{t('location.areaTitle')}</h3>
              <p className="text-gray-600">
                {t('location.areaText')}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;
