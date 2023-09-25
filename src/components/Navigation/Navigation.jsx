import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Button from "../Buttons/Button";

import "./Navigation.scss";

const Navigation = ({ widgetHandler }) => {
  const [logined, setLogined] = useState(true);
  const isLogin = JSON.parse(localStorage.getItem("login"));

  useEffect(() => {
    if (isLogin) {
      setLogined(true);
    } else {
      setLogined(false);
    }
  }, [isLogin]);

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
            // icon="material-symbols:window-outline"
            icon="material-symbols:image-outline"
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
      {logined && (
        <Button
          title="chat"
          onClick={() => widgetHandler("chat")}
          size="small"
          children={
            <Icon width="20px" height="20px" icon="mdi:forum-outline" />
          }
          className="nav-icon"
        />
      )}

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
