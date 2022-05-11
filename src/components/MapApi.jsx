import {useState, useCallback, } from 'react'
import {GoogleMap, Marker, useJsApiLoader, KmlLayer} from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 5.562,
  lng: 0.172
};

const MapApi = () => {
    const src = process.env.REACT_APP_MAP_KMLFILE
    // const kmlLayer = new google.maps.KmlLayer(src, {
    //   suppressInfoWindows: true,
    //   preserveViewport: false,
    //   map: map
    // })
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: apiKey,
    });

    // if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      {
        !isLoaded ? (
          <h2>Loading...</h2>
        ) : (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            // onGoogleApiLoaded={({ map, maps}) => {
            //   maps.KmlLayer(src, {
            //     suppressInfoWindows: true,
            //     preserveViewport: false,
            //     map: map
            //   });
            // }}
            
          >
              <KmlLayer 
                url={src}
                options={{ preserveViewport : false}}
              />
              {/* <Marker position={center}/> */}
          </GoogleMap>
        )
      }
    </div>
  )
}

export default MapApi