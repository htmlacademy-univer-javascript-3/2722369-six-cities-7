import { useEffect, useRef, useState } from 'react';
import { Icon, Map as LeafletMap, Marker, TileLayer, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT } from '../../const';
import type { City, Offer } from '../../types/offer';

const TILE_LAYER_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const TILE_LAYER_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const defaultMarkerIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

type MapProps = {
  city: City;
  offers: Offer[];
};

function Map({ city, offers }: MapProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<LeafletMap | null>(null);

  useEffect(() => {
    if (containerRef.current === null) {
      return;
    }

    const mapInstance = new LeafletMap(containerRef.current);

    new TileLayer(TILE_LAYER_URL, { attribution: TILE_LAYER_ATTRIBUTION }).addTo(mapInstance);
    setMap(mapInstance);

    return () => {
      mapInstance.remove();
      setMap(null);
    };
  }, []);

  useEffect(() => {
    if (map === null) {
      return;
    }

    map.setView(
      [city.location.latitude, city.location.longitude],
      city.location.zoom,
    );
  }, [map, city]);

  useEffect(() => {
    if (map === null) {
      return;
    }

    const markers = layerGroup().addTo(map);

    offers.forEach((offer) => {
      const marker = new Marker(
        [offer.location.latitude, offer.location.longitude],
        { icon: defaultMarkerIcon },
      );

      marker.addTo(markers);
    });

    return () => {
      markers.remove();
    };
  }, [map, offers]);

  return <div style={{ height: '100%' }} ref={containerRef} />;
}

export default Map;
