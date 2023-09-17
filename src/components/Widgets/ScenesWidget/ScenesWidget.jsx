import React from "react";
import "./ScenesWidget.scss";
import { LineOutlined } from "@ant-design/icons";
import { SCENES } from "../../../utils/scenes.js";

const ScenesWidget = ({ widgetHandler, setCurrentTheme }) => {
  return (
    <div className="scenes widget">
      <div className="row">
        <h3>Scenes</h3>
        <LineOutlined
          className="close"
          onClick={() => widgetHandler("scenes")}
        />
      </div>
      <div className="container">
        {Object.keys(SCENES).map((scene) => (
          <div
            className="scene"
            onClick={() => setCurrentTheme(scene)}
            key={scene}
          >
            <img
              src={`/images/${scene}.jpg`}
              alt={scene}
              className="scene-img"
              key={scene}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScenesWidget;
