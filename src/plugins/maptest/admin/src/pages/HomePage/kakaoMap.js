import { Map, MapMarker } from "react-kakao-maps-sdk";
import React, { useEffect } from "react";

function KakaoMap(props) {
  useEffect(() => {
    console.log(
      props.setAddress.x,
      typeof props.setAddress.x,
      parseFloat(props.setAddress.x)
    );
  }, [props]);
  return (
    <>
      {" "}
      <Map
        center={{
          lat: props.setAddress.x,
          lng: props.setAddress.y,
        }}
        style={{
          padding: "0",
          margin: "0 auto",
          width: "50%",
          height: "360px",
        }}
      >
        <MapMarker
          position={{
            lat: props.setAddress.x,
            lng: props.setAddress.y,
          }}
        >
          <div style={{ color: "#000" }}>123</div>
        </MapMarker>
      </Map>
    </>
  );
}

export default KakaoMap;
