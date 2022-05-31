import React, { useState } from "react";
import axios from "axios";
import KakaoMap from "./KaKaoMap";

function HomePage() {
  var REST_API_KEY = "9e96199ed2fd3c760008ee0140526835";

  let setAddress = {};
  const [주소, 세팅주소] = useState("소답동 108-30");
  const [엑스, 세팅엑스] = useState(null);
  const [와이, 세팅와이] = useState(null);
  const [주소값, 세팅주소값] = useState({
    x: 35.147715526191554,
    y: 129.05864204173372,
  });

  const onChange = (e) => {
    세팅주소(e.target.value);
  };

  function 전송() {
    try {
      axios({
        method: "get",
        url: `https://dapi.kakao.com//v2/local/search/address.json?query=${주소}`,
        headers: { Authorization: "KakaoAK " + REST_API_KEY },
      })
        .then(function (response) {
          세팅엑스(JSON.stringify(response.data.documents[0].x));
          세팅와이(JSON.stringify(response.data.documents[0].y));
          setAddress = {
            x: JSON.stringify(response.data.documents[0].x),
            y: JSON.stringify(response.data.documents[0].y),
          };
          세팅주소값({ x: 엑스, y: 와이 });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log("에러발생", err);
    }
  }

  return (
    <>
      {
        <input
          placeholder="주소를 입력해세요"
          onChange={onChange}
          value={주소}
        ></input>
      }
      {<button onClick={전송}>전송하기</button>}
      <br />
      <br />
      <KakaoMap setAddress={주소값}></KakaoMap>
    </>
  );
}

export default HomePage;
