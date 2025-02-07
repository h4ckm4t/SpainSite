import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'framer-motion';
import { FaPlane, FaUmbrellaBeach, FaStore, FaBus } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
});

const center = {
  lat: 37.8689,
  lng: -0.7624
};

const places = [
  {
    name: 'Casa Bella',
    position: [center.lat, center.lng],
    description: 'Twój wymarzony dom wakacyjny'
  },
  {
    name: 'Plaża Lo Pagán',
    position: [center.lat + 0.002, center.lng],
    description: 'Piękna piaszczysta plaża'
  },
  {
    name: 'Centrum Torre de la Horadada',
    position: [center.lat - 0.001, center.lng - 0.001],
    description: 'Restauracje, sklepy i lokalne atrakcje'
  },
  {
    name: 'Puerto Deportivo',
    position: [center.lat + 0.001, center.lng + 0.001],
    description: 'Malowniczy port jachtowy'
  }
];

const LocationSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Lokalizacja
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Torre de la Horadada - malownicza miejscowość na Costa Blanca
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="rounded-xl overflow-hidden shadow-lg h-[500px]">
              <MapContainer 
                center={[center.lat, center.lng]} 
                zoom={15} 
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">W pobliżu</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <FaUmbrellaBeach className="text-red-500 text-xl" />
                  <span>500m do plaży Lo Pagán</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaStore className="text-red-500 text-xl" />
                  <span>5 min do sklepów i restauracji</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaBus className="text-red-500 text-xl" />
                  <span>2 min do przystanku autobusowego</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Dojazd</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <FaPlane className="text-red-500 text-xl" />
                  <span>50 km od lotniska w Alicante</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaPlane className="text-red-500 text-xl" />
                  <span>40 km od lotniska w Murcji</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Okolica</h3>
              <p className="text-gray-600">
                Torre de la Horadada to urokliwa miejscowość w prowincji Alicante, 
                znana z pięknych plaż i malowniczego portu jachtowego. Idealne miejsce 
                na spokojny wypoczynek z dostępem do wszystkich potrzebnych udogodnień.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;