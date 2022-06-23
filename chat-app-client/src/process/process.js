import React, { useState } from "react";
import Lottie from "react-lottie"
import animationData from "../loading.json";
import { useSelector } from "react-redux";
import "./process.scss"

function Process() {
  const [play, setPlay] = useState(false)

  const state = useSelector((state) => state.ProcessReducer)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <div className="process">
      <h5>
        Secret Key: <span>ourejhufhue2349ueir932orrw</span>
      </h5>
      <div className="incoming">
        <h4>Incoming Data</h4>
        <p>{state.cypher}</p>
      </div>
      <Lottie
        options={defaultOptions}
        height={150}
        width={150}
        isStopped={play}
        />
      <div className="crypt">
        <h4>Decrypted Data</h4>
        <p>{state.text}</p>
      </div>
    </div>
  )
}

export default Process