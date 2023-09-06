import React from "react";
import "./ScenesWidget.scss";
import { CloseOutlined } from '@ant-design/icons';

const ScenesWidget = ({setIsOpen}) => {

  const widgetHandler = (widgetName) => {
    setIsOpen((state) => ({ ...state, [widgetName]: !state[widgetName] }));
  };
  
  return (
    <div className="scenes">
      <div className="container">
        <div className="row">
          <h2>Scenes</h2>
          <CloseOutlined className="close" onClick={() => widgetHandler('scenes')}/>
        </div>

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
