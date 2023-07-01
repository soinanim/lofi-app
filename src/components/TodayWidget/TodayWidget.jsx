import React, { useEffect, useState } from "react";
import styles from "./TodayWidget.module.css";
import Draggable from "react-draggable";
// const greeting = {morning, afternoon, evening}
const TodayWidget = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 30000);
  });

  function dragStartHandler(e) {
    e.target.style.backgroundColor = "red";
  }

  function dragEndHandler(e) {
    console.log("end", e.target);
    e.preventDefault();
  }

  return (
    <Draggable
      onStart={() => console.log("Перетаскивание началось")}
      onStop={() => console.log("Перетаскивание закончилось")}
      onDrag={() => console.log("Перетаскивание в процессе")}
    >
      <div className={styles.move}>
        {" "}
        <div className={styles.first}>
          <p className={styles.heading}>Good afternoon</p>
          <p className={styles.heading}>
            {date.toLocaleTimeString("en-US", {
              timeStyle: "short",
            })}
          </p>
        </div>
        <p className={styles.paragraph}>{` It’s ${date.toLocaleString("en-US", {
          weekday: "long",
          month: "long",
          day: "2-digit",
        })}`}</p>
      </div>
    </Draggable>
  
  );
};

export default TodayWidget;
