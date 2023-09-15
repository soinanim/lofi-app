import React from "react";
import { Icon } from "@iconify/react";
import Button from "../Buttons/Button";

import "./Navigation.scss";

const Navigation = ({ widgetHandler }) => {
  return (
    <nav className="nav">
      <Button
        title="timer"
        onClick={() => widgetHandler("timer")}
        size="small"
        children={
          <Icon
            width="20px"
            height="20px"
            icon="material-symbols:timer-outline"
          />
        }
        className="nav-icon"
      />
      <Button
        title="kanban"
        onClick={() => widgetHandler("todo")}
        size="small"
        children={<Icon width="20px" height="20px" icon="gg:board" />}
        className="nav-icon"
      />
      <Button
        title="notes"
        onClick={() => widgetHandler("notes")}
        size="small"
        children={<Icon width="20px" height="20px" icon="mdi:notes-outline" />}
        className="nav-icon"
      />
      <Button
        title="background"
        onClick={() => widgetHandler("scenes")}
        size="small"
        children={
          <Icon
            width="20px"
            height="20px"
            icon="material-symbols:window-outline"
          />
        }
        className="nav-icon"
      />
      <Button
        title="mixer"
        onClick={() => widgetHandler("mixer")}
        size="small"
        children={
          <Icon
            width="20px"
            height="20px"
            icon="radix-icons:mixer-horizontal"
          />
        }
        className="nav-icon"
      />
      <Button
        title="info"
        onClick={() => widgetHandler("info")}
        size="small"
        children={
          <Icon width="20px" height="20px" icon="mdi:information-outline" />
        }
        className="nav-icon"
      />
    </nav>
  );
};

export default Navigation;
