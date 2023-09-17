import React, { useState } from "react";
import Draggable from "react-draggable";
import VolumeRange from "../../Inputs/VolumeRange/VolumeRange";
import { LineOutlined, CloseOutlined } from "@ant-design/icons";
import { SOUNDS } from "../../../utils/tracks";

import "./MixerWidget.scss";
import { Space } from "antd";

const MixerWidget = ({ widgetHandler }) => {
  const [volume, setVolume] = useState({
    ...SOUNDS.reduce((obj, sound) => ((obj[sound.name] = 0), obj), {}),
  });
  const [collapse, setCollapse] = useState(false);

  const changeVolume = (e, name) => {
    setVolume((state) => ({
      ...state,
      [name]: e.target.value,
    }));

    let sound = document.querySelector(`#sound-${name}`);
    sound.play();
    sound.volume = e.target.value;
  };

  return (
    <Draggable handle=".handle">
      <div className="mixer widget">
        <dib className="handle">
          <h3>Sounds</h3>
          <Space direction="horizontal" size="middle" className="close-buttons">
            <LineOutlined
              className="collapse"
              onClick={() => setCollapse((state) => !state)}
            />
            <CloseOutlined
              className="close"
              onClick={() => widgetHandler("mixer")}
            />
          </Space>
        </dib>

        <div className="sounds" style={{ display: collapse ? "none" : null }}>
          {SOUNDS.map((audio) => (
            <div className="sound">
              <span>{audio.title}</span>
              <VolumeRange
                volume={volume[audio.name]}
                changeVolume={(e) => changeVolume(e, audio.name)}
              />
              <audio
                id={`sound-${audio.name}`}
                src={`audio/${audio.name}.mp3`}
                loop
              ></audio>
            </div>
          ))}
        </div>
      </div>
    </Draggable>
  );
};

export default MixerWidget;
