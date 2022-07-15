import { PropTypes } from "prop-types";
import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const ContactMap = props => {
  const mapStyles = {
    width: "100%",
    height: "40%"
  };

  return (
    <Map
      google={props.google}
      zoom={13}
      style={mapStyles}
      initialCenter={{ lat: props.latitude, lng: props.longitude }}
    >
      <Marker
        position={{ lat: props.latitude, lng: props.longitude }}
        icon={{
          url: `${"https://icons.iconarchive.com/icons/icons-land/vista-map-markers/72/Map-Marker-Marker-Outside-Chartreuse-icon.png"}`
        }}
        animation={props.google.maps.Animation.BOUNCE}
      />
    </Map>
  );
};

ContactMap.propTypes = {
  google: PropTypes.object,
  latitude: PropTypes.string,
  longitude: PropTypes.string
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDbOU5JUmNH8BTiOaCiRWPrvdGlapqdD34"
})(ContactMap);
