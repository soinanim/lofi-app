import React from "react";
import "./ScenesWidget.scss";

const ScenesWidget = () => {
  return (
    <div className="scenes">
      <div className="container">
        <h4>Scenes</h4>

        <div className="scene">
          <img src="/images/cozy-house.jpg" alt="" className="scene-img" />
        </div>
        <div className="scene">
          {" "}
          <img src="/images/retro-disc-day.jpg" alt="" className="scene-img" />
        </div>
        <div className="scene">
          <img src="/images/station-day.jpg" alt="" className="scene-img" />
        </div>
      </div>
    </div>
  );
};

export default ScenesWidget;
