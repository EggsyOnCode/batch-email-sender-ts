import React, { useState } from "react";
import { useAppDispatch } from "../hooks/Redux";

import { setKey } from "../store/redux-slices";

const Configuration: React.FC = () => {
  const [appkeyFromField, setAppkeyFromField] = useState("");
  const dispatch = useAppDispatch();

  return (
    <div className="min-h-screen w-screen bg-black flex flex-col justify-center items-center">
      <h1 className="text-[18px] text-white font-sans">
        In order to setup the Email Forwarding System we need your App Key{" "}
        <br /> You can set them up using this guide{" "}
        <a href="https://support.google.com/mail/answer/185833?hl=en"></a>
      </h1>
      <div className="flex ">
        <input
          type="text"
          className="rounded-lg text-black w-[200px] h-[60px] mt-10"
          placeholder="App Key"
          onChange={(e) => {
            setAppkeyFromField(e.target.value);
          }}
        />
        <button
          className="text-white p-3 bg-blue-950 rounded-lg h-[61px] mt-10 ml-6"
          onClick={() => {
            dispatch(setKey(appkeyFromField.toString()));
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Configuration;
