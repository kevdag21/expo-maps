import { useState, useEffect } from "react"; 
import * as Location from 'expo-location'; 

export default function useCurrentPosition(){
    const [location, setLocation] = useState({coords:{
      latitude: 20, 
      longitude: 20, 
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
  }})

  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync()
      if( status === 'granted'){
        console.log('Permiso concedido')
      }else{
        console.log('Permisos no concedidos')
      }

      const loc = await Location.getCurrentPositionAsync()
      setLocation(loc)
    })()
  }, [])
  
  return location
};