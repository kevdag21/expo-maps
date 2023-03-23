const apiKey = "AIzaSyBNLEE0e6JiPHJh88NuSvdOLBggmS43Mv0";

export default function getSearchLocation( placeId ) {
  const apiURL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name%2Crating%2Cgeometry/location&key=${apiKey}`;
  return fetch(apiURL)
  .then((res) => res.json())
    
}
