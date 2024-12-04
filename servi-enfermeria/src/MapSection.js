import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import './MapSection.css';

const MapSection = () => {
  const nurses = [
    { id: 1, name: 'Juan Pérez', lat: 19.4326, lng: -99.1332 },
    { id: 2, name: 'Ana López', lat: 20.6592, lng: -103.3496 },
    { id: 3, name: 'Carlos Sánchez', lat: 19.2010, lng: -99.6767 },
  ];

  const [viewport, setViewport] = React.useState({
    latitude: 19.4326,
    longitude: -99.1332,
    zoom: 6,
    width: '100%',
    height: '400px',
  });

  return (
    <section id="map" className="map-section">
      <h2>Encuentra un Enfermero Cerca de Ti</h2>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="TU_MAPBOX_API_KEY"
        onViewportChange={(newViewport) => setViewport(newViewport)}
      >
        {nurses.map((nurse) => (
          <Marker key={nurse.id} latitude={nurse.lat} longitude={nurse.lng}>
            <div>{nurse.name}</div>
          </Marker>
        ))}
      </ReactMapGL>
    </section>
  );
};

export default MapSection;
