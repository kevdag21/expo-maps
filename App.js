import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MapScreen } from './components/Map';
import { SearchLocation } from './context/searchLocationContext';


export default function App() {
  return (
    <SearchLocation>
      <MapScreen/>
    </SearchLocation>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
