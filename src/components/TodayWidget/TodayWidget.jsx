import React, { useEffect, useState } from "react";
import styles from "./TodayWidget.module.css";
import Draggable from "react-draggable";
// const greeting = {morning, afternoon, evening}
const TodayWidget = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 30000);
  });



  return (
    <Draggable
      // onStart={() => console.log("Перетаскивание началось")}
      // onStop={() => console.log("Перетаскивание закончилось")}
      // onDrag={() => console.log("Перетаскивание в процессе")}
    >
      <div className={styles.move}>
        {" "}
        <div className={styles.first}>
          <p className={styles.heading}>Доброго дня</p>
          <p className={styles.heading}>
            {date.toLocaleTimeString("en-US", {
              timeStyle: "short",
            })}
          </p>
        </div>
        <p className={styles.paragraph}>{` Сегодня ${date.toLocaleString("ru-Ru", {
          weekday: "long",
          month: "long",
          day: "2-digit",
        })}`}</p>
      </div>
    </Draggable>
  
  );
};

export default TodayWidget;
