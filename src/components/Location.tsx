import * as React from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { SectionWrapper, Header } from "./BasicUIElements";

const address =
  "<strong>Orent Clinic</strong><p>I.T.I Junction, M C Road</p><p>Chengannur, Kerala, India, 689121</p><p>https://maps.app.goo.gl/BpveSutoKhSscRSf6</p>";
export const Location = () => {
  const mapContainer = React.useRef<HTMLDivElement>(null);
  const initMap = () => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWVyaXlhIiwiYSI6ImNrZDYzbnpkdjBrcXAyemxvZXQyZXJjbTkifQ.YzkSnFwg69LygFmBrXBcFg";

    const mapboxGlMap = new mapboxgl.Map({
      container: mapContainer.current || "",
      style: `mapbox://styles/mapbox/streets-v11`,
      center: [76.6190225, 9.3130547],
      zoom: 10,
    });

    const popup = new mapboxgl.Popup({
      closeButton: true,
      closeOnClick: true,
    });
    popup
      .setLngLat([76.6190225, 9.3130547])
      .setHTML(address)
      .addTo(mapboxGlMap);
    // Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker()
      .setPopup(popup)
      .setLngLat([76.6190225, 9.3130547])
      .addTo(mapboxGlMap);

    mapboxGlMap.on("load", function () {
      mapboxGlMap.resize();
    });
    mapboxGlMap.scrollZoom.disable();
  };

  React.useEffect(() => {
    initMap();
  }, []);

  return (
    <SectionWrapper>
      <Header>Location</Header>
      <a href='https://maps.app.goo.gl/BpveSutoKhSscRSf6'>Google maps location</a>
    </SectionWrapper>
  );
};

const LocationLink = styled.a`
  font-family: "PT Mono", monospace;
  font-size: 1rem;
  padding: 2px;
  margin: 2px;
  color: #0e4766;
`
const Map = styled.div`
  margin: 5px;
  padding: 10px;
  display: flex;
  justify-content: center;
  height: 50vh;
  width: 100%;
`;
