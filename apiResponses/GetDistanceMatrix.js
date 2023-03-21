const apiKey = "AIzaSyBNLEE0e6JiPHJh88NuSvdOLBggmS43Mv0";

export default function getSearchLocation(origins, destinations) {
  const apiURL = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origins}%2C%20DC&destinations=${destinations}&units=imperial&key=${apiKey}`;
  return fetch(apiURL).then((res) => res.json());
}
